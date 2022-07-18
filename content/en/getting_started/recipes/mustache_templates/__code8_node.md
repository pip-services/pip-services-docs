
```ts
import { MustacheTemplate } from "pip-services3-expressions-nodex";


export function main() {
    // equivalent constructions
    let template = new MustacheTemplate();
    template.template = "Hello, {{{NAME}}}{{{#unless EXCLAMATION}}}.{{{/unless}}}";
    let variables = { "NAME": "Alex" , "EXCLAMATION": "1" };

    let result = template.evaluateWithVariables(variables);
    console.log(result);
}

```
