---
type: docs
title: "BooleanConverter"
linkTitle: "BooleanConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The BooleanConverter class allows you to convert different values to boolean values using extended conversion rules.
    
---

### Description    

The BooleanConverter class allows you to convert different values to boolean values using the following rules:

- Numbers: <>0 are true, =0 are false
    
- Strings: "true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false

- DateTime: <>0 total milliseconds are true, =0 are false


### Static methods

#### toBoolean
Converts a value into a boolean or returns false when conversion is not possible.

> `static` bool toBoolean(value) 

- **value**: dynamic - value to convert.
- **returns**: bool - boolean value or false when the conversion is not supported.

#### toBooleanWithDefault
Converts a value into a boolean or returns a given default value when the conversion is not possible

> `static` bool toBooleanWithDefault(value, bool defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value or given default when the conversion is not supported.


#### toNullableBoolean
Converts a value into boolean or returns null when the conversion is not possible.

> `static` bool toNullableBoolean(value)

- **value**: dynamic - value to convert.
- **returns**: bool - boolean value or null when the convertion is not supported.

### Examples

```dart
var value1 = BooleanConverter.toNullableBoolean(true); // true
var value2 = BooleanConverter.toNullableBoolean('yes'); // true
var value3 = BooleanConverter.toNullableBoolean(123); // true
var value4 = BooleanConverter.toNullableBoolean({}); // null

```
