
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
            template.Template = "Hello Mr, {{{NAME}}} {{{SURNAME}}}";
            var variables = new Dictionary<string, dynamic>{
                { "NAME", "Joe" },
                { "SURNAME", "Smith" },
                { "EXCLAMATION", false }
            };

            foreach (var varibale in variables)
                template.DefaultVariables[varibale.Key] = varibale.Value;

            var result = template.Evaluate();
            Console.WriteLine(result);
        }
    }
}

```
