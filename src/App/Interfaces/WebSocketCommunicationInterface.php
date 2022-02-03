<?php

namespace App\Interfaces;

interface WebSocketCommunicationInterface
{
    public function get(string $action): array;
    public function set(string $action, string $data): void;
    public function clean(string $action): void;
}