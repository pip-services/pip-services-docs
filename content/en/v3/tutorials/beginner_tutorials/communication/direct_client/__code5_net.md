
```cs
using System;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Config;
using PipServices3.Rpc.Clients;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Instantiation
            var myController = new MyController();

            // Instantiation
            var client = new MyDirectClient();

            // Reference setting
            client.setReferences(References.FromTuples(
                new Descriptor("pip-services", "controller", "controller", "default", "1.0"), myController));

            client.myMethod();
        }
    }

    class MyDirectClient: DirectClient<MyController>
    {
        public MyDirectClient()
        {
            _controller = null;
            _dependencyResolver.Put("controller", new Descriptor("pip-services", "controller", "*", "*", "1.0"));
        }

        public void setReferences(IReferences references)
        {
            this._dependencyResolver.SetReferences(references);
            this._controller = _dependencyResolver.GetOneRequired<MyController>("controller");
        }

        public void myMethod()
        {
            _controller.myMethod();
        }
    }


    class MyController : IConfigurable, IReferenceable
    {
        public void Configure(ConfigParams config)
        {
        }

        public void SetReferences(IReferences references)
        {
        }

        public void myMethod()
        {
            Console.WriteLine("Hello world");
        }
    }
}
```
