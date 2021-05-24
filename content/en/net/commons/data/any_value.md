---
type: docs
title: "AnyValue"
linkTitle: "AnyValue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Cross-language implementation of a dynamic object that can hold a value of any type.
    It also provides methods to convert the stored value to different types.
---

**Inherits**: [ICloneable](../icloneable)

### Description

The AnyValue class provides a cross-language implementation of a dynamic object that can hold a value of any type. In addition, it provides methods to convert the stored value to different types, such as string or integer.

### Constructors
Creates a new instance of the object and assigns its value.

> `public` AnyValue(object value = null)

- **value**: object - (optional) value to initialize this object.

Creates a new instance of the object and assigns its value.

> `public` AnyValue([AnyValue]() value)

- **value**: object - (optional) value to initialize this object.

### Properties

#### Value
The value stored by this object.
> `public` object **Value** [ get, private set ]


### Instance methods

#### Clone
Creates a binary clone of this object.

> `public` object Clone()

- **returns**: object - a clone of this object.

#### Equals
Compares this object value to specified specified value.
When direct comparison gives negative results it tries
to compare values as strings.

> `public override` bool Equals(object obj)

- **obj**: object - the value to be compared with.
- **returns**: bool - true when objects are equal and false otherwise.

#### EqualsAs
Compares this object value to specified specified value.
When direct comparison gives negative results it converts 
values to type specified by type code and compare them again.   
**T** - the class type.
See [TypeConverter.ToType](../../convert/type_converter/#totype)

> `public` bool EqualsAs/<T/>(object obj)

- **obj**: object - the args to be compared with.
- **returns**: any - true when objects are equal and false otherwise.


#### GetAsArray
Converts object value into an AnyArray or returns empty AnyArray if conversion is not possible.  
See [AnyValueArray.FromValue](../any_value_array/#fromvalue)

> `public` [AnyValueArray](../any_value_array) GetAsArray()

- **returns**: [AnyArray](../any_array) - AnyArray value or empty AnyArray if conversion is not supported. 

#### GetAsBoolean
Converts object value into a bool or returns false if conversion is not possible.

> `public` bool GetAsBoolean()

- **returns**: bool - string value or false if conversion is not supported. 

#### GetAsBooleanWithDefault
Converts object value into a bool or returns default value if conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` bool GetAsBooleanWithDefault(bool defaultValue)

- **defaultValue**: bool - the default value.
- **returns**: bool - bool value or default if conversion is not supported. 

#### GetAsDateTime
Converts object value into a DateTime or returns current date if conversion is not possible.

> `public` DateTime GetAsDateTime()

- **returns**: DateTime - DateTime value or current date if conversion is not supported.

#### GetAsDateTimeWithDefault
Converts object value into a DateTime or returns default value if conversion is not possible.   
See [DateTimeConverter.ToDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` DateTime GetAsDateTimeWithDefault(DateTime defaultValue)

- **defaultValue**: DateTime - the default value.
- **returns**: DateTime - DateTime value or default if conversion is not supported.


#### GetAsNullableTimeSpan
TODO: add description

> `public` TimeSpan GetAsNullableTimeSpan()

- **returns**: TimeSpan - TODO: add description


#### GetAsTimeSpan
TODO: add description

> `public` TimeSpan GetAsTimeSpan()

- **returns**: TimeSpan - TODO: add description

#### GetAsTimeSpanWithDefault
TODO: add description

> `public` TimeSpan GetAsTimeSpanWithDefault(TimeSpan? defaultValue)

- **defaultValue**: TimeSpan - TODO: add description
- **returns**: TimeSpan - TODO: add description


#### GetAsNullableEnum
TODO: add description

> `public` T GetAsNullableEnum\<T\>()

- **returns**: T - TODO: add description


#### GetAsEnum
TODO: add description

> `public` T GetAsEnum\<T\>(TimeSpan? key)

- **key**: TimeSpan - TODO: add description
- **returns**: T - TODO: add description


#### GetAsEnumWithDefault
TODO: add description

> `public` T GetAsEnumWithDefault\<T\>(T defaultValue)

- **defaultValue**: T - TODO: add description
- **returns**: T - TODO: add description


#### GetAsDouble
Converts object value into a double or returns 0 if conversion is not possible.

> `public` double GetAsDouble()

- **returns**: double - double value or 0 if conversion is not supported.


#### GetAsDoubleWithDefault
Converts object value into a double or returns default value if conversion is not possible.    
See [DoubleConverter.ToDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> `public` double GetAsDoubleWithDefault(double defaultValue)

- **defaultValue**: double - the default value.
- **returns**: double - double value or default if conversion is not supported.


#### GetAsFloat
Converts object value into a float or returns 0 if conversion is not possible.

> `public` float GetAsFloat()

- **returns**: float - float value or 0 if conversion is not supported. 


#### GetAsFloatWithDefault
Converts object value into a float or returns default value if conversion is not possible.    
See [FloatConverter.ToFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` float GetAsFloatWithDefault(float defaultValue)

- **defaultValue**: float - the default value.
- **returns**: float - float value or default if conversion is not supported.


#### GetAsInteger
Converts object value into an integer or returns 0 if conversion is not possible.

> `public` int GetAsInteger()

- **returns**: GetAsInteger - integer value or 0 if conversion is not supported. 


#### GetAsIntegerWithDefault
Converts object value into a integer or returns default value if conversion is not possible.    
See [IntegerConverter.ToIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` int GetAsIntegerWithDefault(int defaultValue)

- **defaultValue**: int - the default value.
- **returns**: int -  integer value or default if conversion is not supported.


#### GetAsLong
Converts object value into a long or returns 0 if conversion is not possible.

> `public` long GetAsLong()

- **returns**: long -  long value or 0 if conversion is not supported. 


#### GetAsLongWithDefault
Converts object value into a long or returns default value if conversion is not possible.    
See [LongConverter.ToLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> `public` long GetAsLongWithDefault(long defaultValue)

- **defaultValue**: long - the default value.
- **returns**: long -  long value or default if conversion is not supported. 


#### GetAsMap
Converts object value into AnyMap or returns empty AnyMap if conversion is not possible.    
See [AnyValueMap.FromValue](../any_value_map/#fromvalue)

> `public` [AnyValueMap](../any_value_map) GetAsMap()

- **returns**: [AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if conversion is not supported.


#### GetAsNullableBoolean
Converts object value into a bool or returns null if conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> `public` bool GetAsNullableBoolean()

- **returns**: bool - bool value or null if conversion is not supported.


#### GetAsNullableDateTime
Converts object value into a DateTime or returns null if conversion is not possible.   
See [DateTimeConverter.ToNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> `public` DateTime sGetAsNullableDateTime()

- **returns**: DateTime - DateTime value or null if conversion is not supported.


#### GetAsNullableDouble
Converts object value into a double or returns null if conversion is not possible.    
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` double GetAsNullableDouble()

- **returns**: double - double value or null if conversion is not supported.


#### GetAsNullableFloat
Converts object value into a float or returns null if conversion is not possible.    
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` float GetAsNullableFloat()

- **returns**: float - float value or null if conversion is not supported.


#### GetAsNullableInteger
Converts object value into an integer or returns null if conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` int GetAsNullableInteger()

- **returns**: int - integer value or null if conversion is not supported. 


#### GetAsNullableLong
Converts object value into a long or returns null if conversion is not possible.   
See [LongConverter.ToNullableLong](../../convert/long_converter/#tonullablelong)

> `public` long GetAsNullableLong()

- **returns**: long - long value or null if conversion is not supported. 


#### GetAsNullableString
Converts object value into a string or returns null if conversion is not possible.    
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring)

> `public` string GetAsNullableString()

- **returns**: string - string value or null if conversion is not supported. 


#### GetAsNullableType
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns null.  
**T** - the class type
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` T GetAsNullableType\<T\>()

- **returns**: T - value defined by the typecode or null if conversion is not supported. 


#### GetAsObject
Gets the value stored in this object without any conversions

> `public` object GetAsObject()

- **returns**: object - the object value. 


#### GetAsString
Converts object value into a string or returns *""* if conversion is not possible.

> `public` string GetAsString()

- **returns**: string - string value or *""* if conversion is not supported. 


#### GetAsStringWithDefault
Converts object value into a string or returns default value if conversion is not possible.

> `public` string GetAsStringWithDefault(string defaultValue)

- **defaultValue**: string - the default value.
- **returns**: string - string value or default if conversion is not supported.


#### GetAsType
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.
**T** - the class type.

> `public` T GetAsType\<T\>()

- **returns**: string - value defined by the typecode or type default value if conversion is not supported. 


#### GetAsTypeWithDefault
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns default value.
**T** - the class type.

> `public` T GetAsTypeWithDefault\<T\>(T defaultValue)

- **defaultValue**: T - the default value
- **returns**: T - value defined by the typecode or type default value if conversion is not supported. 


#### GsetTypeCode!
**TODO: this method is not realized yet for this language**

Gets type code for the value stored in this object.  
See [TypeConverter.ToTypeCode](../../convert/type_converter/#totypecode)

> `public` [TypeCode](../../convert/type_code) GetTypeCode()

- **returns**: [TypeCode](../../convert/type_code) - type code of the object value. 


#### GetHashCode
Gets an object hash code which can be used to optimize storing and searching.  
See [TypeConverter.ToTypeCode](../../convert/type_converter/#totypecode)

> `public override ` int GetHashCode()

- **returns**: int - an object hash code. 


#### SetAsObject
Sets a new value for this object

> `public` void SetAsObject(object value)

- **value**: object - the new object value.



#### ToString
Gets a string representation of the object.  
See [StringConverter.ToString](../../convert/string_converter/#tostring)

> `public override` string ToString()

- **returns**: any - a string representation of the object.


### Examples

```cs
var value1 = new AnyValue("123.456");

value1.GetAsInteger();   // Result: 123
value1.GetAsString();    // Result: "123.456"
value1.GetAsFloat();     // Result: 123.456
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


