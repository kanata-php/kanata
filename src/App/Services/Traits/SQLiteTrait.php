<?php

namespace App\Services\Traits;

trait SQLiteTrait
{
    protected function tableExists(string $table): bool
    {
        $sql = <<<EOF
    SELECT EXISTS (
        SELECT name
        FROM sqlite_schema 
        WHERE 
            type='table' AND
            name='{$table}'
    );
EOF;

        $ret = $this->handler->query($sql);

        $row = $ret->fetchArray(SQLITE3_ASSOC);
        if (!current($row)) {
            return false;
        }

        return true;
    }
}