<?php

namespace Conveyor\Actions;

use Conveyor\Actions\Abstractions\AbstractAction;
use Conveyor\Actions\Traits\HasPersistence;
use Error;
use Exception;
use InvalidArgumentException;

class AssocExecutionToFdAction extends AbstractAction
{
    use HasPersistence;

    protected string $name = 'assoc-execution-to-fd-action';

    /**
     * @param array $data
     *
     * @return array
     *
     * @throws InvalidArgumentException
     * @throws Exception
     */
    public function execute(array $data): mixed
    {
        $this->connectTeamToFd($data);
        return null;
    }

    public function connectTeamToFd(array $data): void
    {
        if (null === $this->fd) {
            throw new Exception('FD not specified!');
        }

        $this->persistence->assoc($this->fd, $data['userId']);
    }

    /**
     * @param array $data
     * @return void
     *
     * @throws InvalidArgumentException
     */
    public function validateData(array $data) : void
    {
        if (!isset($data['userId'])) {
            throw new InvalidArgumentException('The userId is required to associate connection to team!');
        }
    }
}
