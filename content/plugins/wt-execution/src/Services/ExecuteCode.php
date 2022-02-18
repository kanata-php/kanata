<?php

namespace WtExecution\Services;

use Exception;
use Swoole\WebSocket\Server;
use WtExecution\Models\UserServer;

class ExecuteCode
{
    /**
     * Message for the output of the code execution.
     *
     * @var string
     */
    const OUTPUT_PROCESS_NAME = 'code-output';

    /**
     * Message for the end of the code execution.
     *
     * @var string
     */
    const FINISH_PROCESS_NAME = 'code-execution-finished';

    /**
     * Message sent when there is an error in the code execution.
     *
     * @var string
     */
    const CODE_EXECUTION_ERROR = 'code-execution-error';

    /** @var int */
    protected $serverId;

    /** @var int */
    protected $userId;

    /** @var int */
    protected $codeExecutionId;

    /** @var string */
    protected $language;

    /** @var int|null */
    protected $fd;

    /** @var Server|null */
    protected $server;

    /**
     * Create a new job instance.
     *
     * @param int         $serverId        Server Id.
     * @param int         $codeExecutionId Code Execution Id.
     * @param int         $userId          User Id.
     * @param string      $language        Language.
     * @param int|null    $fd              FD of socket connection.
     * @param Server|null $server          Server for socket connection.
     *
     * @return void
     */
    public function __construct(
        int $serverId,
        int $codeExecutionId,
        int $userId,
        string $language,
        $fd = null,
        $server = null
    ) {
        $this->serverId        = $serverId;
        $this->codeExecutionId = $codeExecutionId;
        $this->userId          = $userId;
        $this->language        = $language;
        $this->fd              = $fd;
        $this->server          = $server;
    }

    /**
     * Execute the job.
     *
     * @return void
     *
     * @throws Exception
     */
    public function handle()
    {
        global $container;

        $userServer = (new UserServer)->findBy('id', $this->serverId)->first();
        if (null === $userServer) {
            throw new Exception('UserServer not found: ' . $this->serverId . '. User: ' . $this->userId . '.');
        }

        // @throws Exception
        $result = $container->make(ServerExecutor::class, [
            $userServer,
        ])->runCode(
            $this->codeExecutionId,
            $this->userId,
            $this->language
        );

        $resultArray = explode(PHP_EOL, $result);
        $resultArray = array_filter($resultArray);

        foreach ($resultArray as $line) {
            $this->server->push(
                $this->fd,
                json_encode([
                    'procedure' => self::OUTPUT_PROCESS_NAME,
                    'data' => [
                        'line' => $line,
                    ],
                ])
            );
        }

        if ($this->fd) {
            $this->server->push(
                $this->fd,
                json_encode([
                    'procedure' => self::FINISH_PROCESS_NAME,
                    'data' => [
                        'code-execution-id' => $this->codeExecutionId,
                    ],
                ])
            );
        }
    }
}
