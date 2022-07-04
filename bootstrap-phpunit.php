<?php

use Dotenv\Dotenv;

include_once __DIR__ . '/vendor/autoload.php';

const ROOT_FOLDER = __DIR__;

global $app, $application, $testData;

$testData = [];

$dotenv = Dotenv::createImmutable(__DIR__, '.env.testing');
$dotenv->load();