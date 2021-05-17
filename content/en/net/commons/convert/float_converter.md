---
type: docs
title: "FloatConverter"
linkTitle: "FloatConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    The FloatConverter class allows you to convert arbitrary values into float using extended conversion rules.

---

### Description
The FloatConverter class allows you to convert arbitrary values into float using the following extended conversion rules:

- Strings are converted to float values
- DateTime: total number of milliseconds since unix epoсh  
- Boolean: 1 for true and 0 for false

### Static methods

#### to_float
Converts value into float or returns 0 when conversion is not possible.  
See [DoubleConverter.toDouble](../double_converter/#todouble)

> `static` to_float(value: Any): float

- **value**: Any - the value to convert.
- **returns**: float - float value or 0 when conversion is not supported.

#### to_float_with_default
Converts value into float or returns default when conversion is not possible.  
See [DoubleConverter.to_double_with_default](../double_converter/#to_double_with_default),  
[DoubleConverter.to_nullable_double](../double_converter/#to_nullable_double)

> `static` to_float_with_default(value: Any, default_value: float): float

- **value**: Any - the value to convert.
- **default_value**: float - the default value.
- **returns**: float - float value or default value when conversion is not supported.

#### to_nullable_float
Converts value into float or returns None when conversion is not possible.  
See [DoubleConverter.to_nullable_double](../double_converter/#to_nullable_double)

> `static` to_nullable_float(value: Any): Optional[float]

- **value**: Any - the value to convert.
- **returns**: Optional[float] - float value or None when conversion is not supported.


### Examples

```python
value1 = FloatConverter.to_nullable_float("ABC")     # Returns None
value2 = FloatConverter.to_nullable_float("123.456") # Returns 123.456
value3 = FloatConverter.to_nullable_float(True)      # Returns 1
value4 = FloatConverter.to_nullable_float(datetime.datetime.now()) # Returns current milliseconds (E.g. 1619866773703)

```
