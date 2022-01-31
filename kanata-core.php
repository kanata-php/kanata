<?php

use Slim\App;
use App\Services\Container;
use Nyholm\Psr7\Factory\Psr17Factory;

$config = (require_once __DIR__ . '/src/settings.php')();

include_once __DIR__ . '/src/constants.php';
include_once __DIR__ . '/src/helpers.php';

$psr17Factory = new Psr17Factory();

$app = new App($psr17Factory, new Container(['settings' => $config]));
$container = $app->getContainer();

(require_once __DIR__ . '/src/console.php')();
(require_once __DIR__ . '/src/dependencies.php')($container);
(require_once __DIR__ . '/src/configurations.php')();
include_once __DIR__ . '/src/autoloader.php';
