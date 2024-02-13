---
type: docs
title: "Expressions module"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-elasticsearch-dotnet"
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

Install the dotnet package as
```bash
dotnet add package PipServices4.Expressions
```

The example below shows how to use expression calculator to dynamically
calculate user-defined expressions.

```cs
using PipServices4.Commons.Config;
using PipServices4.Commons.Refer;
using PipServices4.Commons.Run;
using PipServices4.Expressions.Calculator;
using PipServices4.Expressions.Calculator.Variables;
using PipServices4.Expressions.Variants;

ExpressionCalculator calculator = new ExpressionCalculator();

calculator.Expression = "A + b / (3 - Max(-123, 1)*2)";

VariableCollection vars = new VariableCollection();
vars.Add(new Variable("A", new Variant(1)));
vars.Add(new Variable("B", new Variant(3)));

Variant result = calculator.EvaluateUsingVariablesAsync(vars).Result;
Console.WriteLine("The result of the expression is " + result.ToString());
...
```
