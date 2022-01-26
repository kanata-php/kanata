<?php

use App\Interfaces\KanataPluginInterface;
use League\Plates\Engine;
use PhpAmqpLib\Message\AMQPMessage;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use SamplePlugin\Actions\ExampleCreateAction;
use SamplePlugin\Actions\ExampleDeleteAction;
use SamplePlugin\Actions\ExampleGetAction;
use SamplePlugin\Actions\ExampleUpdateAction;
use SamplePlugin\Http\Controllers\DocumentationController;
use SamplePlugin\Interceptors\LogInterceptor;
use SamplePlugin\Models\Todo;
use App\Annotations\Plugin;
use App\Annotations\Description;
use App\Annotations\Author;

/**
 * @Plugin(name="SamplePlugin")
 * @Description(value="This is a sample plugin with basic functionalities. It also makes available the documentation at the current website.")
 * @Author(name="Savio Resende",email="savio@savioresende.com")
 */

class SamplePlugin implements KanataPluginInterface
{
    const DEFAULT_QUEUE = 'default';

    /**
     * This is the container's key for this plugin's view.
     *
     * @var string
     */
    const VIEW_KEY = 'samplePluginView';

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
        $this->register_local_queue_listeners();
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
            Engine::class,
            'render',
            new LogInterceptor,
            [$path]
        );
        $this->container[self::VIEW_KEY] = $this->container->make(Engine::class);
        $this->container[self::VIEW_KEY]->addFolder('core', template_path());
        $this->container[self::VIEW_KEY]->addFolder('sample', $path);
    }

    /**
     * @return void
     */
    public function register_local_routes(): void
    {
        $viewKey = self::VIEW_KEY;

        add_filter('routes', function($app) use ($viewKey) {
            $app->get('/about', [DocumentationController::class, 'about']);

            // UI with WebSockets example.
            $app->get('/todos', function (Request $request, Response $response) use ($viewKey) {
                $html = $this->{$viewKey}->render('sample::todos', []);
                $response->getBody()->write($html);
                return $response->withStatus(200);
            });

            return $app;
        });
    }

    /**
     * @return void
     */
    public function register_local_socket_actions(): void
    {
        add_filter('socket_actions', function($socketRouter, $container) {
            $socketRouter->add(new ExampleCreateAction(
                $container->dataDriver,
                Todo::class
            ));

            $socketRouter->add(new ExampleDeleteAction(
                $container->dataDriver,
                Todo::class
            ));

            $socketRouter->add(new ExampleGetAction(
                $container->dataDriver,
                Todo::class
            ));

            $socketRouter->add(new ExampleUpdateAction(
                $container->dataDriver,
                Todo::class
            ));

            return $socketRouter;
        }, 2);
    }

    /**
     * This is an example of how to listen to AMQP messages on your app.
     * It might be interesting to check the helper `register_queue`.
     *
     * @return void
     * @throws ErrorException
     */
    public function register_local_queue_listeners(): void
    {
        if (!DEFAULT_QUEUE) {
            return;
        }

        add_filter('queues', function($queues) {
            $queues[self::DEFAULT_QUEUE] = [
                'callback' => [$this, 'default_queue_handler'],
            ];
            return $queues;
        });
    }

    public function default_queue_handler(AMQPMessage $msg)
    {
        $container = container();
        $container['logger']->info('SamplePlugin handler received: ' . $msg->body);
    }
}
