---
type: docs
title: "ExpressionCalculator"
linkTitle: "ExpressionCalculator"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements an expression calculator.
---

### Description
The ExpressionCalculator class allows you to create an expression calculator.

### Constructors

#### NewExpressionCalculator
Constructs this class with default parameters.

> NewExpressionCalculator() [*ExpressionCalculator]()

#### ExpressionCalculatorFromExpression
Constructs this class and assigns expression string.

> ExpressionCalculatorFromExpression(expression string) ([*ExpressionCalculator](), error)

- **expression**: string - expression string.

#### ExpressionCalculatorFromExpression
Constructs this class and assigns token values.

> ExpressionCalculatorFromTokens(originalTokens []*tokenizers.Token) [*ExpressionCalculator]()

- **expression**: string - expression string.
- **originalTokens**: [[]*Token](../../tokenizers/token)


### Properties

#### AutoVariables
Gets the flag to turn on auto-creation of variables for a specified expression.

> (c *ExpressionCalculator) AutoVariables() bool

- **returns**: bool - returns the flag to turn on auto-creation.


#### DefaultFunctions
List with default functions.

> (c *ExpressionCalculator) DefaultFunctions() [IFunctionCollection](../functions/ifunction_collection)

- **returns**: [IFunctionCollection](../functions/ifunction_collection) - list with default functions.

#### DefaultVariables
List with default variables.
> (c *ExpressionCalculator) DefaultVariables() [IVariableCollection](../variables/ivariable_collection)

- **returns**: [IVariableCollection](../variables/ivariable_collection) - list with default variables.

#### Expression
Expression string.

> (c *ExpressionCalculator) Expression() string

- **returns**: string - expression string.

#### InitialTokens
List of original expression tokens.
> (c *ExpressionCalculator) InitialTokens() [[]*ExpressionToken](../parsers/expression_token)

- **returns**: [[]*ExpressionToken](../parsers/expression_token) - list of original expression tokens.

#### OriginalTokens
List of expression tokens.

> (c *ExpressionCalculator) OriginalTokens() [[]*Token](../../tokenizers/token)

- **returns**: [[]*Token](../../tokenizers/token) - list of expression tokens.

#### ResultTokens
List of processed expression tokens.
> (c *ExpressionCalculator) ResultTokens() [[]*ExpressionToken](../parsers/expression_token)

- **returns**: [[]*ExpressionToken](../parsers/expression_token) - list of processed expression tokens.

#### VariantOperations
Gets the manager for operations on variant values.

> (c *ExpressionCalculator) VariantOperations() [IVariantOperations](../../variants/ivariant_operations)

- **returns**: [IVariantOperations](../../variants/ivariant_operations) - manager for operations.

#### SetAutoVariables
Sets the flag to turn on auto-creation of variables for specified expression.

> (c *ExpressionCalculator) SetAutoVariables(value bool)

- **value**: bool - flag to turn on auto-creation.

#### SetExpression
Gets the expression string.

> (c *ExpressionCalculator) SetExpression(value string) error

- **value**: string - expression string.
- **returns**: error - error or nil if no errors occured.


#### SetOriginalTokens
Sets list of expression tokens.
> (c *ExpressionCalculator) SetOriginalTokens(value [[]*Token](../../tokenizers/token))

- **value**: [[]*Token](../../tokenizers/token) - list of expression tokens.



#### SetVariantOperations
Sets the manager for operations on variant values.

> (c *ExpressionCalculator) SetVariantOperations(value [IVariantOperations](../../variants/ivariant_operations))

- **value**: [IVariantOperations](../../variants/ivariant_operations) - manager for operations.


### Methods

#### Clear
Cleans up this calculator from all data.
> (c *ExpressionCalculator) Clear()


#### CreateVariables
Cleans up this calculator from all data.
> (c *ExpressionCalculator) CreateVariables(vars [IVariantOperations](../../variants/ivariant_operations)) 

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables to be populated.

#### Evaluate
Evaluates this expression using default variables and functions.

> (c *ExpressionCalculator) Evaluate() ([*Variant](../../variants/variant), error)

- **returns**: ([*Variant](../../variants/variant), error) - evaluation result.

#### EvaluateUsingVariables
Evaluates this expression using specified variables.

> (c *ExpressionCalculator) EvaluateUsingVariables(vars [IVariantOperations](../../variants/ivariant_operations)) ([*Variant](../../variants/variant), error)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables.
- **returns**: ([*Variant](../../variants/variant), error) - evaluation result.

#### evaluateWithVariablesAndFunctions
Evaluates this expression using specified variables and functions.

> (c *ExpressionCalculator) EvaluateUsingVariablesAndFunctions(vars [IVariantOperations](../../variants/ivariant_operations), funcs [IFunctionCollection](../functions/ifunction_collection)) ([*Variant](../../variants/variant), error)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables.
- **functions**: [IFunctionCollection](../functions/ifunction_collection) - list of functions
- **returns**: ([*Variant](../../variants/variant), error) - evaluation result.

