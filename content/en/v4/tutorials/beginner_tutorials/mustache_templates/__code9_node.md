
```ts
import { MustacheTemplate } from "pip-services4-expressions-node";

export function main() {
    // equivalent constructions
    let template = new MustacheTemplate();
    template.template = "Hello Mr, {{{NAME}}} {{{SURNAME}}}";
    let variables = { "NAME": "Joe", "SURNAME": "Smith" , "EXCLAMATION": false };
    
    for(let key in variables)
        template.defaultVariables[key] = variables[key];


    let result = template.evaluate();
    console.log(result);
}
```
