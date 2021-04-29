---
type: docs
title: "BooleanConverter"
linkTitle: "BooleanConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values to boolean values using extended conversion rules:

    - Numbers: <>0 are true, =0 are false
    
    - Strings: "true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false

    - DateTime: <>0 total milliseconds are true, =0 are false
---

**Example:**

```python
value1 = BooleanConverter.to_nullable_boolean(true) // true
value2 = BooleanConverter.to_nullable_boolean("yes") // true
value3 = BooleanConverter.to_nullable_boolean(123) // true
value4 = BooleanConverter.to_nullable_boolean({}) // None

```

### Methods

#### to_boolean
Converts value into boolean or returns false when conversion is not possible.

> `static` toBoolean(value: Any): bool

- **value**: Any - the value to convert.
- **returns**: bool - boolean value or false when conversion is not supported.

#### to_boolean_with_default
Converts value into boolean or returns default value when conversion is not possible

> `static` to_boolean_with_default(value: Any, default_value: bool = False): bool

- **value**: Any - the value to convert.
- **default_value**: bool - the default value
- **returns**: bool - boolean value or default when conversion is not supported.


#### to_nullable_boolean
Converts value into boolean or returns null when conversion is not possible.

> `static` to_nullable_boolean(value: Any): bool

- **value**: Any - the value to convert.
- **returns**: bool - boolean value or null when convertion is not supported.