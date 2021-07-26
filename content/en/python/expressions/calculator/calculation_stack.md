---
type: docs
title: "CalculationStack"
linkTitle: "CalculationStack"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a stack of Variant values.
---

### Description

The CalculationStack class allows you to implement a stack of Variant values.

### Properties

#### length
Length
> length(): int

- **returns**: int - length


### Instance methods

#### pop
Removes and returns the last value from the list.
> pop(): [Variant](../../variants/variant)

- **returns**: [Variant](../../variants/variant) - the last value from the list.

#### peek_at
Peeks a Variant value located at a specified index.
> peek_at(index: int): [Variant](../../variants/variant)

- **index**: int - a specified index.
- **returns**: [Variant](../../variants/variant) - a Variant value.

#### peek
Peeks a Variant value.
> peek(): [Variant](../../variants/variant)

- **returns**: [Variant](../../variants/variant) - a Variant value.


