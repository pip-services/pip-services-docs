---
type: docs
title: "ExpressionCalculator"
linkTitle: "ExpressionCalculator"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements an expression calculator.
---

### Description
The ExpressionCalculator class allows you to create an expression calculator.

### Constructors
Constructs this class and assigns an expression string.

> ExpressionCalculator([String? expression])

- **expression**: String? - expression string.


### Properties

#### autoVariables
Gets the flag to turn on auto-creation of variables for a specified expression.

> bool get autoVariables

- **returns**: bool - returns the flag to turn on auto-creation.

Sets the flag to turn on auto-creation of variables for a specified expression.

> set autoVariables(bool value)

- **value**: bool - flag to turn on auto-creation.

#### defaultFunctions
List with default functions.

> [IFunctionCollection](../functions/ifunction_collection) get defaultFunctions

- **returns**: [IFunctionCollection](../functions/ifunction_collection) - list with default functions.

#### defaultVariables
List with default variables.
> [IVariableCollection](../variables/ivariable_collection) get defaultVariables

- **returns**: [IVariableCollection](../variables/ivariable_collection) - list with default variables.

#### expression
Expression string.

> String? get expression

- **returns**: String? - expression string.

> set expression(String? value)

- **value**: String? - expression string.

#### initialTokens
List of original expression tokens.
> List<[ExpressionToken](../parsers/expression_token)> get initialTokens

- **returns**: List<[ExpressionToken](../parsers/expression_token)> - list of original expression tokens.

#### originalTokens
List of expression tokens.

> List<[Token](../../tokenizers/token)> get originalTokens

- **returns**: [Token](../../tokenizers/token) - list of expression tokens.

> set originalTokens(List<[Token](../../tokenizers/token)> value)

- **value**: [Token](../../tokenizers/token) - list of expression tokens.


#### resultTokens
List of processed expression tokens.
> List<[ExpressionToken](../parsers/expression_token)> get resultTokens

- **returns**: List<[ExpressionToken](../parsers/expression_token)> - list of processed expression tokens.

#### variantOperations
Gets the manager for operations on variant values.

> [IVariantOperations](../../variants/ivariant_operations) get variantOperations

- **returns**: [IVariantOperations](../../variants/ivariant_operations) - manager for operations.

Sets the manager for operations on variant values.

> set variantOperations([IVariantOperations](../../variants/ivariant_operations) value)

- **value**: [IVariantOperations](../../variants/ivariant_operations) - manager for operations.


### Instance methods

#### clear
Cleans up this calculator from all data.
> void clear()


#### createVariables
Cleans up this calculator from all data.
> void createVariables([IVariantOperations](../../variants/ivariant_operations) variables)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables to be populated.

#### evaluate
Evaluates this expression using default variables and functions.

> Future<[Variant](../../variants/variant)> evaluate()

- **returns**: Future<[Variant](../../variants/variant)> - evaluation result.

#### evaluateWithVariables
Evaluates this expression using specified variables.

> Future<[Variant](../../variants/variant)> evaluateWithVariables([IVariantOperations](../../variants/ivariant_operations) variables)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables.
- **returns**: Future<[Variant](../../variants/variant)> - evaluation result.

#### evaluateWithVariablesAndFunctions
Evaluates this expression using specified variables and functions.

> Future<[Variant](../../variants/variant)> evaluateWithVariablesAndFunctions([IVariantOperations?](../../variants/ivariant_operations) variables, [IFunctionCollection?](../functions/ifunction_collection) functions)

- **variables**: [IVariantOperations?](../../variants/ivariant_operations) - list of variables.
- **functions**: [IFunctionCollection?](../functions/ifunction_collection) - list of functions
- **returns**: Future<[Variant](../../variants/variant)> - evaluation result.
