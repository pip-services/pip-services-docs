---
type: docs
title: "Variable"
linkTitle: "Variable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a variable holder object.
---

### Description

The Variable class allows you to implement a variable holder object.

### Constructors

#### EmptyVariable
Constructs a new empty variable.
> EmptyVariable(name string) [*Variant](../../../variants/variant)

- **name**: string - name of this variable.

#### NewVariable
Constructs this variable with name and value.
> NewVariable(name string, value [*Variant](../../../variants/variant)) [*Variable]()

- **name**: string - name of this variable.
- **value**: [*Variant](../../../variants/variant) - value of this variable.


### Methods

#### Name
Name of the variable
> (c [*Variable]()) Name() string

- **returns**: string - variable's name.

#### Value
Gets the variable's value.
> (c [*Variable]()) Value() [*Variant](../../../variants/variant)

- **returns**: [*Variant](../../../variants/variant) - variable value.

#### SetValue

Sets the variable's value.

> (c [*Variable]()) SetValue(value [*Variant](../../../variants/variant)) 

- **value**: [*Variant](../../../variants/variant) - variable's value.

