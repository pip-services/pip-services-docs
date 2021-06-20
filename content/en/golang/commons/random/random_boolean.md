---
type: docs
title: "RandomBoolean"
linkTitle: "RandomBoolean"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Random generator for boolean values.
---

### Description

The RandomBoolean class allows you to generate random boolean values. 

### Methods

#### Chance
Calculates "chance" out of "max chances".
Example: 1 chance out of 3 chances (or 33.3%)

> (c *TRandomBoolean) Chance(chances int, maxChances int) bool

- **chances**: int - chance proportional to maxChances.
- **maxChances**: int - maximum number of chances
- **returns**: bool - true or false for a settled chance

#### NextBoolean
Generates a random boolean value.

> (c *TRandomBoolean) NextBoolean() bool

- **returns**: bool - random boolean.

### Examples

```go
value1 := RandomBoolean.NextBoolean();    // Possible result: true
value2 := RandomBoolean.Chance(1,3);      // Possible result: false

```
