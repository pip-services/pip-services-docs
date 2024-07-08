
```ts
import { MustacheTemplate } from "pip-services4-expressions-node";

export function main() {
    // variable
    let template = new MustacheTemplate();
    template.template = "Hello, {{{NAME}}}{{ #if EXCLAMATION }}!{{/if}}";
    let variables = { "NAME": "Alex" , "EXCLAMATION": "1" };

    let result = template.evaluateWithVariables(variables);
    console.log(result);
}
```
