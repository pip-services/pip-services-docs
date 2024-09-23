---
type: docs
title: "AnyValue"
linkTitle: "AnyValue"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    Cross-language implementation of a dynamic object that can hold a value of any type.
    It also provides methods to convert the stored value to different types.
---

**Implements:** [ICloneable](../icloneable)

### Description

The AnyValue class provides a cross-language implementation of a dynamic object that can hold a value of any type. In addition, it provides methods to convert the stored value to different types, such as string or integer.

### Constructors
Creates a new instance of the object and assigns its value.

> `public` AnyValue(Object value)

- **value**: Object - (optional) value to initialize this object.

### Fields

<span class="hide-title-link">

#### value
Value stored by this object.
> `private` Object **_value**

</span>

### Instance methods

#### clone
Creates a binary clone of this object.

> `public` Object clone()

- **returns**: Object - clone of this object.

#### equals
Compares this object's value to a specified specified value.
When a direct comparison gives a negative result it tries
to compare the values as strings.

> `public` boolean equals(Object obj)

- **obj**: Object - value to be compared with.
- **returns**: boolean - true when objects are equal and false otherwise.

#### equalsAsType
Compares this object's value to a specified value.
When direct comparison gives a negative result it converts the 
values to a type specified by the type code and compares them again.    
See [TypeConverter.toType](../../convert/type_converter/#totype)

> `public` <T> boolean equalsAsType(Class<T> type, Object obj)

- **type**: Class<T> - value to be compared with.
- **obj**: Object - args to be compared with.
- **returns**: <T> boolean - true when the objects are equal and false otherwise.


#### getAsArray
Converts the object's value into an AnyArray or returns an empty AnyArray if the conversion is not possible.  
See [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public` [AnyValueArray](../any_value_array) getAsArray()

- **returns**: [AnyValueArray](../any_value_array) - AnyArray value or empty AnyArray if the conversion is not supported. 

#### getAsBoolean
Converts an object's value into a boolean or returns false if the conversion is not possible.

> `public` Boolean getAsBoolean()

- **returns**: Boolean - string value or false if the conversion is not supported. 

#### getAsBooleanWithDefault
Converts an object's value into a boolean or returns a given default value if the conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` boolean getAsBooleanWithDefault(boolean defaultValue)

- **defaultValue**: boolean - default value.
- **returns**: boolean - boolean value or given default if the conversion is not supported. 

#### getAsDateTime
Converts an object's value into Date or returns the current date if the conversion is not possible.

> `public` ZonedDateTime getAsDateTime()

- **returns**: ZonedDateTime - Date value or current date if the conversion is not supported.

#### getAsDateTimeWithDefault
Converts an object's value into Date or returns a given default value if the conversion is not possible.   
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` ZonedDateTime getAsDateTimeWithDefault(ZonedDateTime defaultValue)

- **defaultValue**: ZonedDateTime - default value.
- **returns**: ZonedDateTime - Date value or given default if the conversion is not supported.


#### getAsDouble
Converts an object's value into a double or returns 0 if the conversion is not possible.

> `public` double getAsDouble()

- **returns**: double - double value or 0 if the conversion is not supported.


#### getAsDoubleWithDefault
Converts an object's value into a double or returns a default value if the conversion is not possible.    
See [DoubleConverter.toDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> `public` double getAsDoubleWithDefault(double defaultValue)

- **defaultValue**: double - default value.
- **returns**: double - double value or default if the conversion is not supported.


#### getAsFloat
Converts an object's value into a float or returns 0 if the conversion is not possible.

> `public` float getAsFloat()

- **returns**: float - float value or 0 if the conversion is not supported. 


#### getAsFloatWithDefault
Converts an object's value into a float or returns a given default value if the conversion is not possible.    
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` float getAsFloatWithDefault(float defaultValue)

- **defaultValue**: float - default value.
- **returns**: float - float value or default if the conversion is not supported.


#### getAsInteger
Converts an object's value into an integer or returns 0 if the conversion is not possible.

> `public` int getAsInteger()

- **returns**: int - integer value or 0 if the conversion is not supported. 


#### getAsIntegerWithDefault
Converts an object's value into an integer or returns a given default value if conversion is not possible.    
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` int getAsIntegerWithDefault(int defaultValue)

- **defaultValue**: int - default value.
- **returns**: int -  integer value or default if the conversion is not supported.


#### getAsLong
Converts an object's value into a long or returns 0 if the conversion is not possible.

> `public` long getAsLong()

- **returns**: long -  long value or 0 if the conversion is not supported. 


#### getAsLongWithDefault
Converts an object's value into a long or returns a given default value if the conversion is not possible.    
See [LongConverter.toLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> `public` long getAsLongWithDefault(long defaultValue)

- **defaultValue**: long - default value.
- **returns**: long -  long value or given default if the conversion is not supported. 


#### getAsMap
Converts an object's value into AnyMap or returns an empty AnyMap object if the conversion is not possible.    
See [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> `public` [AnyValueMap](../any_value_map) getAsMap()

- **returns**: [AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if the conversion is not supported.


#### getAsNullableBoolean
Converts an object's value into a boolean or returns null if the conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> `public` Boolean getAsNullableBoolean()

- **returns**: Boolean - boolean value or null if the conversion is not supported.


#### getAsNullableDateTime
Converts an object's value into Date or returns null if the conversion is not possible.   
See [DateTimeConverter.toNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> `public` ZonedDateTime getAsNullableDateTime()

- **returns**: ZonedDateTime - Date value or null if the conversion is not supported.


#### getAsNullableDouble
Converts an object's value into a double or returns null if the conversion is not possible.    
See [DoubleConverter.toNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` Double getAsNullableDouble()

- **returns**: Double - double value or null if the conversion is not supported.


#### getAsNullableFloat
Converts an object's value into a float or returns null if the conversion is not possible.    
See [FloatConverter.toNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` Float getAsNullableFloat()

- **returns**: Float - float value or null if the conversion is not supported.


#### getAsNullableInteger
Converts an object's value into an integer or returns null if the conversion is not possible.  
See [IntegerConverter.toNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` Integer getAsNullableInteger()

- **returns**: number - integer value or null if the conversion is not supported. 


#### getAsNullableLong
Converts an object's value into a long or returns null if the conversion is not possible.   
See [LongConverter.toNullableLong](../../convert/long_converter/#tonullablelong)

> `public` Long getAsNullableLong()

- **returns**: Long - long value or null if the conversion is not supported. 


#### getAsNullableString
Converts an object's value into a string or returns null if the conversion is not possible.    
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring)

> `public` String getAsNullableString()

- **returns**: String - string value or null if the conversion is not supported. 


#### getAsNullableType
Converts an object's value into a value defined by a specified typecode.
If conversion is not possible it returns null.  
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` <T> T getAsNullableType(Class<T> type)

- **type**: Class<T> - TypeCode that defined the type of the result
- **returns**: <T> T - value defined by the typecode or null if the conversion is not supported. 


#### getAsObject
Gets the value stored in this object without any conversion.

> `public` Object getAsObject()

- **returns**: Object - object value. 


#### getAsString
Converts an object's value into a string or returns *""* if the conversion is not possible.

> `public` String getAsString()

- **returns**: String - string value or *""* if the conversion is not supported. 


#### getAsStringWithDefault
Converts an object's value into a string or returns a given default value if the conversion is not possible.

> `public` String getAsStringWithDefault(String defaultValue) 

- **defaultValue**: String - default value.
- **returns**: string - String value or given default if the conversion is not supported.


#### getAsType
Converts an object's value into a value defined by a specifieded typecode.
If conversion is not possible, it returns the default value for the specified type.

> `public` <T> T getAsType(Class<T> type)

- **typeCode**: Class<T> - TypeCode that defines the type of the result
- **returns**: <T> T - value defined by the typecode or type default value if the conversion is not supported. 


#### getAsTypeWithDefault
Converts an object's value into a value defined by a specified typecode.
If conversion is not possible, it returns the given default value.

> `public` <T> T getAsTypeWithDefault(Class<T> type, T defaultValue)

- **type**: Class<T> - type that defines the type of the result
- **defaultValue**: T - default value
- **returns**: <T> T - value defined by the typecode or given default value if the conversion is not supported. 


#### getTypeCode
Gets the type's code for the value stored in this object.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> `public` [TypeCode](../../convert/type_code) getTypeCode()

- **returns**: [TypeCode](../../convert/type_code) - type's code of the object's value. 


#### hashCode
Gets an object hash code which can be used to optimize storing and searching.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> `public` int hashCode()

- **returns**: int - object hash code. 


#### setAsObject
Sets a new value for this object.

> `public` void setAsObject(Object value)

- **value**: Object - new object value.



#### toString
Gets a string representation of the object.  
See [StringConverter.toString](../../convert/string_converter/#tostring)

> `public` String toString()

- **returns**: String - string representation of the object.


### Examples

```java
{
  AnyValue value1 = new AnyValue("123.456");
 
  value1.getAsInteger();   // Result: 123
  value1.getAsString();    // Result: "123.456"
  value1.getAsFloat();     // Result: 123.456
  }
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


