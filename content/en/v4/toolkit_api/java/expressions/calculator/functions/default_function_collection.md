---
type: docs
title: "DefaultFunctionCollection"
linkTitle: "DefaultFunctionCollection"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a list filled with standard functions.
---

**Extends**: [FunctionCollection](../function_collection)

### Description

The DefaultFunctionCollection class allows you to implement a list filled with standard functions.

### Constructors
Constructs a list and fills it with the standard functions.

> `public` DefaultFunctionCollection()

### Instance methods

#### checkParamCount
Checks if params contains the correct number of function parameters (must be stored on the top of the params).
> `protected` checkParamCount(List<[Variant[]](../../../variants/variant)> params, int expectedParamCount) throws ExpressionException

- **params**: [Variant[]](../../../variants/variant) - list of function parameters.
- **expectedParamCount**: int - expected number of function parameters.

#### getParameter
Gets a function's parameter by it's index.

> `protected` [Variant](../../../variants/variant) getParameter(List<[Variant[]](../../../variants/variant)> params, int paramIndex)

- **params**: List<[Variant[]](../../../variants/variant)> - list of function parameters.
- **paramIndex**: int - index for the function parameter (0 for the first parameter).
- **returns**: [Variant](../../../variants/variant) - function's parameter value.
