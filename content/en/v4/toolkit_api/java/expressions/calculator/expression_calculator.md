---
type: docs
title: "ExpressionCalculator"
linkTitle: "ExpressionCalculator"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements an expression calculator.
---

### Description
The ExpressionCalculator class allows you to create an expression calculator.

### Constructors
Constructs this class and a assigns expression string.

> `public` ExpressionCalculator(String expression) throws Exception

- **expression**: String - expression string.


### Properties

#### autoVariables
Gets the flag to turn on auto-creation of variables for a specified expression.

> `public` boolean _autoVariables = true


### Instance methods

#### getExpression
Gets an expression.
> `public` String getExpression()

- **returns**: String - expression
  
#### setExpression
Sets an expression.
> `public` void setExpression(String value) throws Exception

- **value**: String - expression.

#### getOriginalTokens
Gets an original tokens.
> `public` List<Token> getOriginalTokens()

- **returns**: List<Token> - list of original tokens.

#### setOriginalTokens
Sets an original token.
> `public` void setOriginalTokens(List<Token> value) throws SyntaxException

- **value**: List<Token> - list of original tokens.

#### getAutoVariables
Gets the flag to turn on auto creation of variables for specified expression.
> `public` boolean getAutoVariables()

- **returns**: boolean - flag .

#### setAutoVariables
Sets the flag to turn on auto creation of variables for specified expression.
> `public` void setExpression(String value) throws Exception

- **value**: String - flag.

#### getVariantOperations
Gets the manager for operations on variant values.
> `public` IVariantOperations getVariantOperations()

- **returns**: IVariantOperations - manager for operations on variant values

#### setVariantOperations
Sets the manager for operations on variant values.
> `public` void setVariantOperations(IVariantOperations value)

- **value**: IVariantOperations - manager for operations on variant values.

#### getDefaultVariables
Gets a list with default variables.
> `public` IVariableCollection getDefaultVariables() {

- **returns**: IVariantOperations - list with default variables.

#### getDefaultFunctions
Gets a list with default functions.
> `public` IFunctionCollection getDefaultFunctions()

- **value**: IFunctionCollection - list with default functions.

#### getInitialTokens
Gets a list of original expression tokens.
> `public` List<ExpressionToken> getInitialTokens()

- **returns**: ist<ExpressionToken> - list of original expression tokens.

#### getResultTokens
Gets a list of processed expression tokens.
> `public` List<ExpressionToken> getResultTokens()

- **value**: List<ExpressionToken> - list of processed expression tokens.

#### clear
Cleans up this calculator from all data.
> `public` void clear()

#### createVariables
Cleans up this calculator from all data.
> `public` void createVariables([IVariantOperations](../../variants/ivariant_operations) variables)

- **variables**: [IVariantOperations](../../variants/ivariant_operations) - list of variables to be populated.

#### evaluate
Evaluates this expression using default variables and functions.

> `public` [Variant](../../variants/variant) evaluate() throws Exception

- **returns**: [Variant](../../variants/variant) - evaluation result.

#### evaluateWithVariables
Evaluates this expression using specified variables.

> `public` [Variant](../../variants/variant) evaluateWithVariables(IVariableCollection variables) throws Exception

- **variables**: IVariableCollection - list of variables.
- **returns**: [Variant](../../variants/variant) - evaluation result.

#### evaluateWithVariablesAndFunctions
Evaluates this expression using specified variables and functions.

> `public` [Variant](../../variants/variant) evaluateWithVariablesAndFunctions(IVariableCollection variables, [IFunctionCollection](../functions/ifunction_collection) functions) throws Exception

- **variables**: IVariableCollection - list of variables.
- **functions**: [IFunctionCollection](../functions/ifunction_collection) - list of functions
- **returns**: [Variant](../../variants/variant) - evaluation result.
