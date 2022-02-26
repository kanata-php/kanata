<?php

namespace WtExecution\Queues;

use Econoroute;
use PhpAmqpLib\Message\AMQPMessage;

class LogMessage implements QueueInterface
{
    const LOG_MESSAGE_EXCHANGE = 'log-message';
    const LOG_MESSAGE_QUEUE = 'log-message';
    const LOG_MESSAGE_ROUTING_KEY = 'log-message';
    const LOG_MESSAGE_QUEUE_OPTION = 'log-message';
    const LOG_MESSAGE_QUEUE_SUFFIX = '-log';

    public function handle(AMQPMessage $msg, array $args = []): void
    {
        $data = ['message' => $msg->body];

        foreach ($args as $key => $arg) {
            $data[$key] = $arg;
        }

        logger()->info(json_encode($data));
    }
}