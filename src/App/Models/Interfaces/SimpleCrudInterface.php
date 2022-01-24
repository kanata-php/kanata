<?php

namespace App\Models\Interfaces;

interface SimpleCrudInterface
{
    public function create(array $data);
    public function update(array $data);
    public function get($id);
    public function delete();
}
