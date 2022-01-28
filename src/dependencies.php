<?php

use DI\Container;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem as Flysystem;
use App\Drivers\Data\Filesystem;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use Doctrine\Common\Cache\FilesystemCache;
use League\Plates\Engine;

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
