<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Swoole\Process;

include_once __DIR__ . '/paths.php';

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
        $port = explode('=', current($port))[1];
    } else {
        $port = $port_param === HTTP_PORT_PARAM ? DEFAULT_SERVER_PORT : DEFAULT_WS_SERVER_PORT;
    }

    return $port;
}

/**
 * Verify if there is an existing PID and offers to kill it in order to proceed.
 *
 * @param string $pid_file
 *
 * @return void
 */
function handle_existing_pid(string $pid_file): void {
    if (file_exists($pid_file)) {
        $pid = (int) file_get_contents($pid_file);

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
        Process::kill($pid);
        sleep(1);
        unlink($pid_file);
    }
}
