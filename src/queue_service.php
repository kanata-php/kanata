<?php

use Slim\App;
use voku\helper\Hooks;
use PhpAmqpLib\Connection\AMQPStreamConnection;

return function (App $app) {
    global $argv;

    $container = $app->getContainer();

    $connection = new AMQPStreamConnection(
        QUEUE_SERVER_HOST,
        QUEUE_SERVER_PORT,
        QUEUE_SERVER_USER,
        QUEUE_SERVER_PASSWORD
    );
    $channel = $connection->channel();

    $queues = [
        'default' => [
            'flag' => '--default',
            'callback' => function ($msg) use ($container) {
                $container['logger']->info("Queue Service: [x] Received: " . $msg->body . PHP_EOL);
            },
        ],
    ];

    /**
     * Important: don't forget to register the flag as a new supervisor service for each extra queue added through
     * this hook.
     *
     * Command on supervisor: /usr/bin/php /var/www/html/index.php --queue --example-flag
     *
     * Format:
     *     [
     *         {queue-name} => ['flag' => '--example-flag', 'callback' => Callable],
     *         ...
     *     ]
     */
    $queues = Hooks::getInstance()->apply_filters('queues', $queues);

    foreach ($queues as $key => $queue) {
        if (!in_array($queue['flag'], $argv)) {
            continue;
        }

        $channel->queue_declare($key, false, false, false, false);
        $channel->basic_consume($key, '', false, true, false, false, $queue['callback']);

        $container['logger']->info('Queue Service: [' . $key . '] Waiting for messages.' . PHP_EOL);

        while ($channel->is_open()) {
            $channel->wait();
        }
    }
};
