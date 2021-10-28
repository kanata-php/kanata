<?php

if (!defined('DEFAULT_SERVER_PORT')) {
    define('DEFAULT_SERVER_PORT', 8001);
}

if (!defined('DEFAULT_WS_SERVER_PORT')) {
    define('DEFAULT_WS_SERVER_PORT', 8002);
}

if (!defined('HTTP_PORT_PARAM')) {
    define('HTTP_PORT_PARAM', '--port');
}

if (!defined('WEBSOCKET_PORT_PARAM')) {
    define('WEBSOCKET_PORT_PARAM', '--wsport');
}

if (!defined('PID_FILE')) {
    define('PID_FILE', './http-server-pid');
}

if (!defined('WS_PID_FILE')) {
    define('WS_PID_FILE', './ws-server-pid');
}
