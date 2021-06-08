---
type: docs
title: "RandomInteger"
linkTitle: "RandomInteger"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Random generator for integer values.
---

### Description

The RandomInteger class allows you to generate random integer values.

### Methods

#### NextInteger
Generates a integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> (c *TRandomInteger) NextInteger(min int, max int) int

- **min**: int - minimum value of the integer that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: int - generated random integer value.

#### UpdateInteger
Updates (drifts) a integer value within specified range defined

> (c *TRandomInteger) UpdateInteger(value int, interval int) int

- **value**: int - a integer value to drift.
- **interval**: int - (optional) a range. Default: 10% of the value
- **returns**: int - updated integer value.

### Examples

```go
value1 := RandomInteger.nextInteger(5, 10);     // Possible result: 7
value2 := RandomInteger.nextInteger(10);        // Possible result: 3
value3 := RandomInteger.updateInteger(10, 3);   // Possible result: 9

```
