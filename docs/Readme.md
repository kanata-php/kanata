# Kanata

his application is a Starting point for advanced and easy to maintain apps. Based on Slim4 and OpenSwoole, it serves at this point HTTP, WebSocket, AMQP and Cli services. It is extensible via plugins that can change basically every single aspect of this application, and can also work together to build more complex things. It can also route WebSocket Messages just like HTTP Requests, for this [Socket Conveyor](https://github.com/kanata-php/socket-conveyor) is used.

Built for PHP8.0+.

# Table of contents

- [Installation](#installation)
- [Servers (HTTP, WebSocket)](#servers--http--websocket-)
  * [Servers](#servers)
    + [HTTP](#http)
      - [Middleware](#middleware)
      - [SSL](#ssl)
    + [WebSocket](#websocket)
      - [Middleware](#middleware-1)
      - [SSL](#ssl-1)
- [Events](#events)
- [Queues](#queues)
- [Docker](#docker)
- [Plugins](#plugins)
- [Hooks](#hooks)
  * [Filters](#filters)
    + [routes](#routes)
    + [socket_actions](#socket_actions)
    + [websocket_mode](#websocket_mode)
    + [websocket_settings](#websocket_settings)
    + [http_mode](#http_mode)
    + [http_settings](#http_settings)
    + [commands](#commands)
    + [view_folders](#view_folders)
  * [Actions](#actions)
    + [migrations](#migrations)
- [AOP](#aop)
  * [Registering instances with Interceptors](#registering-instances-with-interceptors)
- [Commands](#commands)
  * [info](#info)
  * [plugin activate](#plugin-activate)
  * [plugin deactivate](#plugin-deactivate)
  * [plugin create](#plugin-create)
  * [plugin publish](#plugin-publish)
  * [command create](#command-create)
  * [debug](#debug)
  * [PsyShell](#psyshell)
- [How To](#how-to)
  * [New Routes](#new-routes)
    + [Views](#views)
    + [API](#api)
  * [Custom Views locations](#custom-views-locations)
  

### Installation

Start running:

```shell
./vendor/bin/start-kanata
```

Get more info about available commands as follows:

```shell
php kanata
```

The environment will give coordinates to execute kanata via docker-compose, but here you'll find how to run as bare metal as well. Because of that it will prompt a question about the name of your app container.

> The base version uses filesystem to persist data. For that to work right out of the box with the existent example model you just need to create the directory at the root of the project: `./data/`.

### Servers (HTTP, WebSocket)

This app serves HTTP and WebSocket connections, and is also ready to interact with AMQP messages.

The server listens to 2 ports, one for HTTP connections, another for WebSocket connections. This can be configured at the `.env` file or at the CLI interface used to start the app shown at "[To Start Server](#To Start Server)".


#### Servers

##### HTTP

Usage:

```shell
php index.php
```

With custom port:

```shell
php index.php --port=8003
```

Access via http://localhost:8001 .

For the assets to be available you'll need to isntall npm dependencies and build the assets. Larave mix is available, so the sequence of commands are like this:

```shell
npm install && npx mix
```

###### Middleware

At Kanara it is possible to use 2 types of middlewares. The first is an interceptor that intercepts the "tunnel" of the application workflow. The second is the [PSR-15](https://www.php-fig.org/psr/psr-15/) style of middleware, that takes works arount the HTTP request handler.

###### SSL

To make your HTTP Server SSL you just need 3 extra env settings:

```
HTTP_SERVER_SSL=true
SSL_CERTIFICATE=/path/to/cert
SSL_KEY=/path/to/key
```

##### WebSocket

The WebSocket User Interface is based on [Socket Conveyor](https://github.com/kanata-php/socket-conveyor). That makes it possible for extensible actions based on message structures. Visit the [Hooks](#hooks) section to see more about how to extend existent functionalities such as adding custom actions or customizing broadcasts.

Usage:

```shell
php index.php --websocket
```

Access via ws://localhost:8002 .

With custom port:

```shell
php index.php --websocket --wsport=8004
```

###### Middleware

To add actions to handle socket messages, you must check the [socket_actions](#socket_actions) hook section. Middlewares applied to WebSockets are added at that moment, as they are based on actions.

Please verify this section of its documentation: https://github.com/kanata-php/socket-conveyor#case-5-using-middlewares, where middlewares usage is described.

The way to add middleware to actions added via hook is as follows:

```php
add_filter('socket_actions', function($socketRouter) {
    $action = new ExampleActionWithMiddleware;
    $socketRouter->add($action);
    // adding action with pipeline middleware
    $socketRouter->middleware($action->getName(), new MiddlewareExample);
    // adding action with function middleware
    $socketRouter->middleware($action->getName(), function($payload) {return $payload;});
    return $socketRouter;
});
```

###### SSL

To make your WebSocket Server SSL you just need 3 extra env settings:

```
WS_SERVER_SSL=true
WS_SSL_CERTIFICATE=/path/to/cert
WS_SSL_KEY=/path/to/key
```

> **Helper**: `socket_communication()`
> This helper is useful for broadcasting messages asynchronously. Imagine that you need to broadcast a
> message form a place where you have no access to the WebSocket context, e.g.: from a queue handler. This
> returns an instance of a `\Swoole\Table` class that is consumed by the WebSocket Server "tick". In the
> next second (interval customizable by the environment variable `WS_TICK_INTERVAL`) the information added
> to it will be consumed in the other side. This is how you use it:
> 
> ```php
> socket_communication()->set(WS_MESSAGE_ACTION, ['channel' => 'team-1', 'message' => 'Hello Team!']);
> ```
> 
> This will broadcast the message "Hello Team!" on the "team-1" channel. If you skip the "channel" the
> message will be broadcasted to all available connections.

### Events

Events can be dispatched sync and async with Kanata. To use it, you just need to create Event classes implementing `Kanata\Interfaces\EventInterface`, add callable listeners, and then dispatch events with the given Event class instance. We can dispatch events async and sync. Multiple listeners can be added to events. 

To dispatch an event, a helper can be used:

```php
use Kanata\Interfaces\EventInterface;

class EventSample implements EventInterface
{}

/** @var EventInterface $event */
$event = new EventSample;

add_event_listener(EventSample::class, function (EventSample $event) {
    // do something with this event
});
// or \Kanata\Services\Events::addEventListener($event, $callback)

dispatch_event($event); // this is dispatched async
// or \Kanata\Services\Events::dispatch($event)

dispatch_event($event, true); // this is dispatched sync
// or \Kanata\Services\Events::dispatchNow($event)
```

### Queues

The Queue System at Kanata is expected to be handled by an AMQP system at this point, e.g. RabbitMQ.

Usage:

```shell
php index.php --queue --queue-name=default
```

This will start the services available for Queues.

To add Queue handlers you need to implement `\Kanata\Interfaces\QueueInterface`. Here is an example plugin using it:

```php
use Kanata\Interfaces\QueueInterface;
use PhpAmqpLib\Message\AMQPMessage;
use Kanata\Interfaces\KanataPluginInterface;

class ProcessXHandler implements QueueInterface
{
    // these constants 
    const PROCESS_X_EXCHANGE = 'processx';
    const PROCESS_X_QUEUE = 'processx';
    const PROCESS_X_ROUTING_KEY = 'processx';
    const PROCESS_X_QUEUE_OPTION = 'processx';

    public function handle(AMQPMessage $msg, array $args = []): void
    
    {
    
        $message = json_encode([
            'action' => AcceptRunAction::ACTION_NAME,
            'channel' => Queues::MAIN_CHANNEL,
            'submission_id' => json_decode($msg->body)->submission_id,
            'notification_id' => json_decode($msg->body)->notification_id,
        ]);
        socket_communication()->set(WS_MESSAGE_ACTION, $message);
    }
}

class MyPlugin implements KanataPluginInterface
{
    public function start()
    {
        register_queue(
            ProcessXHandler::PROCESS_X_QUEUE,
            ProcessXHandler::PROCESS_X_EXCHANGE,
            ProcessXHandler::PROCESS_X_QUEUE_OPTION,
            [new ProcessXHandler, 'handle'],
            ProcessXHandler::PROCESS_X_ROUTING_KEY
        );
    }
}
```

This example is a Kanata Plugin that adds a queue handler for the exchange "process-x", with routing kee "process-x". The queue type on Rabbit MQ is "topic" so it is possible to  focus which listeners will receive messages via routing key. To understand more check their documentation [here](https://www.rabbitmq.com/tutorials/tutorial-five-php.html).

### Docker

Usage:

```shell
docker-compose up -d
```

This will start all services available. To keep services running as daemons we use supervisor. Check the "./docker" directory for more info.

### Plugins

Every customization happens via configurations and plugins. The plugin must be present at `./content/plugins` directory. Plugins must have a class at the root with the name set as a camel-case version of your plugin directory's name (e.g. for a plugin image-processor we would have a class called `ImageProcessor`). The file with this class **has** to have this class's name or be `index.php`.

The plugin's class must implement `App\Interfaces\KanataPluginInterface`.

To avoid having to manually set up this structure, you can use the `kanata` command line tool like follows:

```shell
php kanata plugin:create MyPlugin
```

This command will create a directory at `./content/plugins/my-plugin`. There you'll find a file named `MyPlugin.php` with a class `MyPlugin`. that class has the method `MyPlugin::start`. There, you'll call all the functionalities your for plugin.

### Hooks

This application has hooks that you'll use to customize deeply its behaviours. For reference, look at the sample-plugin that comes with this app.

#### Filters

##### routes

Important for Routes specification via plugins.

Example:

```php
use Psr\Container\ContainerInterface;
use League\Plates\Engine;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class MyPlugin
{
    const VIEW_KEY = 'samplePluginView';

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function start()
    {
        $viewKey = self::VIEW_KEY;
        $path = __DIR__ . '/views/';

        // prepare the view engine
        // reference: https://platesphp.com
        $this->container[self::VIEW_KEY] = $this->container->make(Engine::class);
        $this->container[self::VIEW_KEY]->addFolder('sample', $path);

        add_filter('routes', function($app) use ($viewKey) {
            // Route with a json response.
            $app->get('/api/todos', function (Request $request, Response $response) {
                $response->getBody()->write(file_get_contents(__DIR__ . '/todo.json'));
                return $response
                  ->withHeader('Content-Type', 'application/json')
                  ->withStatus(200);
            });

            // Route with an HTML response.
            $app->get('/todos', function (Request $request, Response $response) use ($viewKey) {
                $todos = file_get_contents(__DIR__ . '/todo.json');
                $html = $this->{$viewKey}->render('sample::todos', $todos);
                $response->getBody()->write($html);
                return $response->withStatus(200);
            });

            return $app;
        });
    }
}
```

This example makes available 2 endpoints at your app:

1 - GET `/todos` - this returns an HTML template located at `views/todo.php` at your plugin.

2 - GET `/api/todos` - this returns a json formatted output with todos found at the `todo.json` file.

##### socket_actions

Register new WebSocket Actions. For the existent WebSocket server, you'll find that you can route specific patterns in the incoming messages to different actions.

Example:

```php
use Conveyor\Actions\Interfaces\ActionInterface;
use Psr\Container\ContainerInterface;

class ExampleAction implements ActionInterface
{       
    public function validateData(array $data) : void
    {
        // throw some Exception here in case something is wrong.
    }

    public function execute(array $data, $fd, $server)
    {
        // do something here with $data.

        // you can then respond in real-time:
        $server->push($fd, json_encode([]));
    }
}

class MyPlugin
{
    public function start()
    {
        add_filter('socket_actions', function($socketRouter) {
            $socketRouter->add(new ExampleAction());
            return $socketRouter;
        });
    }
}
```

This action will be available for WebSocket connections according to the rules of [Socket Conveyor Library](https://github.com/kanata-php/socket-conveyor) used by Kanata to route websocket messages matching the `ActionInterface` interface.

##### websocket_mode

This hook allows you to switch between `SWOOLE_PROCESS` and `SWOOLE_BASE` server modes. To understand more go to https://openswoole.com/docs/modules/swoole-server-construct.

Example:

```php
class MyPlugin
{
    public function start()
    {
        add_filter('websocket_mode', function($serverMode) {
            $serverMode = SWOOLE_PROCESS;
            return $serverMode;
        });
    }
}
```

This example shows how to use this hook to multi Process mode.

##### websocket_settings

This hook is useful for you to specify custom configurations for your WebSocket Server with OpenSwoole. The callback must accept an array as parameter and return the same array modified as needed.

Example:

```php
class MyPlugin
{
    public function start()
    {
        add_filter('websocket_settings', function($settings) {
            $settings['worker_num'] = 4;
            return $settings;
        });
    }
}
```

In this example we are setting the WebSocket Server to have 4 workers. To understand more you can check at this documentation: https://openswoole.com/docs/modules/swoole-server/configuration.

##### http_mode

This is the same as the hook [websocket_mode](#websocket_mode), but for the HTTP Server.

##### http_settings

This is the same as the hook [websocket_settings](#websocket_settings), but for the HTTP Server.

##### commands

Register commands to be executed with `kanata` command line.

```
$application = add_filter('commands', $application);
```

Example:

```php
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Psr\Container\ContainerInterface;
use GuzzleHttp\Client;

class QuoteCommand extends Command
{
    protected static $defaultName = 'quote';

    protected function configure(): void
    {
        $this->setHelp('This command displays quotes.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $client = new Client();
        $res = $client->request('GET', 'https://quotes.rest/qod', [
            'headers' => ['Accept' => 'application/json'],
        ]);
        if ($res->getStatusCode() !== 200) {
            $output->writeln('<error>There was an error while trying to get a quote!</error>');
            return Command::FAILURE;
        }

        $data = json_decode($res->getBody(), true);
        $quote = current($data['contents']['quotes']);
        $output->writeln('"' . $quote['quote'] . '"');
        $output->writeln($quote['author']);

        return Command::SUCCESS;
    }
}

class MyPlugin
{
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function start()
    {
        add_filter('commands', function($app) {
            $app->add(new QuoteCommand());
            return $app;
        });
    }
}
```

This command will respond a quote for the call at your cli: `php kanata quote`.

##### view_folders

With this filter you can specify alternative locations where you'll be able to load views from.

Example:

```php
add_filter('view_folders', function($view_folders){
    $view_folders['sample'] = __DIR__ . '/views';
    return $view_folders;
});
```

This will allow views to be loaded using this:

```php
$html = container()->view->render('sample::home', []);
```

#### Actions

##### migrations

This action will execute during the bootstrap of the application, more specifically at the migration moment. You can inject migrations at this moment.

Example:

```php
add_action('migrations', function() {
    // users
    if (!mysql_table_exists(DB_DATABASE, User::TABLE_NAME)) {
        container()->db->schema()->create(User::TABLE_NAME, function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 40);
            $table->string('email', 80);
            $table->dateTime('email_verified_at')->nullable();
            $table->timestamps();
        });
    }
});
```

When the system gets initialized with the script `./vendor/bin/start-kanata`, this migration will run if the table doesn't exist yet.

### AOP

At the plugin you'll also find the structure to extend the application via Aspects. To understand more how it works, you can read more about it [here](https://en.wikipedia.org/wiki/Aspect-oriented_programming). The PHP library used is [Ray.Aop](https://github.com/ray-di/Ray.Aop). At this application, you'll need to run the instances via Application Container to be able to intercept instances and methods.

#### Registering instances with Interceptors

The Container's method to register a possible to intercept instance is `withMethodInterceptor`. Here is an example of how to intercept a procedure with a LogInterceptor, with which we would log information related to this procedure:

Example:

```php
use App\Interfaces\KanataPluginInterface;
use Ray\Aop\MethodInterceptor;
use Ray\Aop\MethodInvocation;

class LogInterceptor implements MethodInterceptor
{
    public function invoke(MethodInvocation $invocation)
    {
        $data = json_encode($invocation->getNamedArguments());
        container()->get('logger')->info('Logged Data: ' . $data);
        return $invocation->proceed();
    }
}

class InterceptedClass
{
    public function interceptedMethod($param = 'default')
    {
        // do something here...
    }
}

class MyPlugin implements KanataPluginInterface
{
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function start()
    {
        $this->registerInterceptor();
    }

    public function registerInterceptor()
    {
        $this->container->setMethodInterceptor(InterceptedClass::class, 'interceptedMethod', new LogInterceptor, [] );
        $this->container[self::VIEW_KEY] = $this->container->make(InterceptedClass::class);
    }
}
```

This example will intercept every call to `InterceptedClass::interceptedMethod` method and log the data passed.

### Commands

#### info

This command gives you information about your Kanata Application.

Usage:

```shell
php kanata info
```

#### plugin activate

This command activates a plugin.

Usage:

```shell
php kanata plugin:activate MyPluginName
```

#### plugin deactivate

This command deactivates a plugin.

Usage:

```shell
php kanata plugin:deactivate MyPluginName
```

#### plugin create

This command generate a new plugin skeleton for your Kanata Application.

Usage:

```shell
php kanata plugin:create MyPluginName
```

#### plugin publish

This command publishes assets from plugin.

Usage:

```shell
php kanata plugin:publish MyPluginName config
```

> `php kanata plugin:publish {plugin-name} {directory}`

#### command create

This command generate a new command skeleton for your Kanata Plugin.

Usage:

```shell
php kanata command:create CommandName MyPluginName
```

> `php kanata command:create {command-name} {plugin-name}`

#### debug

This command starts the debugger server.

Usage:

```shell
php kanata debug
```

#### PsyShell

Start PsyShell (REPL) for the Kanata Application.

Usage:

```shell
php kanata shell
```

### How To

#### New Routes

To add new route at a plugin, you use the hook [routes](#routes). With that in hand, you must return a `Psr\Http\Message\ResponseInterface` as output. For that, you have available helpers.

Example:

```php
use Kanata\Interfaces\KanataPluginInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class SamplePlugin implements KanataPluginInterface
{
    public function start()
    {
        add_filter('routes', function($app) {
            $app->get('/my-route', function (Request $request, Response $response) {
                $response->getBody()->write('My Route Content');
                return $response->withStatus(200);
            });
            return $app;
        });
    }
}
```

This plugin adds the route `GET /my-route` to your application.

##### Views

To return a view, you can use the helper `view()`. Without the helper is also possible, following is presented both ways:

The way to present a view at enpoint is as follows:

```php
// ...
add_filter('routes', function($app) {
    $app->get('/', function(Request $request, Response $response){
        $view = 'core::home';
        $params = [];
        $html = container()->view->render($view, $params);
        $response->getBody()->write($html);
        return $response->withStatus($status);
    });
    return $app;
});
// ...
```

The short version with the helper is as follows:

```php
add_filter('routes', function($app) {
    $app->get('/', function(Request $request, Response $response){
        return view($response, 'core::home', []);
    });
    return $app;
});
```

##### API

To return JSON data as an API response, the helper `json_response` is available. For that you can return a successful response as follows:

```php
add_filter('routes', function($app) {
    $app->get('/users', function(Request $request, Response $response){
        return json_response(
            $response, // Response instance
            '', // status text
            200, // status code
            null, // message text
            null, // errors text or array of texts
            // data formatted to overwrite the whole response
            [
              'success' => true,
              'data'=> json_encode([
                  [
                      'id' => 1,
                      'name' => 'Hari Seldom',
                      'email' => 'hari@kanataphp.com',
                  ],
              ]),
          ]
        );
    });
    return $app;
});
```

The response goes as follows:

```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Hari Seldom",
            "email": "hari@kanataphp.com"
        }  
    ]
}
```

#### Custom Views locations

To tell Kanata which view to load at a given route, you'll have available the helper `view()`. This helper will wrap [Plates](https://platesphp.com) engine. Plates engine is added as a dependency of the project at the `container()->view` object, and is available to be called at any given moment of the project. The goal is to be used at the template presentation of routes.

The way to parse a template to html is as follows:

```php
$html = container()->view->render('core::home', []);
```

By default, Kanata comes with a place for new views called "core". When you present a view, if you want the template to be searched at the `./resources/views` directory, you use `'core::'` as prefix for your template. As an example, for you to load the template `./resources/views/home.php`, you'll use `core::home`.

To customize the place, and search, as an example, within a plugin, the following filter hook can be used:

```php
// ./content/plugins/my-plugin
add_filter('view_folders', function($view_folders){
    $view_folders['sample'] = __DIR__ . '/views';
    return $view_folders;
});
```

With this in hand, for you to load the template `./content/plugins/my-plugin/views/home.php`, you would do as follows:

```php
$html = container()->view->render('sample::home', []);
```
