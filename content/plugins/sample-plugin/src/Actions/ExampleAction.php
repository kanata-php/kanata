<?php

namespace SamplePlugin\Actions;

use Conveyor\Actions\Abstractions\AbstractAction;
use Exception;
use InvalidArgumentException;

class ExampleAction extends AbstractAction
{
    protected string $name = 'example-action';

    /**
     * @param array $data
     *
     * @return mixed
     *
     * @throws InvalidArgumentException
     * @throws Exception
     */
    public function execute(array $data): mixed
    {
        /** @throws InvalidArgumentException */
        $this->validateData($data['params']);

        $this->send($data['params']['content']);

        return null;
    }

    /**
     * @param array $data
     * @return void
     *
     * @throws InvalidArgumentException
     */
    public function validateData(array $data) : void
    {
        if (!isset($data['content'])) {
            throw new InvalidArgumentException('Todo required \'content\' field to be created!');
        }
    }
}
