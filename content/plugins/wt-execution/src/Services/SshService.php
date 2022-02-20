<?php

namespace WtExecution\Services;

use Exception;
use function ssh2_connect;
use function ssh2_auth_pubkey_file;
use function ssh2_auth_password;
use function ssh2_exec;
use function stream_set_blocking;
use function fgets;
use function fclose;

class SshService
{
    const CONNECTION_TYPE_PUB_KEY = 'public-key';
    const CONNECTION_TYPE_PASSWORD = 'password';

    /**
     * @param array $config Structure:
     *                          - host (required)
     *                          - port (required)
     *                          - connection_type (required)
     *                          - username (required)
     *                          - public_key (required if no password)
     *                          - private_key (required if no password)
     *                          - password (required if no private_key)
     */
    public function __construct(
        protected array $config
    ) {}

    /**
     * This procedure executes the command against an SSH connection and outputs to the callback.
     *
     * @param string $command
     * @param callable $callback
     * @return void
     * @throws Exception
     */
    public function run(string $command, callable $callback): void
    {
        if ($this->config['connection_type'] === self::CONNECTION_TYPE_PUB_KEY) {

            $connection = ssh2_connect($this->config['host'], $this->config['port'], ['hostkey' => 'ssh-rsa']);
            $conn_result = ssh2_auth_pubkey_file(
                $connection,
                $this->config['username'],
                $this->config['public_key'],
                $this->config['private_key']
            );
            if (!$conn_result) {
                throw new Exception('Public Key Authentication Failed');
            }

        } elseif ($this->config['connection_type'] === self::CONNECTION_TYPE_PASSWORD) {

            $connection = ssh2_connect($this->config['host'], $this->config['port']);
            $conn_result = ssh2_auth_password($connection, $this->config['username'], $this->config['password']);
            if (!$conn_result) {
                throw new Exception('Password Authentication Failed');
            }

        } else {
            throw new Exception('Connection type not specified!');
        }

        $stdout_stream = ssh2_exec($connection, $command);

        stream_set_blocking($stdout_stream, true);

        while($line = fgets($stdout_stream)) {
            $callback($line);
        }

        $callback('CLOSED');
        fclose($stdout_stream);
    }
}
