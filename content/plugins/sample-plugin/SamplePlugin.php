<?php

use App\Models\ModelExample;
use App\Services\Actions\ExampleCreateAction;
use App\Services\Actions\ExampleDeleteAction;
use App\Services\Actions\ExampleGetAction;
use App\Services\Actions\ExampleUpdateAction;
use Slim\Views\PhpRenderer;
use voku\helper\Hooks;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Interfaces\FlightZonePluginInterface;
use Psr\Container\ContainerInterface;

/**
 * Class SamplePlugin
 */

class SamplePlugin implements FlightZonePluginInterface
{
    /**
     * This is the container's key for this plugin's view.
     *
     * @var string
     */
    protected $viewKey = 'samplePluginView';

    /** @var ContainerInterface */
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @return void
     */
    public function start(): void
    {
        $this->register_local_views();
        $this->register_local_routes();
        $this->register_local_socket_actions();
    }

    /**
     * @return void
     */
    private function register_local_views(): void
    {
        $path = __DIR__ . '/views/';

        // Let's register an interceptor and then set the class in the instance.
        // We are doing this because this instance is to be set as usual, if we want
        // to register a factory, we can call the "Container::make" when we need
        // an instance to work with.
        $this->container->setMethodInterceptor(
            PhpRenderer::class,
            'render',
            new LogInterceptor,
            [$path]
        );
        $this->container[$this->viewKey] = $this->container->make(PhpRenderer::class);
        $this->container[$this->viewKey]->setLayout('layout.php');
    }

    /**
     * @return void
     */
    public function register_local_routes(): void
    {
        $viewKey = $this->viewKey;

        // Hook to route HTTP Requests.
        Hooks::getInstance()->add_filter('routes', function($app) use ($viewKey) {
            $app->get('/about', function (Request $request, Response $response) use ($viewKey) {
                $response = $this->{$viewKey}->render($response, 'about.phtml', []);
                return $response;
            });

            $app->get('/todos', function (Request $request, Response $response) use ($viewKey) {
                $response = $this->{$viewKey}->render($response, 'todos.phtml', []);
                return $response;
            });

            return $app;
        });
    }

    /**
     * @return void
     */
    public function register_local_socket_actions(): void
    {
        // Hook to Route Socket Messages.
        Hooks::getInstance()->add_filter('socket_actions', function($socketRouter, $container) {
            $socketRouter->add(new ExampleCreateAction(
                $container->dataDriver,
                ModelExample::class
            ));

            $socketRouter->add(new ExampleDeleteAction(
                $container->dataDriver,
                ModelExample::class
            ));

            $socketRouter->add(new ExampleGetAction(
                $container->dataDriver,
                ModelExample::class
            ));

            $socketRouter->add(new ExampleUpdateAction(
                $container->dataDriver,
                ModelExample::class
            ));

            return $socketRouter;
        }, 2);
    }
}
