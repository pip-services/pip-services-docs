
```cs
// Property reflector

using PipServices3.Commons.Reflect;

using System;
using System.Collections;
using System.Collections.Generic;

namespace ExampleApp
{
    public class ClassAa
    {
        public string param5 = "hello aa";

    }

    public class ClassA
    {
        public string param1 = "hello";
        public int param2 = 123;

        public int MethodA()
        {
            return 123;
        }
    }

    class ClassB : ClassA
    {
        public string param4 = "inside 2";
    }

    class Program
    {
        static void Main(string[] args)
        {
            var myClassA = new ClassA();
            var myClassB = new ClassB();

            var value1 = RecursiveObjectReader.GetPropertyNames(myClassA);
            Console.WriteLine($"The property names of myClassA are: {ObjectToString(value1)}");

            var value2 = RecursiveObjectReader.HasProperty(myClassB, "param5");
            Console.WriteLine($"myClassB contains param5: {value2}");

            var value3 = RecursiveObjectReader.GetProperties(myClassB);
            Console.WriteLine($"The properties of myClassB are: {ObjectToString(value3)}");

            var value4 = RecursiveObjectReader.GetProperty(myClassB, "param4");
            Console.WriteLine($"The value of param4 is: {value4}");
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
