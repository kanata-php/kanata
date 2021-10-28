<?php

use Slim\App;

/**
 * Here we orchestrate the servers.
 */

return function (App $app) {
    global $argv;

    if (in_array('--websocket', $argv)) {
        (require __DIR__ . '/websocket_server.php')($app);
    } else {
        (require __DIR__ . '/http_server.php')($app);
    }
};
