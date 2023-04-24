

```cs
using System;
using PipServices3.Commons.Commands;
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using PipServices3.Commons.Validate;
using PipServices3.Components.Build;
using PipServices3.Container;
using PipServices3.Rpc.Build;
using PipServices3.Rpc.Services;
using PipServices3.Swagger.Build;

namespace ExampleApp
{
    class Program
    {
        // Runner
        static void Main(string[] args)
        {
            try
            {
                var runner = (new HelloFriendProcess()).RunAsync(args);
                runner.Wait();
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
            }
        }
    }

    // Command set
    public class FriendsCommandSet : CommandSet
    {
        private HelloFriendController _controller;

        public FriendsCommandSet(HelloFriendController controller)
        {
            _controller = controller;

            AddCommand(MakeGreeting());
        }

        private ICommand MakeGreeting()
        {
            return new Command("greeting",
                    new ObjectSchema().WithRequiredProperty("name", TypeCode.String),
                    async (string correlationgId, Parameters args) =>
                    {
                        var name = args.GetAsString("name");
                        var res = _controller.Greeting(name);
                        return res;
                    }
                );
        }
    }

    // Controller
    public class HelloFriendController : IConfigurable, ICommandable
    {
        private string _defaultName = "World";
        private FriendsCommandSet _commandSet;

        public HelloFriendController()
        {
            _defaultName = "Pip User";
        }

        public void Configure(ConfigParams config)
        {
            _defaultName = config.GetAsStringWithDefault("default_name", _defaultName);
        }

        public CommandSet GetCommandSet()
        {
            if (_commandSet == null)
                _commandSet = new FriendsCommandSet(this);

            return _commandSet;
        }

        public string Greeting(string name)
        {
            return $"Hello, {name ?? _defaultName} !";
        }
    }

    // Service
    public class FriendCommandableHttpService : CommandableHttpService
    {
        public FriendCommandableHttpService() : base("commandable_hello_friend")
        {
            _dependencyResolver.Put("controller", new Descriptor("hello-friend", "controller", "*", "*", "*"));
        }
    }

    // Factory
    public class HelloFriendServiceFactory : Factory
    {
        public HelloFriendServiceFactory()
        {
            var CommandableHttpServiceDescriptor = new Descriptor("hello-friend", "service", "commandable-http", "*", "1.0"); // View 
            var ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0"); // Controller

            RegisterAsType(CommandableHttpServiceDescriptor, typeof(FriendCommandableHttpService));
            RegisterAsType(ControllerDescriptor, typeof(HelloFriendController));
        }
    }

    // Container
    public class HelloFriendProcess : ProcessContainer
    {
        public HelloFriendProcess() : base("hello-friend", "HelloFriend microservice")
        {
            _configPath = "../../../config.yaml";

            _factories.Add(new HelloFriendServiceFactory());
            _factories.Add(new DefaultRpcFactory());
            _factories.Add(new DefaultSwaggerFactory());
        }
    }

}
```
