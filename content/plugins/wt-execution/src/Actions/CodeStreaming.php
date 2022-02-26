<?php

namespace WtExecution\Actions;

use Conveyor\Actions\Abstractions\AbstractAction;
use Swoole\Table;
use WtExecution\Models\CodeExecution;

/**
 * List All Docker Containers
 */

class CodeStreaming extends AbstractAction
{
    const ACTION_NAME = 'code-streaming';

    protected string $name = self::ACTION_NAME;

    protected int $snippetId;

    protected string $line;

    protected CodeExecution $codeExecution;

    protected Table $executionTable;

    /**
     * @param array $data
     *
     * @return mixed
     */
    public function execute(array $data): mixed
    {
        return null;
    }

    public function validateData(array $data): void
    {
        // TODO: Implement validateData() method.
    }
}
