<?php

namespace SamplePlugin\Http\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use SamplePlugin\Helpers;

class DocumentationController
{
    public function about(Request $request, Response $response)
    {
        $response->getBody()->write(Helpers::viewRender('sample::about', []));
        return $response->withStatus(200);
    }
}