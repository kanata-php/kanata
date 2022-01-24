<?php

use Slim\App;
use Swoole\Http\Request;
use Swoole\WebSocket\Frame;
use Swoole\WebSocket\Server;

return function (App $app) {
    handle_existing_pid(WS_PID_FILE);

    $port = grab_port_from_params(WEBSOCKET_PORT_PARAM);

    $websocket = new Server(WS_SERVER_HOST, $port);

    $websocket->on("start", function (Server $server) {
        file_put_contents(WS_PID_FILE, $server->master_pid);

        echo 'Swoole Server is started at ws://' . $server->host . ':' . grab_port_from_params(WEBSOCKET_PORT_PARAM);
    });

    $websocket->on('open', function (Server $server, Request $request){
        echo "WS Opened: " . $request->fd . PHP_EOL;
    });

    $websocket->on('message', function (Server $server, Frame $frame) use ($app) {
        echo 'Received message (' . $frame->fd . '): ' . $frame->data . PHP_EOL;
        $message = ($app->getContainer()->socketHandler)($frame->data, $frame->fd, $server);
        foreach ($server->connections as $fd) {
            $server->push($fd, json_encode($message));
        }
    });

    $websocket->on('close', function ($server, $fd) {
        echo "WS Close: " . $fd . PHP_EOL;
    });

    $websocket->start();
};
