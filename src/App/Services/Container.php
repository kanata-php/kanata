<?php

namespace App\Services;

use Exception;
use Ray\Aop\Bind;
use Ray\Aop\MethodInterceptor;
use Ray\Aop\Weaver;
use RuntimeException;
use Slim\Container as SlimContainer;

/**
 * Class Container
 *
 * This App Container.
 *
 * @package App\Services
 */

class Container extends SlimContainer
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
        parent::__construct($values);
    }

    /**
     * Make instance for given $id.
     *
     * @param string $id This must be like `Class::class`
     * @param array $params
     *
     * @return mixed
     */
    public function make(string $id, array $params = [])
    {
        if (isset($this->registeredAspects[$id])) {
            return $this->makeWithMethodInterceptor($id, $params);
        }

        if ($this->has($id)) {
            return parent::get($id);
        }

        $reflection_class = new ReflectionClass($id);
        return $reflection_class->newInstanceArgs($params);
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
     *
     * @return void
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

    // TODO: find and update: withMethodInterceptorWithParams
    // TODO: find and update: makeWithParams
}
