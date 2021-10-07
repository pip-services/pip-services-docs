
```cs
// TypeReflector

using PipServices3.Commons.Reflect;

using System;

namespace ExampleApp
{

    public class ClassA
    {
        public string param1 = "hello";
        public int param2 = 123;
    }

    class Program
    {
        static void Main(string[] args)
        {
            var myClassA = TypeReflector.CreateInstanceByType(typeof(ClassA));
            Console.WriteLine($"The values of param1 and param2 are {(myClassA as ClassA).param1} and {(myClassA as ClassA).param2}");
        }
    }
}

```
