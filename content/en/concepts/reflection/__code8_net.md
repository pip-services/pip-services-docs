
```ts
// TypeDescriptor

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
            // Create type descriptors
            var type1 = new TypeDescriptor("ClassA", "library1");
            var type2 = new TypeDescriptor("ClassB", "library1");

            // equals
            var result1 = type1.Equals(type2);
            Console.WriteLine($"type1 equals type2: {result1}");

            // get_library
            var library1 = type1.Library;
            Console.WriteLine($"The library of type1: {library1}");

            // get_name
            var name1 = type1.Name;
            Console.WriteLine($"The name of type1 is: {name1}");

            // from_string
            var typeDescriptor = TypeDescriptor.FromString("classA,library1");
            Console.WriteLine($"Type descriptor: {typeDescriptor}");
        }
    }
}

```
