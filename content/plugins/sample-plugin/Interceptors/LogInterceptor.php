<?php

use Ray\Aop\MethodInterceptor;
use Ray\Aop\MethodInvocation;

/**
 * Class LogInterceptor
 */

class LogInterceptor implements MethodInterceptor
{
    public function invoke(MethodInvocation $invocation)
    {
        global $container;

        $container->get('logger')->info('View template being presented: ' . $invocation->getNamedArguments()['template']);

        // Alternatives: the first way you have the opportunity to customize.
        // $result = call_user_func_array([$invocation->getThis(), $invocation->getMethod()->name], (array) $invocation->getNamedArguments());
        $result = $invocation->proceed();

        return $result;
    }
}