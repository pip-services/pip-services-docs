
```cs
using PipServices3.Commons.Commands;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using PipServices3.Commons.Validate;
using PipServices3.Components.Build;
using PipServices3.Gcp.Containers;

using System.Threading.Tasks;
using TypeCode = PipServices3.Commons.Convert.TypeCode;

namespace ExampleApp.Commandable
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

    public class MyController : IReferenceable, ICommandable
    {
        private CommandSet commandSet;

        public void SetReferences(IReferences references)
        {
        }

        public CommandSet GetCommandSet()
        {
            if (commandSet == null)
                commandSet = new MyCommandSet(this);

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
        }
    }

    public class MyCommandableCloudFunction : CommandableCloudFunction
    {
        private MyController _controller;

        public MyCommandableCloudFunction() : base("mygroup", "MyGroup")
        {
            _configPath = "./config.yaml";
            // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
            //_dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "*"));
            _factories.Add(new MyFactory());
        }

        public override void SetReferences(IReferences references)
        {
            base.SetReferences(references);
            // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
            // _controller = _dependencyResolver.GetOneRequired<MyController>("controller");
            // Comment out the next line of code when using dependency resolver, uncomment for configuration file
            _controller = references.GetOneRequired<MyController>(new Descriptor("mygroup", "controller", "default", "controller", "*"));
        }
    }
}

```