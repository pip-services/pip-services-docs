
```cs
using PipServices3.Commons.Reflect;

using System;

namespace ExampleApp
{   
    public class ClassA
    {
        public int MethodA()
        {
            return 123;
        }

        public void MethodB()
        {
            Console.WriteLine("hello world b");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var myClassA = new ClassA();
            // Obtain all methods in classA

            var methods1 = MethodReflector.GetMethodNames(myClassA);

            string methodsStr = "";
            methods1.ForEach(x => methodsStr += x + ", ");

            Console.WriteLine($"The methods in myClassA are: {methodsStr}");

            // Ask whether a specific method exists or not
            var methods2 = MethodReflector.HasMethod(myClassA, "MethodA");
            Console.WriteLine($"MethodA belongs to myClassA: {methods2}");

            var methods3 = MethodReflector.HasMethod(myClassA, "methodC");
            Console.WriteLine($"methodC belongs to myClassA: {methods3}");

            // Invoke a method in classA
            var methods4 = MethodReflector.InvokeMethod(myClassA, "MethodA");
            Console.WriteLine($"After running MethodA the result is: {methods4}");
        }
    }
}

```
