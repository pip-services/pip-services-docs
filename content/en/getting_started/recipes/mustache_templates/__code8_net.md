
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
            // equivalent constructions
            var template = new MustacheTemplate();
            template.Template = "Hello, {{{NAME}}}{{{#unless EXCLAMATION}}}.{{{/unless}}}";
            var variables = new Dictionary<string, dynamic>{
                { "NAME", "Alex" },
                {"EXCLAMATION", "1" }
            };
   
            var result = template.EvaluateWithVariables(variables);
            Console.WriteLine(result);
        }
    }
}

```
