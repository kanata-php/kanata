<?php

require_once 'vendor/autoload.php';

use Slim\App;
use App\Services\Container;
use Nyholm\Psr7\Factory\Psr17Factory;
use Ilex\SwoolePsr7\SwooleServerRequestConverter;

$config = (require_once __DIR__ . '/src/settings.php')();

include_once __DIR__ . '/src/constants.php';
include_once __DIR__ . '/src/helpers.php';

$psr17Factory = new Psr17Factory();
$requestConverter = new SwooleServerRequestConverter($psr17Factory, $psr17Factory, $psr17Factory, $psr17Factory);

$app = new App($psr17Factory, new Container(['settings' => $config]));
$container = $app->getContainer();

(require_once __DIR__ . '/src/dependencies.php')($container);
include_once __DIR__ . '/src/autoloader.php';
(require_once __DIR__ . '/src/routes.php')($app);
(require_once __DIR__ . '/src/servers.php')($app, $requestConverter);
