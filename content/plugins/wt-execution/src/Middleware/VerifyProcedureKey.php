<?php

namespace WtExecution\Middleware;

use Conveyor\ActionMiddlewares\Abstractions\AbstractActionMiddleware;
use Exception;
use WtExecution\Exceptions\NotAuthorizedProcedure;
use WtExecution\Models\UserSocketKey;

class VerifyProcedureKey extends AbstractActionMiddleware
{
    /**
     * @param mixed $payload
     *
     * @throws Exception
     */
    public function __invoke($payload)
    {
        $data = $payload->getParsedData();
        $fd   = $payload->getFd();

        $this->verifyProcedure($data, $fd);

        return $payload;
    }

    /**
     * @param array $data
     * @param int   $fd
     *
     * @return void
     *
     * @throws Exception
     */
    private function verifyProcedure(array $data, int $fd) : void
    {
        $userKey = UserSocketKey::where('key', $data['procedure-key'])->first();

        if (
            $this->isKeyInvalidAndNotAttachedToFd($userKey)
            || $this->isKeyInvalidAndNotAttachedToThisFd($userKey, $fd)
        ) {
            throw new NotAuthorizedProcedure('Not authorized procedure!');
        }

        $userKey->update([
            'uses' => $userKey->uses + 1,
            'fd'   => $fd,
        ]);
    }

    /**
     * @param UserSocketKey $userKey
     *
     * @return bool
     */
    private function isKeyInvalidAndNotAttachedToFd(UserSocketKey $userKey): bool
    {
        return $userKey->uses > 0 && $userKey->fd === null;
    }
    
    /**
     * @param UserSocketKey $userKey
     * @param int $fd
     *
     * @return bool
     */
    private function isKeyInvalidAndNotAttachedToThisFd(UserSocketKey $userKey, int $fd): bool
    {
        return $userKey->uses > 0 && $userKey->fd !== $fd;
    }
}
