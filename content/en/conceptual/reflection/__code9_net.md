
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
            var objectA1 = new ClassA();

            // expected type: Object, actual type: ClassA, actualvalue: objectA1
            var type1 = TypeMatcher.MatchType("Object", objectA1.GetType(), objectA1);
            Console.WriteLine($"ClassA is an object: {type1}");

            // expected type: Object, actual type: String
            var type2 = TypeMatcher.MatchTypeByName("Object", typeof(string));
            Console.WriteLine($"String is an object: {type2}");

            // expected type: ClassA, expected value: objectA1
            var type3 = TypeMatcher.MatchType(objectA1.GetType(), objectA1.GetType());
            Console.WriteLine($"objectA1 is of type ClassA: {type3}");

            // expected type: Object, actual value: objectA1
            var type4 = TypeMatcher.MatchTypeByName("Object", objectA1.GetType());
            Console.WriteLine($"ObjectA1 is of type Object: {type4}");

            var string1 = "Hello World";
            var type5 = TypeMatcher.MatchTypeByName("String", string1.GetType());
            Console.WriteLine($"string1 is of type String: {type5}");
        }
    }
}

```
