---
type: docs
title: "Integer"
linkTitle: "Integer"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Random generator for integer values.
---

### Description

The Integer class allows you to generate random integer values.

### Methods

#### NextInteger
Generates a integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> NextInteger(min int, max int) int

- **min**: int - minimum value of the integer that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: int - generated random integer value.

#### UpdateInteger
Updates (drifts) an integer value within specified range defined

> UpdateInteger(value int, interval int) int

- **value**: int - integer value to drift.
- **interval**: int - (optional) range. Default: 10% of the value
- **returns**: int - updated integer value.

#### Sequence
Generates a random sequence of integers starting from 0 like: \[0,1,2,3...??\]

> Sequence(min int, max int) []int

- **min**: int - minimum value of the integer that will be generated. If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int - maximum value of the int that will be generated. Defaults to 'min' if omitted.
- **returns**: int[] - generated array of integers.

### Examples

```go
value1 := Integer.nextInteger(5, 10);     // Possible result: 7
value2 := Integer.nextInteger(10);        // Possible result: 3
value3 := Integer.updateInteger(10, 3);   // Possible result: 9

```
