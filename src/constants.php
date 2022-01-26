<?php

if (!defined('APP_NAME')) {
    define('APP_NAME', $_ENV['APP_NAME'] ?? false);
}

if (!defined('HTTP_SERVER_HOST')) {
    define('HTTP_SERVER_HOST', $_ENV['HTTP_SERVER_HOST'] ?? '0.0.0.0');
}

if (!defined('HTTP_SERVER_PORT')) {
    define('HTTP_SERVER_PORT', $_ENV['HTTP_SERVER_PORT'] ?? 8001);
}

if (!defined('WS_SERVER_HOST')) {
    define('WS_SERVER_HOST', $_ENV['WS_SERVER_HOST'] ?? '0.0.0.0');
}

if (!defined('WS_SERVER_PORT')) {
    define('WS_SERVER_PORT', $_ENV['WS_SERVER_PORT'] ?? 8002);
}

if (!defined('HTTP_PORT_PARAM')) {
    define('HTTP_PORT_PARAM', $_ENV['HTTP_PORT_PARAM'] ??  '--port');
}

if (!defined('WEBSOCKET_PORT_PARAM')) {
    define('WEBSOCKET_PORT_PARAM', $_ENV['WEBSOCKET_PORT_PARAM'] ?? '--wsport');
}

if (!defined('PID_FILE')) {
    define('PID_FILE', $_ENV['PID_FILE'] ?? './http-server-pid');
}

if (!defined('WS_PID_FILE')) {
    define('WS_PID_FILE', $_ENV['WS_PID_FILE'] ?? './ws-server-pid');
}

if (!defined('QUEUE_SERVER_HOST')) {
    define('QUEUE_SERVER_HOST', $_ENV['QUEUE_SERVER_HOST'] ?? 'rabbitmq');
}

if (!defined('QUEUE_SERVER_PORT')) {
    define('QUEUE_SERVER_PORT', $_ENV['QUEUE_SERVER_PORT'] ?? 5672);
}

if (!defined('QUEUE_SERVER_USER')) {
    define('QUEUE_SERVER_USER', $_ENV['QUEUE_SERVER_USER'] ?? 'guest');
}

if (!defined('QUEUE_SERVER_PASSWORD')) {
    define('QUEUE_SERVER_PASSWORD', $_ENV['QUEUE_SERVER_PASSWORD'] ?? 'guest');
}

if (!defined('DEFAULT_QUEUE')) {
    define('DEFAULT_QUEUE', $_ENV['DEFAULT_QUEUE'] ?? false);
}

if (!defined('OVERWRITE_EXISTENT_SERVICE')) {
    define('OVERWRITE_EXISTENT_SERVICE', $_ENV['OVERWRITE_EXISTENT_SERVICE'] ?? true);
}
