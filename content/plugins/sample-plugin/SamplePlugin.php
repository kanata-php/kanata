<?php

use Kanata\Interfaces\KanataPluginInterface;
use League\Plates\Engine;
use PhpAmqpLib\Message\AMQPMessage;
use Psr\Container\ContainerInterface;
use SamplePlugin\Actions\ExampleAction;
use SamplePlugin\Commands\QuoteCommand;
use SamplePlugin\Http\Controllers\DocumentationController;
use SamplePlugin\Interceptors\LogInterceptor;
use Kanata\Annotations\Plugin;
use Kanata\Annotations\Description;
use Kanata\Annotations\Author;

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

    protected ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @return void
     */
    public function start(): void
    {
        $this->register_views();

        if (is_http_execution()) {
            $this->register_routes();
        }

        if (is_websocket_execution()) {
            $this->register_socket_actions();
        }

        if (is_queue_execution()) {
            $this->register_queue_listeners();
        }

        $this->register_commands();
    }

    /**
     * @return void
     */
    private function register_views(): void
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
    public function register_routes(): void
    {
        $viewKey = self::VIEW_KEY;

        add_filter('routes', function($app) {
            $app->get('/about', [DocumentationController::class, 'about']);
            return $app;
        });
    }

    /**
     * @return void
     */
    public function register_socket_actions(): void
    {
        add_filter('socket_actions', function($socketRouter) {
            $socketRouter->add(new ExampleAction());
            return $socketRouter;
        }, 2);
    }

    /**
     * This is an example of how to listen to AMQP messages on your app.
     * It might be interesting to check the helper `register_queue`.
     *
     * @return void
     */
    public function register_queue_listeners(): void
    {
        if (!DEFAULT_QUEUE) {
            return;
        }

        add_filter('queues', function ($queues) {
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

    public function register_commands()
    {
        add_filter('commands', function($app) {
            $app->add(new QuoteCommand());
            return $app;
        });
    }
}
