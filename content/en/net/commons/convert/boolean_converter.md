---
type: docs
title: "BooleanConverter"
linkTitle: "BooleanConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The BooleanConverter class allows you to convert different values to boolean values using extended conversion rules.
    
---

### Description    

The BooleanConverter class allows you to convert different values to boolean values using the following rules:

- Numbers: <>0 are true, =0 are false
    
- Strings: "true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false

- DateTime: <>0 total milliseconds are true, =0 are false


### Static methods

#### ToBoolean
Converts value into boolean or returns false when the conversion is not possible.

> `public static` boolean ToBoolean(object value)

- **value**: object - value to convert.
- **returns**: bool - boolean value or false when conversion is not supported.

#### ToBooleanWithDefault
Converts value into boolean or returns default value when the conversion is not possible

> `public static` bool ToBooleanWithDefault(object value, bool defaultValue)

- **value**: object - value to convert.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value or default when the conversion is not supported.


#### ToNullableBoolean
Converts value into boolean or returns null when the conversion is not possible.

> `public static` bool toNullableBoolean(object value)

- **value**: object - value to convert.
- **returns**: bool - boolean value or null when the convertion is not supported.

### Examples

```cs
var value1 = BooleanConverter.ToNullableBoolean(True);     // Returns True
var value2 = BooleanConverter.ToNullableBoolean("yes");    // Returns True
var value3 = BooleanConverter.ToNullableBoolean(123);      // Returns null
var value4 = BooleanConverter.ToNullableBoolean({});       // Returns null

var value5 = BooleanConverter.ToBooleanWithDefault(True,"verdadero");     // Returns True
var value6 = BooleanConverter.ToBooleanWithDefault(123,"verdadero");      // Returns verdadero

var value7 = BooleanConverter.ToBoolean("yes");     // Returns True

```
