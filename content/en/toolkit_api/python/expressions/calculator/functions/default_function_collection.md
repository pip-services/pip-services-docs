---
type: docs
title: "DefaultFunctionCollection"
linkTitle: "DefaultFunctionCollection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a list filled with standard functions.
---

**Implements**: [FunctionCollection](../function_collection)

### Description

The DefaultFunctionCollection class allows you to implement a list filled with standard functions.

### Constructors
Constructs a list and fills it with the standard functions.

> DefaultFunctionCollection()

### Instance methods

#### _check_param_count
Checks if params contains the correct number of function parameters (must be stored on the top of the params).
> _check_param_count(params: List[[Variant](../../../variants/variant)], expected_param_count: int)

- **params**: List[[Variant](../../../variants/variant)] - list of function parameters.
- **expectedParamCount**: int - expected number of function parameters.

#### getParameter
Gets a function's parameter by it's index.

> _get_parameter(params: List[[Variant](../../../variants/variant)], param_index: int): [Variant](../../../variants/variant):

- **params**: List[[Variant](../../../variants/variant)] - list of function parameters.
- **paramIndex**: int - index for the function parameter (0 for the first parameter).
- **returns**: [Variant](../../../variants/variant) - function's parameter value.
