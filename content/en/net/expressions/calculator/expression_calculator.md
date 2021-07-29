---
type: docs
title: "ExpressionCalculator"
linkTitle: "ExpressionCalculator"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements an expression calculator.
---

### Description
The ExpressionCalculator class allows you to create an expression calculator.

### Constructors

Constructs this class with default parameters.
> `public` ExpressionCalculator()

Constructs this class and assigns a expression string.

> `public` ExpressionCalculator(string expression)

- **expression**: string - expression string.


### Properties

#### AutoVariables
Gets and Sets the flag to turn on auto-creation of variables for a specified expression.

> `public` Boolean AutoVariables { get; set; }

#### defaultFunctions
List with default functions.

> `public` [IFunctionCollection](../functions/ifunction_collection) DefaultFunctions { get; }

#### DefaultVariables
List with default variables.
> `public` [IVariableCollection](../variables/ivariable_collection) DefaultVariables

#### Expression
Expression string.

> `public` string Expression { get; set; }

#### InitialTokens
List of original expression tokens.
> `public` IList<[ExpressionToken](../parser/expression_token)> InitialTokens { get; }

#### OriginalTokens
List of expression tokens.

> `public` IList<[Token](../../tokenizers/token)> OriginalTokens { get; set; }


#### ResultTokens
List of processed expression tokens.
> `public` IList<[ExpressionToken](../parser/expression_token)> ResultTokens { get; }

#### VariantOperations
Gets and sets the manager for operations on variant values.

> `public` [IVariantOperations](../../variants/ivariant_operations) VariantOperations { get; set; }


### Instance methods

#### Clear
Cleans up this calculator from all data.
> `public` void Clear()


#### CreateVariables
Cleans up this calculator from all data.
> `public` void CreateVariables([IVariantOperations](../../variants/ivariant_operations) variables)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables to be populated.

#### Evaluate
Evaluates this expression using default variables and functions.

> `public` Task<[Variant](../../variants/variant)> EvaluateAsync()

- **returns**: Task<[Variant](../../variants/variant)> - evaluation result.

#### EvaluateUsingVariablesAsync
Evaluates this expression using specified variables.

> `public` Task<[Variant](../../variants/variant)> EvaluateUsingVariablesAsync([IVariantOperations](../../variants/ivariant_operations) variables)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables.
- **returns**: Task<[Variant](../../variants/variant)> - evaluation result.

#### EvaluateUsingVariablesAndFunctionsAsync
Evaluates this expression using specified variables and functions.

> `public` Task<[Variant](../../variants/variant)> EvaluateUsingVariablesAndFunctionsAsync([IVariantOperations](../../variants/ivariant_operations) variables, [IFunctionCollection](../functions/ifunction_collection) functions)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables.
- **functions**: [IFunctionCollection](../functions/ifunction_collection) - list of functions
- **returns**: Task<[Variant](../../variants/variant)> - evaluation result.
