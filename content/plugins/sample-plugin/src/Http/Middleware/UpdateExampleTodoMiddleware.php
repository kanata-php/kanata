<?php


use App\Http\Middlewares\Interfaces\RequestValidationMiddlewareInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Symfony\Component\Validator\Constraints\Type;
use Symfony\Component\Validator\Validation;

class UpdateExampleTodoMiddleware implements RequestValidationMiddlewareInterface
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
        } catch (\App\Http\Middlewares\Exception $e) {
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
     * @throws \App\Http\Middlewares\Exception
     */
    public function validate(Request $request)
    {
        $data = $request->getParsedBody();

        if (!isset($data['data']['content'])) {
            throw new \App\Http\Middlewares\Exception('Field required: content.');
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
