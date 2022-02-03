<?php

namespace App\Models;

/**
 * name => string
 * path => string
 * active => bool
 */

class WsListener extends Model
{
    const TABLE_NAME = 'wslisteners';
    protected string $database = self::TABLE_NAME;

    protected array $defaults = [];


    public function __construct()
    {
        $this->name = self::TABLE_NAME;
        parent::__construct();
    }
}
