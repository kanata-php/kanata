<?php

use App\Services\WebSocketCommunication;
use App\Services\WebSocketPersistence;
use Monolog\Logger;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Swoole\Process;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\ConsoleOutputInterface;
use Symfony\Component\String\Slugger\AsciiSlugger;
use voku\helper\Hooks;
use League\Flysystem\Filesystem;

// ------------------------------------------------------------------------
// Generic Helpers
// ------------------------------------------------------------------------

if (! function_exists('container')) {
    /**
     * @return ContainerInterface
     */
    function container(): ContainerInterface
    {
        global $container;
        return $container;
    }
}

if (! function_exists('config')) {
    /**
     * Get configuration set at the config directory.
     *
     * @param string $key
     * @param mixed|null $default
     * @return mixed
     */
    function config(string $key, mixed $default = null): mixed
    {
        return array_get(container()->config, $key, $default);
    }
}

if (! function_exists('logger')) {
    /**
     * @return Logger
     */
    function logger(): Logger
    {
        return container()->logger;
    }
}

if (! function_exists('filesystem')) {
    /**
     * @return Filesystem
     */
    function filesystem(): Filesystem
    {
        return container()->filesystem;
    }
}

if (! function_exists('json_response')) {
    /**
     * Prepares a Psr7 Response  in JSON format
     *
     * @param Response $response
     * @param string $status
     * @param int $statusCode
     * @param $message
     * @param $errors
     * @param $overrideData
     * @return Response
     */
    function json_response(
        Response $response,
        string   $status,
        int      $statusCode,
                 $message = null,
                 $errors = null,
                 $overrideData = null
    ): Response
    {
        $data = [
            'status' => $status,
        ];

        if ($errors) {
            $data['errors'] = $errors;
        }

        if ($message) {
            $data['message'] = $message;
        }

        if ($overrideData) {
            $data = $overrideData;
        }

        return $response->withJson($data, $statusCode);
    }
}

if (! function_exists('get_query_params')) {
    /**
     * Get Params from Request Query.
     *
     * @param Request $request
     *
     * @return array
     */
    function get_query_params(Request $request): array
    {
        $data = $request->getUri()->getQuery();

        $data = array_filter(explode('&', $data));

        $rearrangedData = [];
        foreach ($data as $item) {
            $item = explode('=', $item);
            $rearrangedData[$item[0]] = $item[1];
        }

        return $rearrangedData;
    }
}

if (! function_exists('handle_existing_pid')) {
    /**
     * Verify if there is an existing PID and offers to kill it in order to proceed.
     *
     * @param string $pid_file
     *
     * @return void
     */
    function handle_existing_pid(string $pid_file): void
    {
        function stop_existent_service($pid, $pid_file)
        {
            Process::kill($pid);
            sleep(1);
            unlink($pid_file);
        }

        if (file_exists($pid_file)) {
            $pid = (int)file_get_contents($pid_file);

            if (OVERWRITE_EXISTENT_SERVICE) {
                stop_existent_service($pid, $pid_file);
                return;
            }

            echo 'Server already running (PID ' . $pid . '), would you like to try anyways? [y,n]' . PHP_EOL;
            $confirmation = trim(fread(STDIN, 1));

            if (!in_array($confirmation, ['y', 'n'])) {
                echo 'Not valid answer, exiting...' . PHP_EOL;
                exit;
            }

            if ($confirmation === 'n') {
                echo 'Exiting...' . PHP_EOL;
                exit;
            }

            echo 'Removing PID file...' . PHP_EOL;
            stop_existent_service($pid, $pid_file);
        }
    }
}

if (! function_exists('add_filter')) {
    /**
     * @param string $hook
     * @param $callback
     * @return mixed
     */
    function add_filter(string $hook, $callback): mixed
    {
        return Hooks::getInstance()->add_filter($hook, $callback);
    }
}

if (!function_exists('array_get')) {
    /**
     * Get an item from an array using "dot" notation.
     * This is from Illuminate helper functions.
     *
     * @param array $array
     * @param string $key
     * @param mixed $default
     * @return mixed
     */
    function array_get(array $array, string $key, mixed $default = null): mixed
    {
        if (is_null($key)) return $array;
        if (isset($array[$key])) return $array[$key];

        foreach (explode('.', $key) as $segment) {
            if (!is_array($array) || !array_key_exists($segment, $array)) {
                return value($default);
            }
            $array = $array[$segment];
        }
        return $array;
    }
}

// ------------------------------------------------------------------------
// Execution Context Information
// ------------------------------------------------------------------------

if (! function_exists('get_output')) {
    function get_output(): ConsoleOutputInterface
    {
        return container()->output;
    }
}

if (! function_exists('get_input')) {
    function get_input(): InputInterface
    {
        return container()->input;
    }
}

if (! function_exists('is_websocket_execution')) {
    /**
     * Says if the current execution is websocket context.
     *
     * @return bool
     */
    function is_websocket_execution(): bool
    {
        return get_input()->getOption('websocket');
    }
}

if (! function_exists('is_http_execution')) {
    /**
     * Says if the current execution is http context.
     * @return bool
     */
    function is_http_execution(): bool
    {
        return !is_websocket_execution()
            && !is_queue_execution();
    }
}

if (! function_exists('is_queue_execution')) {
    /**
     * Says if the current execution is queue context.
     *
     * @return bool
     */
    function is_queue_execution(): bool
    {
        return get_input()->getOption('queue');
    }
}

// ------------------------------------------------------------------------
// Path Helpers
// ------------------------------------------------------------------------

if (! function_exists('make_path_relative_to_project')) {
    function make_path_relative_to_project(string $path): string
    {
        return str_replace(base_path(), '', $path);
    }
}

if (! function_exists('base_path')) {
    /**
     * Retrieve base path of the project.
     *
     * @return string
     */
    function base_path(): string
    {
        $path = str_replace('src/App/Helpers', '', __DIR__);
        $path = str_replace('src', '', $path);
        return trailingslashit($path);
    }
}

if (! function_exists('storage_path')) {
    /**
     * Retrieve storage path of the project.
     *
     * @return string
     */
    function storage_path(): string
    {
        return base_path() . 'storage/';
    }
}

if (! function_exists('public_path')) {
    /**
     * Retrieve public path of the project.
     *
     * @return string
     */
    function public_path(): string
    {
        return base_path() . 'public/';
    }
}

if (! function_exists('resource_path')) {
    /**
     * Retrieve resources path of the project.
     *
     * @return string
     */
    function resource_path(): string
    {
        return base_path() . 'resources/';
    }
}

if (! function_exists('template_path')) {
    /**
     * Retrieve templates path of the project.
     *
     * @return string
     */
    function template_path(): string
    {
        return base_path() . 'resources/views';
    }
}

if (! function_exists('plugin_path')) {
    /**
     * Retrieve plugins path of the project.
     *
     * @param string|null $pluginDirectoryName
     * @return ?string
     */
    function plugin_path(?string $pluginDirectoryName = null): ?string
    {
        $path = base_path() . 'content/plugins';

        if (null === $pluginDirectoryName) {
            return $path;
        }

        $plugin_path = trailingslashit($path) . $pluginDirectoryName;

        if (!container()->filesystem->has($plugin_path)) {
            return null;
        }

        return $plugin_path;
    }
}

if (! function_exists('trailingslashit')) {
    /**
     * Add trailing slash.
     *
     * (original from WordPress)
     *
     * Reference: https://developer.wordpress.org/reference/functions/trailingslashit/
     *
     * @param $string
     *
     * @return string
     */
    function trailingslashit($string): string
    {
        return untrailingslashit($string) . '/';
    }
}

if (! function_exists('untrailingslashit')) {
    /**
     * Remove trailing slash if it exists.
     *
     * (original from WordPress)
     *
     * Reference: https://developer.wordpress.org/reference/functions/untrailingslashit/
     *
     * @param $string
     *
     * @return string
     */
    function untrailingslashit($string): string
    {
        return rtrim($string, '/\\');
    }
}

// ------------------------------------------------------------------------
// View
// ------------------------------------------------------------------------

if (! function_exists('view')) {
    /**
     * Render view for route.
     *
     * @param Response $response
     * @param string $view
     * @param array $params
     * @param int $status
     * @return Response
     */
    function view(Response $response, string $view, array $params = [], int $status = 200): Response
    {
        $html = container()->view->render($view, $params);
        $response->getBody()->write($html);
        return $response->withStatus($status);
    }
}

// ------------------------------------------------------------------------
// String
// ------------------------------------------------------------------------

if (! function_exists('slug')) {
    /**
     * Make a string a slug.
     *
     * @param string $text
     * @return string
     */
    function slug(string $text): string
    {
        $slugger = new AsciiSlugger();
        return strtolower($slugger->slug($text));
    }
}

// ------------------------------------------------------------------------
// Queues
// ------------------------------------------------------------------------

if (! function_exists('register_queue')) {
    /**
     * Register a new callback to a message in the AMQP service.
     *
     * @param string $queue The name of the queue.
     * @param string $exchange The name of the exchange.
     * @param string $option The command to run on terminal for long-running service.
     * @param mixed $callback Function that receives the message.
     * @param string $routingKey The name of the routing key. (default: '')
     * @return void
     */
    function register_queue(string $queue, string $exchange, string $option, mixed $callback, string $routingKey = '')
    {
        add_filter('queues', function ($queues) use ($queue, $exchange, $option, $callback, $routingKey) {
            $queues[$queue] = [
                'exchange' => $exchange,
                'queue' => $queue,
                'routing_key' => $routingKey,
                'option' => $option,
                'callback' => $callback,
            ];

            return $queues;
        });
    }
}

// ------------------------------------------------------------------------
// WebSockets
// ------------------------------------------------------------------------

if (! function_exists('socket_communication')) {
    /**
     * Get websocket communication instance.
     *
     * @return WebSocketCommunication
     */
    function socket_communication(): WebSocketCommunication
    {
        return container()->socket_communication;
    }
}

if (! function_exists('socket_persistence')) {
    /**
     * Get websocket persistence instance.
     *
     * @return WebSocketPersistence
     */
    function socket_persistence(): WebSocketPersistence
    {
        return container()->socket_persistence;
    }
}
