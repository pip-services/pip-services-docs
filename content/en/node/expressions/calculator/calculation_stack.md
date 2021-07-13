---
type: docs
title: "CalculationStack"
linkTitle: "CalculationStack"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a stack of Variant values.
---

### Description

The CalculationStack class allows you to implement a stack of Variant values.

### Properties

#### length
Length
> `public` length(): number

- **returns**: number - length


### Instance methods

#### pop
Removes and returns the last value from the list.
> `public` pop(): [Variant](../../variants/variant)


#### peekAt
Peeks a Variant value located at a specified index.
> `public` peekAt(index: number): [Variant](../../variants/variant)

#### peek
Peeks a Variant value.
> `public` peek(): [Variant](../../variants/variant)


