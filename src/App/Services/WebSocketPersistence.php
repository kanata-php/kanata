<?php

namespace App\Services;

use App\Models\WsChannel;
use App\Models\WsListener;
use App\Services\Traits\SQLiteTrait;
use Conveyor\SocketHandlers\Interfaces\PersistenceInterface;

class WebSocketPersistence implements PersistenceInterface
{
    use SQLiteTrait;

    public function connect(int $fd, string $channel): void
    {
        $this->disconnect($fd);
        WsChannel::getInstance()->create([
            'fd' => $fd,
            'channel' => $channel,
        ]);
    }

    public function disconnect(int $fd): void
    {
        WsChannel::getInstance()->where('fd', '=', $fd)->delete();
    }

    public function getAllConnections(): array
    {
        return WsChannel::getInstance()->findAll()->asArray();
    }

    public function listen(int $fd, string $action): void
    {
        WsListener::getInstance()->create([
            'fd' => $fd,
            'action' => $action,
        ]);
    }

    public function getListener(int $fd): array
    {
        return WsListener::getInstance()->where('fd', '=', $fd)->asArray();
    }

    /**
     * @return array Format: [fd => [listener1, listener2, ...]]
     */
    public function getAllListeners(): array
    {
        return WsListener::getInstance()->findAll()->asArray();
    }

    public function stopListener(int $fd, string $action)
    {
        return WsListener::getInstance()
            ->where('fd', '=', $fd)
            ->where('action', '=', $action)
            ->delete();
    }

    public function cleanListeners()
    {
        return WsListener::getInstance()->findAll()->delete();
    }
}
