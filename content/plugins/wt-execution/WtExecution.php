<?php

use Kanata\Interfaces\KanataPluginInterface;
use Lazer\Classes\Helpers\Validate;
use Lazer\Classes\LazerException;
use Swoole\Table;
use voku\helper\Hooks;
use WtExecution\Actions\CodeStreaming;
use WtExecution\Http\Controllers\CodeExecutionController;
use WtExecution\Interceptor\CodeExecutorLogInterceptor;
use WtExecution\Models\Execution;
use Lazer\Classes\Database as Lazer;
use Kanata\Annotations\Plugin;
use Kanata\Annotations\Description;
use Kanata\Annotations\Author;

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
    }

    public function start(): void
    {
            if (is_http_execution()) {
            $this->prepare_http_routes_at_container();
        }

        if (is_websocket_execution()) {
//            $this->prepare_socket_actions_at_container();
            $this->register_socket_actions();
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
                'uuid' => 'string',
                'language' => 'string',
                'server_id' => 'integer',
                'source_temp_file' => 'string',
                'output_file' => 'string',
                'finished' => 'boolean',
            ]);
        }
    }

    private function register_socket_actions()
    {
        // Hook to Route Socket Messages.
        Hooks::getInstance()->add_filter('socket_actions', function($socketRouter) {
            $socketRouter->add(new CodeStreaming);
            // $socketRouter->middleware($codeStreamingAction->getName(), new VerifyProcedureKey);

            // $socketRouter->addMiddlewareExceptionHandler(new WordsTreeSocketExceptionHandler);
            return $socketRouter;
        }, 2);
    }

    private function prepare_socket_actions_at_container()
    {
        // actions

        container()->setMethodInterceptor(
            CodeStreaming::class,
            'execute',
            new CodeExecutorLogInterceptor
        );
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