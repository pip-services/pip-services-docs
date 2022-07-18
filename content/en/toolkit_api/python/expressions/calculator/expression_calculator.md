---
type: docs
title: "ExpressionCalculator"
linkTitle: "ExpressionCalculator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements an expression calculator.
---

### Description
The ExpressionCalculator class allows you to create an expression calculator.

### Constructors
Constructs this class and assigns a expression string.

> ExpressionCalculator(expression: str = None)

- **expression**: str - expression string.


### Properties

#### auto_variables
Gets the flag to turn on auto-creation of variables for a specified expression.

> auto_variables(): bool

- **returns**: bool - returns the flag to turn on auto-creation.

Sets the flag to turn on auto-creation of variables for specified expression.

> auto_variables(value: bool)

- **value**: bool - flag to turn on auto-creation.

#### default_functions
List with default functions.

> default_functions(): [IFunctionCollection](../functions/ifunction_collection)

- **returns**: [IFunctionCollection](../functions/ifunction_collection) - list with default functions.

#### default_variables
List with default variables.
> default_variables(): [IVariableCollection](../variables/ivariable_collection)

- **returns**: [IVariableCollection](../variables/ivariable_collection) - list with default variables.

#### expression
Expression string.

> expression(): str

- **returns**: str - expression string.

> expression(value: str)

- **value**: str - expression string.

#### initial_tokens
List of original expression tokens.
> initial_tokens(): List[[ExpressionToken](../parsers/expression_token)]

- **returns**: List[[ExpressionToken](../parsers/expression_token)] - list of original expression tokens.

#### original_tokens
List of expression tokens.

> original_tokens(): List[[Token](../../tokenizers/token)]

- **returns**: List[[Token](../../tokenizers/token)] - list of expression tokens.

> original_tokens(value: List[[Token](../../tokenizers/token)])

- **value**: List[[Token](../../tokenizers/token)] - list of expression tokens.


#### result_tokens
List of processed expression tokens.
> result_tokens(): List[[ExpressionToken](../parsers/expression_token)]

- **returns**: List[[ExpressionToken](../parsers/expression_token)] - list of processed expression tokens.

#### variant_operations
Gets the manager for operations on variant values.

> variant_operations(): [IVariantOperations](../../variants/ivariant_operations)

- **returns**: [IVariantOperations](../../variants/ivariant_operations) - manager for operations.

Sets the manager for operations on variant values.

> variant_operations(value: [IVariantOperations](../../variants/ivariant_operations))

- **value**: [IVariantOperations](../../variants/ivariant_operations) - manager for operations.


### Instance methods

#### clear
Cleans up this calculator from all data.
> clear()


#### create_variables
Cleans up this calculator from all data.
> create_variables(variables: [IVariantOperations](../../variants/ivariant_operations)) 

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables to be populated.

#### evaluate
Evaluates this expression using default variables and functions.

> evaluate(): [Variant](../../variants/variant)

- **returns**: [Variant](../../variants/variant) - evaluation result.

#### evaluate_with_variables
Evaluates this expression using specified variables.

> evaluate_with_variables(variables: [IVariantOperations](../../variants/ivariant_operations)): [Variant](../../variants/variant)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables.
- **returns**: [Variant](../../variants/variant) - evaluation result.

#### evaluate_with_variables_and_functions
Evaluates this expression using specified variables and functions.

> evaluate_with_variables_and_functions(variables: Optional[[IVariantOperations](../../variants/ivariant_operations)], functions: Optional[[IFunctionCollection](../functions/ifunction_collection)]): [Variant](../../variants/variant)

- **variables**: Optional[[IVariantOperations](../../variants/ivariant_operations)] - list of variables.
- **functions**: Optional[[IFunctionCollection](../functions/ifunction_collection)] - list of functions
- **returns**: [Variant](../../variants/variant) - evaluation result.
