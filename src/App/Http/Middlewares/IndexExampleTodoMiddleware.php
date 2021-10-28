<?php

namespace App\Http\Middlewares;

use Exception;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Http\Middlewares\Interfaces\RequestValidationMiddlewareInterface;

use Symfony\Component\Validator\Constraints\Type;
use Symfony\Component\Validator\Constraints\Required;
use Symfony\Component\Validator\Validation;

class IndexExampleTodoMiddleware implements RequestValidationMiddlewareInterface
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
        try {
            $this->validate($request);
        } catch (Exception $e) {
            return $response->withJson([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 422);
        }

        return $next($request, $response);
    }

    /**
     * @param Request $request
     *
     * @throws Exception
     */
    public function validate(Request $request)
    {
        $data = get_query_params($request);

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

        $violations = [];
        if (isset($data['content'])) {
            $violations = $validator->validate($data['content'], [
                new Type('string'),
            ]);
        }

        foreach ($violations as $violation) {
            $errors[] = $violation->getMessage();
        }

        return $errors;
    }
}
