---
type: docs
title: "CalculationStack"
linkTitle: "CalculationStack"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a stack of Variant values.
---

### Description

The CalculationStack class allows you to implement a stack of Variant values.


### Methods

#### Length
Length
> (c [*CalculationStack]()) Length() int

- **returns**: int - length

#### Pop
Removes and returns the last value from the list.
> (c [*CalculationStack]()) Pop() [*Variant](../../variants/variant)

- **returns**: [*Variant](../../variants/variant) - the last value from the list.


#### PeekAt
Peeks a Variant value located at a specified index.
> (c [*CalculationStack]()) PeekAt(index int) [*Variant](../../variants/variant)

- **index**: int - a specified index.
- **returns**: [*Variant](../../variants/variant) - a Variant value located.

#### Peek
Peeks a Variant value.
> (c [*CalculationStack]()) Peek() [*Variant](../../variants/variant)

- **returns**: [*Variant](../../variants/variant) - a Variant value.



