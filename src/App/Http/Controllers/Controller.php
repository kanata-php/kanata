<?php

namespace App\Http\Controllers;

use App\Services\Container;

abstract class Controller
{
    public function __construct(
        protected Container $container
    ) {}
}
