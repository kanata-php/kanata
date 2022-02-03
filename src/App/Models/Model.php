<?php

namespace App\Models;

use App\Drivers\Data\Interfaces\DataDriverInterface;
use App\Exceptions\RecordNotFoundException;
use App\Models\Interfaces\SimpleCrudInterface;
use App\Models\Traits\Validation;
use ArrayAccess;
use Lazer\Classes\Database;
use Lazer\Classes\LazerException;
use ReflectionClass;
use function container;

abstract class Model extends Database implements ArrayAccess
{
    public array $errors = [];

    public function __construct()
    {
        $this->setFields();
        $this->setPending();
    }

    public static function getInstance()
    {
        $class = get_called_class();
        return new $class;
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
        if (!isset($this->{$offset})) {
            return null;
        }

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
        $this->{$offset} = null;
    }

    public static function all()
    {
        return self::getInstance()->findAll();
    }

    public static function createRecord(array $data): Database|null
    {
        try {
            $record = self::getInstance();
            foreach ($data as $key => $value) {
                $record->setField($key, $value);
            }
            $record->save();
        } catch (LazerException $e) {
            return null;
        }

        return $record->find($record->lastId());
    }

    public function update(array $data): bool
    {
        try {
            foreach ($data as $key => $value) {
                $this->setField($key, $value);
            }
            $this->save();
            foreach ((array) self::getInstance()->find($this->id)->set as $key => $value) {
                $this->setField($key, $value);
            }
        } catch (LazerException $e) {
            $this->errors[] = $e->getMessage();
            return false;
        }

        return true;
    }
}
