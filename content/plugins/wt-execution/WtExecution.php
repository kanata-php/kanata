<?php

use Conveyor\Actions\AssocUserToFdAction;
use Conveyor\Actions\ChannelConnectAction;
use Kanata\Interfaces\KanataPluginInterface;
use Lazer\Classes\Helpers\Validate;
use Lazer\Classes\LazerException;
use Swoole\Table;
use voku\helper\Hooks;
use WtExecution\Actions\CodeStreaming;
use WtExecution\Hooks\Broadcast;
use WtExecution\Hooks\Queues;
use WtExecution\Http\Controllers\CodeExecutionController;
use WtExecution\Interceptor\CodeExecutorLogInterceptor;
use WtExecution\Models\Execution;
use Lazer\Classes\Database as Lazer;
use Kanata\Annotations\Plugin;
use Kanata\Annotations\Description;
use Kanata\Annotations\Author;
use WtExecution\Models\ExecutionAssociation;

/**
 * @Plugin(name="WtExecution")
 * @Description(value="Executes code and stream output.")
 * @Author(name="Savio Resende",email="savio@savioresende.com")
 */

class WtExecution implements KanataPluginInterface
{
    protected Table $table;

    public function __construct()
    {
        $this->prepareExecutionTable();
        // $this->prepareExecutionAssociationTable();
    }

    public function start(): void
    {
        if (is_http_execution()) {
            $this->prepare_http_routes_at_container();
        }

        if (is_websocket_execution()) {
            $this->register_socket_actions();
            (new Broadcast)->run();
        }

        if (is_queue_execution()) {
            (new Queues)->run();
        }
    }

    /**
     * Prepare Execution Table.
     *
     * @return void
     *
     * @throws LazerException
     */
    private function prepareExecutionTable(): void
    {
        try {
            Validate::table(Execution::TABLE_NAME)->exists();
        } catch (LazerException $e) {
            Lazer::create(Execution::TABLE_NAME, [
                'fd' => 'integer',
                'user_id' => 'integer',
                'code_id' => 'integer',
                'uuid' => 'string',
                'language' => 'string',
                'server_id' => 'integer',
                'source_temp_file' => 'string',
                'output_file' => 'string',
                'finished' => 'boolean',
            ]);
        }
    }

    /**
     * Prepare Execution Association Table.
     *
     * @return void
     *
     * @throws LazerException
     */
    private function prepareExecutionAssociationTable(): void
    {
        try {
            Validate::table(ExecutionAssociation::TABLE_NAME)->exists();
        } catch (LazerException $e) {
            Lazer::create(ExecutionAssociation::TABLE_NAME, [
                'fd' => 'integer',
                'execution_id' => 'integer',
            ]);
        }
    }

    private function register_socket_actions()
    {
        // Hook to Route Socket Messages.
        Hooks::getInstance()->add_filter('socket_actions', function($socketRouter) {
            $socketRouter->add(new ChannelConnectAction);
            $socketRouter->add(new AssocUserToFdAction);
            $socketRouter->add(new CodeStreaming);
            // $socketRouter->middleware($codeStreamingAction->getName(), new VerifyProcedureKey);
            // $socketRouter->addMiddlewareExceptionHandler(new WordsTreeSocketExceptionHandler);
            return $socketRouter;
        }, 2);
    }

    public function prepare_http_routes_at_container()
    {
        // Hook to route HTTP Requests.
        Hooks::getInstance()->add_filter('routes', function($app) {

            /**
             * Expected Payload:
             * [
             *     "data" => [
             *         "user_id" => 1,
             *         "uuid" => "testsavio1",
             *         "language" => "shell",
             *         "source" => "ls -la"
             *     ]
             * ]
             */
            $app->post('/executions', [CodeExecutionController::class, 'executions']);

            $app->get('/executions/{uuid}', [CodeExecutionController::class, 'show']);

            $app->get('/execution-output/{uuid}', [CodeExecutionController::class, 'getOutput']);

            $app->get('/execute-code/{execution_id}', [CodeExecutionController::class, 'execute']);

            return $app;
        });
    }
}