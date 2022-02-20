<?php

namespace WtExecution\Models;

use Kanata\Models\Model;

class ExecutionAssociation extends Model
{
    const TABLE_NAME = 'executionassociations';

    /** @var string */
    protected $name = self::TABLE_NAME;

    protected array $defaults = [];
}
