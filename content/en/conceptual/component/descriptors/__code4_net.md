
```cs
using PipServices3.Commons.Refer;
using System;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var locator1 = new Descriptor("mygroup", "connector", "aws", "default", "1.0");
            Console.WriteLine(locator1.ToString());
        }
    }
}


```
