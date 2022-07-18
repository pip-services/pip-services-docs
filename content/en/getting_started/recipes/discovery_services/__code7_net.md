
```cs
// Pre-requisites
using System;
using PipServices3.Commons.Config;
using PipServices3.Components.Connect;

namespace ExampleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Defining the component 
            var config = ConfigParams.FromTuples(
                "connections.key1.host", "10.1.1.100",
                "connections.key1.port", "8080",
                "connections.key2.host", "10.1.1.100",
                "connections.key2.port", "8082"
            );

            var discovery = new MemoryDiscovery();
            discovery.Configure(config);

            // Adding more parameters 
            discovery.RegisterAsync("123", "key1", ConnectionParams.FromTuples(
                "param1", "val1",
                "param2", "val2"
            )).Wait();

            discovery.RegisterAsync("123", "key3", ConnectionParams.FromTuples(
                "host", "localhost",
                "port", "8000"
            )).Wait(); 

            // Resolving connections 
            Console.WriteLine(discovery.ResolveOneAsync("123", "key1").Result);
            Console.WriteLine(discovery.ResolveAllAsync("123", "key1").Result);
            Console.WriteLine(discovery.ResolveOneAsync("123", "key3").Result);
        }
    }
}

```

Which after running produces the following result:

![figure 1](./figure1.png)
