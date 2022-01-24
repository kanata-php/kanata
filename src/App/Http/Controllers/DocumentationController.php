<?php

namespace App\Http\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteContext;

class DocumentationController
{
    public function index(Request $request, Response $response)
    {
        $routeContext = RouteContext::fromRequest($request);
        $basePath = $routeContext->getBasePath();
        return view($response, 'core::docs/index');
    }
}