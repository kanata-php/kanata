<?php

namespace SamplePlugin\Actions;

use App\Models\ModelExample;
use App\Services\Actions\Interfaces\ActionInterface;
use Conveyor\Actions\Abstractions\AbstractAction;
use Exception;
use InvalidArgumentException;
use SamplePlugin\Actions\Traits\CRUDActionTrait;

class ExampleUpdateAction extends AbstractAction
{
    use CRUDActionTrait;

    /** @var string */
    protected $name = 'example-update-action';
    
    /**
     * @param array $data
     *
     * @return void
     *
     * @throws InvalidArgumentException
     * @throws Exception
     */
    public function execute(array $data)
    {
        /** @throws InvalidArgumentException */
        $this->validateData($data['params']);

        $this->data = $data['params'];

        $dataArray = [];
        $dataArray['content'] = $this->data['content'];
        $id = (int) $this->data['id'];

        if ($this->model->update($id, $dataArray)) {
            return $this->model->get($id);
        }

        throw new Exception('Couldn\'t update record!');
    }

    /**
     * @param array $data
     * @return void
     *
     * @throws InvalidArgumentException
     */
    public function validateData(array $data) : void
    {
        if (!isset($data['id'])) {
            throw new InvalidArgumentException('Todo required \'id\' field to be created!');
        }

        if (!isset($data['content'])) {
            throw new InvalidArgumentException('Todo required \'content\' field to be created!');
        }
    }
}
