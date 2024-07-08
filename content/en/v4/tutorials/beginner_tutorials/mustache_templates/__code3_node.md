
```ts
import { MustacheTemplate } from "pip-services4-expressions-node";

export function main() {
    // variable
    let template = new MustacheTemplate();
    template.template = "Hello, {{{NAME}}}";
    let variables = { "NAME": "Alex" };

    let result = template.evaluateWithVariables(variables);
    console.log(result);
}
```
