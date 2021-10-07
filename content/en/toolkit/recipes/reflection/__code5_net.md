
```cs
// Property reflector

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

    // Obtain all property names
            var properties = PropertyReflector.GetPropertyNames(myClassA);
            Console.WriteLine($"The properties of myClassA are: {ObjectToString(properties)}");

            // Find out whether an object has a property or not
            var hasParam1 = PropertyReflector.HasProperty(myClassA, "param1");
            Console.WriteLine($"ClassA contains param1: {hasParam1}");

            // Obtain all property names and their values
            var value3 = PropertyReflector.GetProperties(myClassA);
            Console.WriteLine($"The properties of myClassA are: {ObjectToString(value3)}");

            // Change the value of a parameter
            var value1 = PropertyReflector.GetProperty(myClassA, "param2");
            PropertyReflector.SetProperty(myClassA, "param2", 14785);
            var value2 = PropertyReflector.GetProperty(myClassA, "param2");
            Console.WriteLine($"The value of param2 is: {value1}");
            Console.WriteLine($"The new value of param2 is: {value2}");
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
