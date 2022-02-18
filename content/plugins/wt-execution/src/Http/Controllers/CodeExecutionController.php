<?php

namespace WtExecution\Http\Controllers;

use Nyholm\Psr7\Factory\Psr17Factory;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Ramsey\Uuid\Uuid;
use WtExecution\Actions\CodeStreaming;
use WtExecution\Models\Execution;
use WtExecution\Services\SshService;

class CodeExecutionController
{
    public function executions(Request $request, Response $response): Response
    {
        // TODO: validation

        $data = json_decode($request->getBody()->getContents(), true);

        $data = $data['data'];
        $uuid = Uuid::uuid4()->toString();

        $source_file = 'storage/temp/source-' . $uuid;
        $file = container()->filesystem->write($source_file, urldecode($data['source']));

        if (!$file) {
            logger()->error('Error while trying to register a code execution in temp source file.');
            return json_response(
                $response,
                'error',
                500,
                'Execution registration failed!'
            );
        }

        // TODO: improve interface
        $recordId = Execution::createRecord([
            'user_id' => $data['user_id'],
            'uuid' => $data['uuid'],
            'language' => $data['language'],
            'source_temp_file' => $source_file,
            'server_id' => $data['server_id'],
        ])->lastId();
        $record = Execution::getInstance()->where('id', '=', $recordId)->find();
        $record = json_encode(current($record->asArray()));

        if (null === $record) {
            logger()->error('Error while trying to register a code execution in json db.');
            return json_response(
                $response,
                'error',
                500,
                'Execution registration failed!'
            );
        }

        return $response
            ->withBody((new Psr17Factory)->createStream($record))
            ->withStatus(200)
            ->withHeader('Content-Type', 'application/json');
    }

    public function show(Request $request, Response $response, array $args): Response
    {
        // TODO: Validation

        $execution = Execution::getInstance()->where('uuid', '=', $args['uuid'])->find();

        if ($execution->count() === 0) {
            return json_response(
                $response,
                'error',
                404,
                'Execution not found!'
            );
        }

        return $response
            ->withBody((new Psr17Factory)->createStream($execution))
            ->withStatus(200)
            ->withHeader('Content-Type', 'application/json');
    }

    public function getOutput(Request $request, Response $response, array $args): Response
    {
        return json_response(
            $response,
            'error',
            500,
            'Not implemented!'
        );
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response
     */
    public function execute(Request $request, Response $response, array $args): Response
    {
        $execution = Execution::getInstance()->where('id', '=', $args['execution_id'])->find();

        $output_file = 'storage/temp/output-' . $execution->uuid;
        if (!filesystem()->has($output_file)) {
            filesystem()->write($output_file, '');
        } else {
            filesystem()->update($output_file, '');
        }

        $config = [
            'host' => '162.243.164.132',
            'port' => 22,
            'connection_type' => SshService::CONNECTION_TYPE_PUB_KEY,
            'username' => 'forge',
            'public_key' => storage_path() . 'servers/1/id_rsa.pub',
            'private_key' => storage_path() . 'servers/1/id_rsa',
        ];

        (new SshService($config))->run(
            file_get_contents(base_path() . $execution->source_temp_file),
            function($line) use ($output_file) {
                // write to file
                $existentContent = filesystem()->read($output_file);
                filesystem()->update($output_file, $existentContent . PHP_EOL . $line);

                // broadcast to ws
                $message = json_encode([
                    'action' => CodeStreaming::ACTION_NAME,
                    'data' => [
                        'channel' => 'code-execution',
                        'line' => $line,
                    ],
                ]);
                socket_communication()->set(WS_MESSAGE_ACTION, $message);
            }
        );

        return $response;
    }
}
