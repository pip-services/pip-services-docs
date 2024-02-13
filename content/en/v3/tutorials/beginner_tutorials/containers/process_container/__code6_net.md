
```cs
using System;
using System.Threading.Tasks;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using PipServices3.Commons.Config;
using PipServices3.Components.Build;
using PipServices3.Container;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var task = (new MyProcess()).RunAsync(args);
                task.Wait();
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex);
            }
        }
    }

    public class MyProcess: ProcessContainer
    {
        public MyProcess(): base("myservice", "My service running as a process")
        {
            _configPath = "../../../config.yaml";
            _factories.Add(new MyFactory());
        }
    }

    public class MyFactory : Factory
    {
        public MyFactory(): base()
        {
            RegisterAsType(new Descriptor("myservice", "MyComponentA", "*", "*", "1.0"), typeof(MyComponentA));
        }
    }

    public class MyComponentA: IReferenceable, IUnreferenceable, IConfigurable, IOpenable, IExecutable
    {
        private bool _open = false;

        public MyComponentA()
        {
            Console.WriteLine("MyComponentA has been created.");
        }

        public void Configure(ConfigParams config)
        {
            Console.WriteLine("MyComponentA has been configured.");
        }

        public void SetReferences(IReferences references)
        {
            Console.WriteLine("MyComponentA's references have been defined.");
        }

        public void UnsetReferences()
        {
            Console.WriteLine("References cleared");
        }

        public bool IsOpen()
        {
            return this._open;
        }

        public async Task OpenAsync(string correlationId)
        {
            Console.WriteLine("MyComponentA has been opened.");
        }

        public async Task CloseAsync(string correlationId)
        {
            Console.WriteLine("MyComponentA has been closed.");
        }

        public async Task<object> ExecuteAsync(string correlationId, Parameters args)
        {
            Console.WriteLine("Executing");
            var result = args;
            return result;
        }
    }
}
        
```
