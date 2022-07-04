<?php

namespace Tests\Unit;

use GuzzleHttp\Client;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Slim\App;
use Swoole\Process;
use Tests\TestCase;

class CommandTest extends TestCase
{
    protected App $app;

    public function setUp(): void
    {
        $this->app = $this->getApp();

        parent::setUp();

        $this->http_settings['log_level'] = SWOOLE_LOG_NONE;
        $this->setHttpSettings();
    }

    public function test_can_run_help_command()
    {
        $output = $this->runCommand('help');
        $this->assertStringContainsString('Display help for a command', $output->getDisplay());
    }

    public function test_can_start_server()
    {
        $this->startHttpServer();

        $client = new Client(['base_uri' => 'http://' . $_ENV['APP_URL'] . '/']);
        $response = $client->request('GET', '/');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertStringContainsString(env('APP_NAME'), $response->getBody()->getContents());
    }

    public function test_can_start_ws_server()
    {
        // TODO: implement this test
    }

    public function test_can_publish_plugin()
    {
        // TODO: implement this test
    }

    public function test_can_list_plugins()
    {
        // TODO: implement this test
    }

    public function test_can_get_info()
    {
        // TODO: implement this test
    }

    public function test_can_deactivate_plugin()
    {
        // TODO: implement this test
    }

    public function test_can_create_plugin()
    {
        // TODO: implement this test
    }

    public function test_can_create_command()
    {
        // TODO: implement this test
    }

    public function test_can_activate_plugin()
    {
        // TODO: implement this test
    }
}