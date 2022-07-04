<?php

namespace Tests\Feature;

use GuzzleHttp\Client;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\App;
use Tests\Samples\SampleRequest;
use Tests\TestCase;

class HttpServerTest extends TestCase
{
    protected App $app;

    public function setUp(): void
    {
        $this->app = $this->getApp();

        parent::setUp();

        $this->http_settings['log_level'] = SWOOLE_LOG_NONE;
        $this->setHttpSettings();
    }

    public function test_can_hook_for_new_endpoints()
    {
        add_filter('routes', function($group) {
            $group->get('/test-route', function (RequestInterface $request, ResponseInterface $response) {
                $response->getBody()->write('test-savio');
                return $response;
            });
            return $group;
        });

        $this->startHttpServer();

        $client = new Client(['base_uri' => 'http://' . $_ENV['APP_URL'] . '/']);
        $response = $client->request('GET', '/test-route');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertStringContainsString('test-savio', $response->getBody()->getContents());
    }

    public function test_custom_request_object()
    {
        add_filter('routes', function($group) {
            $group->get('/custom-request', function (SampleRequest $request, ResponseInterface $response) {
                $response->getBody()->write(json_encode([
                    'isExpectedRequest' => is_a($request, SampleRequest::class),
                ]));
                return $response;
            });
            return $group;
        });

        $this->startHttpServer();

        $client = new Client(['base_uri' => 'http://' . $_ENV['APP_URL'] . '/']);
        $response = $client->request('GET', '/custom-request');

        $this->assertEquals(200, $response->getStatusCode());
        $body = $response->getBody()->getContents();
        $this->assertTrue(array_get(json_decode($body, true), 'isExpectedRequest'));
    }

    public function test_request_workflow_before_hook()
    {
        add_filter('routes', function($group) {
            $group->get('/request-workflow-before', function (SampleRequest $request, ResponseInterface $response) {
                $response->getBody()->write(json_encode([
                    'stageOneAccomplished' => $request->stageOne,
                ]));
                return $response;
            });
            return $group;
        });

        $this->startHttpServer();

        $client = new Client(['base_uri' => 'http://' . $_ENV['APP_URL'] . '/']);
        $response = $client->request('GET', '/request-workflow-before');

        $this->assertEquals(200, $response->getStatusCode());
        $body = $response->getBody()->getContents();
        $this->assertFalse(array_get(json_decode($body, true), 'stageOneAccomplished'));
    }

    public function test_request_workflow_after_hook()
    {
        add_filter('routes', function($group) {
            $group->get('/request-workflow', function (SampleRequest $request, ResponseInterface $response) {
                $response->getBody()->write(json_encode([
                    'stageOneAccomplished' => $request->stageOne,
                ]));
                return $response;
            });
            return $group;
        });

        add_filter('request_workflow', function(array $stages) {
            $stages['stage-one'] = function(ServerRequestInterface $request) {
                if (method_exists($request, 'stageOneAccomplished')) {
                    $request->stageOneAccomplished();
                }
                return $request;
            };
            return $stages;
        });

        $this->startHttpServer();

        $client = new Client(['base_uri' => 'http://' . $_ENV['APP_URL'] . '/']);
        $response = $client->request('GET', '/request-workflow');

        $this->assertEquals(200, $response->getStatusCode());
        $body = $response->getBody()->getContents();
        $this->assertTrue(array_get(json_decode($body, true), 'stageOneAccomplished'));
    }

    public function test_swoole_side_middleware()
    {

    }

    public function test_slim_side_middleware()
    {

    }
}
