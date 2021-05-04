---
type: docs
title: "AnyValue"
linkTitle: "AnyValue"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Cross-language implementation of dynamic object what can hold value of any type.
    The stored value can be converted to different types using variety of accessor methods.
---

**Implements:** [ICloneable](../icloneable)

See also [StringConverter](../../convert/string_converter), [TypeConverter](../../convert/type_converter), 
[BooleanConverter](../../convert/boolean_converter), [IntegerConverter](../../convert/integer_converter),
[LongConverter](../../convert/long_converter), [DoubleConverter](../../convert/double_converter),
[FloatConverter](../../convert/float_converter), [DateTimeConverter](../../convert/date_time_converter),
[ICloneable](../icloneable)

**Example:**
```python
value1 = AnyValue("123.456")

value1.get_as_integer()   # Result: 123
value1.get_as_string()    # Result: "123.456"
value1.get_as_float()     # Result: 123.456
```

### Constructors
Creates a new instance of the object and assigns its value.

> AnyValue(value: Any = None)

- **value**: Any - (optional) value to initialize this object.

### Fields

<span class="hide-title-link">

#### value
The value stored by this object.
> **value**: Any

</span>

### Methods

#### clone
Creates a binary clone of this object.

> clone(): Any

- **returns**: Any - a clone of this object.

#### equals
Compares this object value to specified specified value.
When direct comparison gives negative results it tries
to compare values as strings.

> equals(obj: Any): bool

- **obj**: Any - the value to be compared with.
- **returns**: bool - true when objects are equal and false otherwise.

#### equals_as_type
Compares this object value to specified specified value.
When direct comparison gives negative results it converts 
values to type specified by type code and compare them again.    
See [TypeConverter.to_type](../../convert/type_converter/#to_type)

> equals_as_type(value_type: [TypeCode](../../convert/type_code), obj: Any): bool

- **type**: [TypeCode](../../convert/type_code) - the value to be compared with.
- **obj**: Any - the args to be compared with.
- **returns**: Any - true when objects are equal and false otherwise.


#### get_as_srray
Converts object value into an AnyArray or returns empty AnyArray if conversion is not possible.  
See [AnyValueArray.from_value](../any_value_array/#from_value)

> get_as_array(): [AnyValueArray](../any_value_array)

- **returns**: [AnyArray](../any_array) - AnyArray value or empty AnyArray if conversion is not supported. 

#### get_as_boolean
Converts object value into a boolean or returns false if conversion is not possible.

> get_as_boolean(): bool

- **returns**: bool - string value or false if conversion is not supported. 

#### get_as_boolean_with_default
Converts object value into a boolean or returns default value if conversion is not possible.  
See [BooleanConverter.to_boolean_with_default](../../convert/boolean_converter/#to_boolean_with_default)

> get_as_boolean_with_default(default_value: bool): bool

- **default_value**: bool - the default value.
- **returns**: bool - boolean value or default if conversion is not supported. 

#### get_as_datetime
Converts object value into a Date or returns current date if conversion is not possible.

> get_as_datetime(): datetime

- **returns**: datetime - Date value or current date if conversion is not supported.

#### get_as_datetime_with_default
Converts object value into a Date or returns default value if conversion is not possible.   
See [DateTimeConverter.to_datetime_with_default](../../convert/date_time_converter/#to_datetime_with_default)

> get_as_datetime_with_default(default_value: datetime): datetime

- **default_value**: datetime - the default value.
- **returns**: datetime - datetime value or default if conversion is not supported.


#### get_as_double
Converts object value into a double or returns 0 if conversion is not possible.

> get_as_double(): float

- **returns**: float - double value or 0 if conversion is not supported.


#### get_as_double_with_default
Converts object value into a double or returns default value if conversion is not possible.    
See [DoubleConverter.to_double_with_default](../../convert/double_converter/#to_double_with_default)

> to_double_with_default(default_value: float): float

- **default_value**: float - the default value.
- **returns**: float - double value or default if conversion is not supported.


#### get_as_float
Converts object value into a float or returns 0 if conversion is not possible.

> get_as_float(): float

- **returns**: float - float value or 0 if conversion is not supported. 


#### get_as_float_with_default
Converts object value into a float or returns default value if conversion is not possible.    
See [FloatConverter.to_float_with_default](../../convert/float_converter/#to_float_with_default)

> get_as_float_with_default(default_value: float): float

- **default_value**: float - the default value.
- **returns**: float - float value or default if conversion is not supported.


#### get_as_integer
Converts object value into an integer or returns 0 if conversion is not possible.

> get_as_integer(): int

- **returns**: int - integer value or 0 if conversion is not supported. 


#### get_as_integer_with_default
Converts object value into a integer or returns default value if conversion is not possible.    
See [IntegerConverter.to_integer_with_default](../../convert/integer_converter/#to_integer_with_default)

> get_as_integer_with_default(default_value: int): int

- **default_value**: int - the default value.
- **returns**: int -  integer value or default if conversion is not supported.


#### get_as_long
Converts object value into a long or returns 0 if conversion is not possible.

> get_as_long(): float

- **returns**: float -  long value or 0 if conversion is not supported. 


#### get_as_long_with_default
Converts object value into a long or returns default value if conversion is not possible.    
See [LongConverter.to_long_with_default](../../convert/long_converter/#to_long_with_default)

> get_as_long_with_default(default_value: float): float

- **default_value**: float - the default value.
- **returns**: float -  long value or default if conversion is not supported. 


#### get_as_map
Converts object value into AnyMap or returns empty AnyMap if conversion is not possible.    
See [AnyValueMap.from_value](../any_value_map/#from_value)

> get_as_map(): [AnyValueMap](../any_value_map)

- **returns**: [AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if conversion is not supported.


#### get_as_nullable_boolean
Converts object value into a boolean or returns null if conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> get_as_nullable_boolean(): Optional[bool]

- **returns**: Optional[bool] - boolean value or null if conversion is not supported.


#### get_as_nullable_datetime
Converts object value into a Date or returns null if conversion is not possible.   
See [DateTimeConverter.to_nullable_datetime](../../convert/date_time_converter/#to_nullable_datetime)

> get_as_nullable_datetime(): Optional[datetime]

- **returns**: Optional[datetime] - Date value or null if conversion is not supported.


#### get_as_nullable_double
Converts object value into a double or returns null if conversion is not possible.    
See [DoubleConverter.to_nullable_double](../../convert/double_converter/#to_nullable_double)

> get_as_nullable_double(): Optional[float]

- **returns**: Optional[float] - double value or null if conversion is not supported.


#### get_as_nullable_float
Converts object value into a float or returns null if conversion is not possible.    
See [FloatConverter.to_nullable_float](../../convert/float_converter/#to_nullable_float)

> get_as_nullable_float(): Optional[float]

- **returns**: Optional[float] - float value or null if conversion is not supported.


#### get_as_nullable_integer
Converts object value into an integer or returns null if conversion is not possible.  
See [IntegerConverter.to_nullable_integer](../../convert/integer_converter/#to_nullable_integer)

> get_as_nullable_integer(): Optional[int]

- **returns**: Optional[int] - integer value or null if conversion is not supported. 


#### get_as_nullable_long
Converts object value into a long or returns null if conversion is not possible.   
See [LongConverter.to_nullable_long](../../convert/long_converter/#to_nullable_long)

> get_as_nullable_long(): Optional[float]

- **returns**: Optional[float] - long value or null if conversion is not supported. 


#### get_as_nullable_string
Converts object value into a string or returns null if conversion is not possible.    
See [StringConverter.to_nullable_string](../../convert/string_converter/#to_nullable_string)

> get_as_nullable_string(): Optional[str]

- **returns**: Optional[str] - string value or null if conversion is not supported. 


#### get_as_nullable_type
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns null.  
See [TypeConverter.to_nullable_type](../../convert/type_converter/#to_nullable_type)

> get_as_nullable_type(value_type: [TypeCode](../../convert/type_code)): Optional[T]

- **value_type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **returns**: Optional[T] - value defined by the typecode or null if conversion is not supported. 


#### get_as_object
Gets the value stored in this object without any conversions

> get_as_object(): Any

- **returns**: Any - the object value. 


#### get_as_string
Converts object value into a string or returns *""* if conversion is not possible.

> get_as_string(): str

- **returns**: str - string value or *""* if conversion is not supported. 


#### get_as_string_with_default
Converts object value into a string or returns default value if conversion is not possible.

> get_as_string_with_default(default_value: str): str

- **default_value**: str - the default value.
- **returns**: srt - string value or default if conversion is not supported.


#### get_as_type
Converts object args into a args defined by specied typecode.
If conversion is not possible it returns default args for the specified type.

> get_as_type(value_type: [TypeCode](../../convert/type_code)): T

- **value_type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **returns**: T - args defined by the typecode or type default args if conversion is not supported.


#### get_as_type_with_default
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns default value.

> get_as_type_with_default(value_type: [TypeCode](../../convert/type_code), default_value: T): T

- **value_type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **default_value**: T - the default value
- **returns**: T - value defined by the typecode or type default value if conversion is not supported. 


#### get_type_code
Gets type code for the value stored in this object.  
See [TypeConverter.to_type_code](../../convert/type_converter/#to_type_code)

> get_type_code(): [TypeCode](../../convert/type_code)

- **returns**: [TypeCode](../../convert/type_code) - type code of the object value. 


#### set_as_object
Sets a new value for this object

> set_as_object(value: Any)

- **value**: Any - the new object value.



#### to_string
Gets a string representation of the object.  
See [StringConverter.toString](../../convert/string_converter/#tostring)

> to_string(): Any

- **returns**: Any - a string representation of the object.


### See also
- #### [StringConverter](../../convert/string_converter)
- #### [TypeConverter](../../convert/type_converter)
- #### [BooleanConverter](../../convert/boolean_converter)
- #### [IntegerConverter](../../convert/integer_converter)
- #### [LongConverter](../../convert/long_converter)
- #### [DoubleConverter](../../convert/double_converter)
- #### [FloatConverter](../../convert/float_converter)
- #### [DateTimeConverter](../../convert/date_time_converter)
- #### [ICloneable](../icloneable)


