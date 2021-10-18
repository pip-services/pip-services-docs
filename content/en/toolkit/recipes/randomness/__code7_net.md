
```cs
using PipServices3.Commons.Random;

using System;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            var value1 = RandomString.Distort("hello John"); // Possible result: Hello john
            var value2 = RandomString.NextAlphaChar(); // Possible result: C
            var value3 = RandomString.NextString(5, 10); // Possible result .h*_N9}
            var value4 = RandomString.Pick(new string[] { "A", "B", "C", "D", "E" }); // Possible result: c
        }
    }
}

```
