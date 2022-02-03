<?php

use Conveyor\SocketHandlers\Interfaces\SocketHandlerInterface;
use Conveyor\SocketHandlers\SocketMessageRouter;
use Psr\Container\ContainerInterface;
use Swoole\Http\Request;
use Swoole\WebSocket\Frame;
use Swoole\WebSocket\Server;
use voku\helper\Hooks;

return function () {
    handle_existing_pid(WS_PID_FILE);

    $persistence = socket_persistence();

    $communications = socket_communication();

    $port = get_input()->getOption(WEBSOCKET_PORT_PARAM);

    $websocket = new Server(WS_SERVER_HOST, $port);

    $websocket->on("start", function (Server $server) use ($port, $communications, $persistence) {
        file_put_contents(WS_PID_FILE, $server->master_pid);

        echo 'Swoole Server is started at ws://' . $server->host . ':' . $port;

        if (!(bool) WS_TICK_ENABLED) {
            return;
        }

        $server->tick((int) WS_TICK_INTERVAL, function () use ($server, $communications, $persistence) {
            $data = $communications->get(WS_MESSAGE_ACTION);
            if (count($data) === 0) {
                return;
            }

            $data = current($data);
            $communications->clean(WS_MESSAGE_ACTION);
            $content = json_decode($data['data'], true);
            if (isset($content['channel'])) {
                $connections = [];
                foreach ($persistence->getAllConnections() as $key => $item) {
                    if ($item !== $content['channel']) {
                        continue;
                    }
                    $connections[] = $key;
                }
            } else {
                $connections = $server->connections;
            }

            foreach ($connections as $fd) {
                if (!$server->push($fd, json_encode($data))) {
                    $persistence->disconnect($fd);
                }
            }
        });
    });

    $websocket->on('open', function (Server $server, Request $request) {
        echo "WS Opened: " . $request->fd . PHP_EOL;
    });

    $websocket->on('message', function (Server $server, Frame $frame) use ($persistence) {
        echo 'Received message (' . $frame->fd . '): ' . $frame->data . PHP_EOL;

        /**
         * Action: socket_actions
         * Description: Important for Socket Actions specifications via plugins.
         * Expected return: SocketHandlerInterface
         * @param SocketHandlerInterface $socketRouter
         * @param ContainerInterface     $container
         */
        $socketRouter = Hooks::getInstance()->apply_filters(
            'socket_actions',
            new SocketMessageRouter($persistence),
            container()
        );

        $socketRouter($frame->data, $frame->fd, $server);
    });


    $websocket->on('Disconnect', function(Server $server, int $fd)
    {
        echo 'Connection disconnected: ' . $fd . PHP_EOL;
    });

    $websocket->on('close', function ($server, $fd) {
        echo "WS Close: " . $fd . PHP_EOL;
    });

    $websocket->start();
};
