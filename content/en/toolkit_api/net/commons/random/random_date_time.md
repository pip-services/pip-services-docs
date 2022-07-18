---
type: docs
title: "RandomDateTime"
linkTitle: "RandomDateTime"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for DateTime time values.
---

### Description

The RandomDateTime class allows you to generate random dates.

**Important points**

- Month must be in 1..12 format.

### Static methods

#### NextDate
Generates a random DateTime in the range ['2000, 1, 1', 'maxYear']. 
This method generates dates without time (or time set to 00:00:00)

> `public static` DateTime NextDate(DateTime max)

- **max**: DateTime  - max range value
- **returns**: DateTime  - random DateTime value.

#### NextDate
Generates a random DateTime in the range ['minYear', 'maxYear']. 
This method generates dates without time (or time set to 00:00:00)

> `public static` DateTime  NextDate(DateTime min, DateTime max)

- **min**: DateTime  - (optional) minimum range value
- **max**: DateTime  - max range value
- **returns**: DateTime  - random DateTime value.

#### NextDateTime
Generates a random DateTime and time in the range ['2000, 1, 1', 'maxYear']. 
This method generates dates without time (or time set to 00:00:00)

> `public static` DateTime NextDateTime(DateTime max)

- **max**: DateTime - max range value
- **returns**: DateTime - random DateTime and time value.

#### NextDateTime
Generates a random DateTime and time in the range ['minYear', 'maxYear']. 
This method generates dates without time (or time set to 00:00:00)

> `public static` DateTime NextDateTime(DateTime min, DateTime max)

- **min**: DateTime - (optional) minimum range value
- **max**: DateTime - max range value
- **returns**: DateTime - random DateTime and time value.


#### NextTime
Generates a random TimeSpan in the range ['0', 'maxTime']. 

> `public static` TimeSpan NextTime(long max)

- **max**: long - max range value
- **returns**: TimeSpan - random TimeSpan value.


#### NextTime
Generates a random TimeSpan in the range ['minTime', 'maxTime']. 

> `public static` TimeSpan NextTime(long min, long max)

- **min**: long - minimum range value
- **max**: long - max range value
- **returns**: TimeSpan - random TimeSpan value.


#### UpdateDateTime
Updates (drifts) a DateTime value.

> `public static` DateTime UpdateDateTime(DateTime value)

- **value**: DateTime - DateTime value to drift.
- **returns**: DateTime - updated ZonedDateTime and time value.


#### UpdateDateTime
Updates (drifts) a ZonedDateTime value within a specified range.

> `public static` DateTime UpdateDateTime(DateTime value, long range)

- **value**: DateTime - DateTime value to drift.
- **range**: long  - (optional) range in milliseconds. Default: 10 days
- **returns**: DateTime - updated DateTime and time value.

### Examples

```cs
var value1 = RandomDateTime.NextDate(2010, 0);    // Possible result: 2008-01-03
var value2 = RandomDateTime.NextDateTime(2017, 0);// Possible result: 20017-03-11 11:20:32

```
