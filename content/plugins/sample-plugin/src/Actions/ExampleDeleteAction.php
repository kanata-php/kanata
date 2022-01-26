<?php

namespace SamplePlugin\Actions;

use App\Models\ModelExample;
use Conveyor\Actions\Abstractions\AbstractAction;
use InvalidArgumentException;
use SamplePlugin\Actions\Traits\CRUDActionTrait;

class ExampleDeleteAction extends AbstractAction
{
    use CRUDActionTrait;

    /** @var string */
    protected $name = 'example-delete-action';
    
    /**
     * @param array $data
     *
     * @return void
     *
     * @throws InvalidArgumentException
     */
    public function execute(array $data)
    {
        /** @throws InvalidArgumentException */
        $this->validateData($data['params']);

        $this->data = $data['params'];
        
        $id = (int) $this->data['id'];

        return $this->model->delete($id);
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
    }
}
