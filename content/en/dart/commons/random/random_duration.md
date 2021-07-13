---
type: docs
title: "RandomDuration"
linkTitle: "RandomDuration"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Random generator for duration values.
---

### Description

The RandomDouble class allows you to generate random duration values.

### Static methods

#### nextDuration
Generates a random Duration in the range ['min', 'max'].

> `static` Duration nextDuration(Duration min, [Duration max])

- **min**: Duration - (optional) minimum range value
- **max**: Duration - max range value
- **returns**: Duration - a random Date value.

#### updateDuration
Updates (drifts) a Date value within specified range defined

> `static` Duration updateDuration(Duration value, [int range])

- **value**: Duration - Date value to drift.
- **range**: int - (optional) a range in milliseconds. Default: 10 days
- **returns**: Duration - updated duration value.

### Examples

```dart
var value1 = RandomDouble.nextDouble(5, 10);     // Possible result: 7.3
var value2 = RandomDouble.nextDouble(10);        // Possible result: 3.7
var value3 = RandomDouble.updateDouble(10, 3);   // Possible result: 9.2

```
