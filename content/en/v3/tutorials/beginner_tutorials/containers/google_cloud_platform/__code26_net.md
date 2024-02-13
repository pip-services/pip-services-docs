
```cs
using Microsoft.AspNetCore.Http;

using PipServices3.Commons.Refer;
using PipServices3.Components.Build;
using PipServices3.Gcp.Containers;
using PipServices3.Gcp.Services;
using PipServices3.Rpc.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ExampleApp
{
    public class MyCloudFunctionService : CloudFunctionService
    {
        private MyController1 _controller;
        private IDictionary<string, string> _headers = new Dictionary<string, string>() { { "Content-Type", "application/json" } };

        public MyCloudFunctionService() : base("myservice") { }

        public override void SetReferences(IReferences references)
        {
            base.SetReferences(references);
            _controller = references.GetOneRequired<MyController1>(new Descriptor("mygroup", "controller", "*", "controller1", "1.0"));
        }

        private async Task Action(HttpContext context)
        {
            var parameters = await CloudFunctionRequestHelper.GetParametersAsync(context);
            var name = parameters.GetAsStringWithDefault("name", "default name");
            var result = await _controller.GreetingsAsync1(name);

            await HttpResponseSender.SendResultAsync(context.Response, result);
        }
        protected override void Register()
        {
            RegisterAction("greetings1", null, Action);
        }
    }
    public class MyController1 : IReferenceable
    {
        public void SetReferences(IReferences references)
        {
        }

        public async Task<string> GreetingsAsync1(string name)
        {
            return "Greetings from service: Hello,  " + name + " !";
        }
    }

    public class MyController2 : IReferenceable
    {
        public void SetReferences(IReferences references)
        {
        }

        public async Task<string> GreetingsAsync2(string name)
        {
            return "Greetings from container: Hello, " + name + " !";
        }
    }

    public class MyFactory : Factory
    {
        public MyFactory() : base()
        {
            RegisterAsType(new Descriptor("mygroup", "controller", "default", "controller1", "1.0"), typeof(MyController1));
            RegisterAsType(new Descriptor("mygroup", "controller", "default", "controller2", "1.0"), typeof(MyController2));
            RegisterAsType(new Descriptor("mygroup", "service", "gcp-function", "*", "1.0"), typeof(MyCloudFunctionService))
        }
    }

    public class MyCloudFunction : CloudFunction
    {
        private MyController2 _controller;

        public MyCloudFunction() : base("mygroup", "Mygroup service")
        {
            _configPath = "./config.yaml";
            _factories.Add(new MyFactory());
        }

        public override void SetReferences(IReferences references)
        {
            base.SetReferences(references);
            _controller = references.GetOneRequired<MyController2>(new Descriptor("mygroup", "controller", "*", "controller2", "1.0"));
        }

        private async Task Action(HttpContext context)
        {
            var parameters = await CloudFunctionRequestHelper.GetParametersAsync(context);
            var name = parameters.GetAsStringWithDefault("name", "default name");
            var result = await _controller.GreetingsAsync2(name);

            await HttpResponseSender.SendResultAsync(context.Response, result);
        }

        protected override void Register()
        {
            RegisterAction("greetings2", null, Action);
        }
    }
}

```