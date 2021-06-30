---
type: docs
title: "DefaultFunctionCollection"
linkTitle: "DefaultFunctionCollection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a list filled with standard functions.
---

**Extends**: [FunctionCollection](../function_collection)

### Description

TODO: add description

### Constructors
Constructs this list and fills it with the standard functions.

> `public` constructor()

### Instance methods

#### checkParamCount
Checks if params contains the correct number of function parameters (must be stored on the top of the params).
> `protected` checkParamCount(params: [Variant[]](../../../variants/variant), expectedParamCount: number): void 

- **params**: [Variant[]](../../../variants/variant) - A list of function parameters.
- **expectedParamCount**: number - The expected number of function parameters.

#### getParameter
Gets function parameter by it's index.

> `protected` getParameter(params: [Variant[]](../../../variants/variant), paramIndex: number): [Variant](../../../variants/variant)

- **params**: [Variant[]](../../../variants/variant) - A list of function parameters.
- **paramIndex**: number - Index for the function parameter (0 for the first parameter).
- **returns**: [Variant](../../../variants/variant) - Function parameter value.