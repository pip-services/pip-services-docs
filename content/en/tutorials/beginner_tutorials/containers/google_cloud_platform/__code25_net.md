
```cs
using Microsoft.AspNetCore.Http;

using PipServices3.Commons.Refer;
using PipServices3.Components.Build;
using PipServices3.Gcp.Containers;
using PipServices3.Rpc.Services;

using System.Threading.Tasks;

namespace ExampleApp
{
    public class MyController1 : IReferenceable
    {
        public void SetReferences(IReferences references)
        {
        }

        public async Task<string> GreetingsAsync1(string name)
        {
            return "greetings1: Hello, " + name + " !";
        }
    }

    public class MyController2 : IReferenceable
    {
        public void SetReferences(IReferences references)
        {
        }

        public async Task<string> GreetingsAsync2(string name)
        {
            return "greetings2: Hello, " + name + " !";
        }
    }

    public class MyFactory : Factory
    {
        public MyFactory() : base()
        {
            RegisterAsType(new Descriptor("mygroup", "controller", "default", "controller1", "1.0"), typeof(MyController1));
            RegisterAsType(new Descriptor("mygroup", "controller", "default", "controller2", "1.0"), typeof(MyController2));
        }
    }

    public class MyCloudFunction : CloudFunction
    {
        private MyController1 _controller1;
        private MyController2 _controller2;

        public MyCloudFunction() : base("mygroup", "Mygroup service")
        {
            _configPath = "./config.yaml";
            _factories.Add(new MyFactory());
            _dependencyResolver.Put("controller1", new Descriptor("mygroup", "controller", "default", "controller1", "*"));
            _dependencyResolver.Put("controller2", new Descriptor("mygroup", "controller", "default", "controller2", "*"));
        }

        public override void SetReferences(IReferences references)
        {
            base.SetReferences(references);
            _controller1 = references.GetOneRequired<MyController1>("controller1");
            _controller2 = references.GetOneRequired<MyController2>("controller2");
        }

        private async Task Action1(HttpContext context)
        {
            var parameters = await CloudFunctionRequestHelper.GetParametersAsync(context);
            var name = parameters.GetAsStringWithDefault("name", "default name");
            var result = await _controller1.GreetingsAsync1(name);

            await HttpResponseSender.SendResultAsync(context.Response, result);
        }

        private async Task Action2(HttpContext context)
        {
            var parameters = await CloudFunctionRequestHelper.GetParametersAsync(context);
            var name = parameters.GetAsStringWithDefault("name", "default name");
            var result = await _controller2.GreetingsAsync2(name);

            await HttpResponseSender.SendResultAsync(context.Response, result);
        }

        protected override void Register()
        {
            RegisterAction("greetings1", null, Action1);
            RegisterAction("greetings2", null, Action2);
        }
    }
}
```