---
type: docs
title: "RandomInteger"
linkTitle: "RandomInteger"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for integer values.
---

### Description

The RandomInteger class allows you to generate random integer values.

### Static methods

#### nextInteger
Generates an integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `public static` int nextInteger(min: number, max: number = null)

- **min**: number - minimum value of the integer that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: number - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: number - generated random integer value.

#### updateInteger
Updates (drifts) a integer value within specified range.

> `public static` int updateInteger(int value, int range)

- **value**: int - integer value to drift.
- **range**: int - (optional) range. Default: 10% of the value
- **returns**: int - updated integer value.

#### updateInteger
Generates a random sequence of integers starting from 0 like: [0,1,2,3...??]

> `public static` List<Integer> sequence(int min, int max)

- **min**: int - minimum value of the integer that will be generated. If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int - (optional) maximum value of the integer that will be generated. Defaults to 'min' if omitted.
- **returns**: List<Integer> - generated list of integers.

### Examples

```java
  {
  int value1 = RandomInteger.nextInteger(5, 10);     // Possible result: 7
  int value2 = RandomInteger.nextInteger(10);        // Possible result: 3
  int value3 = RandomInteger.updateInteger(10, 3);   // Possible result: 9
  }
```
