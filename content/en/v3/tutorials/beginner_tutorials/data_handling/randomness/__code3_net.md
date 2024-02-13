
```cs
using PipServices3.Commons.Random;

using System;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            // Possible result: 2015-01-05 00:00:00
            var value1 = RandomDateTime.NextDate(new DateTime(2010, 1, 1));

            // Possible result: 2012-01-03
            var value2 = RandomDateTime.NextDate(new DateTime(2010, 1, 1), new DateTime(2015, 1, 1));

            // Possible result: 2020-03-11 11:20:32
            var value3 = RandomDateTime.NextDate(new DateTime(2017, 1, 1));
            
            // Possible result: 2010-01-02 00:00:01
            var value4 = RandomDateTime.UpdateDateTime(new DateTime(2010, 1, 2), 50); 
        }
    }
}

```
