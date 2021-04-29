---
type: docs
title: "DateTimeConverter"
linkTitle: "DateTimeConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into Date values using extended conversion rules:

    - Strings: converted using ISO time format
    
    - Numbers: converted using milliseconds since unix epoch
---


**Example:**

```python
value1 = DateTimeConverter.to_nullable_datetime("ABC") // Result: None
value2 = DateTimeConverter.to_nullable_datetime("2018-01-01T11:30:00.0") // Result: Date(2018,0,1,11,30)
value3 = DateTimeConverter.to_nullable_datetime(123) // Result: Date(123)

```

### Methods

#### to_date_time
Converts value into Date or returns current date when conversion is not possible.  
See [to_date_time_with_default](#to_date_time_with_default)

> `static` to_date_time(value: Any): datetime

- **value**: Any - the value to convert.
- **returns**: datetime - Date value or current date when conversion is not supported.

#### to_date_time_with_default
Converts value into Date or returns default when conversion is not possible.

> `static` to_date_time_with_default(value: Any, default_value: datetime = None): datetime

- **value**: Any - the value to convert.
- **defaultValue**: datetime - the default value.
- **returns**: datetime - Date value or default when conversion is not supported.

#### to_nullable_date_time
Converts value into Date or returns null when conversion is not possible.

> `static` to_nullable_date_time(value: Any): Optional[datetime]

- **value**: Any - the value to convert.
- **returns**: datetime - Date value or null when conversion is not supported.