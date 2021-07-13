---
type: docs
title: "RandomInteger"
linkTitle: "RandomInteger"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Random generator for integer values.
---

### Description

The RandomInteger class allows you to generate random integer values.

### Static methods

#### nextInteger
Generates an integer in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `static` int nextInteger(int min, [int max])

- **min**: int - minimum value of the integer that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: int - generated random integer value.

#### updateInteger
Updates (drifts) a integer value within specified range.

> `static` int updateInteger(int value, [int range])

- **value**: int - integer value to drift.
- **range**: int - (optional) range. Default: 10% of the value
- **returns**: int - updated integer value.

#### sequence
Generates a random sequence of integers starting from 0 like: [0,1,2,3...??]

> `static` List\<int\> sequence(int min, [int max])

- **min**: int - minimum value of the integer that will be generated.
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: int - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: List\<int\> - generated array of integers.

### Examples

```dart
var value1 = RandomInteger.nextInteger(5, 10);     // Possible result: 7
var value2 = RandomInteger.nextInteger(10);        // Possible result: 3
var value3 = RandomInteger.updateInteger(10, 3);   // Possible result: 9

```
