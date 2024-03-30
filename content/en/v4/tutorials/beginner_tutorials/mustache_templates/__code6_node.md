
```ts
import { MustacheTemplate } from "pip-services3-expressions-nodex";


export function main() {
    // "if else" construction
    let template = new MustacheTemplate();
    template.template = "Hello, {{{NAME}}}{{ #if EXCLAMATION }}!{{/if}}{{{^EXCLAMATION}}}.{{{/EXCLAMATION}}}";
    let variables = { "NAME": "Alex" , "EXCLAMATION": false };

    let result = template.evaluateWithVariables(variables);
    console.log(result);
}

```
