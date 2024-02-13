---
type: docs
title: "Variable"
linkTitle: "Variable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a variable holder object.
---

**Implements**: [IVariable](../ivariable)

### Description

The Variable class allows you to implement a variable holder object.

### Constructors

> Variable(name: str, value: Optional[[Variant](../../../variants/variant)] = None) 

- **name**: str - name of this variable.
- **value**: Optional[[Variant](../../../variants/variant)] - value of this variable.


### Properties

#### name
Name of the variable
> name(): str

- **returns**: str - variable name.

#### value
Gets the variable's value.
> value(): [Variant](../../../variants/variant)

- **returns**: [Variant](../../../variants/variant) - variable value.

Sets the variable's value.

> value(value: [Variant](../../../variants/variant))

- **value**: [Variant](../../../variants/variant) - variable's value.
