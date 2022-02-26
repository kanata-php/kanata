<?php

namespace WtExecution\Queues;

use Carbon\Carbon;
use WtExecution\Actions\CodeStreaming;
use WtExecution\Hooks\Queues;
use PhpAmqpLib\Message\AMQPMessage;
use WtExecution\Models\Execution;
use WtExecution\Services\SshService;

class ExecuteCode implements QueueInterface
{
    const EXECUTE_CODE_EXCHANGE = 'execute-code';
    const EXECUTE_CODE_QUEUE = 'execute-code';
    const EXECUTE_CODE_ROUTING_KEY = 'execute-code';
    const EXECUTE_CODE_QUEUE_OPTION = 'execute-code';

    public function handle(AMQPMessage $msg, array $args = []): void
    {
        if (config('app.env') === 'develop') {
            logger()->info('Code being executed: ' . $msg->body);
        }

        $execution = Execution::getInstance()->where('id', '=', $msg->body)->find();

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
            function($line) use ($output_file, $execution) {
                // write to file
                $existentContent = filesystem()->read($output_file);
                filesystem()->update($output_file, $existentContent . PHP_EOL . $line);

                // broadcast to ws
                $message = json_encode([
                    'action' => CodeStreaming::ACTION_NAME,
                    'data' => [
                        'channel' => 'code-execution',
                        'line' => $line,
                        'user_id' => $execution['user_id'],
                        'uuid' => $execution['uuid'],
                        'execution_id' => $execution['id'],
                        'date' => Carbon::now()->format('Y-m-d H:i:s'),
                    ],
                ]);
                socket_communication()->set(WS_MESSAGE_ACTION, $message);
            }
        );
    }
}