
```cs
// RecursiveObjectWriter

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
            var myClassB = new ClassB();
            var myClassC = new ClassB();

            // set_property
            RecursiveObjectWriter.SetProperty(myClassB, "param2", "new value");
            var value1 = RecursiveObjectReader.GetProperty(myClassB, "param2");
            Console.WriteLine($"The new values for the myClassB object are: {value1}");

            // set_properties
            var myMap = new Dictionary<string, dynamic> { { "param1", 789456 }, { "param2", "ABCaccc" } };
            RecursiveObjectWriter.SetProperties(myClassB, myMap);
            var value2 = RecursiveObjectReader.GetProperties(myClassB);
            Console.WriteLine($"The new values for the myClassB object are: {ObjectToString(value2)}");

            // copy_proerties
            var value3 = RecursiveObjectReader.GetProperties(myClassC);
            Console.WriteLine($"The properties of myClassC and their values are: {ObjectToString(value3)}");
            RecursiveObjectWriter.CopyProperties(myClassC, myClassB);
            var value4 = RecursiveObjectReader.GetProperties(myClassC);
            Console.WriteLine($"The new properties of myClassC and their values are: {ObjectToString(value4)}");
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
