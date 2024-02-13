
```cs
using PipServices3.Commons.Random;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            // Random value between 5 and 10
            var value1 = RandomFloat.NextFloat(5, 10);     // Possible result: 8.109282778264653

            // Random value lower than 10
            var value2 = RandomFloat.NextFloat(10);        // Possible result: 5.281760648272185

            // Random value
            var value3 = RandomFloat.UpdateFloat(10, 3);   // Possible result: 7.731874405844179
        }
    }
}

```
