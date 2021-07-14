---
type: docs
title: "AnyValue"
linkTitle: "AnyValue"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Cross-language implementation of a dynamic object that can hold a value of any type.
    It also provides methods to convert the stored value to different types.
---

**Implements:** [ICloneable](../icloneable), [IValueWrapper](../../reflect/ivalue_wrapper)

### Description

The AnyValue class provides a cross-language implementation of a dynamic object that can hold a value of any type. In addition, it provides methods to convert the stored value to different types, such as string or integer.

### Constructors
Creates a new instance of the object and assigns its value.

> AnyValue([value])

- **value**: dynamic - (optional) value to initialize this object.

### Fields

<span class="hide-title-link">

#### value
Value stored by this object.
> **_value**: dynamic

</span>

### Instance methods

#### clone
Creates a binary clone of this object.

`@override`
> dynamic clone()

- **returns**: dynamic - clone of this object.

#### equals
Compares this object's value to a specified specified value.
When a direct comparison gives a negative result it tries
to compare the values as strings.

> bool equals(obj)

- **obj**: dynamic - value to be compared with.
- **returns**: bool - true when objects are equal and false otherwise.

#### equalsAsType
Compares this object's value to a specified value.
When direct comparison gives a negative result it converts the 
values to a type specified by the type code and compares them again.   
See [TypeConverter.toType](../../convert/type_converter/#totype)

> bool equalsAsType\<T\>([TypeCode](../../convert/type_code) type, obj)

- **type**: [TypeCode](../../convert/type_code) - value to be compared with.
- **obj**: dynamic - args to be compared with.
- **returns**: bool - true when the objects are equal and false otherwise.


#### getAsArray
Converts the object's value into an AnyArray or returns an empty AnyArray if the conversion is not possible.   
See [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> [AnyValueArray](../any_value_array) getAsArray()

- **returns**: [AnyValueArray](../any_value_array) - AnyArray value or empty AnyArray if the conversion is not supported. 

#### getAsBoolean
Converts an object's value into a boolean or returns false if the conversion is not possible.

> bool getAsBoolean()

- **returns**: bool - string value or false if the conversion is not supported. 

#### getAsBooleanWithDefault
Converts an object's value into a boolean or returns a given default value if the conversion is not possible.   
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> bool getAsBooleanWithDefault(bool defaultValue)

- **defaultValue**: bool - default value.
- **returns**: bool - boolean value or given default if the conversion is not supported. 

#### getAsDateTime
Converts an object's value into Date or returns the current date if the conversion is not possible.

> DateTime getAsDateTime()

- **returns**: DateTime - Date value or current date if the conversion is not supported.

#### getAsDateTimeWithDefault
Converts an object's value into Date or returns a given default value if the conversion is not possible.   
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> DateTime getAsDateTimeWithDefault(DateTime defaultValue)

- **defaultValue**: DateTime - default value.
- **returns**: DateTime - Date value or given default if the conversion is not supported.


#### getAsDouble
Converts an object's value into a double or returns 0 if the conversion is not possible.

> double getAsDouble()

- **returns**: double - double value or 0 if the conversion is not supported.


#### getAsDoubleWithDefault
Converts an object's value into a double or returns a default value if the conversion is not possible.   
See [DoubleConverter.toDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> double getAsDoubleWithDefault(double defaultValue)

- **defaultValue**: double - default value.
- **returns**: double - double value or default if the conversion is not supported.


#### getAsFloat
Converts an object's value into a float or returns 0 if the conversion is not possible.

> double getAsFloat()

- **returns**: double - float value or 0 if the conversion is not supported. 


#### getAsFloatWithDefault
Converts an object's value into a float or returns a given default value if the conversion is not possible.   
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> double getAsFloatWithDefault(double defaultValue)

- **defaultValue**: double - default value.
- **returns**: double - float value or default if the conversion is not supported.


#### getAsInteger
Converts an object's value into an integer or returns 0 if the conversion is not possible.

> int getAsInteger()

- **returns**: int - integer value or 0 if the conversion is not supported. 


#### getAsIntegerWithDefault
Converts an object's value into an integer or returns a given default value if conversion is not possible.   
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> int getAsIntegerWithDefault(int defaultValue)

- **defaultValue**: int - default value.
- **returns**: int -  integer value or default if the conversion is not supported.


#### getAsLong
Converts an object's value into a long or returns 0 if the conversion is not possible.

> int getAsLong() 

- **returns**: int -  long value or 0 if the conversion is not supported. 


#### getAsLongWithDefault
Converts an object's value into a long or returns a given default value if the conversion is not possible.      
See [LongConverter.toLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> int getAsLongWithDefault(int defaultValue)

- **defaultValue**: int - default value.
- **returns**: int -  long value or given default if the conversion is not supported. 


#### getAsMap
Converts an object's value into AnyMap or returns an empty AnyMap object if the conversion is not possible.     
See [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> [AnyValueMap](../any_value_map) getAsMap()

- **returns**: [AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if the conversion is not supported.


#### getAsNullableBoolean
Converts an object's value into a boolean or returns null if the conversion is not possible.   
See [BooleanConverter.toNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> bool getAsNullableBoolean()

- **returns**: bool - boolean value or null if the conversion is not supported.


#### getAsNullableDateTime
Converts an object's value into Date or returns null if the conversion is not possible.   
See [DateTimeConverter.toNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> DateTime getAsNullableDateTime()

- **returns**: DateTime - Date value or null if the conversion is not supported.


#### getAsNullableDouble
Converts an object's value into a double or returns null if the conversion is not possible.    
See [DoubleConverter.toNullableDouble](../../convert/double_converter/#tonullabledouble)

> double getAsNullableDouble()

- **returns**: double - double value or null if the conversion is not supported.


#### getAsNullableFloat
Converts an object's value into a float or returns null if the conversion is not possible.    
See [FloatConverter.toNullableFloat](../../convert/float_converter/#tonullablefloat)

> double getAsNullableFloat()

- **returns**: double - float value or null if the conversion is not supported.


#### getAsNullableInteger
Converts an object's value into an integer or returns null if the conversion is not possible.  
See [IntegerConverter.toNullableInteger](../../convert/integer_converter/#tonullableinteger)

> int getAsNullableInteger()

- **returns**: int - integer value or null if the conversion is not supported. 


#### getAsNullableLong
Converts an object's value into a long or returns null if the conversion is not possible.   
See [LongConverter.toNullableLong](../../convert/long_converter/#tonullablelong)

> int getAsNullableLong()

- **returns**: int - long value or null if the conversion is not supported. 


#### getAsNullableString
Converts an object's value into a string or returns null if the conversion is not possible.    
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring)

> String getAsNullableString()

- **returns**: String - string value or null if the conversion is not supported. 


#### getAsNullableType
Converts an object's value into a value defined by a specified typecode.
If conversion is not possible it returns null.  
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> T getAsNullableType\<T\>([TypeCode](../../convert/type_code) type)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **returns**: T - value defined by the typecode or null if the conversion is not supported. 


#### getAsObject
Gets the value stored in this object without any conversion.

> dynamic getAsObject()

- **returns**: dynamic - object value. 


#### getAsString
Converts an object's value into a string or returns *""* if the conversion is not possible.

> String getAsString()

- **returns**: String - string value or *""* if the conversion is not supported. 


#### getAsStringWithDefault
Converts an object's value into a string or returns a given default value if the conversion is not possible.

> String getAsStringWithDefault(String defaultValue)

- **defaultValue**: String - default value.
- **returns**: String - string value or given default if the conversion is not supported.


#### getAsType
Converts an object's value into a value defined by a specifieded typecode.
If conversion is not possible, it returns the default value for the specified type.

> T getAsType\<T\>([TypeCode](../../convert/type_code) typeCode)

- **typeCode**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **returns**: String - value defined by the typecode or type default value if the conversion is not supported. 


#### getAsTypeWithDefault
Converts an object's value into a value defined by a specified typecode.
If conversion is not possible, it returns the given default value.

> T getAsTypeWithDefault\<T\>([TypeCode](../../convert/type_code) typeCode, T defaultValue)

- **typeCode**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **defaultValue**: T - default value
- **returns**: T - value defined by the typecode or given default value if the conversion is not supported. 


#### getTypeCode
Gets the type's code for the value stored in this object.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> [TypeCode](../../convert/type_code) getTypeCode()

- **returns**: [TypeCode](../../convert/type_code) - type's code of the object's value. 


#### hashCode
Gets an object hash code which can be used to optimize storing and searching.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

`@override`
> int hashCode()

- **returns**: int - object hash code. 


#### setAsObject
Sets a new value for this object.

> void setAsObject(value)

- **value**: dynamic - new object value.



#### toString
Gets a string representation of the object.  
See [StringConverter.toString](../../convert/string_converter/#tostring)

`@override`
> String toString()

- **returns**: String - string representation of the object.


### Examples

```dart
var value1 =  AnyValue('123.456');

value1.getAsInteger();   // Result: 123
value1.getAsString();    // Result: '123.456'
value1.getAsFloat();     // Result: 123.456
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


