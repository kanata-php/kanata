<?php

use Slim\App;
use Ilex\SwoolePsr7\SwooleServerRequestConverter;

/**
 * Here we orchestrate the servers.
 */

return function (App $app, SwooleServerRequestConverter $requestConverter) {
    global $argv;

    switch (true) {
        case in_array('--websocket', $argv):
            (require __DIR__ . '/websocket_server.php')($app);
            break;
        case in_array('--queue', $argv):
            (require __DIR__ . '/queue_service.php')($app);
            break;
        default:
            (require __DIR__ . '/http_server.php')($app, $requestConverter);
    }
};
