<?php

use Slim\App;
use Swoole\Http\Server;
use Swoole\Http\Request;
use Swoole\Http\Response;
use Pachico\SlimSwoole\BridgeManager;

return function (App $app) {
    $bridgeManager = new BridgeManager($app);

    handle_existing_pid(PID_FILE);

    $port = grab_port_from_params(HTTP_PORT_PARAM);

    $server = new Server("0.0.0.0", $port);

    $server->set([
        'document_root' => public_path(),
        'enable_static_handler' => true,
    ]);

    $server->on("start", function (Server $server) {
        global $argv;

        file_put_contents(PID_FILE, $server->master_pid);

        echo 'Swoole Server is started at http://' . $server->host . ':' . $server->port . PHP_EOL;
    });

    $server->on(
        "request",
        function (Request $swooleRequest, Response $swooleResponse) use ($bridgeManager) {
            $bridgeManager->process($swooleRequest, $swooleResponse)->end();
        }
    );

    $server->start();
};
