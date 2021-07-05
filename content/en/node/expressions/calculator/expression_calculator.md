---
type: docs
title: "ExpressionCalculator"
linkTitle: "ExpressionCalculator"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an expression calculator.
---

### Description
The ExpressionCalculator class allows you to create an expression calculator.

### Constructors
Constructs this class and assigns expression string.

> `public` constructor(expression?: string)

- **expression**: string - expression string.


### Properties

#### autoVariables
Gets the flag to turn on auto-creation of variables for a specified expression.

> `public` autoVariables(): boolean

- **returns**: boolean - returns the flag to turn on auto-creation.

Sets the flag to turn on auto-creation of variables for specified expression.

> `public` autoVariables(value: boolean)

- **value**: boolean - flag to turn on auto-creation.

#### defaultFunctions
List with default functions.

> `public` defaultFunctions(): [IFunctionCollection](../functions/ifunction_collection)

- **returns**: [IFunctionCollection](../functions/ifunction_collection) - list with default functions.

#### defaultVariables
List with default variables.
> `public` defaultVariables(): [IVariableCollection](../variables/ivariable_collection)

- **returns**: [IVariableCollection](../variables/ivariable_collection) - list with default variables.

#### expression
Expression string.

> `public` expression(): string

- **returns**: string - expression string.

> `public` expression(value: string)

- **value**: string - expression string.

#### initialTokens
List of original expression tokens.
> `public` initialTokens(): [ExpressionToken[]](../parsers/expression_token)

- **returns**: [ExpressionToken[]](../parsers/expression_token) - list of original expression tokens.

#### originalTokens
List of expression tokens.

> `public` originalTokens(): [Token[]](../../tokenizers/token)

- **returns**: [Token[]](../../tokenizers/token) - list of expression tokens.

> `public` originalTokens(value: Token[])

- **value**: [Token[]](../../tokenizers/token) - list of expression tokens.


#### resultTokens
List of processed expression tokens.
> `public` resultTokens(): [ExpressionToken[]](../parsers/expression_token)

- **returns**: [ExpressionToken[]](../parsers/expression_token) - list of processed expression tokens.

#### variantOperations
Gets the manager for operations on variant values.

> `public` variantOperations(): [IVariantOperations](../../variants/ivariant_operations)

- **returns**: [IVariantOperations](../../variants/ivariant_operations) - manager for operations.

Sets the manager for operations on variant values.

> `public` variantOperations(value: [IVariantOperations](../../variants/ivariant_operations))

- **value**: [IVariantOperations](../../variants/ivariant_operations) - manager for operations.


### Instance methods

#### clear
Cleans up this calculator from all data.
> `public` clear(): void


#### createVariables
Cleans up this calculator from all data.
> `public` createVariables(variables: [IVariantOperations](../../variants/ivariant_operations)): void 

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables to be populated.

#### evaluate
Evaluates this expression using default variables and functions.

> `public` evaluate(): Promise<[Variant](../../variants/variant)>

- **returns**: Promise<[Variant](../../variants/variant)> - evaluation result.

#### evaluateWithVariables
Evaluates this expression using specified variables.

> `public` evaluateWithVariables(variables: [IVariantOperations](../../variants/ivariant_operations)): Promise<[Variant](../../variants/variant)>

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables.
- **returns**: Promise<[Variant](../../variants/variant)> - evaluation result.

#### evaluateWithVariablesAndFunctions
Evaluates this expression using specified variables and functions.

> `public` evaluateWithVariablesAndFunctions(variables: [IVariantOperations](../../variants/ivariant_operations), functions: [IFunctionCollection](../functions/ifunction_collection)): Promise<[Variant](../../variants/variant)>

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables.
- **functions**: [IFunctionCollection](../functions/ifunction_collection) - list of functions
- **returns**: Promise<[Variant](../../variants/variant)> - evaluation result.
