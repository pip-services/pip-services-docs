
```cs
using PipServices3.Commons.Random;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            // Random value between 5 and 10
            var value1 = RandomInteger.NextInteger(5, 10);     // Possible result: 5

            // Random value lower than 10
            var value2 = RandomInteger.NextInteger(10);        // Possible result: 4

            // Random value
            var value3 = RandomInteger.UpdateInteger(10, 3);   // Possible result: 12
        }
    }
}

```
