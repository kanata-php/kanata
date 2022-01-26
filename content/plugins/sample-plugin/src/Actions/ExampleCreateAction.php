<?php

namespace SamplePlugin\Actions;

use App\Models\ModelExample;
use Conveyor\Actions\Abstractions\AbstractAction;
use Exception;
use InvalidArgumentException;
use SamplePlugin\Actions\Traits\CRUDActionTrait;

class ExampleCreateAction extends AbstractAction
{
    use CRUDActionTrait;

    /** @var string */
    protected $name = 'example-create-action';

    /**
     * @param array $data
     *
     * @return array
     *
     * @throws InvalidArgumentException
     * @throws Exception
     */
    public function execute(array $data)
    {
        /** @throws InvalidArgumentException */
        $this->validateData($data['params']);

        $this->data = $data['params'];

        if ($id = $this->model->create($this->data)) {
            return $this->model->get($id)->toArray();
        }

        throw new Exception('Couldn\'t create record!');
    }

    /**
     * @param array $data
     * @return void
     *
     * @throws InvalidArgumentException
     */
    public function validateData(array $data) : void
    {
        if (!isset($data['content'])) {
            throw new InvalidArgumentException('Todo required \'content\' field to be created!');
        }
    }
}
