---
type: docs
title: "StringValueMap"
linkTitle: "StringValueMap"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    Cross-language implementation of a map (dictionary) where all keys and values are strings.
    
---

### Description

The StringValueMap class allows you to create a cross-language implementation of a map (dictionary) where all keys and values are strings.

Important points

- The class provides several methods to convert the stored values to different types, such as array, boolean or datetime.
- This class is widely used in Pip.Services as a basis for variety of classes, such as [ConfigParams](../../../components/config/config_params), [ConnectionParams](../../../config/connect/connection_params), [CredentialParams](../../../config/auth/credential_params) (in the Pip.Services components package) and others.

### Constructors
Creates a new instance of the map and assigns its value.

> `public` StringValueMap(Map<?, ?> map)

- **map**: Map<?, ?> - (optional) values to initialize this map.


### Instance methods

#### append
Appends new elements to this map.

> `public` void append(Map<?, ?> map)

- **map**: Map<?, ?> - map with elements to be added.


#### clone
Creates a binary clone of this object.

> `public` [StringValueMap]() clone()

- **returns**: [StringValueMap]() - clone of this object.


#### get
Gets a map element specified by its key.

> `public` String get(String key)

- **key**: String - key of the element to get.
- **returns**: String - value of the map element.


#### getAsArray
Converts a map's element into an AnyValueArray object or returns an empty AnyValueArray object if the conversion is not possible.  
See [AnyValueArray](../any_value_array), [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public` [AnyValueArray](../any_value_array) getAsArray(String key)

- **key**: String -key of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if the conversion is not supported.


#### getAsArrayWithDefault
Converts a map's element into an AnyValueArray object or returns a given default value if the conversion is not possible.  
See [AnyValueArray](../any_value_array)

> `public` [AnyValueArray](../any_value_array) getAsArrayWithDefault(String key, [AnyValueArray](../any_value_array) defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or given default value if the conversion is not supported. 


#### getAsBoolean
Converts a map's element into a boolean or returns false if the conversion is not possible.

> `public` boolean getAsBoolean(String key)

- **key**: String - key of the element to get.
- **returns**: boolean - boolean value of the element or false if the conversion is not supported.


#### getAsBooleanWithDefault
Converts a map's  element into a boolean or returns a given default value if the conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` boolean getAsBooleanWithDefault(String key, boolean defaultValue)

- **key**: String - key of element to get.
- **defaultValue**: boolean - default value
- **returns**: boolean - boolean value of the element or given default value if the conversion is not supported. 


#### getAsDateTime
Converts a map's element into a Date or returns the current date if the conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` ZonedDateTime getAsDateTime(String key)

- **key**: String - key of element to get.
- **returns**: ZonedDateTime - ZonedDateTime value of the element or the current date if the conversion is not supported. 


#### getAsDateTimeWithDefault
Converts a map's element into a Date or returns a given default value if the conversion is not possible.  
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` ZonedDateTime getAsDateTimeWithDefault(String key, ZonedDateTime defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: ZonedDateTime - default value
- **returns**: ZonedDateTime - ZonedDateTime value of the element or given default value if the conversion is not supported.


#### getAsDouble
Converts a map's element into a double or returns 0 if the conversion is not possible.

> `public` double getAsDouble(String key

- **key**: String - key of the element to get.
- **returns**: double - double value of the element or 0 if the conversion is not supported. 


#### getAsDoubleWithDefault
Converts a map's element into a double or returns a given default value if the conversion is not possible.  
See [DoubleConverter.to_double_with_default](../../convert/double_converter/#todouble_with_default)

> `public` double getAsDoubleWithDefault(String key, double defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: double - default value
- **returns**: double - double value of the element or given default value if the conversion is not supported. 


#### getAsFloat
Converts a map's element into a float or returns 0 if the conversion is not possible.

> `public` float getAsFloat(String key)

- **key**: String - key the of element to get.
- **returns**: float - float value of the element or 0 if the conversion is not supported. 


#### getAsFloatWithDefault
Converts a map's element into a float or returns a given default value if the conversion is not possible.  
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` float getAsFloatWithDefault(String key, float defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: float - default value
- **returns**: float - float value of the element or given default value if the conversion is not supported. 


#### getAsInteger
Converts a map's element into an integer or returns 0 if the conversion is not possible.

> `public` int getAsInteger(String key)

- **key**: String - key of the element to get.
- **returns**: int - integer value of the element or 0 if the conversion is not supported. 


#### getAsIntegerWithDefault
Converts a map's element into an integer or returns a given default value if the conversion is not possible.  
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` int getAsIntegerWithDefault(String key, int defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: int - default value
- **returns**: int - integer value of the element or given default value if the conversion is not supported. 


#### getAsLong
Converts a map's element into a long or returns 0 if the conversion is not possible.

> `public` long getAsLong(String key)

- **key**: String - key of the element to get.
- **returns**: long - long value of the element or 0 if the conversion is not supported.


#### getAsLongWithDefault
Converts a map's element into a long or returns a given default value if the conversion is not possible.  
See [LongConverter.toLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> `public` long getAsLongWithDefault(String key, long defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: long - default value
- **returns**: long - long value of the element or default value if the conversion is not supported. 


#### getAsMap
Converts a map's element into an AnyValueMap object or returns an empty AnyValueMap object if the conversion is not possible.

> `public` [AnyValueMap](../any_value_map) getAsMap(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - long value of the element or 0 if the conversion is not supported.


#### getAsMapWithDefault
Converts a map's element into an AnyValueMap object or returns a given default value if the conversion is not possible.

> `public` [AnyValueMap](../any_value_map) getAsMapWithDefault(String key, [AnyValueMap](../any_value_map) defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or given default value if the conversion is not supported. 


#### getAsNullableArray
Converts a map's element into an AnyValueArray or returns null if the conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> `public` [AnyValueMap](../any_value_map) getAsNullableArray(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or given default value if the conversion is not supported.


#### getAsNullableBoolean
Converts a map's element into a boolean or returns null if the conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> `public` Boolean getAsNullableBoolean(String key)

- **key**: String - key of the element to get.
- **returns**: Boolean - boolean value of the element or null if the conversion is not supported. 


#### getAsNullableDateTime
Converts a map's element into a Date or returns null if the conversion is not possible.  
See [DateTimeConverter.toNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> `public` ZonedDateTime getAsNullableDateTime(String key)

- **key**: String - key of the element to get.
- **returns**: ZonedDateTime - ZonedDateTime value of the element or null if the conversion is not supported. 


#### getAsNullableDouble
Converts a map's element into a double or returns null if the conversion is not possible.  
See [DoubleConverter.toNullableDouble](../../convertdouble_converter/#tonullabledouble)

> `public` Double getAsNullableDouble(String key)

- **key**: String - key of the element to get.
- **returns**: Double - double value of the element or null if the conversion is not supported.


#### getAsNullableFloat
Converts a map's element into a float or returns null if the conversion is not possible.  
See [FloatConverter.toNullableFloat](../../convertfloat_converter/#tonullablefloat)

> `public` Float getAsNullableFloat(String key)

- **key**: String - key of the element to get.
- **returns**: Float - float value of the element or null if the conversion is not supported.


#### getAsNullableInteger
Converts a map's element into an integer or returns null if the conversion is not possible.  
See [IntegerConverter.toNullableInteger](../../convertinteger_converter/#tonullableinteger)

> `public` Integer getAsNullableInteger(String key)

- **key**: String - key of the element to get.
- **returns**: Integer - integer value of the element or null if the conversion is not supported. 


#### getAsNullableLong
Converts a map's element into a long or returns null if the conversion is not possible.  
See [LongConverter.toNullableLong](../../convertlong_converter/#tonullablelong)

> `public` Long getAsNullableLong(String key)

- **key**: String - key of the element to get.
- **returns**: Long - long value of the element or null if the conversion is not supported.


#### getAsNullableMap
Converts a map's element into an AnyValueMap object or returns null if the conversion is not possible.

> `public` [AnyValueMap](../any_value_map) getAsNullableMap(String key)

- **key**: String - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if the conversion is not supported. 


#### getAsNullableString
Converts a map's element into a string or returns null if the conversion is not possible.  
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring)

> `public` String getAsNullableString(String key)

- **key**: String - key of the element to get.
- **returns**: String - string value of the element or null if the conversion is not supported. 


#### getAsNullableType
Converts a map's element into a value defined by a specified typecode.
If conversion is not possible, it returns null.    
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` <T> T getAsNullableType(Class<T> type, String key)

- **type**: Class<T> - TypeCode that defines the type of the result.
- **key**: String - key of the element to get.
- **returns**: <T> T - element value defined by the typecode or null if the conversion is not supported. 


#### getAsObject
Gets the value stored in map element without any conversions.
When the element's key is not defined, it returns the entire map value.   

> `public` Object getAsObject(String key)

- **key**: String - (optional) key of the element to get.
- **returns**: Object - element value or value of the map when the index is not defined. 


#### getAsString
Converts map's element into a string or returns "" if the conversion is not possible.

> `public` String getAsString(String key)

- **key**: String - (optional) key of the element to get.
- **returns**: String - string value of the element or "" if the conversion is not supported. 


#### getAsStringWithDefault
Converts map's element into a string or returns "" if the conversion is not possible.

> `public` String getAsStringWithDefault(String key, String defaultValue)

- **key**: String - key of the element to get.
- **defaultValue**: String - default value
- **returns**: string - string value of the element or default value if the conversion is not supported. 


#### getAsType
Converts a map's element into a value defined by a specified typecode.
If conversion is not possible it returns the default value for the specified type.

> `public` <T> T getAsType(Class<T> type, String key)

- **type**: Class<T> - TypeCode that defines the type of the result.
- **key**: String - key of the element to get.
- **returns**: <T> T - element value defined by the typecode or default if the conversion is not supported. 


#### getAsTypeWithDefault
Converts a map's element into a value defined by a specified typecode.
If the conversion is not possible, it returns the default value for the specified type.  
See [TypeConverter.toTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> `public` <T> T getAsTypeWithDefault(Class<T> type, String key, T defaultValue)

- **type**: Class<T> - type that defines the type of the result
- **key**: String - key of the element to get.
- **defaultValue**: T - default value
- **returns**: <T> T - element's value defined by the typecode or default value if the conversion is not supported. 


#### getAsValue
Converts a map's element into an AnyValue or returns an empty AnyValue if the conversion is not possible.  
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> `public` [AnyValue](../any_value) getAsValue(String key)

- **key**: string - key of the element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or an empty AnyValue object if the conversion is not supported. 


#### getKeys
Gets keys of all elements stored in this map.

> `public` List<String> getKeys()

- **returns**: List<String> - list with all map keys. 


#### length
Gets the number of elements stored in this map.

> `public` int length()

- **returns**: int - number of elements in this map.


#### put
Puts a new value into a map's element specified by its key.

> `public` void put(String key, Object value)

- **key**: String - key of the element to put.
- **value**: Object - new value for the map's element.


#### setAsObject
Sets a new value to a map's element specified by its index.
When the index is not defined, it resets the entire map value.
This method has double purpose, because method overrides are not supported in JavaScript.  
See [MapConverter.toMap](../../convert/map_converter/#tomap)

> `public` void setAsObject(Object value)

- **key**: Object - (optional) key of the element to set
- **value**: Object - new element or map value.


#### toString
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*

> `public` String toString() 

- **returns**: String - string representation of the object.

### Static methods

#### fromMaps
Creates a new AnyValueMap by merging two or more maps.
Maps defined later in the list override values from previously defined maps.

> `public static` [StringValueMap](../string_value_map) fromMaps(Map<?, ?>... maps) 

- **maps**: Map<?, ?>... - array of maps to be merged
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### fromString
Parses semicolon-separated key-value pairs and returns them as a [StringValueMap](../string_value_map).

> `public static` [StringValueMap](../string_value_map) fromString(String line) 

- **line**: String - semicolon-separated key-value list to initialize StringValueMap.
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### fromTuples
Creates a new [StringValueMap](../string_value_map) object from a list of key-value pairs called tuples.

> `public static` [StringValueMap](../string_value_map) fromTuples(Object... tuples)

- **tuples**: Object... - list of values where odd elements are keys and the following even elements are values.
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### fromTuplesArray
Creates a new StringValueMap object from a list of key-value pairs called tuples.
The method is similar to [fromTuples](#fromtuples) but tuples are passed as array instead of parameters.

> `public static` [StringValueMap](../string_value_map) fromTuplesArray(Object[] tuples)

- **tuples**: Object[] - list of values where odd elements are keys and the following even elements are values.
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


### Examples

```java
{
  StringValueMap value1 = StringValueMap.fromString("key1=1;key2=123.456;key3=2018-01-01");
 
  value1.getAsBoolean("key1");   // Result: true
  value1.getAsInteger("key2");   // Result: 123
  value1.getAsFloat("key2");     // Result: 123.456
  value1.getAsDateTime("key3");  // Result: new Date(2018,0,1)
  }

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
