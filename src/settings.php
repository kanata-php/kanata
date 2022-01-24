<?php

use Dotenv\Dotenv;

return function () {
    $dotenv = Dotenv::createImmutable(__DIR__ . '/../');
    $dotenv->safeLoad();
    return $_ENV;
};
