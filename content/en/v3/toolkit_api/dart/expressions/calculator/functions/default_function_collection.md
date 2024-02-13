---
type: docs
title: "DefaultFunctionCollection"
linkTitle: "DefaultFunctionCollection"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a list filled with standard functions.
---

**Extends**: [FunctionCollection](../function_collection)

### Description

The DefaultFunctionCollection class allows you to implement a list filled with standard functions.

### Constructors
Constructs a list and fills it with the standard functions.

> DefaultFunctionCollection()

### Instance methods

#### checkParamCount
Checks if params contains the correct number of function parameters (must be stored on the top of the params).
> void checkParamCount(List<[Variant](../../../variants/variant)> params, int expectedParamCount)

- **params**: List<[Variant](../../../variants/variant)> - list of function parameters.
- **expectedParamCount**: int - expected number of function parameters.

#### getParameter
Gets a function's parameter by it's index.

> [Variant](../../../variants/variant) getParameter(List<[Variant](../../../variants/variant)> params, int paramIndex)

- **params**: [Variant](../../../variants/variant) - list of function parameters.
- **paramIndex**: int - index for the function parameter (0 for the first parameter).
- **returns**: [Variant](../../../variants/variant) - function's parameter value.
