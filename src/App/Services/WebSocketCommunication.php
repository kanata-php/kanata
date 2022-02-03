<?php

namespace App\Services;

use App\Interfaces\WebSocketCommunicationInterface;
use App\Models\WsCommunication;

class WebSocketCommunication implements WebSocketCommunicationInterface
{
    public function set(string $action, string $data): void
    {
        WsCommunication::getInstance()->create([
            'action' => $action,
            'data' => $data,
        ]);
    }

    public function get(string $action): array
    {
        return WsCommunication::getInstance()->where('action', '=', $action)->findAll()->asArray();
    }

    public function clean(string $action): void
    {
        WsCommunication::getInstance()->where('action', '=', $action)->delete();
    }
}

