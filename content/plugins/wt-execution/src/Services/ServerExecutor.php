<?php

namespace WtExecution\Services;

use Exception;
use phpseclib3\Crypt\RSA\PrivateKey;
use phpseclib3\Net\SSH2;
use phpseclib3\Crypt\PublicKeyLoader;
use stdClass;
use WtExecution\Helpers\ServerExecutorHelper;
use WtExecution\Models\CodeExecution;
use WtExecution\Models\User;

class ServerExecutor
{
    /** @var string */
    const LANGUAGE_PHP = 'php';

    /** @var string */
    const LANGUAGE_SHELL = 'shell';

    protected stdClass $userServer;

    /** @var SSH2 */
    protected $ssh;

    public function __construct(stdClass $userServer)
    {
        $this->userServer = $userServer;
    }

    /**
     * @return void
     *
     * @throws Exception
     */
    public function connect(): void
    {
        $host     = $this->userServer->host;
        $port     = $this->userServer->port;
        $username = $this->userServer->user;

        if ($this->userServer->password_type === 'private_key') {
            $password = PrivateKey::load($this->userServer->password);
        } else {
            $password = $this->userServer->password;
        }

        $this->ssh = new SSH2($host, $port);
        if (! $this->ssh->login($username, $password)) {
            throw new Exception('Login on remote server failed!');
        }
    }

    /**
     * @return SSH2
     */
    public function getSSH(): SSH2
    {
        return $this->ssh;
    }

    /**
     * @return stdClass
     */
    public function getUserServer()
    {
        return $this->userServer;
    }

    /**
     * @param string $code
     * @return string
     */
    public function executeTinkerCode(string $code): string
    {
        $command = 'cd ' . $this->userServer->directory . ' && ' . $code . ' | php artisan tinker';
        $result  = $this->ssh->exec($command);

        return $result;
    }

    /**
     * @param string $script
     * @return string
     */
    public function executeShellScript(string $script): string
    {
        global $container;

        $command = 'cd ' . $this->userServer->directory . ' && ' . $script;
        $result  = $this->ssh->exec($command);

        $container['logger']->info(json_encode([
            'class' => 'ServerExecutor',
            'method' => 'executeShellScript',
            'code' => $command,
            'result' => $result,
        ]));

        return $result;
    }

    /**
     * @param int $codeExecutionId
     * @param int $userId
     * @param string $language
     *
     * @return string
     *
     * @throws Exception When it can't find server record. || When the server found is not from the current user.
     */
    public function runCode(
        int $codeExecutionId,
        int $userId,
        string $language
    ) {
        $codeExecution = (new CodeExecution)->findBy('id', $codeExecutionId)->first();
        $user          = (new User)->findBy('id', $userId)->first();

        if (null === $codeExecution || null === $user) {
            throw new Exception('CodeExecution not found: ' . $codeExecutionId . '. User: ' . auth()->user()->id . '.');
        }

        if ($this->userServer->user_id !== $user->id) {
            throw new Exception('User not authorized to run code with this feature!');
        }

        // @throws Exception
        $this->connect();

        // execute code

        switch ($language) {
            case 'shell':

                $code = ServerExecutorHelper::prepareShellScript($codeExecution->source_code);
                $result = $this->executeShellScript($code);
                $result = ServerExecutorHelper::parsePHPCodeResult($result);
                $codeExecution->output = $result;
                (new CodeExecution)->getTable()->where('id', $codeExecution->id)->update((array) $codeExecution);
                break;

            default:
            case 'php':

                $code = ServerExecutorHelper::preparePHPCodeForTinker($codeExecution->source_code);
//                 logger()->info("############################################################");
//                 logger()->info("preparePHPCodeForTinker");
//                 logger()->info("serverId: " . $serverId);
//                 logger()->info("codeExecutionId: " . $codeExecutionId);
//                 logger()->info("userId: " . $userId);
//                 logger()->info("language: " . $language);
//                 logger()->info("code6: " . $code);
//                 logger()->info("############################################################");

                $result = $this->executeTinkerCode($code);
//                $result = ServerExecutorHelper::parsePHPCodeResult($result);
                $codeExecution->output = $result;
//                $codeExecution->save();
                (new CodeExecution)->getTable()->where('id', $codeExecution->id)->update((array) $codeExecution);
                break;

        }

        return $result;
    }
}
