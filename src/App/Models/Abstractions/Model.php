<?php

namespace App\Models\Abstractions;

use ArrayAccess;

use App\Models\Interfaces\SimpleCrudInterface;
use App\Drivers\Data\Interfaces\DataDriverInterface;

abstract class Model implements SimpleCrudInterface, ArrayAccess
{
    /** @var DataDriverInterface */
    protected $dataDriver;

    /** @var int */
    protected $id;

    public function __construct(DataDriverInterface $dataDriver)
    {
        $this->dataDriver = $dataDriver;
    }

    /**
     * @param array $data
     *
     * @return int|bool
     */
    public function create(array $data)
    {
        return $this->dataDriver->create($this->table, $data);
    }

    /**
     * @param int $id
     * @param array $data
     *
     * @return bool
     */
    public function update(int $id, array $data)
    {
        return $this->dataDriver->update($this->table, $id, $data);
    }

    /**
     * @param int|null $id
     *
     * @return Model|array
     */
    abstract public function get($id = null);

    /**
     * @param int $id
     *
     * @return bool
     */
    public function delete(int $id)
    {
        return $this->dataDriver->delete($this->table, $id);
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
        return $this->{$offset};
    }

    /**
     * @param mixed $offset
     * @param mixed $value
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        $this->{$offset} = $value;
    }

    /**
     * @param mixed $offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->{$offset});
    }

    /**
     * @return array
     */
    abstract public function toArray() : array;
}
