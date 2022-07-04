<?php

namespace Tests;

use Kanata\Services\Bootstrap;
use Nekofar\Slim\Test\TestResponse;
use PHPUnit\Framework\TestCase as BaseTestCase;
use Slim\App;
use Swoole\Process;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\Tester\CommandTester;

class TestCase extends BaseTestCase
{
    const HTTP_SERVER_PID_KEY = 'http-server-pid';

    protected array $http_settings = [];

    protected function getApp(): App
    {
        global $app;

        Bootstrap::startConsole(['skip_plugins' => true, 'skip_run' => true]);
        Bootstrap::migrateBase(true, true);
        Bootstrap::startPlugins();

        return $app;
    }

    protected function runCommand(string $commandName, array $args = [], array $options = []): CommandTester
    {
        global $application;

        $command = $application->find($commandName);
        $tester = new CommandTester($command);
        $tester->execute($args, $options);
        return $tester;
    }

    public function setHttpSettings()
    {
        add_filter('http_settings', function(array $server_settings) {
            return array_merge($server_settings, $this->http_settings);
        });
    }

    protected function startHttpServer()
    {
        global $testData;

        $httpServer = new Process(function(Process $worker) {
            $this->runCommand('http', [
                '--' . HTTP_PORT_PARAM => env('APP_PORT'),
            ]);
        });

        $testData[self::HTTP_SERVER_PID_KEY] = $httpServer->start();

        sleep(1);
    }

    /**
     * @after
     */
    public static function tearDownHttpServer()
    {
        global $testData;

        if (!isset($testData[self::HTTP_SERVER_PID_KEY])) {
            return;
        }

        Process::kill($testData[self::HTTP_SERVER_PID_KEY]);
        unset($testData[self::HTTP_SERVER_PID_KEY]);
    }

    // public function getSessionCookieFromResponse(TestResponse $response): array
    // {
    //     $cookie = current($response->getHeader('Set-Cookie'));
    //     parse_str($cookie, $parsedCookie);
    //     $parsedCookie = current(explode(';', current($parsedCookie)));
    //     $parsedCookie = Session::parseCookie($parsedCookie);
    //     return SessionTable::getInstance()->get($parsedCookie['id']);
    // }

    // public function getCookieParams(TestResponse $response): array
    // {
    //     $parsedCookie = explode('=', current($response->getHeader('Set-Cookie')));
    //     $cookieKey = $parsedCookie[0];
    //     unset($parsedCookie[0]);
    //     $cookie = current(explode(';', $parsedCookie[1]));
    //     return [$cookieKey => $cookie];
    // }
}