---
type: docs
title: "AnyValueArray"
linkTitle: "AnyValueArray"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Cross-language implementation of a dynamic array object that can hold values of any type.
    It also provides methods to convert the stored values to different types.
---

**Extends:** ListBase\<dynamic\>

**Implements:** [ICloneable](../icloneable), [IValueWrapper](../../reflect/ivalue_wrapper)

### Description

The AnyValueArray class provides a cross-language implementation of a dynamic array object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors
Creates a new instance of the array and assigns its value.

> AnyValueArray([Iterable values])

- **values**: Iterable - (optional) values used to initialize this array.


### Instance methods

#### append
Appends new elements to this array.

> void append(elements)

- **elements**: dynamic - list of elements to be added.


#### clear
Clears this array by removing all its elements.

`@override`
> void clear()


#### clone
Creates a binary clone of this object.

`@override`
> dynamic clone()

- **returns**: dynamic - clone of this object.


#### contains
Checks if this array contains a value.
The check uses direct comparison between the elements of the array and the specified value.

`@override`
> bool contains(dynamic value)

- **value**: dynamic - value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### containsAsType
Checks if this array contains a value.
The check converts elements and the value to type specified by type code before comparison.   
See [TypeConverter.toType](../../convert/type_converter/#totype), [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> bool containsAsType\<T\>([TypeCode](../../convert/type_code) typeCode, dynamic value)

- **typeCode**: [TypeCode](../../convert/type_code) - type code that defines a type to convert values before comparison
- **value**: dynamic - value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### get
Gets an array element specified by its index.

> dynamic get(int index)

- **index**: int - index of the element to get.
- **returns**: dynamic - value of the array element.


#### getAsArray
Converts array element into an AnyValueArray or returns an empty AnyValueArray if the conversion is not possible.

> [AnyValueArray](../any_value_array) getAsArray(int index)

- **index**: int - index of the element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if the conversion is not supported. 


#### getAsArrayWithDefault
Converts array element into an AnyValueArray or returns a givne default value if conversion is not possible.

> [AnyValueArray](../any_value_array) getAsArrayWithDefault(int index, [AnyValueArray](../any_value_array) defaultValue)

- **index**: int - index of the element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if the conversion is not supported.


#### getAsBoolean
Converts an array's element into a boolean or returns false if the conversion is not possible.

> bool getAsBoolean(int index)

- **index**: int - index of the element to get.
- **returns**: bool - boolean value of the element or false if the conversion is not supported. 


#### getAsBooleanWithDefault
Converts an array's element into a boolean or returns a given default value if the conversion is not possible.   
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> bool getAsBooleanWithDefault(int index, bool defaultValue)

- **index**: int - index of the element to get.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value of the element or default value if the conversion is not supported.


#### getAsDateTime
Converts an array's element into Date or returns the current date if the conversion is not possible.

> DateTime getAsDateTime(int index)

- **index**: int - index of the element to get.
- **returns**: DateTime - Date value ot the element or the current date if the conversion is not supported. 


#### getAsDateTimeWithDefault
Converts an array's element into a Date or returns a given default value if the conversion is not possible.   
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> DateTime getAsDateTimeWithDefault(int index, DateTime defaultValue)

- **index**: int - index of the element to get.
- **defaultValue**: DateTime - default value
- **returns**: DateTime - Date value ot the element or given default value if theconversion is not supported. 


#### getAsDouble
Converts an array's element into a double or returns 0 if the conversion is not possible.

> double getAsDouble(index)

- **index**: dynamic - index of element to get.
- **returns**: double - double value of the element or 0 if the conversion is not supported. 


#### getAsDoubleWithDefault
Converts an array's element into a double or returns a given default value if the conversion is not possible.

> double getAsDoubleWithDefault(int index, double defaultValue)

- **index**: int - index of the element to get.
- **defaultValue**: double - default value
- **returns**: double - double value of the element or given default value if the conversion is not supported.

#### getAsFloat
Converts an array's element into a float or returns 0 if the conversion is not possible.

> double getAsFloat(int index)

- **index**: int - index of the element to get.
- **returns**: double - float value of the element or 0 if the conversion is not supported.


#### getAsFloatWithDefault
Converts an array's element into a float or returns a given default value if the conversion is not possible.   
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> double getAsFloatWithDefault(int index, double defaultValue)

- **index**: int - index of the element to get.
- **defaultValue**: double - default value
- **returns**: double - float value of the element or given default value if the conversion is not supported. 


#### getAsInteger
Converts an array's element into an integer or returns 0 if the conversion is not possible.

> int getAsInteger(int index)

- **index**: int - index of the element to get.
- **returns**: int - integer value of the element or 0 if the conversion is not supported. 


#### getAsIntegerWithDefault
Converts an array's element into an integer or returns a given default value if the conversion is not possible.   
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> int getAsIntegerWithDefault(int index, int defaultValue)

- **index**: int - index of the element to get.
- **defaultValue**: int - default value
- **returns**: int - integer value of the element or default value if the conversion is not supported.


#### getAsLong
Converts an array's element into a long or returns 0 if the conversion is not possible.

> int getAsLong(int index)

- **index**: int - index of the element to get.
- **returns**: int - long value ot the element or 0 if the conversion is not supported.


#### getAsLongWithDefault
Converts an array's element into a long or returns a given default value if the conversion is not possible.   
See [LongConverter.toLongWithDefault](../../convert/LongConverter/#tolongwithdefault)

> int getAsLongWithDefault(int index, int defaultValue)

- **index**: int - index of the element to get.
- **defaultValue**: int - default value
- **returns**: int - long value of the element or given default value if the conversion is not supported. 


#### getAsMap
Converts an array's element into an AnyValueMap object or returns an empty AnyValueMap object if the conversion is not possible.   
See [AnyValueMap](../any_value_map), [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> [AnyValueMap](../any_value_map) getAsMap(int index)

- **index**: int - index of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or empty AnyValueMap object if conversion is not supported.


#### getAsMapWithDefault
Converts an array's element into an AnyValueMap oject or returns a given default value if the conversion is not possible.

> [AnyValueMap](../any_value_map) getAsMapWithDefault(int index, [AnyValueMap](../any_value_map) defaultValue)

- **index**: int - index of element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or given default value if the conversion is not supported.


#### getAsNullableArray
Converts an array's element into an AnyValueArray object or returns null if the conversion is not possible.

> [AnyValueArray](../any_value_array) getAsNullableArray(int index)

- **index**: int - index of the element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or null if the conversion is not supported. 


#### getAsNullableBoolean
Converts an array's element into a boolean or returns null if the conversion is not possible.   
See [BooleanConverter.toNullableBoolean](../../converter/boolean_converter/#tonullableboolean)

> bool getAsNullableBoolean(int index)

- **index**: int - index of the element to get.
- **returns**: bool - boolean value of the element or null if the conversion is not supported.


#### getAsNullableDateTime
Converts an array's element into a Date or returns null if the conversion is not possible.   
See [DateTimeConverter.toNullableDateTime](../../converter/date_time_converter/#tonullabledatetime)

> DateTime getAsNullableDateTime(int index)

- **index**: int - index of the element to get.
- **returns**: DateTime - Date value of the element or null if the conversion is not supported. 


#### getAsNullableDouble
Converts an array's element into a double or returns null if the conversion is not possible.   
See [DoubleConverter.toNullableDouble](../../convert/double_converter/#tonullabledouble)

> double getAsNullableDouble(int index)

- **index**: int - index of the element to get.
- **returns**: double - double value of the element or null if the conversion is not supported.


#### getAsNullableFloat
Converts an array's element into a float or returns null if the conversion is not possible.   
See [FloatConverter.toNullableFloat](../../convert/float_converter/#tonullablefloat)

> double getAsNullableFloat(int index)

- **index**: int - index of the element to get.
- **returns**: double - float value of the element or null if the conversion is not supported. 


#### getAsNullableInteger
Converts an array's element into a float or returns null if the conversion is not possible.   
See [IntegerConverter.toNullableInteger](../../convert/integer_converter/#tonullableinteger)

> int getAsNullableInteger(int index)

- **index**: int - index of the element to get.
- **returns**: int - integer value of the element or null if the conversion is not supported. 


#### getAsNullableLong
Converts an array's element into a long or returns null if the conversion is not possible.   
See [LongConverter.toNullableLong](../../convert/long_converter/#tonullablelong)

> int getAsNullableLong(int index)

- **index**: int - index of the element to get.
- **returns**: int - long value of the element or null if the conversion is not supported.


#### getAsNullableMap
Converts an array's element into a long or returns null if the conversion is not possible.   
See [AnyValueMap](../any_value_map), [AnyValueMap](../any_value_map/#fromvalue)

> [AnyValueMap](../any_value_map) getAsNullableMap(int index)

- **index**: int - index of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if the conversion is not supported. 


#### getAsNullableString
Converts an array's element into a string or returns null if the conversion is not possible.   
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring),

> String getAsNullableString(int index)

- **index**: int - index of the element to get.
- **returns**: String - string value of the element or null if the conversion is not supported.


#### getAsNullableType
Converts an array's element into a value defined by a specified typecode.
If conversion is not possible, it returns null.   
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> T getAsNullableType\<T\>([TypeCode](../../convert/type_code) type, int index)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **index**: int - index of the element to get.
- **returns**: T - element value defined by the typecode or null if the conversion is not supported. 


#### getAsObject
Gets the value stored in an array element without any conversion.
When the element's index is not defined, it returns the entire array value.

> dynamic getAsObject([int index])

- **index**: int - (optional) index of the element to get
- **returns**: dynamic - element value or value of the array when the index is not defined.


#### getAsString
Converts an array's element into a string or returns *""* if the conversion is not possible.

> String getAsString(int index)

- **index**: int - index of the element to get.
- **returns**: String - string value ot the element or *""* if the conversion is not supported. 


#### getAsStringWithDefault
Converts an array's element into a string or returns a given default value if the conversion is not possible.   
See [StringConverter.toStringWithDefault](../../convert/string_converter/#tostringwithdefault)

> String getAsStringWithDefault(int index, String defaultValue)

- **index**: int - index of the element to get.
- **defaultValue**: String - default value
- **returns**: String - string value of the element or given default value if the conversion is not supported.


#### getAsType
Converts an array's element into a value defined by a specified typecode.
If conversion is not possible, it returns a given default value for the specified type.

> T getAsType\<T\>([TypeCode](../../convert/type_code) type, int index)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result.
- **index**: int - index of the element to get.
- **returns**: T - element value defined by the typecode or given default if the conversion is not supported.


#### getAsTypeWithDefault
Converts an array's element into a value defined by a specified typecode.
If conversion is not possible it returns default value for the specified type.   
See [TypeConverter.toTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> T getAsTypeWithDefault\<T\>([TypeCode](../../convert/type_code) type, int index, T defaultValue) 

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **index**: int - index of the element to get.
- **defaultValue**: T - default value
- **returns**: T - element value defined by the typecode or given default value if the conversion is not supported. 


#### getAsValue
Converts an array's element into an AnyValue object or returns an empty AnyValue object if the conversion is not possible.   
See [AnyValue](../any_value), [AnyValues.constructors](../any_value/#constructors)

> [AnyValue](../any_value) getAsValue(int index)

- **index**: int - index of element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or empty AnyValue object if the conversion is not supported. 


#### put
Puts a new value into an array's element specified by its index. 

> void put(int index, value)

- **index**: int - index of the element to put.
- **value**: dynamic - new value for the array's element.


#### setAsObject
Sets a new value to an array's element specified by its index.
When the index is not defined, it resets the entire array value.   
See [ArrayConverter.toArray](../../convert/array_converter/#toarray)

> void setAsObject(dynamic index, dynamic value)

- **index**: dynamic - (optional) index of the element to set.
- **value**: dynamic - new element or array's value.


#### toString
Gets a string representation of the object.
The result is a comma-separated list of string representations of individual elements as
*"value1,value2,value3"*   
See [StringConverter.toString](../../convert/string_converter/#tostring)

`@override`
> String toString()

- **returns**: String - string representation of the object.


### Static methods

#### fromString
Splits a specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.

> `static` [AnyValueArray](../any_value_array) fromString(String values, String separator, [bool removeDuplicates = false])

- **values**: String - string value to be split and assigned to an AnyValueArray object.
- **separator**: String - separator to split the string.
- **removeDuplicates**: bool - (optional) true to remove duplicated elements.
- **returns**: [AnyValueArray](../any_value_array) - newly created AnyValueArray object.


#### fromValue
Splits a specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.   
See [ArrayConverter.toNullableArray](../../convert/array_converter/#tonullablearray)

> `static` [AnyValueArray](../any_value_array) fromValue(value))

- **values**: dynamic - value to be converted
- **returns**: [AnyValueArray](../any_value_array) - newly created AnyValueArray object.


#### fromValues
Creates a new AnyValueArray object from a list of values.

> `static` [AnyValueArray](../any_value_array) fromValues(List values)

- **values**: List - list of values used to initialize the created AnyValueArray object.
- **returns**: [AnyValueArray](../any_value_array) - newly created AnyValueArray object.




### Examples
```dart
var value1 =  AnyValueArray([1, '123.456', '2018-01-01']);

value1.getAsBoolean(0);   // Result: true
value1.getAsInteger(1);   // Result: 123
value1.getAsFloat(1);     // Result: 123.456
value1.getAsDateTime(2);  // Result:  Date(2018,0,1)
```


### See also
- #### [StringConverter](../../convert/string_converter)
- #### [TypeConverter](../../convert/type_converter)
- #### [StringConverter](../../convert/string_converter)
- #### [BooleanConverter](../../convert/boolean_converter)
- #### [IntegerConverter](../../convert/integer_converter)
- #### [LongConverter](../../convert/long_converter)
- #### [DoubleConverter](../../convert/double_converter)
- #### [FloatConverter](../../convert/float_converter)
- #### [DateTimeConverter](../../convert/date_time_converter)
- #### [ICloneable](../icloneable)
