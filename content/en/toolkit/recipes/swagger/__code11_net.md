
```cs

using System;
using System.Threading.Tasks;

using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Rpc.Services;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using PipServices3.Commons.Commands;
using PipServices3.Commons.Validate;
using PipServices3.Commons.Run;
using PipServices3.Components.Build;
using PipServices3.Container;
using PipServices3.Rpc.Build;
using PipServices3.Swagger.Build;

namespace ExampleApp
{
    class Program
    {
        
        static void Main(string[] args)
        {
            // Runner
            try
            {
                var task = (new HelloFriendProcess()).RunAsync(args);
                task.Wait();
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
            }

        }
    }

    // REST service (Swagger UI from YAML file)

    public class HelloFriendRestService: RestService
    {
        private HelloFriendController _controller;

        // swagger
        private string _swaggerContent;
        private string _swaggerPath;

        public HelloFriendRestService(): base()
        {
            _baseRoute = "/hello_friend";

            var controllerDescriptor = new Descriptor("hello-friend", "controller", "*", "*", "1.0");
            _dependencyResolver.Put("controller", controllerDescriptor);

        }

        public override void Configure(ConfigParams config)
        {
            base.Configure(config);

            // swagger
            _swaggerContent = config.GetAsNullableString("swagger.content");
            _swaggerPath = config.GetAsNullableString("swagger.path");
        }

        public override void SetReferences(IReferences references)
        {
            base.SetReferences(references);
            _controller = _dependencyResolver.GetOneRequired<HelloFriendController>("controller");
        }

        public override void Register()
        {
            RegisterRoute("GET", "/greeting", this.Greeting);

            // swagger
            if (_swaggerContent != null)
                RegisterOpenApiSpec(_swaggerContent);

            if (_swaggerPath != null)
                RegisterOpenApiSpecFromFile(_swaggerPath);
        }

        public async Task Greeting(HttpRequest req, HttpResponse res, RouteData routeData)
        {
            var name = req.Query["name"];
            var result = _controller.Greeting(name);

            await SendResultAsync(res, result);
        }
    }

    // Command set 

    public class FriendsCommandSet : CommandSet
    {
        private HelloFriendController _controller;

        public FriendsCommandSet(HelloFriendController controller) : base()
        {
            _controller = controller;

            AddCommand(MakeGreeting());
        }

        private ICommand MakeGreeting()
        {
            return new Command("greeting",
                    new ObjectSchema().WithRequiredProperty("name", TypeCode.String),
                    async (string correlationId, Parameters args) =>
                    {
                        var name = args.GetAsString("name");
                        var res = _controller.Greeting(name);
                        return res;
                    }
                );
        }
    }

    // Commandable REST service (Swagger UI automatically generated from command set)

    public class FriendCommandableHttpService1 : CommandableHttpService
    {
        private string _swaggerPath;

        public FriendCommandableHttpService1() : base("commandable_hello_friend1")
        {
            _dependencyResolver.Put("controller", new Descriptor("hello-friend", "controller", "*", "*", "*"));
        }

        public override void Configure(ConfigParams config)
        {
            base.Configure(config);

            // Swagger
            _swaggerPath = config.GetAsNullableString("swagger.path");
        }

        public override void Register()
        {
            base.Register();

            if (_swaggerPath != null)
                RegisterOpenApiSpecFromFile(_swaggerPath);
        }
    }

    // Commandable REST service (Swagger UI generated from YAML file)  

    public class FriendCommandableHttpService2 : CommandableHttpService
    {
        private string _swaggerPath;

        public FriendCommandableHttpService2() : base("commandable_hello_friend2")
        {
            _dependencyResolver.Put("controller", new Descriptor("hello-friend", "controller", "*", "*", "*"));
        }

        public override void Configure(ConfigParams config)
        {
            base.Configure(config);

            // Swagger
            _swaggerPath = config.GetAsNullableString("swagger.path");
        }

        public override void Register()
        {
            base.Register();

            if (_swaggerPath != null)
                RegisterOpenApiSpecFromFile(_swaggerPath);
        }
    }

    // Controller

    public class HelloFriendController : IConfigurable, ICommandable
    {
        private string defaultName;
        private FriendsCommandSet commandSet;

        public HelloFriendController()
        {
            defaultName = "Pip User";
        }

        public void Configure(ConfigParams config)
        {
            defaultName = config.GetAsStringWithDefault("default_name", defaultName);
        }

        public CommandSet GetCommandSet()
        {
            if (commandSet == null)
                commandSet = new FriendsCommandSet(this);

            return commandSet;
        }

        public string Greeting(string name)
        {
            return "Hello " + name ?? defaultName + " !";
        }
    }

    // Factory

    public class HelloFriendServiceFactory : Factory
    {
        public HelloFriendServiceFactory() : base()
        {
            var HttpServiceDescriptor = new Descriptor("hello-friend", "service", "http", "*", "1.0");                          // View 1
            var CommandableHttpServiceDescriptor1 = new Descriptor("hello-friend", "service", "commandable-http1", "*", "1.0"); // View 2
            var CommandableHttpServiceDescriptor2 = new Descriptor("hello-friend", "service", "commandable-http2", "*", "1.0"); // View 2
            var ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0");                     // Controller

            RegisterAsType(HttpServiceDescriptor, typeof(HelloFriendRestService));                      // View 1
            RegisterAsType(CommandableHttpServiceDescriptor1, typeof(FriendCommandableHttpService1));   // View 2
            RegisterAsType(CommandableHttpServiceDescriptor2, typeof(FriendCommandableHttpService2));   // View 3
            RegisterAsType(ControllerDescriptor, typeof(HelloFriendController));                        // Controller
        }
    }

    // Container

    public class HelloFriendProcess : ProcessContainer
    {
        public HelloFriendProcess() : base("hello-friend", "HelloFriend microservice")
        {
            _configPath = "../../../config.yml";
            _factories.Add(new HelloFriendServiceFactory());
            _factories.Add(new DefaultRpcFactory());
            _factories.Add(new DefaultSwaggerFactory());
        }
    }
}

```
