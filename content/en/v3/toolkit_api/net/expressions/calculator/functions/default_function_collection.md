---
type: docs
title: "DefaultFunctionCollection"
linkTitle: "DefaultFunctionCollection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a list filled with standard functions.
---

**Inherits**: [FunctionCollection](../function_collection)

### Description

The DefaultFunctionCollection class allows you to implement a list filled with standard functions.

### Constructors
Constructs a list and fills it with the standard functions.

> `public` DefaultFunctionCollection()

### Static methods

#### CheckParamCount
Checks if params contains the correct number of function parameters (must be stored on the top of the params).

> `protected static` void CheckParamCount(IList<[Variant](../../../variants/variant)> parameters, int expectedParamCount)

- **params**: IList<[Variant](../../../variants/variant)> - list of function parameters.
- **expectedParamCount**: int - expected number of function parameters.

#### GetParameter
Gets a function's parameter by it's index.

> `protected static` [Variant](../../../variants/variant) GetParameter(IList<[Variant](../../../variants/variant)> parameters, int paramIndex)

- **params**: IList<[Variant](../../../variants/variant)> - list of function parameters.
- **paramIndex**: int - index for the function parameter (0 for the first parameter).
- **returns**: [Variant](../../../variants/variant) - function's parameter value.
