---
type: docs
title: "AnyValue"
linkTitle: "AnyValue"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Cross-language implementation of a dynamic object that can hold a value of any type.
    It also provides methods to convert the stored value to different types.
---


### Description

The AnyValue class provides a cross-language implementation of a dynamic object that can hold a value of any type. In addition, it provides methods to convert the stored value to different types, such as string or integer.

### Constructors

#### NewAnyValue
Creates a new instance of the object and assigns its value.

> NewAnyValue(value interface{}) [*AnyValue]()

- **value**: interface{} - (optional) value to initialize this object.

#### NewEmptyAnyValue
> NewEmptyAnyValue() [*AnyValue]()


### Fields

<span class="hide-title-link">

#### value
The value stored by this object.
> **value**: interface{}

</span>

### Methods

#### Clone
Creates a binary clone of this object.

> (c [*AnyValue]()) Clone() interface{}

- **returns**: interface{} - a clone of this object.

#### Equals
Compares this object value to specified specified value.
When direct comparison gives negative results it tries
to compare values as strings.

> (c [*AnyValue]()) Equals(obj interface{}) bool

- **obj**: interface{} - the value to be compared with.
- **returns**: bool - true when objects are equal and false otherwise.

#### EqualsAsType
Compares this object value to specified specified value.
When direct comparison gives negative results it converts 
values to type specified by type code and compare them again.    
See [TypeConverter.toType](../../convert/type_converter/#totype)

> (c [*AnyValue]()) EqualsAsType(typ [convert.TypeCode](../../convert/type_code), obj interface{}) bool

- **type**: [convert.TypeCode](../../convert/type_code) - the value to be compared with.
- **obj**: interface{} - the args to be compared with.
- **returns**: bool - true when objects are equal and false otherwise.


#### GetAsArray
Converts object value into an AnyArray or returns empty AnyArray if conversion is not possible.  
See [AnyValueArray.NewAnyValueArrayFromValue](../any_value_array/#newanyvaluearrayfromvalue)

> (c [*AnyValue]()) GetAsArray() [*AnyValueArray](../any_value_array)

- **returns**: [*AnyValueArray](../any_value_array) - AnyArray value or empty AnyArray if conversion is not supported. 

#### GetAsBoolean
Converts object value into a boolean or returns false if conversion is not possible.

> (c [*AnyValue]()) GetAsBoolean() bool

- **returns**: bool - string value or false if conversion is not supported. 

#### GetAsBooleanWithDefault
Converts object value into a boolean or returns default value if conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> (c [*AnyValue]()) GetAsBooleanWithDefault(defaultValue bool) bool

- **defaultValue**: bool - the default value.
- **returns**: bool - boolean value or default if conversion is not supported. 

#### GetAsDateTime
Converts object value into a Date or returns current date if conversion is not possible.

> (c [*AnyValue]()) GetAsDateTime() time.Time

- **returns**: time.Time - Date value or current date if conversion is not supported.

#### GetAsDateTimeWithDefault
Converts object value into a Date or returns default value if conversion is not possible.   
See [DateTimeConverter.ToDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> (c [*AnyValue]()) GetAsDateTimeWithDefault(defaultValue time.Time) time.Time

- **defaultValue**: time.Time - the default value.
- **returns**: time.Time - Date value or default if conversion is not supported.


#### GetAsDouble
Converts object value into a double or returns 0 if conversion is not possible.

> (c [*AnyValue]()) GetAsDouble() float64

- **returns**: float64 - double value or 0 if conversion is not supported.


#### GetAsDoubleWithDefault
Converts object value into a double or returns default value if conversion is not possible.    
See [DoubleConverter.ToDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> (c [*AnyValue]()) GetAsDoubleWithDefault(defaultValue float64) float64

- **defaultValue**: float64 - the default value.
- **returns**: float64 - double value or default if conversion is not supported.


#### GetAsFloat
Converts object value into a float or returns 0 if conversion is not possible.

> (c [*AnyValue]()) GetAsFloat() float32 

- **returns**: float32 - float value or 0 if conversion is not supported. 


#### GetAsFloatWithDefault
Converts object value into a float or returns default value if conversion is not possible.    
See [FloatConverter.ToFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> (c [*AnyValue]()) GetAsFloatWithDefault(defaultValue float32) float32

- **defaultValue**: float32 - the default value.
- **returns**: float32 - float value or default if conversion is not supported.


#### GetAsInteger
Converts object value into an integer or returns 0 if conversion is not possible.

> (c [*AnyValue]()) GetAsInteger() int

- **returns**: int - integer value or 0 if conversion is not supported. 


#### GetAsIntegerWithDefault
Converts object value into a integer or returns default value if conversion is not possible.    
See [IntegerConverter.ToIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> (c [*AnyValue]()) GetAsIntegerWithDefault(defaultValue int) int

- **defaultValue**: int - the default value.
- **returns**: int -  integer value or default if conversion is not supported.


#### GetAsLong
Converts object value into a long or returns 0 if conversion is not possible.

> (c [*AnyValue]()) GetAsLong() int64

- **returns**: int64 -  long value or 0 if conversion is not supported. 


#### GetAsLongWithDefault
Converts object value into a long or returns default value if conversion is not possible.    
See [LongConverter.ToLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> (c [*AnyValue]()) GetAsLongWithDefault(defaultValue int64) int64

- **defaultValue**: int64 - the default value.
- **returns**: int64 -  long value or default if conversion is not supported. 


#### GetAsMap
Converts object value into AnyMap or returns empty AnyMap if conversion is not possible.    
See [AnyValueMap.NewAnyValueMapFromValue](../any_value_map/#newanyvaluemapfromvalue)

> (c [*AnyValue]()) GetAsMap() [*AnyValueMap](../any_value_map)

- **returns**: [*AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if conversion is not supported.


#### GetAsNullableBoolean
Converts object value into a boolean or returns nil if conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> (c [*AnyValue]()) GetAsNullableBoolean() *bool

- **returns**: *bool - boolean value or nil if conversion is not supported.


#### GetAsNullableDateTime
Converts object value into a Date or returns nil if conversion is not possible.   
See [DateTimeConverter.ToNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> (c [*AnyValue]()) GetAsNullableDateTime() *time.Time

- **returns**: *time.Time - Date value or nil if conversion is not supported.


#### GetAsNullableDouble
Converts object value into a double or returns nil if conversion is not possible.    
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> (c [*AnyValue]()) GetAsNullableDouble() *float64

- **returns**: *float64 - double value or nil if conversion is not supported.


#### GetAsNullableFloat
Converts object value into a float or returns nil if conversion is not possible.    
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> (c [*AnyValue]()) GetAsNullableFloat() *float32

- **returns**: *float32 - float value or nil if conversion is not supported.


#### GetAsNullableInteger
Converts object value into an integer or returns nil if conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> (c [*AnyValue]()) GetAsNullableInteger() *int

- **returns**: *int - integer value or nil if conversion is not supported. 


#### GetAsNullableLong
Converts object value into a long or returns nil if conversion is not possible.   
See [LongConverter.ToNullableLong](../../convert/long_converter/#tonullablelong)

> (c [*AnyValue]()) GetAsNullableLong() *int64

- **returns**: *int64 - long value or nil if conversion is not supported. 


#### GetAsNullableString
Converts object value into a string or returns nil if conversion is not possible.    
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring)

> (c [*AnyValue]()) GetAsNullableString() *string

- **returns**: *string - string value or nil if conversion is not supported. 


#### GetAsNullableType
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns nil.  
See [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> (c [*AnyValue]()) GetAsNullableType(typ [convert.TypeCode](../../convert/type_code)) interface{}

- **type**: [convert.TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **returns**: interface{} - value defined by the typecode or nil if conversion is not supported. 


#### GetAsObject
Gets the value stored in this object without any conversions

> (c [*AnyValue]()) GetAsObject() interface{}

- **returns**: interface{} - the object value. 


#### GetAsString
Converts object value into a string or returns *""* if conversion is not possible.

> (c [*AnyValue]()) GetAsString() string

- **returns**: string - string value or *""* if conversion is not supported. 


#### GetAsStringWithDefault
Converts object value into a string or returns default value if conversion is not possible.

> (c [*AnyValue]()) GetAsStringWithDefault(defaultValue string) string

- **defaultValue**: string - the default value.
- **returns**: string - string value or default if conversion is not supported.


#### GetAsType
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.

> (c [*AnyValue]()) GetAsType(typ [convert.TypeCode](../../convert/type_code)) interface{}

- **typeCode**: [convert.TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **returns**: interface{} - value defined by the typecode or type default value if conversion is not supported. 


#### GetAsTypeWithDefault
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns default value.

> (c [*AnyValue]()) GetAsTypeWithDefault(typ [convert.TypeCode](../../convert/type_code), defaultValue interface{}) interface{}

- **typeCode**: [convert.TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **defaultValue**: interface{} - the default value
- **returns**: interface{} - value defined by the typecode or type default value if conversion is not supported. 


#### TypeCode
Gets type code for the value stored in this object.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> (c [*AnyValue]()) TypeCode() [convert.TypeCod](../../convert/type_code)

- **returns**: [convert.TypeCod](../../convert/type_code) - type code of the object value. 


#### SetAsObject
Sets a new value for this object

> (c [*AnyValue]()) SetAsObject(value interface{})

- **value**: interface{} - the new object value.



#### String
Gets a string representation of the object.  
See [StringConverter.String](../../convert/string_converter/#tostring)

> (c [*AnyValue]()) String() string

- **returns**: string - a string representation of the object.


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


