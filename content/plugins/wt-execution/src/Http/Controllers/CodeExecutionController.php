<?php

namespace WtExecution\Http\Controllers;

use Nyholm\Psr7\Factory\Psr17Factory;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Ramsey\Uuid\Uuid;
use WtExecution\Models\Execution;
use WtExecution\Queues\ExecuteCode;

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
        $result = Execution::createRecord([
            'user_id' => $data['user_id'],
            'uuid' => $data['uuid'],
            'language' => $data['language'],
            'source_temp_file' => $source_file,
            'server_id' => $data['server_id'],
        ]);

        if (null === $result) {
            logger()->error('Couldn\'t register the execution record!');
            return json_response(
                $response,
                'error',
                500,
                'Execution registration failed - could\'t create record!'
            );
        }

        $recordId = $result->lastId();
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
        $connection = new AMQPStreamConnection(
            QUEUE_SERVER_HOST,
            QUEUE_SERVER_PORT,
            QUEUE_SERVER_USER,
            QUEUE_SERVER_PASSWORD
        );
        $channel = $connection->channel();
        $channel->queue_declare(ExecuteCode::EXECUTE_CODE_QUEUE, false, false, false, false);
        $channel->basic_publish(
            new AMQPMessage($args['execution_id']),
            ExecuteCode::EXECUTE_CODE_EXCHANGE,
            ExecuteCode::EXECUTE_CODE_ROUTING_KEY
        );

        return json_response($response, json_encode([
            'success' => true,
            'message' => 'Code execution started!',
        ]), 200);
    }
}
