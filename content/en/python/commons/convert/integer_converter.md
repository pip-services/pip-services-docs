---
type: docs
title: "IntegerConverter"
linkTitle: "IntegerConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into integers using extended conversion rules.

---

### Description
    
The IntegerConverter class converts arbitrary values into integers using the following extended conversion rules:

- Strings are converted to floats, then to integers
- DateTime: total number of milliseconds since unix epoсh  
- Boolean: 1 for True and 0 for False

### Static methods

#### to_integer
Converts value into integer or returns 0 when conversion is not possible.  
See [LongConverter.toLong](../long_converter/#tolong),  
[LongConverter.to_long_with_default](../long_converter/#to_long_with_default)

> `static` toInteger(value: Any): int

- **value**: Any - the value to convert.
- **returns**: int - integer value or 0 when conversion is not supported.

#### to_integer_with_default
Converts value into integer or returns default value when conversion is not possible.
See [LongConverter.to_long_with_default](../long_converter/#to_long_with_default),  
[LongConverter.to_nullable_long](../long_converter/#to_nullable_long)

> `static` to_integer_with_default(value: Any, default_value: int): int

- **value**: Any - the value to convert.
- **default_value**: int - the default value.
- **returns**: int - integer value or default when conversion is not supported. 

#### to_nullable_integer
Converts value into integer or returns null when conversion is not possible.
See [LongConverter.to_nullable_long](../long_converter/#tonullablelong)

> `static` to_nullable_integer(value: Any): int

- **value**: Any - the value to convert.
- **returns**: int - integer value or null when conversion is not supported.

### Examples

```python
value1 = IntegerConverter.to_nullable_integer("ABC")     # Returns None
value2 = IntegerConverter.to_nullable_integer("123.456") # Returns 123
value3 = IntegerConverter.to_nullable_integer(True)      # Returns 1
value4 = IntegerConverter.to_nullable_integer(datetime.datetime.now()) # Returns current milliseconds (E.g. 1619867293411)

```
