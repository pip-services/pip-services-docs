---
type: docs
title: "StringValueMap"
linkTitle: "StringValueMap"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Cross-language implementation of a map (dictionary) where all keys and values are strings.
    
---

**Extends:** MapBase\<String, String\> 

**Implements:** [IValueWrapper](../../reflect/ivalue_wrapper)

### Description

The StringValueMap class allows you to create a cross-language implementation of a map (dictionary) where all keys and values are strings.

Important points

- The class provides several methods to convert the stored values to different types, such as array, boolean or datetime.
- This class is widely used in Pip.Services as a basis for variety of classes, such as [ConfigParams](../../config/config_params), [ConnectionParams](../../../components/connect/connection_params), [CredentialParams](../../../components/auth/credential_params) (in the Pip.Services components package) and others.

### Constructors
Creates a new instance of the map and assigns its value.

> StringValueMap([map])

- **map**: dynamic - (optional) values to initialize this map.


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

> dynamic clone()

- **returns**: dynamic - clone of this object.


#### get
Gets a map element specified by its key.

> String get(String key)

- **key**: String - key of the element to get.
- **returns**: String - value of the map element.


#### getAsArray
Converts a map's element into an AnyValueArray object or returns an empty AnyValueArray object if the conversion is not possible.  
See [AnyValueArray](../any_value_array), [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> [AnyValueArray](../any_value_array) getAsArray(String key)

- **key**: String -key of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if the conversion is not supported.


#### getAsArrayWithDefault
Converts a map's element into an AnyValueArray object or returns a given default value if the conversion is not possible.  
See [AnyValueArray](../any_value_array)

> [AnyValueArray](../any_value_array) getAsArrayWithDefault(String key, [AnyValueArray](../any_value_array) defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or given default value if the conversion is not supported. 


#### getAsBoolean
Converts a map's element into a boolean or returns false if the conversion is not possible.

> bool getAsBoolean(String key)

- **key**: String - key of the element to get.
- **returns**: bool - boolean value of the element or false if the conversion is not supported.


#### getAsBooleanWithDefault
Converts a map's  element into a boolean or returns a given default value if the conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../boolean_converter/#tobooleanwithdefault)

> bool getAsBooleanWithDefault(String key, bool defaultValue)

- **key**: String - key of element to get.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value of the element or given default value if the conversion is not supported. 


#### getAsDateTime
Converts a map's element into a Date or returns the current date if the conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../boolean_converter/#tobooleanwithdefault)

> DateTime getAsDateTime(String key)

- **key**: String - key of element to get.
- **returns**: DateTime - Date value of the element or the current date if the conversion is not supported. 


#### getAsDateTimeWithDefault
Converts a map's element into a Date or returns a given default value if the conversion is not possible.  
See [DateTimeConverter.toDateTimeWithDefault](../date_time_converter/#todatetimewithdefault)

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
See [DoubleConverter.toDoubleWithDefault](../double_converter/#todoublewithdefault)

> double getAsDoubleWithDefault(String key, double defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: double - default value
- **returns**: double - double value of the element or given default value if the conversion is not supported. 


#### getAsFloat
Converts a map's element into a float or returns 0 if the conversion is not possible.

> double getAsFloat(String key)

- **key**: String - key the of element to get.
- **returns**: double - float value of the element or 0 if the conversion is not supported. 


#### getAsFloatWithDefault
Converts a map's element into a float or returns a given default value if the conversion is not possible.  
See [FloatConverter.toFloatWithDefault](../float_converter/#tofloatwithdefault)

> double getAsFloatWithDefault(String key, double defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: double - default value
- **returns**: double - float value of the element or given default value if the conversion is not supported. 


#### getAsInteger
Converts a map's element into an integer or returns 0 if the conversion is not possible.

> int getAsInteger(String key)

- **key**: String - key of the element to get.
- **returns**: int - integer value of the element or 0 if the conversion is not supported. 


#### getAsIntegerWithDefault
Converts a map's element into an integer or returns a given default value if the conversion is not possible.  
See [IntegerConverter.toIntegerWithDefault](../integer_converter/#tointegerwithdefault)

> int getAsIntegerWithDefault(String key, int defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: int - default value
- **returns**: int - integer value of the element or given default value if the conversion is not supported. 


#### getAsLong
Converts a map's element into a long or returns 0 if the conversion is not possible.

> int getAsLong(String key)

- **key**: String - key of the element to get.
- **returns**: int - long value of the element or 0 if the conversion is not supported.


#### getAsLongWithDefault
Converts a map's element into a long or returns a given default value if the conversion is not possible.  
See [LongConverter.toLongWithDefault](../long_converter/#tolongwithdefault)

> int getAsLongWithDefault(String key, int defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: int - default value
- **returns**: int - long value of the element or default value if the conversion is not supported. 


#### getAsMap
Converts a map's element into an AnyValueMap object or returns an empty AnyValueMap object if the conversion is not possible.

> [AnyValueMap](../any_value_map) getAsMap(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - long value of the element or 0 if the conversion is not supported.


#### getAsMapWithDefault
Converts a map's element into an AnyValueMap object or returns a given default value if the conversion is not possible.

> [AnyValueMap](../any_value_map) getAsMapWithDefault(String key, AnyValueMap defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or given default value if the conversion is not supported. 


#### getAsNullableArray
Converts a map's element into an AnyValueArray or returns null if the conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> [AnyValueMap](../any_value_map) getAsNullableArray(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or given default value if the conversion is not supported.


#### getAsNullableBoolean
Converts a map's element into a boolean or returns null if the conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../boolean_converter/#tonullableboolean)

> bool getAsNullableBoolean(String key)

- **key**: String - key of the element to get.
- **returns**: bool - boolean value of the element or null if the conversion is not supported. 


#### getAsNullableDateTime
Converts a map's element into a Date or returns null if the conversion is not possible.  
See [DateTimeConverter.toNullableDateTime](../date_time_converter/#tonullabledatetime)

> DateTime getAsNullableDateTime(String key)

- **key**: String - key of the element to get.
- **returns**: DateTime - Date value of the element or null if the conversion is not supported. 


#### getAsNullableDouble
Converts a map's element into a double or returns null if the conversion is not possible.  
See [DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> double getAsNullableDouble(String key)

- **key**: String - key of the element to get.
- **returns**: double - double value of the element or null if the conversion is not supported.


#### getAsNullableFloat
Converts a map's element into a float or returns null if the conversion is not possible.  
See [FloatConverter.toNullableFloat](../float_converter/#tonullablefloat)

> double getAsNullableFloat(String key)

- **key**: String - key of the element to get.
- **returns**: double - float value of the element or null if the conversion is not supported.


#### getAsNullableInteger
Converts a map's element into an integer or returns null if the conversion is not possible.  
See [IntegerConverter.toNullableInteger](../integer_converter/#tonullableinteger)

> int getAsNullableInteger(String key)

- **key**: String - key of the element to get.
- **returns**: int - integer value of the element or null if the conversion is not supported. 


#### getAsNullableLong
Converts a map's element into a long or returns null if the conversion is not possible.  
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

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
See [StringConverter.toNullableString](../string_converter/#tonullablestring)

> String getAsNullableString(String key)

- **key**: String - key of the element to get.
- **returns**: String - string value of the element or null if the conversion is not supported. 


#### getAsNullableType
Converts a map's element into a value defined by a specified typecode.
If conversion is not possible, it returns null.    
See [TypeConverter.toNullableType](../type_converter/#tonullabletype)

> T getAsNullableType\<T\>([TypeCode](../../convert/type_code) type, String key)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result.
- **key**: String - key of the element to get.
- **returns**: T - element value defined by the typecode or null if the conversion is not supported. 


#### getAsObject
Gets the value stored in map element without any conversions.
When the element's key is not defined, it returns the entire map value.   

> dynamic getAsObject([String key])

- **key**: String - (optional) key of the element to get.
- **returns**: dynamic - element value or value of the map when the index is not defined. 


#### getAsString
Converts map's element into a string or returns "" if the conversion is not possible.

> String getAsString(key)

- **key**: String - (optional) key of the element to get.
- **returns**: String - string value of the element or "" if the conversion is not supported. 


#### getAsStringWithDefault
Converts map's element into a string or returns "" if the conversion is not possible.

> String getAsStringWithDefault(String key, String defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: String - default value
- **returns**: String - string value of the element or default value if the conversion is not supported. 


#### getAsType
Converts a map's element into a value defined by a specified typecode.
If conversion is not possible it returns the default value for the specified type.

> T getAsType\<T\>([TypeCode](../../convert/type_code) type, String key)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result.
- **key**: String - key of the element to get.
- **returns**: T - element value defined by the typecode or default if the conversion is not supported. 


#### getAsTypeWithDefault
Converts a map's element into a value defined by a specified typecode.
If the conversion is not possible, it returns the default value for the specified type.  
See [TypeConverter.toTypeWithDefault](../type_converter/#totypewithdefault)

> T getAsTypeWithDefault\<T\>([TypeCode](../../convert/type_code) type, String key, T defaultValue)

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **key**: String - key of the element to get.
- **defaultValue**: T - default value
- **returns**: T - element's value defined by the typecode or default value if the conversion is not supported. 


#### getAsValue
Converts a map's element into an AnyValue or returns an empty AnyValue if the conversion is not possible.  
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> [AnyValue](../any_value) getAsValue(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or an empty AnyValue object if the conversion is not supported. 


#### getKeys
Gets keys of all elements stored in this map.

> List\<String\> getKeys()

- **returns**: List\<String\> - list with all map keys. 


#### put
Puts a new value into a map's element specified by its key.

> void put(String key, value)

- **key**: String - key of the element to put.
- **value**: dynamic - new value for the map's element.


#### remove
Removes a map's element specified by its key.

`@override`
> String remove(Object key) 

- **key**: Object - key of the element to remove.
- **returns**: String - Returns the value associated with *key* before it was removed.


#### setAsObject
Sets a new value to a map's element specified by its index.
When the index is not defined, it resets the entire map value.
This method has double purpose, because method overrides are not supported in JavaScript.  
See [MapConverter.toMap](../../convert/map_converter/#tomap)

> void setAsObject(key, [value])

- **key**: dynamic - (optional) key of the element to set
- **value**: dynamic - new element or map value.


#### toString
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*

`@override`
> String toString()

- **returns**: String - string representation of the object.

### Static methods

#### fromMaps
Creates a new AnyValueMap by merging two or more maps.
Maps defined later in the list override values from previously defined maps.

> `static` [StringValueMap](../string_value_map) fromMaps(List maps)

- **maps**: List - array of maps to be merged
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### fromString
Parses semicolon-separated key-value pairs and returns them as a [StringValueMap](../string_value_map).

> `static` [StringValueMap](../string_value_map) fromString(String line)

- **line**: String - semicolon-separated key-value list to initialize StringValueMap.
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### fromTuples
Creates a new [StringValueMap](../string_value_map) object from a list of key-value pairs called tuples.

> `static` [StringValueMap](../string_value_map) fromTuples(List tuples)

- **tuples**: List - list of values where odd elements are keys and the following even elements are values.
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### fromTuplesArray
Creates a new StringValueMap object from a list of key-value pairs called tuples.
The method is similar to [fromTuples](#fromtuples) but tuples are passed as array instead of parameters.

> `static` [StringValueMap](../string_value_map) fromTuplesArray(List tuples)

- **tuples**: List - list of values where odd elements are keys and the following even elements are values.
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.

#### fromValue
Converts a specified value into StringValueMap.

> `static` [StringValueMap](../string_value_map) fromValue(value)

- **value**: dynamic - value to be converted
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


### Examples

```dart
var value1 = StringValueMap.fromString(['key1=1;key2=123.456;key3=2018-01-01']);

value1.getAsBoolean('key1');   // Result: true
value1.getAsInteger('key2');   // Result: 123
value1.getAsFloat('key2');     // Result: 123.456
value1.getAsDateTime('key3');  // Result: new Date(2018,0,1)

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
