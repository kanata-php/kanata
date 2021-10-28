<?php

require_once 'vendor/autoload.php';

use Slim\App;
use App\Services\Container;

include_once __DIR__ . '/src/constants.php';
include_once __DIR__ . '/src/App/Helpers/helpers.php';

$config = (require_once __DIR__ . '/src/settings.php')();
$app = new App(new Container(['settings' => $config]));
$container = $app->getContainer();

include_once __DIR__ . '/src/autoloader.php';
(require_once __DIR__ . '/src/dependencies.php')($container);
(require_once __DIR__ . '/src/routes.php')($app);
(require_once __DIR__ . '/src/servers.php')($app);
