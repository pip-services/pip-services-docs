---
type: docs
title: "Expressions module"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-expressions-node"
no_list: true
weight: 100
description: > 
    Provides syntax and lexical analyzers, and an expression calculator optimized for repeated calculations.
---

### Packages

The module contains the following packages:
- [**Calculator**](calculator) - expression calculator
- [**CSV**](csv) - CSV tokenizer
- [**IO**](io) - input/output utility classes to support lexical analysis
- [**Mustache**](mustache) - Mustache templating engine
- [**Tokenizers**](tokenizers) - lexical analyzers to break incoming character streams into tokens
- [**Variants**](variants) - dynamic objects that can hold any values and operators for them


### Use

Install the package by using NPM as
```bash
npm install pip-services4-expressions-node --save
```

The example below shows how to use the expression calculator to dynamically
calculate user-defined expressions.

```typescript
...
let calculator = new ExpressionCalculator();

calculator.expression = "A + b / (3 - Max(-123, 1)*2)";

let vars = new VariableCollection();
vars.add(new Variable("A", new Variant(1)));
vars.add(new Variable("B", new Variant("3")));

let result = await calculator.evaluateWithVariables(vars);
console.log("The result of the expression is " + result.asString);
...
```

And, this example shows hot to process mustache templates:

```typescript
let mustache = new MustacheTemplate();
mustache.template = "Hello, {{{NAME}}}{{#ESCLAMATION}}!{{/ESCLAMATION}}{{#unless ESCLAMATION}}.{{/unless}}";
let result = mustache.evaluateWithVariables({ NAME: 'Mike', ESCLAMATION: true });
console.log("The result of template evaluation is '" + result + "'");
```
