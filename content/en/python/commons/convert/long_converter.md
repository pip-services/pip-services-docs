---
type: docs
title: "LongConverter"
linkTitle: "LongConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into longs using extended conversion rules:

    - Strings are converted to floats, then to longs

    - DateTime: total number of milliseconds since unix epoсh
    
    - Boolean: 1 for true and 0 for false
---


**Example:**

```python
value1 = LongConverter.to_nullable_long("ABC"); // Result: null
value2 = LongConverter.to_nullable_long("123.456"); // Result: 123
value3 = LongConverter.to_nullable_long(True); // Result: 1
value4 = LongConverter.to_nullable_long(datetime.now()); // Result: current milliseconds

```

### Methods

#### to_long
Converts value into long or returns 0 when conversion is not possible.

> `static` to_long(value: Any): float

- **value**: Any - the value to convert.
- **returns**: float - long value or 0 when conversion is not supported.

#### to_long_with_default
Converts value into integer or returns default when conversion is not possible.

> `static` to_long_with_default(value: Any, defaultValue: float): float

- **value**: Any - the value to convert.
- **default_value**: float - the default value.
- **returns**: float - long value or default when conversion is not supported

#### to_nullable_long
Converts value into long or returns null when conversion is not possible.

> `static` to_nullable_long(value: Any): Optional[float]

- **value**: Any - the value to convert.
- **returns**: float - long value or null when conversion is not supported.