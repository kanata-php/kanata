<?php

namespace App\Services;

use Exception;
use Ray\Aop\Bind;
use Ray\Aop\MethodInterceptor;
use Ray\Aop\ReflectionClass;
use Ray\Aop\Weaver;
use RuntimeException;
use DI\Container as SlimContainer;
use ArrayAccess;

/**
 * Class Container
 *
 * This App Container.
 *
 * @package App\Services
 */

class Container extends SlimContainer implements ArrayAccess
{
    /** @var string */
    protected $tmpDir;

    /**
     * Register for debugging and audit.
     * 
     * @var array
     */
    protected $registeredAspects = [];

    /**
     * @param array $values The parameters or objects.
     */
    public function __construct(array $values = [])
    {
        $this->tmpDir = storage_path() . 'temp/';
        parent::__construct();

        foreach ($values as $key => $value) {
            $this->set($key, $value);
        }
    }

    /**
     * Make instance for given $id.
     *
     * @param string $id This must be like `Class::class`
     * @param array $params
     *
     * @return mixed
     */
    public function make($name, array $parameters = [])
    {
        if (isset($this->registeredAspects[$name])) {
            return $this->makeWithMethodInterceptor($name, $parameters);
        }

        if ($this->has($name)) {
            return parent::get($name);
        }

        $reflection_class = new ReflectionClass($name);
        return $reflection_class->newInstanceArgs($parameters);
    }

    /**
     * @param string $id
     * @param string $method
     * @param MethodInterceptor $methodInterceptor
     * @param array $defaultParams
     *
     * @return void
     */
    public function setMethodInterceptor(
        string $id,
        string $method,
        MethodInterceptor $methodInterceptor,
        array $defaultParams = []
    ) {
        $this->registeredAspects[$id] = [
            'id'                => $id,
            'method'            => $method,
            'params'            => $defaultParams,
            'methodInterceptor' => $methodInterceptor,
        ];
    }

    /**
     * Generates an instance for the given $id.
     *
     * @param string $id
     * @param array $params
     *
     * @throws RuntimeException
     */
    protected function makeWithMethodInterceptor(string $id, array $params)
    {
        if (!isset($this->registeredAspects[$id])) {
            throw new Exception('Instance not found!');
        }

        $pieces = $this->registeredAspects[$id];

        $params = !empty($params) ? $params : $pieces['params'];
        
        $bind = (new Bind)->bindInterceptors($pieces['method'], [$pieces['methodInterceptor']]);
        $compiler = new Weaver($bind, $this->tmpDir);
        return $compiler->newInstance($pieces['id'], $params, $bind);
    }

    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            throw new Exception('A key must be set for the container.');
        } else {
            $this->set($offset, $value);
        }
    }

    public function offsetExists($offset)
    {
        return isset($this->has[$offset]);
    }

    public function offsetUnset($offset)
    {
        unset($this->resolvedEntries[$offset]);
    }

    public function offsetGet($offset)
    {
        return $this->has($offset) ? $this->get($offset) : null;
    }

    public function __get($name)
    {
        return $this->has($name) ? $this->get($name) : null;
    }

    // TODO: find and update: withMethodInterceptorWithParams
    // TODO: find and update: makeWithParams
}
