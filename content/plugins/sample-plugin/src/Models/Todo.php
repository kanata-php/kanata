<?php

namespace SamplePlugin\Models;

use App\Models\Model;

class Todo extends Model
{
    protected string $table = 'todos';
    protected array $content;
}
