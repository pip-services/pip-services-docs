
```cs
using PipServices3.Commons.Random;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            // Random value between 5 and 10
            var value1 = RandomDouble.NextDouble(5, 10);      // Possible result: 7.3252274575446155

            // Random value lower than 10
            var value2 = RandomDouble.NextDouble(10);      // Possible result: 8.104104435251225

            // Random value 
            var value3 = RandomDouble.UpdateDouble(10, 5);      // Possible result: 8.051623143638789
        }
    }
}

```
