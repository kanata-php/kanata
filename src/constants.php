<?php

if (!defined('APP_NAME')) {
    define('APP_NAME', env('APP_NAME', false));
}

if (!defined('HTTP_SERVER_HOST')) {
    define('HTTP_SERVER_HOST', env('HTTP_SERVER_HOST', '0.0.0.0'));
}

if (!defined('HTTP_SERVER_PORT')) {
    define('HTTP_SERVER_PORT', env('HTTP_SERVER_PORT', 8001));
}

if (!defined('WS_SERVER_HOST')) {
    define('WS_SERVER_HOST', env('WS_SERVER_HOST', '0.0.0.0'));
}

if (!defined('WS_SERVER_PORT')) {
    define('WS_SERVER_PORT', env('WS_SERVER_PORT', 8002));
}

if (!defined('HTTP_PORT_PARAM')) {
    define('HTTP_PORT_PARAM', 'port');
}

if (!defined('WEBSOCKET_PORT_PARAM')) {
    define('WEBSOCKET_PORT_PARAM', 'wsport');
}

if (!defined('PID_FILE')) {
    define('PID_FILE', env('PID_FILE', './http-server-pid'));
}

if (!defined('WS_PID_FILE')) {
    define('WS_PID_FILE', env('WS_PID_FILE', './ws-server-pid'));
}

if (!defined('QUEUE_SERVER_HOST')) {
    define('QUEUE_SERVER_HOST', env('QUEUE_SERVER_HOST', 'rabbitmq'));
}

if (!defined('QUEUE_SERVER_PORT')) {
    define('QUEUE_SERVER_PORT', env('QUEUE_SERVER_PORT', 5672));
}

if (!defined('QUEUE_SERVER_USER')) {
    define('QUEUE_SERVER_USER', env('QUEUE_SERVER_USER', 'guest'));
}

if (!defined('QUEUE_SERVER_PASSWORD')) {
    define('QUEUE_SERVER_PASSWORD', env('QUEUE_SERVER_PASSWORD', 'guest'));
}

if (!defined('DEFAULT_QUEUE')) {
    define('DEFAULT_QUEUE', env('DEFAULT_QUEUE', false));
}

if (!defined('OVERWRITE_EXISTENT_SERVICE')) {
    define('OVERWRITE_EXISTENT_SERVICE', env('OVERWRITE_EXISTENT_SERVICE', true));
}

if (!defined('WEBSOCKET_CONSOLE_OPTION')) {
    define('WEBSOCKET_CONSOLE_OPTION', 'websocket');
}

if (!defined('QUEUE_CONSOLE_OPTION')) {
    define('QUEUE_CONSOLE_OPTION', 'queue');
}

if (!defined('QUEUE_NAME_CONSOLE_OPTION')) {
    define('QUEUE_NAME_CONSOLE_OPTION', 'queue-name');
}