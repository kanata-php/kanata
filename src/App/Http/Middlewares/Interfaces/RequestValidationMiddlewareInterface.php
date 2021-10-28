<?php

namespace App\Http\Middlewares\Interfaces;

use Psr\Http\Message\ServerRequestInterface as Request;

interface RequestValidationMiddlewareInterface
{
    /**
     * @param Request $request
     *
     * @throws Exception
     */
    public function validate(Request $request);
}
