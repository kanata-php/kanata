<?php

use Conveyor\SocketHandlers\Interfaces\SocketHandlerInterface;
;

use DI\Container;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem as Flysystem;
use App\Drivers\Data\Filesystem;
use Conveyor\SocketHandlers\SocketMessageRouter;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use voku\helper\Hooks;
use Doctrine\Common\Cache\FilesystemCache;
use League\Plates\Engine;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

return function (Container $container) {

    /**
     * -----------------------------------------------------------
     * Utilities Section
     * -----------------------------------------------------------
     */

    $container['logger'] = function ($c) {
        $logger = new Logger('kanata-logger');
        $file_handler = new StreamHandler(storage_path() . 'logs/app.log');
        $logger->pushHandler($file_handler);
        return $logger;
    };

    $container['view'] = new Engine();
    $container['view']->addFolder('core', template_path());

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

    /**
     * -----------------------------------------------------------
     * AMQP Section
     * -----------------------------------------------------------
     */

    $container['amqp'] = function ($c) {
        return new AMQPStreamConnection(
            QUEUE_SERVER_HOST,
            QUEUE_SERVER_PORT,
            QUEUE_SERVER_USER,
            QUEUE_SERVER_PASSWORD
        );
    };

};
