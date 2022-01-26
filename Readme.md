# Kanata

This application is a Starting point for advanced and easy to maintain apps. Based on Slim4 and Swoole, it serves at this point HTTP, WebSocket and AMQP services. It is extensible via plugins that can change basically every single aspect of this application, and can also work together to build more complex things. It can also route WebSocket Messages just like HTTP Requests, for this [Socket Conveyor](https://github.com/WordsTree/socket-conveyor) is used.

Built for PHP8.0+.

## Details

### Installation

Start running:

```shell
php kanata
```

The environment is expecting to run via docker-compose, but following you'll find coordinates for bare metal as well. Because of that it will prompt a question about the name of your app container.

> The base version uses filesystem to persist data. For that to work right out of the box with the existent example model you just need to create the directory at the root of the project: `./data/`.


### Server


This app serves HTTP and WebSocket connections, and is also ready to interact with AMQP messages.

The server listens to 2 ports, one for HTTP connections, another for WebSocket connections. This can be configured at the `.env` file or at the CLI interface used to start the app shown at "[To Start Server](#To Start Server)".

#### To Start Server

##### Bare Metal

**Basic:**

```shell
php index.php --websocket
```

Access via http://localhost:8001 .

**With WebSocket:**

```shell
php index.php --websocket
```

Access via ws://localhost:8002 .

**With Custom Ports:**

For HTTP:
```shell
php index.php --port=8003
```

Access via http://localhost:8003 .

For Websockets:

```shell
php index.php --websocket --wsport=8004
```

Access via ws://localhost:8004 .

##### Docker

```shell
docker-compose up -d
```

At the `docker-compose.yml` we use the strategy of static IPs. The advantage of it is that your containers don't compete with other containers in the same machine for ports. For that, "expose" parameter is used instead of "ports", and at the networks, "ipam". Commenting those out might get you to the more common configuration binding the host port to the containers.

If left the default ports, access via http://localhost:8001.

### To Start AMQP interaction

To start AMQP interaction you just need to execute the registered exchanges in your system in the command line. When running in the dockerized environment you'll find it being executed by supervisor, if you want to configure your own environment, you can simply install your own instance of supervisor or take another approach for long-lasting processes.

### Plugins

Every customization happens via plugins. The plugin must be present at `./content/plugins` directory. Plugins must have a class at the root with the name set as a camel-case version of your plugin directory's name (e.g. for a plugin image-processor we would have a class called `ImageProcessor`). The file with this class **has** to have this class's name or be `index.php`.

The plugin's class must implement `App\Interfaces\KanataPluginInterface`.

### Hooks

This application has hooks that you'll use to customize deeply its behaviours. For reference, look at the sample-plugin that comes with this app.

#### Filters

**routes**

Important for Routes specification via plugins.

Location: `./src/routes.php`.

**socket_actions**

Register new WebSocket Actions. For the existent WebSocket server, you'll find that you can route specific patterns in the incoming messages to different actions.

Location: `./src/dependencies.php`.

Example:

```php
use Conveyor\Actions\Interfaces\ActionInterface

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
 
add_filter('socket_actions', function($socketRouter) {
    $socketRouter->add(new ExampleAction());
    return $socketRouter;
});
```

**commands**

$application = Hooks::getInstance()->apply_filters('commands', $application);

Location: `./kanata`

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

