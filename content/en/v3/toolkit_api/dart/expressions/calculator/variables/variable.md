---
type: docs
title: "Variable"
linkTitle: "Variable"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a variable holder object.
---

**Implements**: [IVariable](../ivariable)

### Description

The Variable class allows you to implement a variable holder object.

### Constructors

> Variable(String name, [[Variant?](../../../variants/variant) value]) 

- **name**: String - name of this variable.
- **value**: [Variant?](../../../variants/variant) - value of this variable.


### Properties

#### name
Gets the name of the variable
`@override`
> String get name

- **returns**: String - variable name.

Sets the name of the variable

`@override`
> set name(String value)

- **value**: String - variable name.

#### value
Gets the variable's value.
> [Variant](../../../variants/variant) get value

- **returns**: [Variant](../../../variants/variant) - variable's value.

Sets the variable's value.

> set value([Variant](../../../variants/variant) value)

- **value**: [Variant](../../../variants/variant) - variable's value.
