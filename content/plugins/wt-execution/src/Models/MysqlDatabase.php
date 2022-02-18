<?php

namespace WtExecution\Models;

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Support\Collection;

abstract class MysqlDatabase
{
    protected Capsule $capsule;

    public function __construct()
    {
        $env = $_ENV;
        $this->capsule = new Capsule;
        $this->capsule->addConnection([
            'driver'    => $env['DB_DRIVER'],
            'host'      => $env['DB_HOST'],
            'port'      => $env['DB_PORT'],
            'database'  => $env['DB_DATABASE'],
            'username'  => $env['DB_USER'],
            'password'  => $env['DB_PASSWORD'],
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ]);
        // $capsule->setEventDispatcher(new Dispatcher(new Container));
        $this->capsule->setAsGlobal();
        $this->capsule->bootEloquent();
    }

    public function getTable()
    {
        return $this->capsule->table($this->table);
    }

    /**
     * @param string $field
     * @param mixed $value
     *
     * @return Collection
     */
    public function findBy(string $field, $value, $operator = '=')
    {
        return $this->getTable()->where($field, $operator, $value)->get();
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data)
    {
        return $this->getTable()->insertGetId($data);
    }
}
