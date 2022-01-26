<?php

namespace SamplePlugin\Actions;

use App\Models\ModelExample;
use Conveyor\Actions\Abstractions\AbstractAction;
use Exception;
use InvalidArgumentException;
use SamplePlugin\Actions\Traits\CRUDActionTrait;

class ExampleGetAction extends AbstractAction
{
    use CRUDActionTrait;

    /** @var string */
    protected $name = 'example-get-action';
    
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
        
        $id = isset($this->data['id']) ? $this->data['id'] : null;
        
        if ($data = $this->model->get($id)) {
            return $data;
        }

        throw new Exception('Couldn\'t read record!');
    }

    /**
     * @param array $data
     * @return void
     *
     * @throws InvalidArgumentException
     */
    public function validateData(array $data) : void
    {
        // no field required
    }
}
