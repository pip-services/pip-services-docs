
```cs
using PipServices3.Commons.Reflect;

using System;
using System.Collections;
using System.Collections.Generic;

namespace ExampleApp
{
    public class ClassA
    {
        public string param1 = "hello";
        public int param2 = 123;

        public int MethodA()
        {
            return 123;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var myClassA = new ClassA();

            var value1 = ObjectReader.GetProperty(myClassA, "param1");
            Console.WriteLine($"The value of param1 is: {value1}");

            ObjectWriter.SetProperty(myClassA, "param1", "hello 2");
            var value2 = ObjectReader.GetProperty(myClassA, "param1");
            Console.WriteLine($"The new value of param1 is: {value2}");

            var myMap = new Dictionary<string, dynamic>() { { "param1", 123 }, { "param2", "ABC" } };
            ObjectWriter.SetProperties(myClassA, myMap);
            var value3 = ObjectReader.GetProperties(myClassA);
            Console.WriteLine($"The new parameter values are: {ObjectToString(value3)}");

            // Map(dictionary)
            myMap = new Dictionary<string, dynamic>() { { "key1", 123 }, { "key2", "ABC" } };
            ObjectWriter.SetProperties(myMap, new Dictionary<string, dynamic>() { { "key1", 15422 }, { "key2", "ab" } });
            var value4 = ObjectReader.GetProperties(myMap);
            Console.WriteLine($"The new values in the map are : {ObjectToString(value4)}");


            myMap = new Dictionary<string, dynamic>() { { "key1", 123 }, { "key2", "ABC" } };
            ObjectWriter.SetProperty(myMap, "key1", "XYZ");
            value2 = ObjectReader.GetProperty(myMap, "key1");
            Console.WriteLine($"The new value in the map is : {value2}");

            // Array
            var myArray = new List<object> { 1, 2, 3 };
            ObjectWriter.SetProperty(myArray, "0", 123);
            var value5 = ObjectReader.GetProperty(myArray, "0");
            Console.WriteLine($"The new value in the array is : {value5}");
        }

        static string ObjectToString(object obj)
        {
            string objStr = "";

            if (obj is IDictionary)
                foreach (var prop in (obj as Dictionary<string, dynamic>))
                    objStr += $"{prop.Key}:{prop.Value}, ";

            else if (obj is IList)
                (obj as List<string>).ForEach(x => objStr += x + ", ");

            return objStr[0..^2];
        }
    }
}

```
