---
type: docs
title: "RandomLong"
linkTitle: "RandomLong"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for integer values.
---

### Description

The RandomInteger class allows you to generate random integer values.

### Static methods

#### nextInteger
Generates an integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `public static` long nextLong(long minValue, long maxValue)

- **minValue**: long - minimum value of the long that will be generated.
  
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.

- **maxValue**: long - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: long - generated random integer value.

#### updateInteger
Updates (drifts) a long value within a specified range.

> `public static` long updateLong(long value, long range)

- **value**: long - long value to drift.
- **range**: long - (optional) range. Default: 10% of the value
- **returns**: long - updated long value.

### Examples

```java
 {
 long value1 = RandomLong.nextLong(5, 10);     // Possible result: 7
 long value2 = RandomLong.nextLong(10);        // Possible result: 3
 long value3 = RandomLong.nextLong(10, 3);   // Possible result: 9
 }
```
