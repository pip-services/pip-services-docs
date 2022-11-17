
```cs
using Microsoft.AspNetCore.Http;

using PipServices3.Commons.Refer;
using PipServices3.Commons.Validate;
using PipServices3.Components.Build;
using PipServices3.Gcp.Containers;
using PipServices3.Gcp.Services;
using PipServices3.Rpc.Services;

using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace ExampleApp
{
    public class MyCloudService : CloudFunctionService
    {
        private MyController _controller;
        private IDictionary<string, string> _headers = new Dictionary<string, string>() { { "Content-Type", "application/json" } };

        public MyCloudService() : base()
        {
            // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
            //_dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "1.0"));
        }

        public override void SetReferences(IReferences references)
        {
            base.SetReferences(references);
            // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
            //_controller = _dependencyResolver.GetOneRequired<MyController>("controller");
            // Comment out the next line of code when using the dependency resolver, uncomment for configuration file
            _controller = references.GetOneRequired<MyController>("controller");
        }

        protected override void Register()
        {
            RegisterAction(
            "greetings",
            new ObjectSchema()
                .WithRequiredProperty("body",
                    new ObjectSchema()
                    .WithRequiredProperty("name", TypeCode.String)
            ),
            async (HttpContext context) =>
            {
                var parameters = await CloudFunctionRequestHelper.GetParametersAsync(context);
                var name = parameters.GetAsStringWithDefault("name", "default name");

                var result = await _controller.GreetingsAsync(name);

                foreach (var key in _headers.Keys)
                    context.Response.Headers.Add(key, _headers[key]);

                await HttpResponseSender.SendResultAsync(context.Response, result);
            }
        );
        }
    }

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
            RegisterAsType(new Descriptor("mygroup", "service", "gcp-function", "function", "1.0"), typeof(MyCloudService));
        }
    }

    public class MyCloudFunction : CloudFunction
    {
        private MyController _controller;
        private MyCloudService _service;

        public MyCloudFunction() : base("mygroup", "MyGroup")
        {
            _configPath = "./config.yaml";
            // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
            //_dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "*"));
            //_dependencyResolver.Put("service", new Descriptor("mygroup", "service", "gcp-function", "function", "*"));
            _factories.Add(new MyFactory());
        }

        public override void SetReferences(IReferences references)
        {
            base.SetReferences(references);
            // Comment out the next line of code when using a configuration file, uncomment to use the dependency resolver
            // _controller = _dependencyResolver.GetOneRequired<MyController>("controller");
            // _service = _dependencyResolver.GetOneRequired<MyController>("service");
            // Comment out the next line of code when using the dependency resolver, uncomment for configuration file
            _controller = references.GetOneRequired<MyController>(new Descriptor("mygroup", "controller", "default", "controller", "*"));
            _service = references.GetOneRequired<MyCloudService>(new Descriptor("mygroup", "service", "gcp-function", "function", "*"));
        }
    }
}


```