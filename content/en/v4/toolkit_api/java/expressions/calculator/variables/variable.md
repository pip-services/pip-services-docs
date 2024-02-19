---
type: docs
title: "Variable"
linkTitle: "Variable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a variable holder object.
---

**Implements**: [IVariable](../ivariable)

### Description

The Variable class allows you to implement a variable holder object.

### Constructors

> `public` Variable(String name, [Variant](../../../variants/variant) value) 

- **name**: String - name of this variable.
- **value**: [Variant](../../../variants/variant) - value of this variable.


### Properties

#### name
Name of the variable
> `private final` String _name

#### value
Gets the variable's value.
> `private` Variant _value

### Instance methods

#### getName
Gets the name of the variable.
> `public` String getName()

- **returns**: String - name of the variable

#### setName
Sets the name of the variable.
> `public` void setName(String value)

- **value**: String - name of the variable

#### getValue
Gets the value of the variable.
> `public` Variant getValue()

- **returns**: Variant - value of the variable

#### setValue
Sets the value of the variable.
> `public` void setValue(Variant value)

- **value**: String - value of the variable
