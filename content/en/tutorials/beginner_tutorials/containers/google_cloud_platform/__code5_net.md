
```cs
using Microsoft.AspNetCore.Http;

using PipServices3.Commons.Refer;
using PipServices3.Components.Build;
using PipServices3.Gcp.Containers;
using PipServices3.Rpc.Services;

using System.Threading.Tasks;

namespace ExampleApp
{
    public class MyController : IReferenceable
    {
        public void SetReferences(IReferences references)
        {

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

    public class MyCloudFunction: CloudFunction
    {
        private MyController _controller;

        public MyCloudFunction(): base("mygroup", "MyGroup")
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
            // Comment out the next line of code when using the dependency resolver, uncomment for configuration file
            _controller = references.GetOneRequired<MyController>(new Descriptor("mygroup", "controller", "default", "controller", "*"));
        }

        private async Task Action(HttpContext context)
        {
            var parameters = await CloudFunctionRequestHelper.GetParametersAsync(context);
            var name = parameters.GetAsStringWithDefault("name", "default name");
            var result = await _controller.GreetingsAsync(name);

            await HttpResponseSender.SendResultAsync(context.Response, result);
        }

        protected override void Register()
        {
            RegisterAction("greetings", null, Action);
        }
    }
}

```