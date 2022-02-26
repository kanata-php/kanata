<?php

namespace WtExecution\Hooks;

use WtExecution\Queues\ExecuteCode;
use WtExecution\Queues\LogMessage;
use PhpAmqpLib\Message\AMQPMessage;

class Queues implements HookInterface
{
    const MAIN_CHANNEL = 'executor';

    public function run(): void
    {
        $this->register_queue_with_log(
            ExecuteCode::EXECUTE_CODE_QUEUE,
            ExecuteCode::EXECUTE_CODE_EXCHANGE,
            ExecuteCode::EXECUTE_CODE_ROUTING_KEY,
            ExecuteCode::EXECUTE_CODE_QUEUE_OPTION,
            [new ExecuteCode, 'handle'],
        );
    }

    /**
     * Register a log for the message sent to the given routingKey at the given exchange.
     *
     * @param string $queue
     * @param string $exchange
     * @param string $routingKey
     * @param string $option
     * @param mixed $callback
     * @return void
     */
    private function register_queue_with_log(
        string $queue,
        string $exchange,
        string $routingKey,
        string $option,
        mixed $callback
    ) {
        register_queue($queue, $exchange, $option, $callback, $routingKey);
        register_queue(
            $queue . LogMessage::LOG_MESSAGE_QUEUE_SUFFIX,
            $exchange,
            $option,
            function (AMQPMessage $msg) use ($queue) {
                (new LogMessage)->handle($msg, ['queue' => $queue]);
            },
            $routingKey
        );
    }

}
