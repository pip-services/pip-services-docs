---
type: docs
title: "DefaultFunctionCollection"
linkTitle: "DefaultFunctionCollection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a list filled with standard functions.
---

**Implements**: [FunctionCollection](../function_collection)

### Description

The DefaultFunctionCollection class allows you to implement a list filled with standard functions.

### Constructors

#### NewDefaultFunctionCollection
Constructs a list and fills it with the standard functions.

> NewDefaultFunctionCollection() [*DefaultFunctionCollection]()

### Methods

#### checkParamCount
Checks if params contains the correct number of function parameters (must be stored on the top of the params).

> checkParamCount(parameters [[]*Variant](../../../variants/variant), expectedParamCount int) error

- **params**: [[]*Variant](../../../variants/variant) - list of function parameters.
- **expectedParamCount**: int - expected number of function parameters.
- **returns**: error - error or nil if no errors occured.

#### getParameter
Gets a function's parameter by it's index.

> getParameter(parameters [[]*Variant](../../../variants/variant), paramIndex int) [*Variant](../../../variants/variant)

- **params**: [[]*Variant](../../../variants/variant) - list of function parameters.
- **paramIndex**: int - index for the function parameter (0 for the first parameter).
- **returns**: [*Variant](../../../variants/variant) - function's parameter value.

