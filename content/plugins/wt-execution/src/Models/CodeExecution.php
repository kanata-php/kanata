<?php

namespace WtExecution\Models;

class CodeExecution extends MysqlDatabase
{
    const TEMP_FILE_SUFFIX = 'code-executing';

    const TABLE = 'code_execution';

    protected string $table = self::TABLE;
}
