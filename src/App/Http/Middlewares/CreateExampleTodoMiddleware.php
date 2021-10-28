<?php

namespace App\Http\Middlewares;

use Exception;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Http\Middlewares\Interfaces\RequestValidationMiddlewareInterface;

use Symfony\Component\Validator\Constraints\Type;
use Symfony\Component\Validator\Constraints\Required;
use Symfony\Component\Validator\Validation;

class CreateExampleTodoMiddleware implements RequestValidationMiddlewareInterface
{
    /**
     * @param Request $request
     * @param Response $response
     * @param callable $next
     *
     * @return Response
     */
    public function __invoke(Request $request, Response $response, $next)
    {
        $errors = [];

        try {
            $errors = $this->validate($request);
            if (count($errors) > 0) {
                throw new Exception('Invalid request data.');
            }
        } catch (Exception $e) {
            return json_response($response, 'error', 422, $e->getMessage(), $errors);
        }

        return $next($request, $response);
    }

    /**
     * @param Request $request
     *
     * @return array
     *
     * @throws Exception
     */
    public function validate(Request $request) : array
    {
        $data = $request->getParsedBody();

        if (!isset($data['data']['content'])) {
            throw new Exception('Field required: content.');
        }

        return $this->validateRules($data);
    }

    /**
     * @param array $data
     *
     * @return array
     */
    private function validateRules(array $data) : array
    {
        $errors = [];

        $validator = Validation::createValidator();

        $violations = $validator->validate($data['data']['content'], [
            new Type('string'),
        ]);

        foreach ($violations as $violation) {
            $errors[] = $violation->getMessage();
        }

        return $errors;
    }
}
