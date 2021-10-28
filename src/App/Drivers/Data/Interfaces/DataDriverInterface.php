<?php

namespace App\Drivers\Data\Interfaces;

interface DataDriverInterface
{
    public function create(string $database, array $data);
    public function update(string $database, int $id, array $data) : bool;
    public function get(string $database, $id);
    public function delete(string $database, int $id) : bool;
}
