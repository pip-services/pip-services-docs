---
type: docs
title: "CalculationStack"
linkTitle: "CalculationStack"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a stack of Variant values.
---

### Description

The CalculationStack class allows you to implement a stack of Variant values.


### Instance methods

#### length
Length
> `public` int length()

- **returns**: int - length

#### pop
Removes and returns the last value from the list.
> `public` [Variant](../../variants/variant) pop()

- **returns**: [Variant](../../variants/variant) - the last value from the list.

#### peekAt
Peeks a Variant value located at a specified index.
> `public` [Variant](../../variants/variant) peekAt(int index)

- **index**: int - a specified index.
- **returns**: [Variant](../../variants/variant) - a Variant value.

#### peek
Peeks a Variant value.
> `public`  [Variant](../../variants/variant) peek()

- **returns**: [Variant](../../variants/variant) - a Variant value.

#### push
Pushes a Variant value.
> `public`  void push([Variant](../../variants/variant) value)

- **returns**: [Variant](../../variants/variant) - a Variant value.

