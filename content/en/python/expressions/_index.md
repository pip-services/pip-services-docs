---
type: docs
title: "Expressions module"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
no_list: true
weight: 30
description: > 
    Tokenizers, parsers and expression calculators for Pip.Services in Python. 
    
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

Install the Python package as
```bash
pip install pip_services3_expressions
```

The example below shows how to use the expression calculator to dynamically
calculate user-defined expressions.

```python
from pip_services3_expressions.variants.Variant import Variant
from pip_services3_expressions.calculator.variables.Variable import Variable
from pip_services3_expressions.calculator.ExpressionCalculator import ExpressionCalculator
from pip_services3_expressions.calculator.variables.VariableCollection import VariableCollection

# ...

clalculator = ExpressionCalculator()

clalculator.expression = "A + b / (3 - Max(-123, 1)*2)"
vars = VariableCollection()
vars.add(Variable("A", Variant(1)))
vars.add(Variable("B", Variant(3)))

result = clalculator.evaluate_with_variables(vars)
print('The result of the expression is ' + result.as_string)
# ...
```

The following is an example on how to process mustache templates.
```python
mustache = MustacheTemplate()
mustache.template = "Hello, {{{NAME}}}{{#ESCLAMATION}}!{{/ESCLAMATION}}{{#unless ESCLAMATION}}.{{/unless}}"
result = mustache.evaluate_with_variables({ 'NAME': 'Mike', 'ESCLAMATION': True }) 
print("The result of template evaluation is '" + result + "'")
```
