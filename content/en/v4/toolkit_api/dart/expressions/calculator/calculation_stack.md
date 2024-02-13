---
type: docs
title: "CalculationStack"
linkTitle: "CalculationStack"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    Implements a stack of Variant values.
---

### Description

The CalculationStack class allows you to implement a stack of Variant values.

### Properties

#### length
Length.

> int get length

- **returns**: int - length


### Instance methods

#### pop
Removes and returns the last value from the list.
> [Variant](../../variants/variant) pop()

- **returns**: [Variant](../../variants/variant) - the last value from the list.

#### peekAt
Peeks a Variant value located at a specified index.
> [Variant](../../variants/variant) peekAt(int index)

- **index**: int - specified index.
- **returns**: [Variant](../../variants/variant) - Variant value.

#### peek
Peeks a Variant value.
> [Variant](../../variants/variant) peek()

- **returns**: [Variant](../../variants/variant) - Variant value.


