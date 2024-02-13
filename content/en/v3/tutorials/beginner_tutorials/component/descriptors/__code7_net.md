
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;
using System;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var MyFactory1 = new Factory();
            var classADescriptor = new Descriptor("mygroup", "class", "classA", "classA", "1.0");

            MyFactory1.RegisterAsType(classADescriptor, typeof(ClassA));

            MyFactory1.Create(classADescriptor);
        }
    }

    class ClassA
    {
        public ClassA()
        {
            Console.WriteLine("ClassA created");
        }
    }
}

```
