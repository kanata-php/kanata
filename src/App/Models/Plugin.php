<?php

namespace App\Models;

use App\Drivers\Data\Filesystem;
use function Symfony\Component\String\u;

/**
 * name => string
 * path => string
 * active => bool
 */

class Plugin extends Model
{
    protected string $table = 'plugins';
    protected array $defaults = ['active' => false];

    public function __construct()
    {
        $dataDriver = new Filesystem('data', container()->filesystem, 'json', false);
        parent::__construct($dataDriver);
    }

    public function getClassName(): string
    {
        return ucfirst((string) u($this['directory-name'])->camel());
    }

    /**
     * Plugin has a main file that has to be capital/camel case of the directory, or "index.php".
     *
     * @return ?string
     */
    public function getMainFile(): ?string
    {
        $pluginPath = trailingslashit($this->path);

        $mainFileFullPath = $pluginPath . $this->getClassName() . '.php';
        if (file_exists($mainFileFullPath)) {
            return $mainFileFullPath;
        }

        $indexFileFullPath = $pluginPath . 'index.php';
        if (file_exists($indexFileFullPath)) {
            return $indexFileFullPath;
        }

        return null;
    }
}
