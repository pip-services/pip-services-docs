
```cs
using PipServices3.Commons.Random;

using System;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            var value1 = RandomText.Adjective(); // Possible result: Small
            var value2 = RandomText.Color(); // Possible result: White
            var value3 = RandomText.Email(); // Possible result: NickStay@Hotel.com
            var value4 = RandomText.Words(3, 5); // Possible result: WriteSmithCarPamela
            var value5 = RandomText.Word(); // Possible result: Car
            var value6 = RandomText.Phone(); // Possible result: (147) 371-7084
            var value7 = RandomText.Phrase(3); // Possible result: Large
            var value8 = RandomText.Name();     // Possible result: Hurry Johns
            var value9 = RandomText.Verb();      // Possible result: Lay
            var value10 = RandomText.Text(5, 20);    // Possible result: Small carmack large
        }
    }
}

```
