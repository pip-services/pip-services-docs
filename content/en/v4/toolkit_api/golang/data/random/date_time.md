---
type: docs
title: "DateTime"
linkTitle: "DateTime"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go/random"
description: >
    Random generator for Date time values.
---

### Description

The RandomDateTime class allows you to generate random dates.

**Important points**

- Month must be in 1..12 format.

### Static methods

#### next_date
Generates a random Date in the range ['minYear', 'maxYear'].
This method generates dates without time (or time set to 00:00:00)

> `static` next_date(min_year: datetime, max_year: datetime = None): datetime

- **min_year**: datetime - (optional) minimum range value
- **max_year**: datetime - max range value
- **returns**: datetime - a random Date value.

#### next_date_time
Generates a random Date and time in the range ['minYear', 'maxYear'].
This method generates dates without time (or time set to 00:00:00)

> `static` next_datetime(min_year: datetime, max_year: datetime = None): datetime

- **min_year**: datetime - (optional) minimum range value
- **max_year**: datetime = None - max range value
- **returns**: datetime - a random Date and time value.

#### update_datetime
Updates (drifts) a Date value within specified range defined

> `static` update_datetime(value: datetime, range: Union[int, float] = None): datetime

- **value**: datetime - a Date value to drift.
- **range**: Union[int, float] = None - (optional) a range in milliseconds. Default: 10 days
- **returns**: datetime - an updated DateTime
### Examples

```python
import datetime
value1 = RandomDateTime.next_date(datetime.datetime(2010,1,1))       # Possible result: 2008-01-03
value2 = RandomDateTime.next_datetime(datetime.datetime(2017,1,1))   # Possible result: 2007-03-11 11:20:32
value3 = RandomDateTime.update_datetime(datetime.datetime(2010,1,2)) # Possible result: 2010-02-05 11:33:23
```
