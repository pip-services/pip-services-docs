
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
            var locator3 = Descriptor.FromString("mygroup:connector:aws:default:1.0");

            locator1.Match(locator2);        // returns True
            locator1.ExactMatch(locator2);  // returns False
            locator1.Equals(locator3);       // returns True
        }
    }
}

```
