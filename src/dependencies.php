<?php

use Conveyor\SocketHandlers\Interfaces\SocketHandlerInterface;
use Slim\Container;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem as Flysystem;
use App\Drivers\Data\Filesystem;
use Conveyor\SocketHandlers\SocketMessageRouter;
use Slim\Views\PhpRenderer;
use voku\helper\Hooks;
use Doctrine\Common\Cache\FilesystemCache;

return function (Container $container) {

    /**
     * -----------------------------------------------------------
     * Utilities Section
     * -----------------------------------------------------------
     */

    $container['view'] = new PhpRenderer(template_path());
    $container['view']->setLayout("layout.php");

    $container['logger'] = function ($c) {
        $logger = new Logger('my_logger');
        $file_handler = new StreamHandler(storage_path() . 'logs/app.log');
        $logger->pushHandler($file_handler);
        return $logger;
    };

    $container['cache'] = function ($c) {
        $cache = new FilesystemCache(storage_path() . 'cache/');
        return $cache;
    };

    /**
     * -----------------------------------------------------------
     * Data Source Section
     * -----------------------------------------------------------
     */

    $container['filesystem'] = function ($c) {
        $adapter = new Local(__DIR__ . '/../');
        return new Flysystem($adapter);
    };

    $container['dataDriver'] = function ($c) {
        return new Filesystem('data', $c->filesystem);
    };

    /**
     * -----------------------------------------------------------
     * WebSocket Section
     * -----------------------------------------------------------
     */

    $container['socketHandler'] = function ($c) {
        $socketRouter = new SocketMessageRouter;

        /**
         * Action: socket_actions
         * Description: Important for Socket Actions specifications via plugins.
         * Expected return: SocketHandlerInterface
         * @param SocketHandlerInterface $socketRouter
         * @param Container              $container
         */
        return Hooks::getInstance()->apply_filters('socket_actions', $socketRouter, $c);
    };
};
