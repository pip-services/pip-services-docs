
```cs
using PipServices3.Commons.Refer;
using System;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var locator = new Descriptor("mygroup", "connector", "aws", "default", "1.0");

            Console.WriteLine(locator.Group);   // returns "my_group"
            Console.WriteLine(locator.Kind);    // returns "aws"
            Console.WriteLine(locator.Name);    // returns "default"
            Console.WriteLine(locator.Version); // returns "1.0"
        }
    }
}


```
