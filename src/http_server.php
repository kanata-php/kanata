<?php

use Ilex\SwoolePsr7\SwooleResponseConverter;
use Ilex\SwoolePsr7\SwooleServerRequestConverter;
use Slim\App;
use Swoole\Http\Server;
use Swoole\Http\Request;
use Swoole\Http\Response;

return function (App $app, SwooleServerRequestConverter $requestConverter) {
    handle_existing_pid(PID_FILE);

    $server = new Server(HTTP_SERVER_HOST, get_input()->getOption(HTTP_PORT_PARAM));

    $server->set([
        'document_root' => public_path(),
        'enable_static_handler' => true,
    ]);

    $server->on("start", function (Server $server) {
        global $argv;

        file_put_contents(PID_FILE, $server->master_pid);

        echo 'Swoole Server is started at http://' . $server->host . ':' . $server->port . PHP_EOL;
    });

    $server->on("request", function (
        Request $swooleRequest, Response $swooleResponse
    ) use ($app, $requestConverter) {
        $psr7Request = $requestConverter->createFromSwoole($swooleRequest);
        $psr7Response = $app->handle($psr7Request);
        $converter = new SwooleResponseConverter($swooleResponse);
        $converter->send($psr7Response);
    });

    $server->start();
};
