---
type: docs
title: "RandomDouble"
linkTitle: "RandomDouble"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for double values.
---

### Description

The RandomDouble class allows you to generate random double values.

### Static methods

#### NextDouble
Generates a random double value in the range to "max".

> `public static` double NextDouble(double maxValue)

- **maxValue**: double - max range value
- **returns**: double - random double value.


#### NextDouble
Generates a random double value in the range ['minYear', 'maxYear'].

> `public static` double NextDouble(double minValue, double maxValue)		


- **minValue**: double - (optional) minimum range value
- **maxValue**: double - max range value
- **returns**: double - random double value.


#### UpdateDouble
Updates (drifts) a double value without a defined range.

> `public static` double UpdateDouble(double value)

- **value**: double - double value to drift.
- **returns**: double - updated double value.


#### UpdateDouble
Updates (drifts) a double value within specified range defined.

> `public static` double UpdateDouble(double value, double range)

- **value**: double - double value to drift.
- **range**: double - (optional) range. Default: 10% of the value
- **returns**: double - updated double value.

### Examples

```cs
var value1 = RandomDouble.NextDouble(5, 10);     // Possible result: 7.3
var value2 = RandomDouble.NextDouble(10);        // Possible result: 3.7
var value3 = RandomDouble.UpdateDouble(10, 3);   // Possible result: 9.2

```
