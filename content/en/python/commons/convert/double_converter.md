---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into double using extended conversion rules:

    - Strings are converted to double values

    - DateTime: total number of milliseconds since unix epoсh
    
    - Boolean: 1 for true and 0 for false  
---


**Example:**

```python
value1 = DoubleConverter.to_nullable_double("ABC")     # Result: null
value2 = DoubleConverter.to_nullable_double("123.456") # Result: 123.456
value3 = DoubleConverter.to_nullable_double(True)      # Result: 1
value4 = DoubleConverter.to_nullable_double(datetime.datetime.now()) # Result: current milliseconds

```

### Methods

#### to_double
Converts value into doubles or returns 0 when conversion is not possible.  
See [to_double_with_default](#to_double_with_default)

> `static` to_double(value: Any): Union[int, float]

- **value**: Any - the value to convert.
- **returns**: Union[int, float] - double value or 0 when conversion is not supported.

#### to_double_with_default
Converts value into integer or returns default value when conversion is not possible.

> `static` to_double_with_default(value: Any, default_value: Union[int, float] = 0): Union[int, float]

- **value**: Any - the value to convert.
- **default_value**: Union[int, float] = null - the default value.
- **returns**: Union[int, float] - double value or default when conversion is not supported.

#### to_nullable_double
Converts value into doubles or returns null when conversion is not possible.

> `static` to_nullable_double(value: Any): Optional[Union[int, float]]

- **value**: Any - the value to convert.
- **returns**: Optional[Union[int, float]] - double value or null when conversion is not supported.