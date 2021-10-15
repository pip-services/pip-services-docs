---
type: docs
title: "Expressions module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
no_list: true
weight: 100
description: > 
    This module provides syntax and lexical analyzers, and an expression calculator optimized for repeated calculations.
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

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_expressions: version
```

Now you can install package from the command line:
```bash
pub get
```

The example below shows how to use expression calculator to dynamically
calculate user-defined expressions.

```dart
import 'package:pip_services3_expressions/src/calculator/calculator.dart';
import 'package:pip_services3_expressions/src/calculator/variables/variables.dart';
import 'package:pip_services3_expressions/src/variants/variants.dart';

...
var calculator = ExpressionCalculator();

calculator.expression = 'A + b / (5 - Max(-123, 1)*2)';

var vars = VariableCollection();
vars.add(Variable('A', Variant('1')));
vars.add(Variable('B', Variant(3)));

var result = await calculator.evaluateWithVariables(vars);
print('The result of the expression is ' +
    result.asString); // The result of the expression is 11
...
```

And, this example shows hot to process mustache templates:

```dart
import 'package:pip_services3_expressions/src/mustache/mustache.dart';

var mustache = MustacheTemplate();
mustache.template =
    'Hello, {{{NAME}}}{{#ESCLAMATION}}!{{/ESCLAMATION}}{{#unless ESCLAMATION}}.{{/unless}}';
var result =
    mustache.evaluateWithVariables({'NAME': 'Mike', 'ESCLAMATION': true});
print("The result of template evaluation is '" + result.toString() + "'");
```
