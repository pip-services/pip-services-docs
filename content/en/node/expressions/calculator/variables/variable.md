---
type: docs
title: "Variable"
linkTitle: "Variable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a variable holder object.
---

**Implements**: [IVariable](../ivariable)

### Description

TODO: add description

### Constructors

> `public` constructor(name: string, value?: [Variant](../../../variants/variant)) 

- **name**: string - The name of this variable.
- **value**: [Variant](../../../variants/variant) - The variable value.


### Properties

#### name
The variable name.
> `public` name(): string

- **returns**: string - the variable name.

#### value
Get the variable value.
> `public` value(): [Variant](../../../variants/variant)

- **returns**: [Variant](../../../variants/variant) - the variable value.

Set the variable value.

> `public` value(value: [Variant](../../../variants/variant))

- **value**: [Variant](../../../variants/variant) - the variable value.
