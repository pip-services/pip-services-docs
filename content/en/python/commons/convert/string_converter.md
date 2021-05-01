---
type: docs
title: "StringConverter"
linkTitle: "StringConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into strings using extended conversion rules.

---

### Description

 The StringConverter class converts arbitrary values into strings using the following extended conversion rules:

- Numbers: are converted with '.' as decimal point
- DateTime: using ISO format
- Boolean: "true" for true and "false" for false
- Arrays: as comma-separated list  
- Other objects: using *toString()* method

### Static methods

#### to_nullable_string
Converts value into string or returns null when value is null.

> `static` to_nullable_string(value: Any): Optional[str]

- **value**: Any - the value to convert.
- **returns**: Optional[str] - string value or null when value is null.

#### to_string
Converts value into string or returns "" when value is null.

> `static` to_string(value: Any): str

- **value**: Any - the value to convert.
- **returns**: str - string value or "" when value is null.

#### to_string_with_default
Converts value into string or returns default when value is null.

> `public static` to_string_with_default(value: Any, default_value: str): str

- **value**: Any - the value to convert.
- **default_value**: str - the default value.
- **returns**: str - string value or default when value is null.


### Examples

```python
import datetime
value1 = StringConverter.to_string(123.456) # Returns '123.456'
value2 = StringConverter.to_string(True)    # Returs 'True'
value3 = StringConverter.to_string(datetime.datetime(2018,10,1)) # Returns '2018-10-01T00:00:00Z'"2018-01-01T00:00:00.00"
value4 = StringConverter.to_string(["a","b","c"]) # Returns 'a,b,c'
```
