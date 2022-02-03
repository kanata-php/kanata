<?php

namespace App\Drivers\Data;

use App\Drivers\Data\Interfaces\DataDriverInterface;
use App\Exceptions\RecordNotFoundException;
use App\Models\Plugin;
use Lazer\Classes\Database as Lazer;
use Lazer\Classes\LazerException;

class Json implements DataDriverInterface
{
    public $errors = [];

    public function __construct(
        protected string $database
    ) {}

    public function getDb(): Lazer
    {
        return Lazer::table($this->database);
    }

    /**
     * @param string $database
     * @param array $data
     * @return int|null
     * @throws LazerException
     */
    public function create(string $database, array $data)
    {
        $row = $this->getDb();

        try {
            foreach ($data as $key => $value) {
                $row->setField($key, $value);
            }

            $row->save();
        } catch (LazerException $e) {
            $this->errors[] = $e->getMessage();
            return null;
        }

        return $row->last_id;
    }

    /**
     * @param string $database
     * @param int $id
     * @param array $data
     * @return bool
     * @throws LazerException
     */
    public function update(string $database, int $id, array $data): bool
    {
        $row = $this->getDb()->find($id);

        try {
            foreach ($data as $key => $value) {
                $row->setField($key, $value);
            }

            $row->save();
        } catch (LazerException $e) {
            $this->errors[] = $e->getMessage();
            return false;
        }

        return true;
    }

    /**
     * @param string $database
     * @param mixed $id When array, accepted format is ['field' => string, 'value' => string]
     * @return mixed
     * @throws LazerException|RecordNotFoundException
     */
    public function get(string $database, mixed $id)
    {
        if (is_array($id)) {
            $data = $this->getDb()->where($id['field'], '=', $id['value'])->find();
        } else {
            $data = $this->getDb()->where('id', '=', $id)->find();
        }

        if (null === $data->id) {
            throw new RecordNotFoundException('Record not found!');
        }

        return current($data->asArray());
    }

    /**
     * @param string $database
     * @param int $id
     * @return bool
     * @throws LazerException
     */
    public function delete(string $database, int $id): bool
    {
        return $this->getDb()->find($id)->delete();
    }

    /**
     * @return array
     */
    public function all(): array
    {
        try {
            return $this->getDb()->findAll()->asArray();
        } catch (LazerException $e) {
            $this->errors[] = $e->getMessage();
            return [];
        }
    }
}