<?php

use App\Services\Container;
use Conveyor\SocketHandlers\Interfaces\SocketHandlerInterface;
use Conveyor\SocketHandlers\SocketMessageRouter;
use Psr\Container\ContainerInterface;
use Slim\App;
use Swoole\Http\Request;
use Swoole\WebSocket\Frame;
use Swoole\WebSocket\Server;
use voku\helper\Hooks;

return function () {
    handle_existing_pid(WS_PID_FILE);

    $port = get_input()->getOption(WEBSOCKET_PORT_PARAM);

    $websocket = new Server(WS_SERVER_HOST, $port);

    $websocket->on("start", function (Server $server) use ($port) {
        file_put_contents(WS_PID_FILE, $server->master_pid);

        echo 'Swoole Server is started at ws://' . $server->host . ':' . $port;
    });

    $websocket->on('open', function (Server $server, Request $request){
        echo "WS Opened: " . $request->fd . PHP_EOL;
    });

    $websocket->on('message', function (Server $server, Frame $frame) {
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
            new SocketMessageRouter,
            container()
        );

        $message = $socketRouter($frame->data, $frame->fd, $server);

        foreach ($server->connections as $fd) {
            $server->push($fd, json_encode($message));
        }
    });

    $websocket->on('close', function ($server, $fd) {
        echo "WS Close: " . $fd . PHP_EOL;
    });

    $websocket->start();
};
