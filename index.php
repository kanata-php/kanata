<?php

require_once 'vendor/autoload.php';

include_once __DIR__ . '/kanata-core.php';

global $app;

(require_once __DIR__ . '/src/routes.php')($app);
(require_once __DIR__ . '/src/servers.php')($app);
