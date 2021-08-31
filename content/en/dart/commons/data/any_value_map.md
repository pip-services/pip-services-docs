---
type: docs
title: "AnyValueMap"
linkTitle: "AnyValueMap"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Cross-language implementation of a dynamic map (dictionary) object that can hold values of any type.
    It also provides several methods to convert the stored values to different types.
---

**Extends:** MapBase\<String, dynamic\>

**Implements:** [ICloneable](../icloneable), [IValueWrapper](../../reflect/ivalue_wrapper)

### Description

The AnyValueMap class provides a cross-language implementation of a dynamic map (dictionary) object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors
Creates a new instance of the map and assigns its value.

> AnyValueMap([values])

- **values**: dynamic - (optional) values to initialize this map.


### Instance methods

#### append
Appends new elements to this map.

> void append(map)

- **map**: dynamic - map with elements to be added.


#### clear
Clears this map by removing all its elements.

`@override`
> void clear()


#### clone
Creates a binary clone of this object.

`@override`
> dynamic clone()

- **returns**: dynamic - clone of this object.


#### get
Gets a map's element specified by its key.

> dynamic get(String key)

- **key**: String - key of the element to get.
- **returns**: dynamic - value of the map's element.


#### getAsArray
Converts a map's element into an AnyValueArray object or returns an empty AnyValueArray object if theconversion is not possible.   
See [AnyValueArray](../any_value_array), [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> [AnyValueArray](../any_value_array) getAsArray(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray object if the conversion is not supported. 



#### getAsArrayWithDefault
Converts a map's element into an AnyValueArray object or returns a given default value if the conversion is not possible.   
See [AnyValueArray](../any_value_array)

> [AnyValueArray](../any_value_array) getAsArrayWithDefault(String key, [AnyValueArray](../any_value_array) defaultValue)

- **key**: String - key of element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if the conversion is not supported.


#### getAsBoolean
Converts a map's element into a boolean or returns false if the conversion is not possible.

> bool getAsBoolean(String key)

- **key**: String - key of the element to get.
- **returns**: bool - value of the element or false if the conversion is not supported. 


#### getAsBooleanWithDefault
Converts a map's element into a boolean or returns a given default value if the conversion is not possible.   
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> bool getAsBooleanWithDefault(String key, bool defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value of the element or given default value if the conversion is not supported. 


#### getAsDateTime
Converts a map's element into Date or returns the current date if the conversion is not possible.

> DateTime getAsDateTime(String key)

- **key**: String - key of the element to get.
- **returns**: DateTime - Date value of the element or the current date if the conversion is not supported.



#### getAsDateTimeWithDefault
Converts a map's element into a Date or returns a given default value if the conversion is not possible.   
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> DateTime getAsDateTimeWithDefault(String key, DateTime defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: DateTime - default value
- **returns**: DateTime - Date value of the element or given default value if the conversion is not supported. 


#### getAsDouble
Converts a map's element into a double or returns 0 if the conversion is not possible.

> double getAsDouble(String key)

- **key**: String - key of the element to get.
- **returns**: double - double value of the element or 0 if the conversion is not supported. 


#### getAsDoubleWithDefault
Converts a map's element into a double or returns a given default value if the conversion is not possible.   
See [DoubleConverter.toDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> double getAsDoubleWithDefault(String key, double defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: double - default value
- **returns**: double - double value of the element or given default value if the conversion is not supported. 


#### getAsFloat
Converts a map's element into a float or returns 0 if conversion the is not possible.   

> double getAsFloat(String key)

- **key**: String - key of the element to get.
- **returns**: double - float value of the element or 0 if the conversion is not supported. 


#### getAsFloatWithDefault
Converts a map's element into a float or returns a given default value if the conversion is not possible.   
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> double getAsFloatWithDefault(String key, double defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: double - default value
- **returns**: double - flaot value of the element or given default value if the conversion is not supported. 


#### getAsInteger
Converts a map's element into an integer or returns 0 if the conversion is not possible.   

> int getAsInteger(String key)

- **key**: String - key of the element to get.
- **returns**: int - integer value of the element or 0 if the conversion is not supported. 



#### getAsIntegerWithDefault
Converts a map's element into an integer or returns a given default value if the conversion is not possible.   
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> int getAsIntegerWithDefault(String key, int defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: int - default value
- **returns**: int - integer value of the element or given default value if the conversion is not supported.


#### getAsLong
Converts a map's element into a long or returns 0 if the conversion is not possible.   
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> int getAsLong(String key)

- **key**: String - key of the element to get.
- **returns**: int - long value of the element or 0 if the conversion is not supported. 



#### getAsLongWithDefault
Converts a map's element into a long or returns a given default value if the conversion is not possible.   
See [LongConverter.toLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> int getAsLongWithDefault(String key, int defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: int - default value
- **returns**: int - long value of the element or default value if the conversion is not supported.


#### getAsMap
Converts a map's element into an AnyValueMap object or returns an empty AnyValueMap object if the conversion is not possible.   
See [LongConverter.toLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> [AnyValueMap](../any_value_map) getAsMap(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or empty AnyValueMap object if the conversion is not supported. 


#### getAsMapWithDefault
Converts a map's element into an AnyValueMap object or returns a given default value if the conversion is not possible.

> [AnyValueMap](../any_value_map) getAsMapWithDefault(String key, [AnyValueMap](../any_value_map) defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or given default value if the conversion is not supported. 


#### getAsNullableArray
Converts a map's element into an AnyValueArray object or returns null if the conversion is not possible.   
See [AnyValueMap](../any_value_map), [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> [AnyValueMap](../any_value_map) getAsNullableArray(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueArray value of the element or null if the conversion is not supported. 


#### getAsNullableBoolean
Converts a map's element into a boolean or returns null if the conversion is not possible.   
See [BooleanConverter.toNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> bool getAsNullableBoolean(String key)

- **key**: String - key of the element to get.
- **returns**: bool - boolean value of the element or null if the conversion is not supported. 


#### getAsNullableDateTime
Converts map element into a long or returns a given default value if the conversion is not possible.   
See [DateTimeConverter.toNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> DateTime getAsNullableDateTime(String key)

- **key**: String - key of element to get.
- **returns**: DateTime - Date value of the element or null if the conversion is not supported. 


#### getAsNullableDouble
Converts a map's element into a double or returns null if the conversion is not possible.   
See [DoubleConverter.toNullableDouble](../../convert/double_converter/#tonullabledouble)

> double getAsNullableDouble(String key)

- **key**: String - key of element to get.
- **returns**: double - double value of the element or null if the conversion is not supported. 


#### getAsNullableFloat
Converts a map's element into a float or returns null if the conversion is not possible.   
See [FloatConverter.toNullableFloat](../../convert/float_converter/#tonullablefloat)

> double getAsNullableFloat(String key)

- **key**: String - key of the element to get.
- **returns**: double - float value of the element or null if the conversion is not supported. 


#### getAsNullableInteger
Converts a map's element into an integer or returns null if the conversion is not possible.   
See [IntegerConverter.toNullableInteger](../../convert/integer_converter/#tonullableinteger)

> int getAsNullableInteger(String key)

- **key**: String - key of element to get.
- **returns**: int - integer value of the element or null if the conversion is not supported. 


#### getAsNullableLong
Converts a map's element into a long or returns null if conversion is not possible.   
See [LongConverter.toNullableLong](../../convert/long_converter/#tonullablelong)

> int getAsNullableLong(String key)

- **key**: String - key of the element to get.
- **returns**: int - long value of the element or null if the conversion is not supported. 


#### getAsNullableMap
Converts a map's element into an AnyValueMap object or returns null if the conversion is not possible.  

> [AnyValueMap](../any_value_map) getAsNullableMap(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if the conversion is not supported. 


#### getAsNullableString
Converts a map's element into a string or returns null if the conversion is not possible.   
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring)

> String getAsNullableString(String key)

- **key**: String - key of the element to get.
- **returns**: String - string value of the element or null if the conversion is not supported. 


#### getAsNullableType
Converts a map element into a value defined by a specified typecode.
If the conversion is not possible, it returns null.     
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> T getAsNullableType\<T\>([TypeCode](../../convert/type_code) type, String key)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result.
- **key**: String - key of the element to get.
- **returns**: T - element's value defined by the type code or null if the conversion is not supported. 


#### getAsObject
Gets the value stored in a map's element without any conversions.
When the element's key is not defined, it returns the entire map value.

> dynamic getAsObject([String key])

- **key**: String - (optional) key of the element to get
- **returns**: dynamic - element's value or value of the map when the index is not defined. 


#### getAsString
Converts a map's element into a string or returns *""* if the conversion is not possible.

> String getAsString(String key)

- **key**: String - key of the element to get.
- **returns**: String - string value of the element or *""* if the conversion is not supported. 


#### getAsStringWithDefault
Converts a map's element into a string or returns a given default value if the conversion is not possible.   
See [StringConverter.toStringWithDefault](../../convert/string_converter/#tostringwithdefault)

> String getAsStringWithDefault(String key, String defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: String - default value
- **returns**: String - string value of the element or given default value if the conversion is not supported.


#### getAsType
Converts a map's element into a value defined by a specified type code.
If the conversion is not possible, it returns the default value for the specified type. 

> T getAsType\<T\>([TypeCode](../../convert/type_code) type, String key)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result.
- **key**: String - key of the element to get.
- **returns**: T - element's value defined by the typecode or default if the conversion is not supported. 


#### getAsTypeWithDefault
Converts a map's element into a value defined by a specified type code.
If the conversion is not possible, it returns a given default value.   
See [TypeConverter.toTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> T getAsTypeWithDefault\<T\>([TypeCode](../../convert/type_code) type, String key, T defaultValue)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **key**: String - key of element to get.
- **defaultValue**: T - default value
- **returns**: T - element's value defined by the typecode or default value if the conversion is not supported.


#### getAsValue
Converts a map's element into an AnyValue object or returns an empty AnyValue object if the conversion is not possible.   
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> [AnyValue](../any_value) getAsValue(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValue](../any_value) -AnyValue value of the element or empty AnyValue object if the conversion is not supported. 


#### getKeys
Gets the keys of all elements stored in this map.

> List\<String\> getKeys()

- **returns**: List\<String\> - list with all keys. 


#### put
Puts a new value into a map's element specified by its key.

> void put(String key, dynamic value)

- **key**: String - key of the element to put.
- **value**: dynamic - new value for map's element.


#### remove
Removes a map's element specified by its key.

`@override`
> void remove(dynamic key)

- **key**: dynamic - key of the element to remove.


#### setAsObject
Sets a new value to a map's element specified by its index.
When the index is not defined, it resets the entire map value.
This method has a double purpose because method overrides are not supported in JavaScript.

> void setAsObject(key, [value])

- **key**: dynamic - (optional) key of the element to set
- **value**: dynamic - new element or map value.


#### toString
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*

> String toString()

- **returns**: String - string representation of the object.


### Static methods

#### fromMaps
Creates a new AnyValueMap object by merging two or more maps.
Maps defined later in the list override values from previously defined maps.

`@override`
> `static` [AnyValueMap](../any_value_map) fromMaps(List maps)

- **maps**: List - array of maps to be merged
- **returns**: [AnyValueMap](../any_value_map) - newly created AnyValueMap object.


#### fromTuples
Creates a new AnyValueMap object from a list of key-value pairs called tuples.

> `static` Any[AnyValueMap](../any_value_map)ValueMap fromTuples(List tuples)

- **tuples**: List - list of values where odd elements are keys and the following even elements are values.
- **returns**: [AnyValueMap](../any_value_map) - newly created AnyValueArray object.


#### fromTuplesArray
Creates a new AnyValueMap object from a list of key-value pairs called tuples.
The method is similar to [fromTuples](#fromtuples) but tuples are passed as array instead of parameters.

> `static` [AnyValueMap](../any_value_map) fromTuplesArray(List tuples)

- **tuples**: List - list of values where odd elements are keys and the following even elements are values.
- **returns**: [AnyValueMap](../any_value_map) - newly created AnyValueArray object.


#### fromValue
Converts a specified value into an AnyValueMap object.

> `static` [AnyValueMap](../any_value_map) fromValue(dynamic value)

- **value**: dynamic - value to be converted
- **returns**: [AnyValueMap](../any_value_map) - newly created AnyValueMap object.


### Examples
```dart
var value1 =  AnyValueMap({ key1: 1, key2: '123.456', key3: '2018-01-01' });

value1.getAsBoolean('key1');   // Result: true
value1.getAsInteger('key2');   // Result: 123
value1.getAsFloat('key2');     // Result: 123.456
value1.getAsDateTime('key3');  // Result:  Date(2018,0,1)

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
