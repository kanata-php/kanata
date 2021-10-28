<?php

use Slim\App;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use voku\helper\Hooks;

return function (App $app) {
    /**
     * Action: routes
     * Description: Important for Routes specification via plugins.
     * Expected return: SocketHandlerInterface
     * @param App $app
     */
    $app = Hooks::getInstance()->apply_filters('routes', $app);

    $app->get('/', function (Request $request, Response $response) {
        $response = $this->view->render($response, 'index.phtml', []);

        return $response;
    });
};
