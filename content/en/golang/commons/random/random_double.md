---
type: docs
title: "RandomDouble"
linkTitle: "RandomDouble"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Random generator for double values.
---

### Description

The RandomDouble class allows you to generate random double values.

### Methods

#### NextDouble
Generates a random double value in the range ['minYear', 'maxYear'].

> (c *TRandomDouble) NextDouble(min float64, max float64) float64

- **min**: float64 - (optional) minimum range value
- **max**: float64 - max range value
- **returns**: float64 - a random double value.

#### UpdateDouble
Updates (drifts) a double value within specified range defined

> (c *TRandomDouble) UpdateDouble(value float64, interval float64) float64

- **value**: float64 - a double value to drift.
- **interval**: float64 - (optional) a range. Default: 10% of the value
- **returns**: float64 - updated double value.

### Examples

```go
value1 := RandomDouble.nextDouble(5, 10);     // Possible result: 7.3
value2 := RandomDouble.nextDouble(10);        // Possible result: 3.7
value3 := RandomDouble.updateDouble(10, 3);   // Possible result: 9.2

```