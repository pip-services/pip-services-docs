---
type: docs
title: "AnyValue"
linkTitle: "AnyValue"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    Cross-language implementation of a dynamic object that can hold a value of any type.
    It also provides methods to convert the stored value to different types.
---


### Description

The AnyValue class provides a cross-language implementation of a dynamic object that can hold a value of any type. In addition, it provides methods to convert the stored value to different types, such as string or integer.

### Constructors

#### NewAnyValue
Creates a new instance of the object and assigns its value.

> NewAnyValue(value any) [*AnyValue]()

- **value**: any - (optional) value to initialize this object.

#### NewEmptyAnyValue
> NewEmptyAnyValue() [*AnyValue]()


### Fields

<span class="hide-title-link">

#### value
The value stored by this object.
> **value**: any

</span>

### Methods

#### Clone
Creates a binary clone of this object.

> (c [*AnyValue]()) Clone() any

- **returns**: any - clone of this object.

#### Equals
Compares this object value to a specified value.
When direct comparison gives negative results it tries
to compare values as strings.

> (c [*AnyValue]()) Equals(obj any) bool

- **obj**: any - value to be compared with.
- **returns**: bool - true when objects are equal and false otherwise.

#### EqualsAsType
Compares this object value to a specified value.
When direct comparison gives negative results it converts 
values to type specified by type code and compares them again.    
See [TypeConverter.toType](../../convert/type_converter/#totype)

> (c [*AnyValue]()) EqualsAsType(typ [convert.TypeCode](../../convert/type_code), obj any) bool

- **type**: [convert.TypeCode](../../convert/type_code) - value to be compared with.
- **obj**: any - args to be compared with.
- **returns**: bool - true when objects are equal and false otherwise.


#### GetAsArray
Converts an object value into an AnyArray or returns an empty AnyArray if the conversion is not possible.  
See [AnyValueArray.NewAnyValueArrayFromValue](../any_value_array/#newanyvaluearrayfromvalue)

> (c [*AnyValue]()) GetAsArray() [*AnyValueArray](../any_value_array)

- **returns**: [*AnyValueArray](../any_value_array) - AnyArray value or empty AnyArray if the conversion is not supported. 

#### GetAsBoolean
Converts an object value into a boolean or returns false if the conversion is not possible.

> (c [*AnyValue]()) GetAsBoolean() bool

- **returns**: bool - string value or false if the conversion is not supported. 

#### GetAsBooleanWithDefault
Converts an object value into a boolean or returns the default value if the conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> (c [*AnyValue]()) GetAsBooleanWithDefault(defaultValue bool) bool

- **defaultValue**: bool - default value.
- **returns**: bool - boolean value or default if the conversion is not supported. 

#### GetAsDateTime
Converts an object value into a Date or returns the current date if the conversion is not possible.

> (c [*AnyValue]()) GetAsDateTime() time.Time

- **returns**: time.Time - Date value or current date if conversion is not supported.

#### GetAsDateTimeWithDefault
Converts an object value into a Date or returns the default value if the conversion is not possible.   
See [DateTimeConverter.ToDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> (c [*AnyValue]()) GetAsDateTimeWithDefault(defaultValue time.Time) time.Time

- **defaultValue**: time.Time - default value.
- **returns**: time.Time - Date value or default value if the conversion is not supported.


#### GetAsDouble
Converts an object value into a double or returns 0 if the conversion is not possible.

> (c [*AnyValue]()) GetAsDouble() float64

- **returns**: float64 - double value or 0 if conversion is not supported.


#### GetAsDoubleWithDefault
Converts an object value into a double or returns a default value if the conversion is not possible.    
See [DoubleConverter.ToDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> (c [*AnyValue]()) GetAsDoubleWithDefault(defaultValue float64) float64

- **defaultValue**: float64 - default value.
- **returns**: float64 - double value or default value if the conversion is not supported.


#### GetAsFloat
Converts an object value into a float or returns 0 if the conversion is not possible.

> (c [*AnyValue]()) GetAsFloat() float32 

- **returns**: float32 - float value or 0 if the conversion is not supported. 


#### GetAsFloatWithDefault
Converts an object value into a float or returns a default value if the conversion is not possible.    
See [FloatConverter.ToFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> (c [*AnyValue]()) GetAsFloatWithDefault(defaultValue float32) float32

- **defaultValue**: float32 - default value.
- **returns**: float32 - float value or default value if the conversion is not supported.


#### GetAsInteger
Converts an object value into an integer or returns 0 if the conversion is not possible.

> (c [*AnyValue]()) GetAsInteger() int

- **returns**: int - integer value or 0 if the conversion is not supported. 


#### GetAsIntegerWithDefault
Converts an object value into an integer or returns a default value if the conversion is not possible.    
See [IntegerConverter.ToIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> (c [*AnyValue]()) GetAsIntegerWithDefault(defaultValue int) int

- **defaultValue**: int - the default value.
- **returns**: int -  integer value or default if conversion is not supported.

#### GetAsNullableUInteger
GetAsNullableUInteger converts object value into an unsigned integer or returns default value if conversion is not possible.

> (c [*AnyValue]()) GetAsNullableUInteger() (uint, bool)

- **returns**: (uint, bool) - integer value or default if conversion is not supported.

#### GetAsUInteger
GetAsUInteger converts object value into an unsigned integer or returns 0 if conversion is not possible.

> (c [*AnyValue]()) GetAsUInteger() 

- **returns**: uint - unsigned integer value or 0 if conversion is not supported.

#### GetAsUIntegerWithDefault
GetAsUIntegerWithDefault converts object value into a unsigned integer or returns default value if conversion is not possible.

> (c [*AnyValue]()) GetAsUIntegerWithDefault(defaultValue uint) uint

- **defaultValue**: uint - the default value 
- **returns**: uint - unsigned integer value or default if conversion is not supported.

#### GetAsLong
Converts an object value into a long or returns 0 if the conversion is not possible.

> (c [*AnyValue]()) GetAsLong() int64

- **returns**: int64 -  long value or 0 if the conversion is not supported. 


#### GetAsLongWithDefault
Converts an object value into a long or returns a default value if the conversion is not possible.    
See [LongConverter.ToLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> (c [*AnyValue]()) GetAsLongWithDefault(defaultValue int64) int64

- **defaultValue**: int64 - the default value.
- **returns**: int64 -  long value or default if the conversion is not supported. 

#### GetAsNullableULong
GetAsNullableULong converts object value into an unsigned long or returns default value if conversion is not possible.

> (c [*AnyValue]()) GetAsNullableULong() (uint64, bool)

- **returns**: (uint64, bool) - long value or default if conversion is not supported. 

#### GetAsULongWithDefault 
GetAsULongWithDefault converts object value into a unsiged long or returns default value if conversion is not possible.

> (c [*AnyValue]()) GetAsULongWithDefault(defaultValue uint64) uint64

- **defaultValue**: uint64 - the default value
- **returns**: uint64 - unsigned long value or default if conversion is not supported.

#### GetAsMap
Converts an object value into AnyMap or returns an empty AnyMap if the conversion is not possible.    
See [AnyValueMap.NewAnyValueMapFromValue](../any_value_map/#newanyvaluemapfromvalue)

> (c [*AnyValue]()) GetAsMap() [*AnyValueMap](../any_value_map)

- **returns**: [*AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if the conversion is not supported.


#### GetAsNullableBoolean
Converts an object value into a boolean or returns nil if the conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> (c [*AnyValue]()) GetAsNullableBoolean() (bool, bool)

- **returns**: (bool, bool) - boolean value and true or false and false if conversion is not supported.


#### GetAsNullableDateTime
Converts an object value into a Date or returns nil if the conversion is not possible.   
See [DateTimeConverter.ToNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> (c [*AnyValue]()) GetAsNullableDateTime() (time.Time, bool)

- **returns**: (time.Time, bool) - DateTime value and true or zero time and false if conversion is not supported.


#### GetAsNullableDouble
Converts an object value into a double or returns nil if the conversion is not possible.    
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> (c [*AnyValue]()) GetAsNullableDouble() (float64, bool)

- **returns**: (float64, bool) - double value and true or 0.0 and false if conversion is not supported.


#### GetAsNullableDuration
GetAsNullableDuration converts object value into a Duration or returns null if conversion is not possible.

> (c [*AnyValue]()) GetAsNullableDuration() (time.Duration, bool)

- **returns**: (time.Duration, bool) - Duration value and true or 0 and false if conversion is not supported.

#### GetAsDuration 
GetAsDuration converts object value into a Duration or returns current date if conversion is not possible.

> (c [*AnyValue]()) GetAsDuration() time.Duration

- **returns**: time.Duration - Duration value or current date if conversion is not supported.

#### GetAsDurationWithDefault 
GetAsDurationWithDefault converts object value into a Duration or returns default value if conversion is not possible.

> (c [*AnyValue]()) GetAsDurationWithDefault(defaultValue time.Duration) time.Duration

- **defaultValue**: time.Duration - the default value 
- **returns**: time.Duration - Duration value or default if conversion is not supported.

#### GetAsNullableFloat
Converts an object value into a float or returns nil if the conversion is not possible.    
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> (c [*AnyValue]()) GetAsNullableFloat() (float32, bool)

- **returns**: (float32, bool) - float value and true or 0.0 and false if conversion is not supported.


#### GetAsNullableInteger
Converts an object value into an integer or returns nil if the conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> (c [*AnyValue]()) GetAsNullableInteger() (int, bool)

- **returns**: (int, bool) - integer value and true or 0 and false if conversion is not supported. 


#### GetAsNullableLong
Converts an object value into a long or returns nil if the conversion is not possible.   
See [LongConverter.ToNullableLong](../../convert/long_converter/#tonullablelong)

> (c [*AnyValue]()) GetAsNullableLong() (int64, bool)

- **returns**: (int64, bool) - long value and true or 0 and false if conversion is not supported. 


#### GetAsNullableString
Converts an object value into a string or returns nil if the conversion is not possible.    
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring)

> (c [*AnyValue]()) GetAsNullableString() (string, bool)

- **returns**: (string, bool) - string and true value or "" and false if conversion is not supported. 


#### GetAsNullableType
Converts an object value into a value defined by a specified typecode.
If the conversion is not possible it returns nil.  
See [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> (c [*AnyValue]()) GetAsNullableType(typ [convert.TypeCode](../../convert/type_code)) (any, bool)

- **type**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **returns**: (any, bool) - value defined by the typecode and true or null and false if conversion is not supported. 


#### GetAsObject
Gets the value stored in this object without any conversions.

> (c [*AnyValue]()) GetAsObject() any

- **returns**: any - object value. 


#### GetAsString
Converts an object value into a string or returns *""* if the conversion is not possible.

> (c [*AnyValue]()) GetAsString() string

- **returns**: string - string value or *""* if the conversion is not supported. 


#### GetAsStringWithDefault
Converts an object value into a string or returns a default value if the conversion is not possible.

> (c [*AnyValue]()) GetAsStringWithDefault(defaultValue string) string

- **defaultValue**: string - default value.
- **returns**: string - string value or default if the conversion is not supported.


#### GetAsType
Converts an object value into a value defined by a specified typecode.
If conversion is not possible it returns default value for the specified type.

> (c [*AnyValue]()) GetAsType(typ [convert.TypeCode](../../convert/type_code)) any

- **typeCode**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **returns**: any - value defined by the typecode or type default value if the conversion is not supported. 


#### GetAsTypeWithDefault
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns a default value.

> (c [*AnyValue]()) GetAsTypeWithDefault(typ [convert.TypeCode](../../convert/type_code), defaultValue any) any

- **typeCode**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **defaultValue**: any - default value
- **returns**: any - value defined by the typecode or type default value if conversion is not supported. 


#### TypeCode
Gets type code for the value stored in this object.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> (c [*AnyValue]()) TypeCode() [convert.TypeCod](../../convert/type_code)

- **returns**: [convert.TypeCod](../../convert/type_code) - type code of the object value. 


#### SetAsObject
Sets a new value for this object

> (c [*AnyValue]()) SetAsObject(value any)

- **value**: any - new object value.



#### String
Gets a string representation of the object.  
See [StringConverter.String](../../convert/string_converter/#tostring)

> (c [*AnyValue]()) String() string

- **returns**: string - string representation of the object.


### Examples

```go
value := data.NewAnyValue("123.456")

value.GetAsInteger() // Result: 123
value.GetAsString()  // Result: "123.456"
value.GetAsFloat()   // Result: 123.456
```

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



