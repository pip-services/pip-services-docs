
```cs
using PipServices3.Commons.Reflect;

using System;

namespace ExampleApp
{   
    public class ClassA
    {
        public string  param1 = "hello";
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
            // Obtain all properties in ClassA

            var properties = ObjectReader.GetPropertyNames(myClassA);
            
            string propertiesStr = "";
            properties.ForEach(x => propertiesStr += x + ", ");

            Console.WriteLine($"The properties in myClassA are: {propertiesStr}");
            

            // Obtain the value of a property in classA
            var value1 = ObjectReader.GetProperty(myClassA, "param1");
            Console.WriteLine($"The value of param1 is: {value1}");

            var value2 = ObjectReader.GetProperties(myClassA);

            propertiesStr = "";
            foreach (var prop in value2)
                propertiesStr += $"{prop.Key}:{prop.Value}, ";

            Console.WriteLine($"The properties and values in myClassA are: {{{propertiesStr}}}");
        }
    }
}

```
