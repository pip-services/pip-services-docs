---
type: docs
title: "CalculationStack"
linkTitle: "CalculationStack"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a stack of Variant values.
---

### Description

The CalculationStack class allows you to implement a stack of Variant values.

### Properties

#### Length
Length
> `public` int Length { get; }

- **returns**: int - length


### Instance methods

#### Pop
Removes and returns the last value from the list.
> `public` [Variant](../../variants/variant) Pop()

- **returns**: [Variant](../../variants/variant) - last value from the list.

#### PeekAt
Peeks a Variant value located at a specified index.
> `public` [Variant](../../variants/variant) PeekAt(int index)

- **index**: int - specified index.
- **returns**: [Variant](../../variants/variant) - Variant value.

#### Peek
Peeks a Variant value.
> `public` [Variant](../../variants/variant) Peek()

- **returns**: [Variant](../../variants/variant) - Variant value.


