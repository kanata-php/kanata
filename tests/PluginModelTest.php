<?php

namespace Tests;

use App\Drivers\Data\Json;
use App\Models\Plugin;
use PHPUnit\Framework\TestCase;
use App\Drivers\Data\Filesystem;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem as Flysystem;
use App\Drivers\Data\Interfaces\DataDriverInterface;

class PluginModelTest extends TestCase
{
    protected Plugin $plugin;

    protected function setUp() : void
    {
        $this->plugin = Plugin::getInstance();
    }

    public function testDeleteTodoItem()
    {
        $todo = $this->createDummyTodoItem();

        $existentTodoItems = $todo->get();
        $this->assertCount(1, $existentTodoItems);

        $todo->delete(1);

        $existentTodoItems = $todo->get();
        $this->assertCount(0, $existentTodoItems);
    }
}