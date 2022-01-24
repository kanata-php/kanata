<?php

namespace App\Drivers\Data;

use App\Drivers\Data\Interfaces\DataDriverInterface;
use League\Flysystem\Filesystem as Flysystem;
use App\Exceptions\RecordNotFoundException;

class Filesystem implements DataDriverInterface
{
    /**
     * @param string $database
     * @param Flysystem $filesystem
     * @param string $format
     * @param bool $autoincrement
     */
    public function __construct(
        protected string $database,
        protected Flysystem $filesystem,
        protected string $format = 'json',
        protected bool $autoincrement = true
    ) {}
    
    /**
     * @param string $table
     * @param array $data
     *
     * @return int|string|bool
     */
    public function create(string $table, array $data)
    {
        if ($this->autoincrement) {
            $nextId = $this->getNextItemId($table);
            $recordAddress = $this->database . '/' . $table . '/' . ((string)$nextId) . '.' . $this->format;
            if ($this->filesystem->write($recordAddress, json_encode($data))) {
                return (int)$nextId;
            }
        } elseif (isset($data['id'])) {
            $id = $data['id'];
            unset($data['id']);
            $recordAddress = $this->database . '/' . $table . '/' . ((string)$id) . '.' . $this->format;
            if ($this->filesystem->write($recordAddress, json_encode($data))) {
                return (string) $id;
            }
        }

        return false;
    }

    /**
     * @param string $table
     * @param int|string $id
     * @param array $data
     *
     * @return bool
     */
    public function update(string $table, int|string $id, array $data) : bool
    {
        $recordAddress = $this->getRecordAddress($table, $id);
        if (!$this->filesystem->has($recordAddress)) {
            throw new RecordNotFoundException('Record not found!');
        }

        return $this->filesystem->update($recordAddress, json_encode($data));
    }

    /**
     * @param string $table
     * @param string|int|null $id
     *
     * @return array
     */
    public function get(string $table, $id)
    {
        if ($id === null) {
            return $this->getRecordsList($table);
        }

        if ($this->autoincrement) {
            return $this->getSingleRecord($table, (int) $id);
        }

        return $this->getSingleRecord($table, (string) $id);
    }

    /**
     * @param string $table
     * @param int|string $id
     *
     * @return array
     */
    private function getSingleRecord(string $table, $id) : array
    {
        $recordAddress = $this->getRecordAddress($table, $id);

        if (!$this->filesystem->has($recordAddress)) {
            throw new RecordNotFoundException('Record not found!');
        }

        return json_decode($this->filesystem->read($recordAddress), true);
    }

    /**
     * @param string $table
     *
     * @return array
     */
    private function getRecordsList(string $table) : array
    {
        $recordAddress = $this->getRecordAddress($table);
        if (!$this->filesystem->has($recordAddress)) {
            throw new RecordNotFoundException('Record not found!');
        }

        $contents = $this->filesystem->listContents($recordAddress);
        return array_map(function ($record) {
            return json_decode($this->filesystem->read($record['path']), true);
        }, $contents);
    }

    /**
     * @param string $table
     * @param int|string $id
     *
     * @return bool
     */
    public function delete(string $table, int|string $id) : bool
    {
        $recordAddress = $this->getRecordAddress($table, $id);
        if (!$this->filesystem->has($recordAddress)) {
            throw new RecordNotFoundException('Record not found!');
        }

        return $this->filesystem->delete($recordAddress);
    }

    /**
     * @param string $table
     * @param int|null $id
     *
     * @return string
     */
    private function getRecordAddress(string $table, $id = null) : string
    {
        $addressBase = $this->database . '/' . $table;

        if ($id === null) {
            return $addressBase;
        }

        return $addressBase . '/' . ((string) $id) . '.' . $this->format;
    }

    /**
     * @param string $table
     *
     * @return int
     */
    private function getNextItemId(string $table) : int
    {
        $recordsList = $this->filesystem->listContents($this->getRecordAddress($table));

        $recordsList = array_map(function ($item) {
            return (int) $item['filename'];
        }, $recordsList);

        if (empty($recordsList)) {
            return 1;
        }
        
        return max($recordsList) + 1;
    }

    public function all(string $table): array
    {
        return array_map(function ($item) {
            return $item['filename'];
        }, $this->filesystem->listContents($this->getRecordAddress($table)));
    }
}
