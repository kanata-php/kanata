<?php

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Swoole\Process;
use Symfony\Component\String\Slugger\AsciiSlugger;
use voku\helper\Hooks;

// ------------------------------------------------------------------------
// Generic Helpers
// ------------------------------------------------------------------------

/**
 * @return ContainerInterface
 */
function container(): ContainerInterface
{
    global $container;
    return $container;
}

/**
 * Prepares a Psr7 Response  in JSON format
 *
 * @param Response $response
 * @param string $status
 * @param string $message
 * @param array $errors
 * @param int $statusCode
 *
 * @return Response
 */
function json_response(
    Response $response,
    string $status,
    int $statusCode,
    $message = null,
    $errors = null,
    $overrideData = null
) : Response {
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

/**
 * Get Params from Request Query.
 *
 * @param Request $request
 *
 * @return array
 */
function get_query_params(Request $request) : array
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

/**
 * Grab the correct port for HTTP or WebSocket.
 *
 * e.g.: --port=9501
 *
 * @return int|mixed|string
 * @throws Exception
 */
function grab_port_from_params($port_param) {
    global $argv;

    $port = array_filter($argv, function($item) use ($port_param) {
        return
            substr($item, 0, 8) === $port_param || // WebSocket Port
            substr($item, 0, 6) === $port_param;   // HTTP Port
    });

    if (count($port) > 0) {
        return explode('=', current($port))[1];
    }

    switch ($port_param) {
        case HTTP_PORT_PARAM:
            return (int) HTTP_SERVER_PORT;
        case WEBSOCKET_PORT_PARAM:
            return (int) WS_SERVER_PORT;
        default:
            return 3000;
    }
}

/**
 * Verify if there is an existing PID and offers to kill it in order to proceed.
 *
 * @param string $pid_file
 *
 * @return void
 */
function handle_existing_pid(string $pid_file): void {

    function stop_existent_service($pid, $pid_file) {
        Process::kill($pid);
        sleep(1);
        unlink($pid_file);
    }

    if (file_exists($pid_file)) {
        $pid = (int) file_get_contents($pid_file);

        if (OVERWRITE_EXISTENT_SERVICE) {
            stop_existent_service($pid, $pid_file);
            return;
        }

        echo 'Server already running (PID ' . $pid . '), would you like to try anyways? [y,n]' . PHP_EOL;
        $confirmation = trim( fread( STDIN, 1 ) );

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

/**
 * @param string $hook
 * @param $callback
 * @return void
 */
function add_filter(string $hook, $callback) {
    Hooks::getInstance()->add_filter($hook, $callback);
}

// ------------------------------------------------------------------------
// Path Helpers
// ------------------------------------------------------------------------

function make_path_relative_to_project(string $path): string {
    return str_replace(base_path(), '', $path);
}

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

/**
 * Retrieve storage path of the project.
 *
 * @return string
 */
function storage_path(): string
{
    return base_path() . 'storage/';
}

/**
 * Retrieve public path of the project.
 *
 * @return string
 */
function public_path(): string
{
    return base_path() . 'public/';
}

/**
 * Retrieve resources path of the project.
 *
 * @return string
 */
function resource_path(): string
{
    return base_path() . 'resources/';
}

/**
 * Retrieve templates path of the project.
 *
 * @return string
 */
function template_path(): string
{
    return base_path() . 'resources/views';
}

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
function trailingslashit( $string ): string {
    return untrailingslashit( $string ) . '/';
}

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
function untrailingslashit( $string ): string {
    return rtrim( $string, '/\\' );
}

// ------------------------------------------------------------------------
// View
// ------------------------------------------------------------------------

/**
 * Render view for route.
 *
 * @param Response $response
 * @param string $view
 * @param array $params
 * @param int $status
 * @return Response
 */
function view(Response $response, string $view, array $params = [], int $status = 200): Response {
    $html = container()->view->render($view, $params);
    $response->getBody()->write($html);
    return $response->withStatus($status);
}

// ------------------------------------------------------------------------
// String
// ------------------------------------------------------------------------

function slug(string $text): string {
    $slugger = new AsciiSlugger();
    return strtolower($slugger->slug($text));
}