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

- **value**: object - (optional) value used to initialize this object.

Creates a new instance of the object and assigns its value.

> `public` AnyValue([AnyValue]() value)

- **value**: object - (optional) value to initialize this object.

### Properties

#### Value
The value stored by this object.
> `public` object Value [ get, private set ]


### Instance methods

#### Clone
Creates a binary clone of this object.

> `public` object Clone()

- **returns**: object - clone of this object.

#### Equals
Compares this object's value to a specified specified value.
When a direct comparison gives a negative results it tries
to compare values as strings.

> `public override` bool Equals(object obj)

- **obj**: object - value to be compared with.
- **returns**: bool - true when objects are equal and false otherwise.

#### EqualsAs
Compares this object's value to a specified specified value.
When direct comparison gives negative results it converts the
values to a type specified by type code and compares them again.   
**T** - the class type.
See [TypeConverter.ToType](../../convert/type_converter/#totype)

> `public` bool EqualsAs/<T/>(object obj)

- **obj**: object - args to be compared with.
- **returns**: object - true when the objects are equal and false otherwise.


#### GetAsArray
Converts an object's value into an AnyArray or returns and empty AnyArray if the conversion is not possible.  
See [AnyValueArray.FromValue](../any_value_array/#fromvalue)

> `public` [AnyValueArray](../any_value_array) GetAsArray()

- **returns**: [AnyValueArray](../any_value_array) - AnyArray value or an empty AnyArray if the conversion is not supported. 

#### GetAsBoolean
Converts object value into a bool or returns false if the conversion is not possible.

> `public` bool GetAsBoolean()

- **returns**: bool - string value or false if the conversion is not supported. 

#### GetAsBooleanWithDefault
Converts an object's value into a bool or returns a given default value if the conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` bool GetAsBooleanWithDefault(bool defaultValue)

- **defaultValue**: bool - default value.
- **returns**: bool - bool value or a given default if the conversion is not supported. 

#### GetAsDateTime
Converts an object's value into a DateTime or returns the current date if the conversion is not possible.

> `public` DateTime GetAsDateTime()

- **returns**: DateTime - DateTime value or the current date if the conversion is not supported.

#### GetAsDateTimeWithDefault
Converts an object's value into a DateTime or returns a given default value if the conversion is not possible.   
See [DateTimeConverter.ToDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` DateTime GetAsDateTimeWithDefault(DateTime defaultValue)

- **defaultValue**: DateTime - default value.
- **returns**: DateTime - DateTime value or a given default if the conversion is not supported.


#### GetAsNullableTimeSpan
Converts an object's value into TimeSpan or returns null if the conversion is not possible.  

> `public` TimeSpan GetAsNullableTimeSpan()

- **returns**: TimeSpan - TimeSpan value or null if the conversion is not possible.


#### GetAsTimeSpan
Converts an object's value into TimeSpan.

> `public` TimeSpan GetAsTimeSpan()

- **returns**: TimeSpan - TimeSpan value.

#### GetAsTimeSpanWithDefault
Converts an object's value into TimeSpan or returns a given default if the conversion is not possible.  

> `public` TimeSpan GetAsTimeSpanWithDefault(TimeSpan? defaultValue)

- **defaultValue**: TimeSpan - default value
- **returns**: TimeSpan - TimeSpan value or a given default if the conversion is not possible.


#### GetAsNullableEnum
Converts an object's value into an Enum or returns null if the conversion is not possible.  

> `public` T GetAsNullableEnum\<T\>()

- **returns**: T - Enum or null if the conversion is not possible


#### GetAsEnum
Converts an object's value into an Enum.

> `public` T GetAsEnum\<T\>()

- **returns**: T - Enum


#### GetAsEnumWithDefault
Converts an object's value into an Enum or returns a given default value is the conversion is not possible.

> `public` T GetAsEnumWithDefault\<T\>(T defaultValue)

- **defaultValue**: T - default value
- **returns**: T - Enum or given default value if the conversion is not possible.


#### GetAsDouble
Converts object value into a double or returns 0 if the conversion is not possible.

> `public` double GetAsDouble()

- **returns**: double - double value or 0 if the conversion is not supported.


#### GetAsDoubleWithDefault
Converts an object's value into a double or returns a given default value if the conversion is not possible.    
See [DoubleConverter.ToDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> `public` double GetAsDoubleWithDefault(double defaultValue)

- **defaultValue**: double - default value.
- **returns**: double - double value or default if the conversion is not supported.


#### GetAsFloat
Converts an object's value into a float or returns 0 if the conversion is not possible.

> `public` float GetAsFloat()

- **returns**: float - float value or 0 if the conversion is not supported. 


#### GetAsFloatWithDefault
Converts an object's value into a float or returns a given default value if the conversion is not possible.    
See [FloatConverter.ToFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` float GetAsFloatWithDefault(float defaultValue)

- **defaultValue**: float - default value.
- **returns**: float - float value or given default value if the conversion is not supported.


#### GetAsInteger
Converts an object's value into an integer or returns 0 if the conversion is not possible.

> `public` int GetAsInteger()

- **returns**: GetAsInteger - integer value or 0 if the conversion is not supported. 


#### GetAsIntegerWithDefault
Converts an object's value into a integer or returns a given default value if the conversion is not possible.    
See [IntegerConverter.ToIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` int GetAsIntegerWithDefault(int defaultValue)

- **defaultValue**: int - default value.
- **returns**: int -  integer value or given default if the conversion is not supported.


#### GetAsLong
Converts an object's value into a long or returns 0 if the conversion is not possible.

> `public` long GetAsLong()

- **returns**: long -  long value or 0 if the conversion is not supported. 


#### GetAsLongWithDefault
Converts an object's value into a long or returns a given default value if the conversion is not possible.    
See [LongConverter.ToLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> `public` long GetAsLongWithDefault(long defaultValue)

- **defaultValue**: long - default value.
- **returns**: long -  long value or given default if the conversion is not supported. 


#### GetAsMap
Converts an object's value into AnyMap or returns an empty AnyMap if the conversion is not possible.    
See [AnyValueMap.FromValue](../any_value_map/#fromvalue)

> `public` [AnyValueMap](../any_value_map) GetAsMap()

- **returns**: [AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if the conversion is not supported.


#### GetAsNullableBoolean
Converts an object's value into a bool or returns null if the conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> `public` bool GetAsNullableBoolean()

- **returns**: bool - bool value or null if conversion is not supported.


#### GetAsNullableDateTime
Converts an object's value into a DateTime or returns null if conversion is not possible.   
See [DateTimeConverter.ToNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> `public` DateTime sGetAsNullableDateTime()

- **returns**: DateTime - DateTime value or null if the conversion is not supported.


#### GetAsNullableDouble
Converts an object's value into a double or returns null if the conversion is not possible.    
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` double GetAsNullableDouble()

- **returns**: double - double value or null if the conversion is not supported.


#### GetAsNullableFloat
Converts an object's value into a float or returns null if the conversion is not possible.    
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` float GetAsNullableFloat()

- **returns**: float - float value or null if the conversion is not supported.


#### GetAsNullableInteger
Converts an object's value into an integer or returns null if the conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` int GetAsNullableInteger()

- **returns**: int - integer value or null if the conversion is not supported. 


#### GetAsNullableLong
Converts an object's value into a long or returns null if the conversion is not possible.   
See [LongConverter.ToNullableLong](../../convert/long_converter/#tonullablelong)

> `public` long GetAsNullableLong()

- **returns**: long - long value or null if the conversion is not supported. 


#### GetAsNullableString
Converts an object's value into a string or returns null if the conversion is not possible.    
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring)

> `public` string GetAsNullableString()

- **returns**: string - string value or null if the conversion is not supported. 


#### GetAsNullableType
Converts an object's value into a value defined by specified typecode.
If conversion is not possible, it returns null.  
**T** - the class type
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` T GetAsNullableType\<T\>()

- **returns**: T - value defined by the typecode or null if the conversion is not supported. 


#### GetAsObject
Gets the value stored in this object without any conversions.

> `public` object GetAsObject()

- **returns**: object - object value. 


#### GetAsString
Converts an object's value into a string or returns *""* if the conversion is not possible.

> `public` string GetAsString()

- **returns**: string - string value or *""* if the conversion is not supported. 


#### GetAsStringWithDefault
Converts an object value into a string or returns a given default value if the conversion is not possible.

> `public` string GetAsStringWithDefault(string defaultValue)

- **defaultValue**: string - default value.
- **returns**: string - string value or default if the conversion is not supported.


#### GetAsType
Converts an object's value into a value defined by specified typecode.
If the conversion is not possible, it returns a given default value for the specified type.
**T** - the class type.

> `public` T GetAsType\<T\>()

- **returns**: string - value defined by the typecode or given type default value if the conversion is not supported. 


#### GetAsTypeWithDefault
Converts an object's value into a value defined by a specified typecode.
If conversion is not possible, it returns default value.
**T** - the class type.

> `public` T GetAsTypeWithDefault\<T\>(T defaultValue)

- **defaultValue**: T - default value
- **returns**: T - value defined by the typecode or given type default value if the conversion is not supported. 


#### GsetTypeCode!
**Note: this method is not available for this language**

Gets the type code for the value stored in this object.  
See [TypeConverter.ToTypeCode](../../convert/type_converter/#totypecode)

> `public` [TypeCode](../../convert/type_code) GetTypeCode()

- **returns**: [TypeCode](../../convert/type_code) - type code of the object's value. 


#### GetHashCode
Gets an object hash code which can be used to optimize storing and searching.  
See [TypeConverter.ToTypeCode](../../convert/type_converter/#totypecode)

> `public override ` int GetHashCode()

- **returns**: int - object hash code. 


#### SetAsObject
Sets a new value for this object.

> `public` void SetAsObject(object value)

- **value**: object - new object value.



#### ToString
Gets a string representation of the object.  
See [StringConverter.ToString](../../convert/string_converter/#tostring)

> `public override` string ToString()

- **returns**: string - string representation of the object.


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


