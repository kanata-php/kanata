<?php

namespace WtExecution\Models;

use Kanata\Models\Model;

class Execution extends Model
{
    const TABLE_NAME = 'executions';

    /** @var string */
    protected $name = self::TABLE_NAME;
}