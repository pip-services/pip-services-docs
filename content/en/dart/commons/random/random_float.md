---
type: docs
title: "RandomFloat"
linkTitle: "RandomFloat"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Random generator for float values.
---

### Description

The RandomFloat class allows you to generate random float values.

### Static methods

#### nextFloat
Generates a float in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `static` double nextFloat(double min, [double max])

- **min**: double - (minimum value of the float that will be generated.   
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: double - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: double - generated random float value.

#### updateFloat
Updates (drifts) a float value within specified range.

> `static` double updateFloat(double value, [double range])

- **value**: double - float value to drift.
- **range**: double - (optional) range. Default: 10% of the value.
- **returns**: double - updated float value.

### Examples

```dart
var value1 = RandomFloat.nextFloat(5, 10);     // Possible result: 7.3
var value2 = RandomFloat.nextFloat(10);        // Possible result: 3.7
var value3 = RandomFloat.updateFloat(10, 3);   // Possible result: 9.2

```
