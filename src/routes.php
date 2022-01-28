<?php

use Slim\App;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteCollectorProxy;
use voku\helper\Hooks;
use App\Exceptions\ErrorHandler;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DocumentationController;

return function (App $app) {

    // Error handling.
    $app->addRoutingMiddleware();
    $errorMiddleware = $app->addErrorMiddleware(true, true, true);
    $errorHandler = $errorMiddleware->getDefaultErrorHandler();
    $errorHandler->registerErrorRenderer('text/html', ErrorHandler::class);

    /**
     * Filter: routes
     * Description: Important for Routes specification via plugins.
     * Expected return: SocketHandlerInterface
     * @param App $app
     */
    $app = add_filter('routes', $app);

    $app->group('', function (RouteCollectorProxy $group) {
        $group->get('/', function (Request $request, Response $response) {
            return view($response, 'core::home');
        })->setName('home');

        $group->get('/docs', [DocumentationController::class, 'index'])->setName('login');
        $group->get('/login', [LoginController::class, 'index'])->setName('login');
        $group->get('/register', [RegisterController::class, 'index'])->setName('register');
        $group->get('/admin', [AdminController::class, 'index'])->setName('admin');
    })->add($errorMiddleware);
};
