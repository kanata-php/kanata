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

    $default_queue_attributes = [
        'exchange' => 'default',
        'exchange_type' => 'topic',
        'queue' => 'default',
        'routing_key' => '',
        'option' => '--default',
        'callback' => null,
    ];

    /**
     * This is the default queue.
     */
    $queues = !DEFAULT_QUEUE ? [] : [
        'default' => [
            'callback' => function ($msg) use ($container) {
                $container['logger']->info("Default handler received: " . $msg->body . PHP_EOL);
            },
        ],
    ];

    /**
     * Important: don't forget to register the option as a new supervisor service for each extra queue added through
     * this hook. The `option` parameter here is the option passed to the command there.
     *
     * Command on supervisor: /usr/bin/php /var/www/html/index.php --queue --example-option
     *
     * Format:
     *     [
     *         ['queue' => 'queue-name', 'option' => '--example-option', 'callback' => Callable],
     *         ...
     *     ]
     */
    $queues = Hooks::getInstance()->apply_filters('queues', $queues);

    foreach ($queues as $queue) {
        $queue = array_merge($default_queue_attributes, $queue);

        if (!in_array($queue['option'], $argv)) {
            continue;
        }

        try {
            $channel->exchange_declare($queue['exchange'], $queue['exchange_type'], false, false, false);
            $channel->queue_declare($queue['queue'], false, false, false, false);
            $channel->queue_bind($queue['queue'], $queue['exchange'], $queue['routing_key']);
            $channel->basic_consume($queue['queue'], '', false, true, false, false, $queue['callback']);
        } catch (Exception $e) {
            container()->logger->error(
                'There was an error while starting queues: ' . $e->getMessage() . PHP_EOL
                . 'Data: ' . json_encode($queue)
            );
            continue;
        }

        $container['logger']->info('Queue Service: [' . $queue['queue'] . '] Waiting for messages.' . PHP_EOL);

        while ($channel->is_open()) {
            $channel->wait();
        }
    }
};
