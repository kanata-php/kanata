<?php

namespace App\Drivers\Data;

use App\Drivers\Data\Interfaces\DataDriverInterface;
use League\Flysystem\Filesystem as Flysystem;
use App\Exceptions\RecordNotFoundException;

class Filesystem implements DataDriverInterface
{
    /** @var Flysystem **/
    protected $filesystem;

    /** @var string */
    protected $database;

    /** @var string */
    protected $format;

    /**
     * @param string $database
     * @param Flysystem $filesystem
     * @param string $format
     */
    public function __construct(
        string $database,
        Flysystem $filesystem,
        string $format = 'json'
    ) {
        $this->database = $database;
        $this->filesystem = $filesystem;
        $this->format = $format;
    }
    
    /**
     * @param string $table
     * @param array $data
     *
     * @return int|bool
     */
    public function create(string $table, array $data)
    {
        $nextId = $this->getNextItemId($table);

        $recordAddress = $this->database . '/' . $table . '/' . ((string) $nextId) . '.' . $this->format;

        if ($this->filesystem->write($recordAddress, json_encode($data))) {
            return (int) $nextId;
        }

        return false;
    }

    /**
     * @param string $table
     * @param int $id
     * @param array $data
     *
     * @return bool
     */
    public function update(string $table, int $id, array $data) : bool
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

        return $this->getSingleRecord($table, (int) $id);
    }

    /**
     * @param string $table
     * @param int $id
     *
     * @return array
     */
    private function getSingleRecord(string $table, int $id) : array
    {
        $recordAddress = $this->getRecordAddress($table, (int) $id);

        if (!$this->filesystem->has($recordAddress)) {
            throw new RecordNotFoundException('Record not found!');
        }

        $parsedRecord = json_decode($this->filesystem->read($recordAddress), true);
        return $this->recordWrapper((string) $id, $parsedRecord);
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
            return $this->recordWrapper(
                (string) $record['filename'],
                json_decode($this->filesystem->read($record['path']), true)
            );
        }, $contents);
    }

    /**
     * @param string $table
     * @param int $id
     *
     * @return bool
     */
    public function delete(string $table, int $id) : bool
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

    /**
     * @param string $id
     * @param array $record
     *
     * @return array
     */
    private function recordWrapper(string $id, array $record) : array
    {
        return array_merge($record, ['id' => $id]);
    }
}
