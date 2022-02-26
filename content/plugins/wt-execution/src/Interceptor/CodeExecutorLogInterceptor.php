<?php

namespace WtExecution\Interceptor;

use Ray\Aop\MethodInterceptor;
use Ray\Aop\MethodInvocation;

/**
 * Class LogInterceptor
 */

class CodeExecutorLogInterceptor implements MethodInterceptor
{
    public function invoke(MethodInvocation $invocation)
    {
        global $container;

        $container->get('logger')->info(json_encode([
            'class' => get_parent_class($invocation->getThis()),
            'place' => 'before',
            'method' => $invocation->getMethod(),
            'argument' => $invocation->getNamedArguments(),
        ]));

        // Alternatives: the first way you have the opportunity to customize.
        // $result = call_user_func_array([$invocation->getThis(), $invocation->getMethod()->name], (array) $invocation->getNamedArguments());
        $result = $invocation->proceed();

        $container->get('logger')->info(json_encode([
            'class' => get_parent_class($invocation->getThis()),
            'place' => 'after',
            'method' => $invocation->getMethod(),
            'argument' => $invocation->getNamedArguments(),
            'result' => $result,
        ]));

        return $result;
    }
}
