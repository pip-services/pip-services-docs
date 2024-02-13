
```cs
using PipServices3.Commons.Reflect;

using System;
using System.Collections.Generic;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            // Obtain properties from a map(dictionary)
            var myMap = new Dictionary<string, dynamic>() { { "key1", 123 }, { "key2", "ABC" } };

            var hasProperty1 = ObjectReader.HasProperty(myMap, "key1");
            var value1 = ObjectReader.GetProperty(myMap, "key1");
            Console.WriteLine($"MyMap contains key1: {hasProperty1}");
            Console.WriteLine($"The value of key1 is : {value1}");

            // Obtain properties from an array
            var myArray = new List<int>() { 1, 2, 3 };
            var hasProperty2 = ObjectReader.HasProperty(myArray, "5");
            var hasProperty3 = ObjectReader.HasProperty(myArray, "0");
            var value2 = ObjectReader.GetProperty(myArray, "0");

            Console.WriteLine($"myArray contains an element with index 5: {hasProperty2}");
            Console.WriteLine($"myArray contains an element with index 0: {hasProperty3}");
            Console.WriteLine($"The value stored at postion 0 is: {value2}");
        }
    }
}

```
