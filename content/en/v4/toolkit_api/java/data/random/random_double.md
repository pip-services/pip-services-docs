---
type: docs
title: "RandomDouble"
linkTitle: "RandomDouble"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for double values.
---

### Description

The RandomDouble class allows you to generate random double values.

### Static methods

#### nextDouble
Generates a random double value in the range ['minYear', 'maxYear']. 

> `public static` double nextDouble(double min, double max)

- **min**: double - (optional) minimum range value
- **max**: double - max range value
- **returns**: double - random double value.

#### updateDouble
Updates (drifts) a double value within specified range.

> `public static` double updateDouble(double value, double range)

- **value**: double - double value to drift.
- **range**: double - (optional) range. Default: 10% of the value.
- **returns**: double - updated double value.

### Examples

```java
{@code
  double value1 = RandomDouble.nextDouble(5, 10);     // Possible result: 7.3
  double value2 = RandomDouble.nextDouble(10);        // Possible result: 3.7
  double value3 = RandomDouble.updateDouble(10, 3);   // Possible result: 9.2
  }

```
