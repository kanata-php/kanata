<?php

namespace App\Models;

use App\Models\Abstractions\Model;

class ModelExample extends Model
{
    /** @var string */
    protected $table = 'todos';

    /** @var string */
    protected $content;

    /**
     * @param int|null $id
     *
     * @return Model|array
     */
    public function get($id = null)
    {
        $data = $this->dataDriver->get($this->table, $id);

        if ($id === null) {
            return $data;
        }

        $this->id = (int) $id;
        $this->content = $data['content'];

        return $this;
    }

    /**
     * @return array
     */
    public function toArray() : array
    {
        return [
            'id' => $this->id,
            'content' => $this->content,
        ];
    }
}
