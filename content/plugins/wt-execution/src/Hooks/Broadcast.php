<?php

namespace WtExecution\Hooks;

use Error;
use Exception;
use WtExecution\Hooks\HookInterface;

/**
 *
 */
class Broadcast implements HookInterface
{
    public function run(): void
    {
        // add_filter('tick_connections_broadcast', [$this, 'tick_connections_broadcast']);
    }

    public function tick_connections_broadcast(array $connections, array $content)
    {
        return $connections;
    }
}
