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

Important points

- The class provides several methods to convert the stored values to different types, such as array, bool or datetime.
- This class is widely used in Pip.Services as a basis for variety of classes, such as [ConfigParams](../../config/config_params), [ConnectionParams](../../../components/connect/connection_params), [CredentialParams](../../../components/auth/credential_params) (in the Pip.Services components package) and others.

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

- **map**: IDictionary<\string, object\> - a map with elements to be added.


#### Append
Appends new elements to this map.

> `public` void Append(IDictionary<\string, string\> map)

- **map**: IDictionary<\string, string\> - a map with elements to be added.


#### Clone
Creates a binary clone of this object.

> `public` object Clone()

- **returns**: object - a clone of this object.


#### Get
Gets a map element specified by its key.

> `public virtual` string Get(string key)

- **key**: string - a key of the element to get.
- **returns**: string - the value of the map element.


#### GetAsArray
Converts map element into an AnyValueArray or returns empty AnyValueArray if conversion is not possible.  
See [AnyValueArray](../any_value_array), [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public` [AnyValueArray](../any_value_array) GetAsArray(string key)

- **key**: string - a key of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if conversion is not supported.


#### GetAsArrayWithDefault
Converts map element into an AnyValueArray or returns default value if conversion is not possible.  
See [AnyValueArray](../any_value_array)

> `public` [AnyValueArray](../any_value_array) GetAsArrayWithDefault(string key, [AnyValueArray](../any_value_array) defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - the default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if conversion is not supported. 


#### GetAsBoolean
Converts map element into a bool or returns false if conversion is not possible.

> `public` bool GetAsBoolean(string key)

- **key**: string - a key of element to get.
- **returns**: bool - bool value of the element or false if conversion is not supported.


#### GetAsBooleanWithDefault
Converts map element into a bool or returns default value if conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../boolean_converter/#tobooleanwithdefault)

> `public` bool GetAsBooleanWithDefault(string key, bool defaultValue) 

- **key**: string - a key of element to get.
- **defaultValue**: bool - the default value
- **returns**: bool - bool value of the element or default value if conversion is not supported. 


#### GetAsDateTime
Converts map element into a DateTime or returns the current date if conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../boolean_converter/#tobooleanwithdefault)

> `public` DateTime GetAsDateTime(string key)

- **key**: string - a key of element to get.
- **returns**: DateTime - DateTime value of the element or the current date if conversion is not supported. 


#### GetAsDateTimeWithDefault
Converts map element into a DateTime or returns default value if conversion is not possible.  
See [DateTimeConverter.ToDateTimeWithDefault](../date_time_converter/#todatetimewithdefault)

> `public` DateTime GetAsDateTimeWithDefault(string key, DateTime defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: DateTime - the default value
- **returns**: DateTime - DateTime value of the element or default value if conversion is not supported.


#### GetAsNullableTimeSpan
TODO: add description

> `public` TimeSpan GetAsNullableTimeSpan(string key)

- **key**: string - TODO: add description
- **returns**: TimeSpan - TODO: add description


#### GetAsTimeSpan
TODO: add description

> `public` TimeSpan GetAsTimeSpan(string key)

- **key**: string - TODO: add description
- **returns**: TimeSpan - TODO: add description

#### GetAsTimeSpanWithDefault
TODO: add description

> `public` TimeSpan GetAsTimeSpanWithDefault(string key, TimeSpan? defaultValue)

- **key**: string - TODO: add description
- **defaultValue**: TimeSpan - TODO: add description
- **returns**: TimeSpan - TODO: add description


#### GetAsNullableEnum
TODO: add description

> `public` T GetAsNullableEnum\<T\>(string key)

- **key**: string - TODO: add description
- **returns**: T - TODO: add description


#### GetAsEnum
TODO: add description

> `public` T GetAsEnum\<T\>(string key)

- **key**: string - TODO: add description
- **returns**: T - TODO: add description


#### GetAsEnumWithDefault
TODO: add description

> `public` T GetAsEnumWithDefault\<T\>(string key, T defaultValue)

- **key**: string - TODO: add description
- **defaultValue**: T - TODO: add description
- **returns**: T - TODO: add description


#### GetAsDouble
Converts map element into a double or returns 0 if conversion is not possible.

> `public` double GetAsDouble(string key)

- **key**: string - a key of element to get.
- **returns**: double - double value of the element or 0 if conversion is not supported. 


#### GetAsDoubleWithDefault
Converts map element into a double or returns default value if conversion is not possible.  
See [DoubleConverter.ToDoubleWithDefault](../double_converter/#todoublewithdefault)

> `public` double GetAsDoubleWithDefault(string key, double defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: double - the default value
- **returns**: double - double value of the element or default value if conversion is not supported. 


#### GetAsFloat
Converts map element into a float or returns 0 if conversion is not possible.

> `public` float GetAsFloat(string key)

- **key**: string - a key of element to get.
- **returns**: float - float value of the element or 0 if conversion is not supported. 


#### GetAsFloatWithDefault
Converts map element into a flot or returns default value if conversion is not possible.  
See [FloatConverter.ToFloatWithDefault](../float_converter/#tofloatwithdefault)

> `public` float GetAsFloatWithDefault(string key, float defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: float - the default value
- **returns**: float - flot value of the element or default value if conversion is not supported. 


#### GetAsInteger
Converts map element into an integer or returns 0 if conversion is not possible.

> `public` int GetAsInteger(string key)

- **key**: string - a key of element to get.
- **returns**: int - integer value of the element or 0 if conversion is not supported. 


#### GetAsIntegerWithDefault
Converts map element into an integer or returns default value if conversion is not possible.  
See [IntegerConverter.ToIntegerWithDefault](../integer_converter/#tointegerwithdefault)

> `public` int GetAsIntegerWithDefault(string key, int defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: int - the default value
- **returns**: int - integer value of the element or default value if conversion is not supported. 


#### GetAsLong
Converts map element into a long or returns 0 if conversion is not possible.

> `public` long GetAsLong(long key)

- **key**: string - a key of element to get.
- **returns**: long - long value of the element or 0 if conversion is not supported.


#### GetAsLongWithDefault
Converts map element into a long or returns default value if conversion is not possible.  
See [LongConverter.ToLongWithDefault](../long_converter/#tolongwithdefault)

> `public` long GetAsLongWithDefault(string key, long defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: long - the default value
- **returns**: long - long value of the element or default value if conversion is not supported. 


#### GetAsMap
Converts map element into an AnyValueMap or returns empty AnyValueMap if conversion is not possible.

> `public` [AnyValueMap](../any_value_map) GetAsMap(string key)

- **key**: string - a key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - long value of the element or 0 if conversion is not supported.


#### GetAsMapWithDefault
Converts map element into an AnyValueMap or returns default value if conversion is not possible.

> `public` [AnyValueMap](../any_value_map) GetAsMapWithDefault(string key, [AnyValueMap](../any_value_map) defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - the default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported. 


#### GetAsNullableArray
Converts map element into an AnyValueArray or returns null if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.FromValue](../any_value_map/#fromvalue)

> `public` [AnyValueMap](../any_value_map) GetAsNullableArray(string key)

- **key**: string - a key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported.


#### GetAsNullableBoolean
Converts map element into a bool or returns null if conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../boolean_converter/#tonullableboolean)

> `public` bool GetAsNullableBoolean(string key)

- **key**: string - a key of element to get.
- **returns**: bool - bool value of the element or null if conversion is not supported. 


#### GetAsNullableDateTime
Converts map element into a DateTime or returns null if conversion is not possible.  
See [DateTimeConverter.ToNullableDateTime](../date_time_converter/#tonullabledatetime)

> `public` DateTime GetAsNullableDateTime(string key)

- **key**: string - a key of element to get.
- **returns**: DateTime - DateTime value of the element or null if conversion is not supported. 


#### GetAsNullableDouble
Converts map element into a double or returns null if conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../double_converter/#tonullabledouble)

> `public` double GetAsNullableDouble(string key)

- **key**: string - a key of element to get.
- **returns**: double - double value of the element or null if conversion is not supported.


#### GetAsNullableFloat
Converts map element into a float or returns null if conversion is not possible.  
See [FloatConverter.ToNullableFloat](../float_converter/#tonullablefloat)

> `public` float GetAsNullableFloat(string key)

- **key**: string - a key of element to get.
- **returns**: float - float value of the element or null if conversion is not supported.


#### GetAsNullableInteger
Converts map element into an integer or returns null if conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../integer_converter/#tonullableinteger)

> `public` int GetAsNullableInteger(string key)

- **key**: string - a key of element to get.
- **returns**: int - integer value of the element or null if conversion is not supported. 


#### GetAsNullableLong
Converts map element into a long or returns null if conversion is not possible.  
See [LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> `public` long GetAsNullableLong(string key)

- **key**: string - a key of element to get.
- **returns**: long - long value of the element or null if conversion is not supported.


#### GetAsNullableMap
Converts map element into an AnyValueMap or returns null if conversion is not possible.

> `public` [AnyValueMap](../any_value_map) GetAsNullableMap(string key)

- **key**: string - a key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if conversion is not supported. 


#### GetAsNullableString
Converts map element into a string or returns null if conversion is not possible.  
See [StringConverter.ToNullableString](../string_converter/#tonullablestring)

> `public` string GetAsNullableString(string key)

- **key**: string - a key of element to get.
- **returns**: string - string value of the element or null if conversion is not supported. 


#### GetAsNullableType
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns null.
**T** - the class type.  
See [TypeConverter.ToNullableType](../type_converter/#tonullabletype)

> `public` T GetAsNullableType\<T\>(string key)

- **key**: string - a key of element to get.
- **returns**: T - element value defined by the typecode or null if conversion is not supported. 


#### GetAsObject
Gets the value stored in map element without any conversions.
When element key is not defined it returns the entire map value.   

> `public` object GetAsObject(string key)

- **key**: string - (optional) a key of the element to get
- **returns**: object - the element value or value of the map when index is not defined. 


#### GetAsObject
Gets the value stored in this map element without any conversions  

> `public` object GetAsObject()

- **returns**: object - the element value or value of the map when index is not defined. 


#### GetAsString
Converts map element into a string or returns "" if conversion is not possible.

> `public` string GetAsString(string key)

- **key**: string - (optional) a key of the element to get
- **returns**: string - string value of the element or "" if conversion is not supported. 


#### GetAsStringWithDefault
Converts map element into a string or returns "" if conversion is not possible.

> `public` string GetAsStringWithDefault(string key, string defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: string - the default value
- **returns**: string - string value of the element or default value if conversion is not supported. 


#### GetAsType
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.
**T** - the class type.

> `public` string GetAsType\<T\>(string key)

- **key**: string - a key of element to get.
- **returns**: T - element value defined by the typecode or default if conversion is not supported. 


#### GetAsTypeWithDefault
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.  
**T** - the class type.  
See [TypeConverter.ToTypeWithDefault](../type_converter/#totypewithdefault)

> `public` T GetAsTypeWithDefault\<T\>(string key, T defaultValue)

- **key**: string - a key of element to get.
- **defaultValue**: T - the default value
- **returns**: T - element value defined by the typecode or default value if conversion is not supported. 


#### GetAsValue
Converts map element into an AnyValue or returns an empty AnyValue if conversion is not possible.  
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> `public` [AnyValue](../any_value) GetAsValue(string key)

- **key**: string - a key of element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if conversion is not supported. 


#### Set
Sets a new value into map element specified by its key.

> `public virtual` void Set(string key, string value)

- **key**: string - a key of the element to put.
- **value**: any - a new value for map element.


#### SetAsObject
Sets a new value to map element specified by its index.
When the index is not defined, it resets the entire map value.
See [MapConverter.ToMap](../../convert/map_converter/#tomap)

> `public` void SetAsObject(string key, object value)

- **key**: string - (optional) a key of the element to set
- **value**: object - a new element or map value.


#### SetAsObject
Sets a new value for this array element

> `public` void SetAsObject(object value)

- **value**: object - a new element or map value.


#### ToString
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*

> `public override` string ToString() 

- **returns**: string - a string representation of the object.

### Static methods

#### FromMaps
Creates a new AnyValueMap by merging two or more maps.
Maps defined later in the list override values from previously defined maps.

> `public static` [StringValueMap](../string_value_map) FromMaps(params IDictionary\<string, string\>[] maps)

- **maps**: IDictionary\<string, string\>[] - an array of maps to be merged
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


#### FromString
Parses semicolon-separated key-value pairs and returns them as a [StringValueMap](../string_value_map).

> `public static` [StringValueMap](../string_value_map) FromString(string line)

- **line**: string - semicolon-separated key-value list to initialize StringValueMap.
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


#### FromTuples
Creates a new [StringValueMap](../string_value_map) from a list of key-value pairs called tuples.

> `public static` [StringValueMap](../string_value_map) FromTuples(object[] tuples)

- **tuples**: object[] - a list of values where odd elements are keys and the following even elements are values
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


#### FromTuplesArray!
**TODO: this method is not realized yet for this language**

Creates a new StringValueMap from a list of key-value pairs called tuples.
The method is similar to [FromTuples](#fromtuples) but tuples are passed as array instead of parameters.

> `public static` [StringValueMap](../string_value_map) FromTuplesArray(params object[] tuples)

- **tuples**: object[] - a list of values where odd elements are keys and the following even elements are values
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.

#### FromValue!
**TODO: this method is not realized yet for this language**

Converts specified value into StringValueMap.

> `public static` [StringValueMap](../string_value_map) FromValue(object value)

- **value**: object - value to be converted
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


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
