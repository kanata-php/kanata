<?php

namespace Tests\Api;

use PHPUnit\Framework\TestCase;

use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem as Flysystem;
use GuzzleHttp\Client;

use App\Models\ModelExample;
use App\Drivers\Data\Interfaces\DataDriverInterface;
use App\Drivers\Data\Filesystem;

class ExampleApiTest extends TestCase
{
    /** @var Flysystem */
    protected static $flysystem;

    /** @var DataDriverInterface */
    protected static $dataDriver;

    /** @var Client */
    protected static $http;

    /** @var string */
    protected static $database = 'data-test';

    /** @var string */
    protected $sampleTodoContent = 'My sample todo item.';

    public static function setUpBeforeClass() : void
    {
        $adapter = new Local(__DIR__.'/');
        self::$flysystem = new Flysystem($adapter);
        self::$dataDriver = new Filesystem(self::$database, self::$flysystem);
        self::$http = new Client(['base_uri' => 'http://localhost:8282/']);
    }

    protected function setUp() : void
    {
        self::$flysystem->createDir(self::$database);
    }

    protected function tearDown() : void
    {
        self::$flysystem->deleteDir(self::$database);
    }

    public function testCreateTodoItem()
    {
        $parsedResponse = $this->createDummyTodoItem();

        $this->assertIsInt($parsedResponse['id']);
        $this->assertIsString($parsedResponse['content']);
        $this->assertEquals($this->sampleTodoContent, $parsedResponse['content']);
    }

    public function testUpdateTodoItem()
    {
        $newContent = 'My custom content';

        $todo = $this->createDummyTodoItem();
        
        $response = self::$http->request('PUT', '/api/todos/' . $todo['id'], [
            'form_params' => [
                'data' => [
                    'content' => $newContent,
                ],
            ],
        ]);

        $parsedResponse = json_decode($response->getBody()->getContents(), true);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertIsInt($parsedResponse['id']);
        $this->assertIsString($parsedResponse['content']);
        $this->assertEquals($newContent, $parsedResponse['content']);
    }

    public function testGetTodoItem()
    {
        $todo = $this->createDummyTodoItem();
        
        $response = self::$http->request('GET', '/api/todos/' . $todo['id']);

        $parsedResponse = json_decode($response->getBody()->getContents(), true);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertIsInt($parsedResponse['id']);
        $this->assertIsString($parsedResponse['content']);
        $this->assertEquals($this->sampleTodoContent, $parsedResponse['content']);
    }

    public function testDeleteTodoItem()
    {
        $todo = $this->createDummyTodoItem();
        
        $response = self::$http->request('DELETE', '/api/todos/' . $todo['id']);

        $parsedResponse = json_decode($response->getBody()->getContents(), true);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals('success', $parsedResponse['status']);
        $this->assertEquals('Item deleted successfully!', $parsedResponse['message']);
    }

    private function createDummyTodoItem() : array
    {
        $response = self::$http->request('POST', '/api/todos', [
            'form_params' => [
                'data' => [
                    'content' => $this->sampleTodoContent,
                ],
            ],
        ]);

        $parsedResponse = json_decode($response->getBody()->getContents(), true);

        $this->assertEquals(201, $response->getStatusCode());

        return $parsedResponse;
    }
}