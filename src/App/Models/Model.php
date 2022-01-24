<?php

namespace App\Models;

use App\Drivers\Data\Interfaces\DataDriverInterface;
use App\Exceptions\RecordNotFoundException;
use App\Models\Interfaces\SimpleCrudInterface;
use App\Models\Traits\Validation;
use ArrayAccess;
use ReflectionClass;
use function container;

class Model implements SimpleCrudInterface, ArrayAccess
{
    protected DataDriverInterface $dataDriver;
    protected int|string $id;
    protected string $table;
    protected array $content;
    protected array $defaults = [];

    /**
     * When there is any error in procedures, this would be the best place to find them.
     *
     * @var array
     */
    public array $errors;

    public function __construct(DataDriverInterface $dataDriver)
    {
        $this->dataDriver = $dataDriver;
    }

    public static function getInstance(): Model
    {
        $reflectionClass = new ReflectionClass(get_called_class());
        return $reflectionClass->newInstanceArgs([container()->dataDriver]);
    }

    public static function find(string $fileName): ?Model
    {
        $model = get_called_class()::getInstance();
        return $model->get($fileName);
    }

    public static function all(): array
    {
        return array_map(function ($item) {
            return get_called_class()::find($item);
        }, container()->dataDriver->all(get_called_class()::getInstance()->getTable()));
    }

    /**
     * @param array $data
     *
     * @return ?Model
     */
    public function create(array $data)
    {
        $data = array_merge($this->defaults, $data);

        $id = $this->dataDriver->create($this->table, $data);

        if (!$id) {
            return null;
        }

        return $this->get($id);
    }

    /**
     * @param array $data
     *
     * @return bool
     */
    public function update(array $data): bool
    {
        $existentContent = $this->get($this->id)->content;
        $newContent = array_merge($existentContent, $data);

        if (!$this->dataDriver->update($this->table, $this->id, $newContent)) {
            return false;
        }

        $this->content = $newContent;
        return true;
    }

    /**
     * @param int|null $id
     *
     * @return ?Model
     */
    public function get($id = null): ?Model
    {
        try {
            $data = $this->dataDriver->get($this->table, $id);
        } catch (RecordNotFoundException $e) {
            return null;
        }

        $this->id = $id;
        $this->content = $data;

        return $this;
    }

    /**
     * @return bool
     */
    public function delete()
    {
        return $this->dataDriver->delete($this->table, $this->id);
    }

    /**
     * @param mixed $offset
     *
     * @return bool
     */
    public function offsetExists($offset)
    {
        return isset($this->{$offset});
    }

    /**
     * @param mixed $offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        if ($offset === 'id') {
            return $this->id;
        }

        if (!isset($this->content[$offset])) {
            return null;
        }

        return $this->content[$offset];
    }

    /**
     * @param mixed $offset
     *
     * @return mixed
     */
    public function __get($offset)
    {
        return $this[$offset];
    }

    /**
     * @param mixed $offset
     * @param mixed $value
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if ($offset === 'id') {
            $this->{$offset} = $value;
        }

        $this->content[$offset] = $value;
    }

    /**
     * @param mixed $offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        if ($offset === 'id') {
            unset($this->{$offset});
        }

        unset($this->content[$offset]);
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

    public function getTable(): string
    {
        return $this->table;
    }
}
