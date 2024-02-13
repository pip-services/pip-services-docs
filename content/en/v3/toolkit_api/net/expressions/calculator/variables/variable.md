---
type: docs
title: "Variable"
linkTitle: "Variable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a variable holder object.
---

**Inherits**: [IVariable](../ivariable)

### Description

The Variable class allows you to implement a variable holder object.

### Constructors

> `public` Variable(string name, [Variant](../../../variants/variant) value = null)

- **name**: string - name of this variable.
- **value**: [Variant](../../../variants/variant) - value of this variable.


### Properties

#### Name
Name of the variable
> `public` string Name { get; }

- **returns**: string - variable name.

#### Value
Gets and sets the variable's value.
> `public` [Variant](../../../variants/variant) Value { get; set; }

