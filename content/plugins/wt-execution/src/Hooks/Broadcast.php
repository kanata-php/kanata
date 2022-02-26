<?php

namespace WtExecution\Hooks;

use Error;
use Exception;
use Kanata\Models\WsAssociation;
use WtExecution\Hooks\HookInterface;

/**
 *
 */
class Broadcast implements HookInterface
{
    public function run(): void
    {
         add_filter('tick_connections_broadcast', [$this, 'tick_connections_broadcast']);
    }

    public function tick_connections_broadcast(array $connections, array $content)
    {
        $associations = WsAssociation::getInstance()->where('user_id', '=', $content['data']['user_id'])->find()->asArray();
        $associations = array_map(function ($association) {
            return $association['fd'];
        }, $associations);

        // TODO: assoc execution to fd as well

        return array_filter($connections, function ($connection) use ($associations) {
            return in_array($connection, $associations);
        });
    }
}
