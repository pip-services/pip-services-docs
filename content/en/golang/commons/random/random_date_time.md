---
type: docs
title: "RandomDateTime"
linkTitle: "RandomDateTime"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Random generator for Date time values.
---

### Description

The RandomDateTime class allows you to generate random dates.

Important points:

- Month must be in 1..12 format.

### Methods

#### NextDate
Generates a random Date in the range ['minYear', 'maxYear'].
This method generate dates without time (or time set to 00:00:00)

> (c *TRandomDateTime) NextDate(min time.Time, max time.Time) time.Time

- **min**: time.Time - (optional) minimum range value
- **max**: time.Time - max range value
- **returns**: time.Time - a random Date value.

#### NextDateTime
Generates a random Date and time in the range ['minYear', 'maxYear'].
This method generate dates without time (or time set to 00:00:00)

> (c *TRandomDateTime) NextDateTime(min time.Time, max time.Time) time.Time

- **min**: time.Time - (optional) minimum range value
- **max**: time.Time - max range value
- **returns**: time.Time - a random Date and time value.

#### UpdateDateTime
Updates (drifts) a Date value within specified range defined

> (c *TRandomDateTime) UpdateDateTime(value time.Time, interval int64) time.Time

- **value**: time.Time - a Date value to drift.
- **range**: int64 - (optional) a range in milliseconds. Default: 10 days
- **returns**: time.Time - an updated DateTime

### Examples

```go
value1 := RandomDateTime.nextDate(time.Parse(shortForm, "2007-Jan-01"), time.Parse(shortForm, "2010-Jan-01")); // Possible result: 2008-01-03
value2 := RandomDateTime.nextDateTime(time.Parse(shortForm, "2006-Jan-01"), time.Parse(shortForm, "2017-Jan-01")); // Possible result: 2007-03-11 11:20:32
value3 := RandomDateTime.updateDateTime(time.Parse(shortForm, "2010-Jan-01"), ); // Possible result: 2010-02-05 11:33:23

```
