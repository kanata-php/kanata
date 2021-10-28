<?php

namespace App\Services;

use App\Interfaces\FlightZonePluginInterface;
use FilesystemIterator;
use IteratorIterator;
use Psr\Container\ContainerInterface;
use RecursiveDirectoryIterator;
use ReflectionClass;
use ReflectionException;

/**
 * Class PluginLoader
 *
 * Class that loads plugins into the application, find them in the declared classes array
 * and start them.
 *
 * @package App\Services
 */

class PluginLoader
{
    public function __construct(
        protected ContainerInterface $container
    ) {}

    /**
     * Iterate through all plugins.
     * @return void
     */
    public function load(): void
    {
        $main_directory = base_path() . 'content/plugins';
        $directory = new RecursiveDirectoryIterator($main_directory, FilesystemIterator::SKIP_DOTS);
        $iterator = new IteratorIterator($directory);

        foreach ($iterator as $info) {
            if (filetype($info->getPathname()) !== 'dir') {
                continue;
            }
            $this->loadPluginAt(trailingslashit($info->getPathname()));
        }

        $this->startPlugins();
    }

    /**
     * Execute the index file inclusion.
     *
     * @param string $path
     *
     * @return void
     */
    private function loadPluginAt(string $path): void
    {
        $index = $path . 'index.php';

        if (file_exists($index)) {
            include_once $index;
        }
    }

    /**
     * Start Plugins
     *
     * Start all classes implementing FlightZonePluginInterface.
     *
     * @return void
     *
     * @throws ReflectionException
     */
    private function startPlugins(): void
    {
        $declared_classes = get_declared_classes();

        foreach ($declared_classes as $class) {
            $interfaces = array_map(function($item){
                return $item->getName();
            }, (new ReflectionClass($class))->getInterfaces());

            if (!in_array(FlightZonePluginInterface::class, $interfaces)) {
                continue;
            }

            (new $class($this->container))->start();
        }
    }
}
