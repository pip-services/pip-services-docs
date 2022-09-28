---
type: docs
title: "Double"
linkTitle: "Double"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Random generator for double values.
---

### Description

The Double class allows you to generate random double values.

### Methods

#### NextDouble
Generates a random double value in the range ['minYear', 'maxYear'].

> NextDouble(min float64, max float64) float64

- **min**: float64 - (optional) minimum range value
- **max**: float64 - max range value
- **returns**: float64 - random double value.

#### UpdateDouble
Updates (drifts) a double value within specified range defined

> UpdateDouble(value float64, interval float64) float64

- **value**: float64 - double value to drift.
- **interval**: float64 - (optional) range. Default: 10% of the value
- **returns**: float64 - updated double value.

### Examples

```go
value1 := Double.NextDouble(5, 10);     // Possible result: 7.3
value2 := Double.NextDouble(10);        // Possible result: 3.7
value3 := Double.UpdateDouble(10, 3);   // Possible result: 9.2

```
