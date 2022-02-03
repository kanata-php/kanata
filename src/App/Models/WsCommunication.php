<?php

namespace App\Models;

/**
 * name => string
 * path => string
 * active => bool
 */

class WsCommunication extends Model
{
    const TABLE_NAME = 'wscommunications';
    protected string $database = self::TABLE_NAME;

    public function __construct()
    {
        $this->name = self::TABLE_NAME;
        parent::__construct();
    }
}
