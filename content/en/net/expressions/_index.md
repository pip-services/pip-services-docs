---
type: docs
title: "Expressions module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
no_list: true
weight: 30
description: > 
    Tokenizers, parsers and expression calculators for Pip.Services in .NET
    
    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    It provides syntax and lexical analyzers, and an expression calculator optimized for repeated calculations.
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
dotnet add package PipServices3.Expressions
```

The example below shows how to use expression calculator to dynamically
calculate user-defined expressions.

```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using PipServices3.Expressions.Calculator;
using PipServices3.Expressions.Calculator.Variables;
using PipServices3.Expressions.Variants;

ExpressionCalculator calculator = new ExpressionCalculator();

calculator.Expression = "A + b / (3 - Max(-123, 1)*2)";

VariableCollection vars = new VariableCollection();
vars.Add(new Variable("A", new Variant(1)));
vars.Add(new Variable("B", new Variant(3)));

Variant result = calculator.EvaluateUsingVariablesAsync(vars).Result;
Console.WriteLine("The result of the expression is " + result.ToString());
...
```