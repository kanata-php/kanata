<?php


namespace App\Services;


use Mockery\Matcher\Closure;

class Proxy
{
    /** @var mixed */
    protected $instance;

    /**
     * Facade constructor.
     *
     * @param mixed $class Class instance or closure.
     */
    public function __construct($class)
    {
        if (is_callable($class)) {
            $this->instance = $class();
        } else {
            $this->instance = $class;
        }
    }

    public function __call($name, $arguments)
    {
        call_user_func_array([$this->instance, $name], $arguments);
    }
}