
```cs
using PipServices3.Expressions.Mustache;

using System;
using System.Collections.Generic;

namespace ExampleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            // variable
            var template = new MustacheTemplate();
            template.Template = "Hello, {{{NAME}}}";
            var variables = new Dictionary<string, dynamic>{
                { "NAME", "Alex" },
            };
   
            var result = template.EvaluateWithVariables(variables);
            Console.WriteLine(result);
        }
    }
}

```
