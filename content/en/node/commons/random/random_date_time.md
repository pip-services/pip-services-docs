---
type: docs
title: "RandomDateTime"
linkTitle: "RandomDateTime"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-nodex"
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
This method generate dates without time (or time set to 00:00:00)

> `public static` nextDate(min: Date, max: Date = null): Date

- **min**: Date - (optional) minimum range value
- **max**: Date = null - max range value
- **returns**: Date - a random Date value.

#### nextDateTime
Generates a random Date and time in the range ['minYear', 'maxYear'].
This method generate dates without time (or time set to 00:00:00)

> `public static` nextDateTime(min: Date, max: Date = null): Date

- **min**: Date - (optional) minimum range value
- **max**: Date = null - max range value
- **returns**: Date - a random Date and time value.

#### updateDateTime
Updates (drifts) a Date value within specified range defined

> `public static` updateDateTime(value: Date, range: number = null): Date

- **value**: Date - a Date value to drift.
- **range**: number = null - (optional) a range in milliseconds. Default: 10 days
- **returns**: Date - an updated DateTime

### Examples

```typescript
let value1 = RandomDateTime.nextDate(new Date(2010,0,1));    // Possible result: 2008-01-03
let value2 = RandomDateTime.nextDateTime(new Date(2017,0.1));// Possible result: 2007-03-11 11:20:32
let value3 = RandomDateTime.updateDateTime(new Date(2010,1,2));// Possible result: 2010-02-05 11:33:23

```
