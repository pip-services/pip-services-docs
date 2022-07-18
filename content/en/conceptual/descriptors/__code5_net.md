
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
            var locator2 = Descriptor.FromString("mygroup:connector:*:*:1.0");

            locator1.IsComplete();   // returns True
            locator2.IsComplete();   // returns False
        }
    }
}


```
