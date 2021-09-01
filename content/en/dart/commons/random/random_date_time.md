---
type: docs
title: "RandomDateTime"
linkTitle: "RandomDateTime"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Random generator for Date time values.
---

### Description

The RandomDateTime class allows you to generate random dates.

**Important points**

- Month must be in 1..12 format.

### Static methods

#### nextDate
Generates a random Date in the range ['minYear', 'maxYear'].
This method generates dates without time (or time set to 00:00:00)

> `static` DateTime nextDate(DateTime min, [DateTime max])

- **min**: DateTime - (optional) minimum range value.
- **max**: DateTime - max range value.
- **returns**: DateTime - random Date value.

#### nextDateTime
Generates a random Date and time in the range ['minYear', 'maxYear'].
This method generates dates without time (or time set to 00:00:00)

> `static` DateTime nextDateTime(DateTime min, [DateTime max])

- **min**: DateTime - (optional) minimum range value
- **max**: DateTime - max range value
- **returns**: DateTime - random Date and time value.

#### updateDateTime
Updates (drifts) a Date value within specified range.

> `static` DateTime updateDateTime(DateTime value, [int range])

- **value**: DateTime - Date value to drift.
- **range**: int - (optional)  range in milliseconds. Default: 10 days
- **returns**: DateTime - updated DateTime

### Examples

```dart
var value1 = RandomDateTime.nextDate( Date(2010,0,1));    // Possible result: 2008-01-03
var value2 = RandomDateTime.nextDateTime( Date(2017,0.1));// Possible result: 2007-03-11 11:20:32
var value3 = RandomDateTime.updateDateTime( Date(2010,1,2));// Possible result: 2010-02-05 11:33:23

```
