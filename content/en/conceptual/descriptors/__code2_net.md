
```cs
using PipServices3.Commons.Refer;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Locate all connectors (match by type)
            var locator = Descriptor.FromString("*:connector:*:*:*");

            // Locate all connectors for a specific microservice (match by group and type)
            locator = Descriptor.FromString("mygroup:connector:*:*:*");

            // Locate a specific component (match by name)
            locator = Descriptor.FromString("*:*:*:my_name:*");
        }
    }
}


```
