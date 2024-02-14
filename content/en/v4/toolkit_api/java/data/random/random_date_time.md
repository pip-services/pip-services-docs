---
type: docs
title: "RandomDateTime"
linkTitle: "RandomDateTime"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for Date time values.
---

### Description

The RandomDateTime class allows you to generate random dates.

Important points:

- Month must be in 1..12 format.

### Static methods

#### nextDate
Generates a random Date in the range ['minYear', 'maxYear'].
This method generates dates without time (or time set to 00:00:00)

> `public static` ZonedDateTime nextDate(int minYear, int maxYear)

- **minYear**: int - (optional) minimum range value.
- **maxYear**: int - max range value.
- **returns**: ZonedDateTime - random Date value.

#### nextDateTime
Generates a random Date and time in the range ['minYear', 'maxYear'].
This method generates dates without time (or time set to 00:00:00)

> `public static` ZonedDateTime nextDateTime(int minYear, int maxYear)

- **minYear**: int- (optional) minimum range value
- **maxYear**: int - max range value
- **returns**: ZonedDateTime - random Date and time value.

#### updateDateTime
Updates (drifts) a Date value within specified range.

> `public static` ZonedDateTime updateDateTime(ZonedDateTime value)

- **value**: ZonedDateTime - Date value to drift.
- **returns**: ZonedDateTime - updated DateTime

### Examples

```java
@code
  ZonedDateTime value1 = RandomDateTime.nextDate(2010, 0);    // Possible result: 2008-01-03
  ZonedDateTime value2 = RandomDateTime.nextDateTime(2017, 0);// Possible result: 20017-03-11 11:20:32
  }
```
