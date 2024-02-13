---
type: docs
title: "StringValueMap"
linkTitle: "StringValueMap"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Cross-language implementation of a map (dictionary) where all keys and values are strings.
    
---

### Description

The StringValueMap class allows you to create a cross-language implementation of a map (dictionary) where all keys and values are strings.

**Important points**

- The class provides several methods to convert the stored values to different types, such as array, bool or datetime.
- This class is widely used in Pip.Services as a basis for a variety of classes, such as [ConfigParams](../../config/config_params), [ConnectionParams](../../../components/connect/connection_params), [CredentialParams](../../../components/auth/credential_params) (in the Pip.Services components package) and others.

### Constructors
Creates a new instance of the map and assigns its value.

> `public` StringValueMap(IDictionary\<string, string\> map)

- **map**: IDictionary\<string, string\> - (optional) values to initialize this map.


Creates a new instance of the map and assigns its value.

> `public` StringValueMap(object map)

- **map**: object - (optional) values to initialize this map.

Creates a new instance of the map and assigns its value.

> `public` StringValueMap()


### Instance methods

#### Append
Appends new elements to this map.

> `public` void Append(IDictionary<\string, object\> map)

- **map**: IDictionary<\string, object\> - map with elements to be added.


#### Append
Appends new elements to this map.

> `public` void Append(IDictionary<\string, string\> map)

- **map**: IDictionary<\string, string\> - map with elements to be added.


#### Clone
Creates a binary clone of this object.

> `public` object Clone()

- **returns**: object - clone of this object.


#### Get
Gets a map element specified by its key.

> `public virtual` string Get(string key)

- **key**: string - key of the element to get.
- **returns**: string - value of the map element.


#### GetAsArray
Converts a map element into an AnyValueArray or returns an empty AnyValueArray if the conversion is not possible.  
See [AnyValueArray](../any_value_array), [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public` [AnyValueArray](../any_value_array) GetAsArray(string key)

- **key**: string - key of the element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or an empty AnyValueArray if the conversion is not supported.


#### GetAsArrayWithDefault
Converts a map element into an AnyValueArray or returns a given default value if the conversion is not possible.  
See [AnyValueArray](../any_value_array)

> `public` [AnyValueArray](../any_value_array) GetAsArrayWithDefault(string key, [AnyValueArray](../any_value_array) defaultValue)

- **key**: string - key of the element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or given default value if the conversion is not supported. 


#### GetAsBoolean
Converts a map element into a bool or returns false if the conversion is not possible.

> `public` bool GetAsBoolean(string key)

- **key**: string - key of the element to get.
- **returns**: bool - bool value of the element or false if the conversion is not supported.


#### GetAsBooleanWithDefault
Converts a map element into a bool or returns a given default value if the conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` bool GetAsBooleanWithDefault(string key, bool defaultValue) 

- **key**: string - key of element to get.
- **defaultValue**: bool - default value
- **returns**: bool - bool value of the element or given default value if the conversion is not supported. 


#### GetAsDateTime
Converts a map element into a DateTime or returns the current date if the conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` DateTime GetAsDateTime(string key)

- **key**: string - key of element to get.
- **returns**: DateTime - DateTime value of the element or the current date if the conversion is not supported. 


#### GetAsDateTimeWithDefault
Converts a map element into a DateTime or returns a  given default value if the conversion is not possible.  
See [DateTimeConverter.ToDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` DateTime GetAsDateTimeWithDefault(string key, DateTime defaultValue)

- **key**: string - key of element to get.
- **defaultValue**: DateTime - default value
- **returns**: DateTime - DateTime value of the element or given default value if the conversion is not supported.


#### GetAsNullableTimeSpan
Converts a map element into a TimeSpan or returns null if the conversion is not possible.  

> `public` TimeSpan GetAsNullableTimeSpan(string key)

- **key**: string - key of the element to get
- **returns**: TimeSpan - TimeSpan of the element or null if the conversion is not possible.


#### GetAsTimeSpan
Converts a map element into a TimeSpan.

> `public` TimeSpan GetAsTimeSpan(string key)

- **key**: string - key of the element to get
- **returns**: TimeSpan - TimeSpan of the element

#### GetAsTimeSpanWithDefault
Converts a map element into a TimeSpan or returns a given default value if the conversion is not possible.  

> `public` TimeSpan GetAsTimeSpanWithDefault(string key, TimeSpan? defaultValue)

- **key**: string - key of the element to get
- **defaultValue**: TimeSpan - default value
- **returns**: TimeSpan - Timespan of the element or given default value if the conversion is not possible.


#### GetAsNullableEnum
Converts a map element into an Enum or returns null if the conversion is not possible.

> `public` T GetAsNullableEnum\<T\>(string key)

- **key**: string - key of the element to get
- **returns**: T - Enum of the element  or null if the conversion is not possible


#### GetAsEnum
Converts a map element into an Enum.

> `public` T GetAsEnum\<T\>(string key)

- **key**: string - key of the element to get
- **returns**: T - Enum of the element.


#### GetAsEnumWithDefault
Converts a map element into an Enum or returns a given default value if the conversion is not possible.  

> `public` T GetAsEnumWithDefault\<T\>(string key, T defaultValue)

- **key**: string - key of the element to get
- **defaultValue**: T - default value
- **returns**: T - Enum or given default value if the conversion is not possible. 


#### GetAsDouble
Converts a map element into a double or returns 0 if the conversion is not possible.

> `public` double GetAsDouble(string key)

- **key**: string - key of element to get.
- **returns**: double - double value of the element or 0 if the conversion is not supported. 


#### GetAsDoubleWithDefault
Converts a map element into a double or returns a given default value if the conversion is not possible.  
See [DoubleConverter.ToDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> `public` double GetAsDoubleWithDefault(string key, double defaultValue)

- **key**: string - key of element to get.
- **defaultValue**: double - default value
- **returns**: double - double value of the element or given default value if the conversion is not supported. 


#### GetAsFloat
Converts a map element into a float or returns 0 if the conversion is not possible.

> `public` float GetAsFloat(string key)

- **key**: string - key of element to get.
- **returns**: float - float value of the element or 0 if the conversion is not supported. 


#### GetAsFloatWithDefault
Converts a map element into a float or returns a given default value if the conversion is not possible.  
See [FloatConverter.ToFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` float GetAsFloatWithDefault(string key, float defaultValue)

- **key**: string - key of the element to get.
- **defaultValue**: float - default value
- **returns**: float - float value of the element or given default value if the conversion is not supported. 


#### GetAsInteger
Converts a map element into an integer or returns 0 if the conversion is not possible.

> `public` int GetAsInteger(string key)

- **key**: string - key of element to get.
- **returns**: int - integer value of the element or 0 if the conversion is not supported. 


#### GetAsIntegerWithDefault
Converts a map element into an integer or returns a given default value if the conversion is not possible.  
See [IntegerConverter.ToIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` int GetAsIntegerWithDefault(string key, int defaultValue)

- **key**: string - key of element to get.
- **defaultValue**: int - default value
- **returns**: int - integer value of the element or given default value if the conversion is not supported. 


#### GetAsLong
Converts a map element into a long or returns 0 if the conversion is not possible.

> `public` long GetAsLong(long key)

- **key**: string - key of element to get.
- **returns**: long - long value of the element or 0 if the conversion is not supported.


#### GetAsLongWithDefault
Converts a map element into a long or returns a given default value if the conversion is not possible.  
See [LongConverter.ToLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> `public` long GetAsLongWithDefault(string key, long defaultValue)

- **key**: string - key of element to get.
- **defaultValue**: long - default value
- **returns**: long - long value of the element or given default value if the conversion is not supported. 


#### GetAsMap
Converts a map element into an AnyValueMap or returns an empty AnyValueMap if the conversion is not possible.

> `public` [AnyValueMap](../any_value_map) GetAsMap(string key)

- **key**: string - key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - long value of the element or an empty AnyValueMap if the conversion is not supported.


#### GetAsMapWithDefault
Converts a map element into an AnyValueMap or returns a given default value if the conversion is not possible.

> `public` [AnyValueMap](../any_value_map) GetAsMapWithDefault(string key, [AnyValueMap](../any_value_map) defaultValue)

- **key**: string - key of element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or give default value if the conversion is not supported. 


#### GetAsNullableArray
Converts a map element into an AnyValueArray or returns null if the conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.FromValue](../any_value_map/#fromvalue)

> `public` [AnyValueMap](../any_value_map) GetAsNullableArray(string key)

- **key**: string - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if the conversion is not supported.


#### GetAsNullableBoolean
Converts a map element into a bool or returns null if the conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> `public` bool GetAsNullableBoolean(string key)

- **key**: string - key of the element to get.
- **returns**: bool - bool value of the element or null if the conversion is not supported. 


#### GetAsNullableDateTime
Converts a map element into a DateTime or returns null if the conversion is not possible.  
See [DateTimeConverter.ToNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> `public` DateTime GetAsNullableDateTime(string key)

- **key**: string - key of the element to get.
- **returns**: DateTime - DateTime value of the element or null if the conversion is not supported. 


#### GetAsNullableDouble
Converts map element into a double or returns null if the conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` double GetAsNullableDouble(string key)

- **key**: string - key of the element to get.
- **returns**: double - double value of the element or null if the conversion is not supported.


#### GetAsNullableFloat
Converts a map element into a float or returns null if the conversion is not possible.  
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` float GetAsNullableFloat(string key)

- **key**: string - key of the element to get.
- **returns**: float - float value of the element or null if the conversion is not supported.


#### GetAsNullableInteger
Converts a map element into an integer or returns null if the conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` int GetAsNullableInteger(string key)

- **key**: string - key of the element to get.
- **returns**: int - integer value of the element or null if the conversion is not supported. 


#### GetAsNullableLong
Converts a map element into a long or returns null if the conversion is not possible.  
See [LongConverter.ToNullableLong](../../convert/long_converter/#tolongwithdefault)

> `public` long GetAsNullableLong(string key)

- **key**: string - key of the element to get.
- **returns**: long - long value of the element or null if the conversion is not supported.


#### GetAsNullableMap
Converts a map element into an AnyValueMap or returns null if the conversion is not possible.

> `public` [AnyValueMap](../any_value_map) GetAsNullableMap(string key)

- **key**: string - key of the element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if the conversion is not supported. 


#### GetAsNullableString
Converts a map element into a string or returns null if the conversion is not possible.  
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring)

> `public` string GetAsNullableString(string key)

- **key**: string - key of the element to get.
- **returns**: string - string value of the element or null if the conversion is not supported. 


#### GetAsNullableType
Converts a map element into a value defined by a specified typecode.
If conversion is not possible, it returns null.
**T** - the class type.  
See [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> `public` T GetAsNullableType\<T\>(string key)

- **key**: string - key of the element to get.
- **returns**: T - element value defined by the typecode or null if the conversion is not supported. 


#### GetAsObject
Gets the value stored in a map element without any conversions.
When element key is not defined, it returns the entire map.   

> `public` object GetAsObject(string key)

- **key**: string - (optional) key of the element to get
- **returns**: object - element value or entire map when the key is not defined. 


#### GetAsObject
Gets the value stored in this map element without any conversions  

> `public` object GetAsObject()

- **returns**: object - element value or value of the map when key is not defined. 


#### GetAsString
Converts a map element into a string or returns "" if the conversion is not possible.

> `public` string GetAsString(string key)

- **key**: string - (optional) key of the element to get
- **returns**: string - string value of the element or "" if the conversion is not supported. 


#### GetAsStringWithDefault
Converts a map element into a string or returns "" if the conversion is not possible.

> `public` string GetAsStringWithDefault(string key, string defaultValue)

- **key**: string - key of element to get.
- **defaultValue**: string - default value
- **returns**: string - string value of the element or default value if the conversion is not supported. 


#### GetAsType
Converts a map element into a value defined by a specified typecode.
If conversion is not possible, it returns the default value for the specified type.
**T** - class type.

> `public` string GetAsType\<T\>(string key)

- **key**: string - key of element to get.
- **returns**: T - element value defined by the typecode or default if the conversion is not supported. 


#### GetAsTypeWithDefault
Converts a map element into a value defined by a specified typecode.
If conversion is not possible, it returns the default value for the specified type.  
**T** - class type.  
See [TypeConverter.ToTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> `public` T GetAsTypeWithDefault\<T\>(string key, T defaultValue)

- **key**: string - key of the element to get.
- **defaultValue**: T - default value
- **returns**: T - element value defined by the typecode or default value if the conversion is not supported. 


#### GetAsValue
Converts a map element into an AnyValue or returns an empty AnyValue if the conversion is not possible.  
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> `public` [AnyValue](../any_value) GetAsValue(string key)

- **key**: string - key of the element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if the conversion is not supported. 


#### Set
Sets a new value into a map element specified by its key.

> `public virtual` void Set(string key, string value)

- **key**: string - key of the element to put.
- **value**: string - new value for the map element.


#### SetAsObject
Sets a new value to a map element specified by its index.
When the index is not defined, it resets the entire map value.
See [MapConverter.ToMap](../../convert/map_converter/#tomap)

> `public` void SetAsObject(string key, object value)

- **key**: string - (optional) key of the element to set
- **value**: object - new element or map value.


#### SetAsObject
Sets a new value for this array element

> `public` void SetAsObject(object value)

- **value**: object - new element or map value.


#### ToString
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*

> `public override` string ToString() 

- **returns**: string - string representation of the object.

### Static methods

#### FromMaps
Creates a new AnyValueMap by merging two or more maps.
Maps defined later in the list override values from previously defined maps.

> `public static` [StringValueMap](../string_value_map) FromMaps(params IDictionary\<string, string\>[] maps)

- **maps**: IDictionary\<string, string\>[] - array of maps to be merged
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### FromString
Parses semicolon-separated key-value pairs and returns them as a [StringValueMap](../string_value_map).

> `public static` [StringValueMap](../string_value_map) FromString(string line)

- **line**: string - semicolon-separated key-value list to initialize StringValueMap.
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### FromTuples
Creates a new [StringValueMap](../string_value_map) from a list of key-value pairs called tuples.

> `public static` [StringValueMap](../string_value_map) FromTuples(object[] tuples)

- **tuples**: object[] - list of values where odd elements are keys and the following even elements are values
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### FromTuplesArray

Creates a new StringValueMap from a list of key-value pairs called tuples.
The method is similar to [FromTuples](#fromtuples) but tuples are passed as an array instead of as parameters.

> `public static` [StringValueMap](../string_value_map) FromTuplesArray(params object[] tuples)

- **tuples**: object[] - list of values where odd elements are keys and the following even elements are values
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.

#### FromValue

Converts a specified value into StringValueMap.

> `public static` [StringValueMap](../string_value_map) FromValue(object value)

- **value**: object - value to be converted
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


### Examples

```cs
var value1 = StringValueMap.FromString("key1=1;key2=123.456;key3=2018-01-01");

value1.GetAsBoolean("key1");   // Result: true
value1.GetAsInteger("key2");   // Result: 123
value1.GetAsFloat("key2");     // Result: 123.456
value1.GetAsDateTime("key3");  // Result: new DateTime(2018,0,1)

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
