<?php

namespace App\Exceptions;

use Slim\Interfaces\ErrorRendererInterface;
use Throwable;

class ErrorHandler implements ErrorRendererInterface
{
    public function __invoke(Throwable $exception, bool $displayErrorDetails): string
    {
        $output = '';

        // cli
        $output .= '<!--' . PHP_EOL;
        $output .= 'Exception Type: ' . gettype($exception) . PHP_EOL . PHP_EOL;
        $output .= 'Exception Message: ' . $exception->getMessage() . PHP_EOL . PHP_EOL;
        $output .= 'Exception File: ' . $exception->getFile() . ':' . $exception->getLine() . PHP_EOL . PHP_EOL;
        foreach ($exception->getTrace() as $item) {
            if (isset($item['file'])) {
                $output .= $item['file'] . ':' . $item['line'] . PHP_EOL . PHP_EOL;
            }

            if (isset($item['class'])) {
                $output .= $item['class'] . '->' . $item['function'] . PHP_EOL . PHP_EOL;
            }
        }
        $output .= '-->' . PHP_EOL;

        $output .= '<div style="max-width: 900px;margin: 0 auto;padding-top: 50px;padding-bottom: 50px;">';

        // html
        $output .= '<h2 class="text-2xl mb-10">Kanata Exception</h2>';
        $output .= '<p>Exception Type: ' . get_class($exception) . '</p>';
        $output .= '<p>Exception Message: ' . $exception->getMessage() . '</p>';
        $output .= '<p>Exception File: ' . $exception->getFile() . ':' . $exception->getLine() . '</p>';
        foreach ($exception->getTrace() as $item) {
            $output .= '<div style="border:1px solid #000; padding: 6px;margin: 6px;">';
            if (isset($item['file'])) {
                $output .= '<p>' . $item['file'] . ':' . $item['line'] . '</p>';
            }

            if (isset($item['class'])) {
                $output .= '<p>' . $item['class'] . '->' . $item['function'] . '</p>';
            }
            $output .= '</div>';
        }

        $output .= '</div>';

        $html = container()->view->render('core::error', ['content' => $output]);

        return $html;
    }
}