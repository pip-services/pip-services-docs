
```cs
using PipServices3.Commons.Commands;
using PipServices3.Commons.Convert;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using PipServices3.Commons.Validate;
using PipServices3.Components.Build;
using PipServices3.Gcp.Containers;
using PipServices3.Gcp.Services;

using System.Threading.Tasks;

namespace ExampleApp
{
    public class MyCommandSet : CommandSet
    {
        private MyController _controller;

        public MyCommandSet(MyController controller) : base()
        {
            _controller = controller;
            AddCommand(MakeGreeting());
        }

        private Command MakeGreeting()
        {
            return new Command(
                "greetings",
                new ObjectSchema().WithRequiredProperty("name", TypeCode.String),
                async (string correlationId, Parameters args) =>
                {
                    var name = args.GetAsString("name");
                    return await _controller.GreetingsAsync(name);
                }
            );
        }
    }
    public class MyCommandableCloudService : CommandableCloudFunctionService
    {
        public MyCommandableCloudService() : base("mygroup")
        {
            // The "controller" dependency is required by all Commandable services
            _dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "1.0"));
        }
    }
    public class MyController : IReferenceable, ICommandable
    {
        private CommandSet commandSet;

        public void SetReferences(IReferences references)
        {
        }

        public CommandSet GetCommandSet()
        {
            commandSet ??= new MyCommandSet(this);
            return commandSet;
        }

        public async Task<string> GreetingsAsync(string name)
        {
            return "Hello, " + name + " !";
        }
    }

    public class MyFactory : Factory
    {
        public MyFactory() : base()
        {
            RegisterAsType(new Descriptor("mygroup", "controller", "default", "controller", "1.0"), typeof(MyController));
            RegisterAsType(new Descriptor("mygroup", "service", "commandable-gcp-function", "function", "1.0"), typeof(MyCommandableCloudService));
        }
    }

    public class MyCloudFunction : CloudFunction
    {
        private MyController _controller;
        private CloudFunctionService _service;

        public MyCloudFunction() : base("mygroup", "Mygroup service")
        {
            _configPath = "./config.yaml";
            _factories.Add(new MyFactory());
            // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
            //_dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "*"));
            //_dependencyResolver.Put("service", new Descriptor("mygroup", "service", "commandable-gcp-function", "function", "*"));
        }

        public override void SetReferences(IReferences references)
        {
            base.SetReferences(references);
            // Comment out the next two lines of code when using a configuration file, uncomment to use the dependency resolver
            //_controller = _dependencyResolver.GetOneRequired<MyController>("controller");
            //_service = _dependencyResolver.GetOneRequired<CloudFunctionService>("service");
            // Comment out the next two lines of code when using the dependency resolver, uncomment for configuration file
            _controller = references.GetOneRequired<MyController>("controller");
            _service = references.GetOneRequired<CloudFunctionService>("service");
        }
    }
}

```