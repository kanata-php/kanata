<?php

namespace App\Http\Controllers;

use Exception;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use App\Services\Actions\ExampleCreateAction;
use App\Services\Actions\ExampleUpdateAction;
use App\Services\Actions\ExampleGetAction;
use App\Services\Actions\ExampleDeleteAction;
use App\Models\ModelExample;

class ExampleTodoController extends Controller
{
    
    /**
     * @param Request $request
     * @param Response $response
     */
    public function index(Request $request, Response $response)
    {
        $data = get_query_params($request);

        $model = ModelExample::class;

        $action = new ExampleGetAction(
            $data,
            $this->container->dataDriver,
            $model
        );

        try {
            return json_response($response, '', 200, null, null, $action->execute());
        } catch (Exception $e) {
            return json_response($response, 'error', 500, $e->getMessage());
        }
    }

    /**
     * @param Request $request
     * @param Response $response
     * @param array $args
     */
    public function show(Request $request, Response $response, $args)
    {
        $model = ModelExample::class;

        $action = new ExampleGetAction(
            $args,
            $this->container->dataDriver,
            $model
        );

        try {
            $result = $action->execute();
            return json_response($response, '', 200, null, null, $result->toArray());
        } catch (Exception $e) {
            return json_response($response, 'error', 500, $e->getMessage());
        }
    }

    /**
     * @param Request $request
     * @param Response $response
     */
    public function create(Request $request, Response $response)
    {
        $data = $request->getParsedBody()['data'];
        $model = ModelExample::class;

        $action = new ExampleCreateAction(
            $data,
            $this->container->dataDriver,
            $model
        );

        try {
            $result = $action->execute();
            return json_response($response, '', 201, null, null, $result->toArray());
        } catch (Exception $e) {
            return json_response($response, 'error', 500, $e->getMessage());
        }
    }

    /**
     * @param Request $request
     * @param Response $response
     * @param array $args
     */
    public function update(Request $request, Response $response, array $args)
    {
        $data = $request->getParsedBody()['data'];
        $model = ModelExample::class;

        $action = new ExampleUpdateAction(
            array_merge($data, $args),
            $this->container->dataDriver,
            $model
        );

        try {
            $result = $action->execute();
            return json_response($response, '', 200, null, null, $result->toArray());
        } catch (Exception $e) {
            return json_response($response, 'error', 500, $e->getMessage());
        }
    }

    /**
     * @param Request $request
     * @param Response $response
     * @param array $args
     */
    public function delete(Request $request, Response $response, $args)
    {
        $model = ModelExample::class;

        $action = new ExampleDeleteAction(
            $args,
            $this->container->dataDriver,
            $model
        );

        try {
            $action->execute();
            return json_response($response, 'success', 200, 'Item deleted successfully!', null);
        } catch (Exception $e) {
            return json_response($response, 'error', 500, $e->getMessage());
        }
    }
}
