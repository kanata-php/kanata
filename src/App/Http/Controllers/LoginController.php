<?php

namespace App\Http\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class LoginController
{
    public function index(Request $request, Response $response)
    {
        return view($response, 'core::admin/login');
    }
}