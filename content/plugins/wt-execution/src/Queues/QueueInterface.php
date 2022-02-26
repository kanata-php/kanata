<?php

namespace WtExecution\Queues;

use PhpAmqpLib\Message\AMQPMessage;

interface QueueInterface
{
    public function handle(AMQPMessage $msg, array $args = []): void;
}