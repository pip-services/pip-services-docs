---
type: docs
title: "Boolean"
linkTitle: "Boolean"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Random generator for boolean values.
---

### Description

The Boolean class allows you to generate random boolean values. 

### Methods

#### Chance
Calculates "chance" out of "max chances".
Example: 1 chance out of 3 chances (or 33.3%)

> Chance(chances int, maxChances int) bool

- **chances**: int - chance proportional to maxChances.
- **maxChances**: int - maximum number of chances
- **returns**: bool - true or false for a settled chance

#### NextBoolean
Generates a random boolean value.

> NextBoolean() bool

- **returns**: bool - random boolean.

### Examples

```go
value1 := random.Boolean.NextBoolean();    // Possible result: true
value2 := random.Boolean.Chance(1,3);      // Possible result: false

```
