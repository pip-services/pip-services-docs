
```cs
using PipServices3.Commons.Random;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            var value1 = RandomBoolean.NextBoolean();   // Possible result: True
            var value2 = RandomBoolean.Chance(1, 3);    // Possible result: False
        }
    }
}

```
