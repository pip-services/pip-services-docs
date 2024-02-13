---
type: docs
title: "IVariable"
linkTitle: "IVariable"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-expressions-dotnet"
description: > 
    Defines a variable interface.
---

**Inherits**: [GenericNumberState](../../../tokenizers/generic/generic_number_state)

### Description

The IVariable interface allows you to define a variable.


### Properties

#### Name
The variable name.
> string Name { get; }

#### Value
The variable value.
> [Variant](../../../variants/variant) Value { get; set; }

