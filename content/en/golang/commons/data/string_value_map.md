---
type: docs
title: "StringValueMap"
linkTitle: "StringValueMap"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Cross-language implementation of a map (dictionary) where all keys and values are strings.
    
---

### Description

The StringValueMap class allows you to create a cross-language implementation of a map (dictionary) where all keys and values are strings.

Important points

- The class provides several methods to convert the stored values to different types, such as array, boolean or datetime.
- This class is widely used in Pip.Services as a basis for variety of classes, such as [ConfigParams](../../config/config_params), [ConnectionParams](../../../components/connect/connection_params), [CredentialParams](../../../components/auth/credential_params) (in the Pip.Services components package) and others.

### Constructors

#### NewStringValueMap
Creates a new instance of the map and assigns its value.

> NewStringValueMap(value map[string]string) [*StringValueMap]()

- **map**: map[string]string - (optional) values to initialize this map.


#### NewEmptyStringValueMap
Creates a new instance of the map and assigns its value.

> NewEmptyStringValueMap() [*StringValueMap]()



#### NewStringValueMapFromMaps
Creates a new AnyValueMap by merging two or more maps.
Maps defined later in the list override values from previously defined maps.

> NewStringValueMapFromMaps(maps ...map[string]string) [StringValueMap](../string_value_map)

- **maps**: ...map[string]string - an array of maps to be merged
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


#### NewStringValueMapFromString
Parses semicolon-separated key-value pairs and returns them as a [StringValueMap](../string_value_map).

> NewStringValueMapFromString(line string) [*StringValueMap](../string_value_map)

- **line**: string - semicolon-separated key-value list to initialize StringValueMap.
- **returns**: [*StringValueMap](../string_value_map) - a newly created StringValueMap.


#### NewStringValueMapFromTuples
Creates a new [StringValueMap](../string_value_map) from a list of key-value pairs called tuples.

> NewStringValueMapFromTuples(tuples ...interface{}) [*StringValueMap](../string_value_map)

- **tuples**: ...interface{} - a list of values where odd elements are keys and the following even elements are values
- **returns**: [*StringValueMap](../string_value_map) - a newly created StringValueMap.


#### NewStringValueMapFromTuplesArray
Creates a new StringValueMap from a list of key-value pairs called tuples.
The method is similar to [NewStringValueMapFromTuples](#newstringvaluemapfromtuples) but tuples are passed as array instead of parameters.

> NewStringValueMapFromTuplesArray(tuples []interface{}) [*StringValueMap](../string_value_map)

- **tuples**: []interface{} - a list of values where odd elements are keys and the following even elements are values
- **returns**: [*StringValueMap](../string_value_map) - a newly created StringValueMap.

#### NewStringValueMapFromValue
Converts specified value into StringValueMap.

> NewStringValueMapFromValue(value interface{}) [*StringValueMap](../string_value_map)

- **value**: interface{} - value to be converted
- **returns**: [*StringValueMap](../string_value_map) - a newly created StringValueMap.



### Methods

#### Append
Appends new elements to this map.

> (c [*StringValueMap]()) Append(values map[string]string)

- **map**: map[string]string - a map with elements to be added.


#### Clear
Clears this map by removing all its elements.

> (c [*StringValueMap]()) Clear()


#### Clone
Creates a binary clone of this object.

> (c *StringValueMap) Clone() interface{}

- **returns**: interface{} - a clone of this object.


#### Get
Gets a map element specified by its key.

> (c [*StringValueMap]()) Get(key string) string

- **key**: string - a key of the element to get.
- **returns**: string - the value of the map element.


#### GetAsArray
Converts map element into an AnyValueArray or returns empty AnyValueArray if conversion is not possible.  
See [AnyValueArray](../any_value_array), [AnyValueArray.NewAnyValueArrayFromValue](../any_value_array/#newanyvaluearrayfromvalue)

> (c [*StringValueMap]()) GetAsArray(key string) [*AnyValueArray](../any_value_array)

- **key**: string - a key of element to get.
- **returns**: [*AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if conversion is not supported.


#### GetAsArrayWithDefault
Converts map element into an AnyValueArray or returns default value if conversion is not possible.  
See [AnyValueArray](../any_value_array)

> (c [*StringValueMap]()) GetAsArrayWithDefault(key string, defaultValue [*AnyValueArray](../any_value_array)) [*AnyValueArray](../any_value_array)

- **key**: string - a key of element to get.
- **defaultValue**: [*AnyValueArray](../any_value_array) - the default value
- **returns**: [*AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if conversion is not supported. 


#### GetAsBoolean
Converts map element into a boolean or returns false if conversion is not possible.

> (c [*StringValueMap]()) GetAsBoolean(key string) bool

- **key**: string - a key of element to get.
- **returns**: bool - boolean value of the element or false if conversion is not supported.


#### GetAsBooleanWithDefault
Converts map element into a boolean or returns default value if conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../boolean_converter/#tobooleanwithdefault)

> (c [*StringValueMap]()) GetAsBooleanWithDefault(key string, defaultValue bool) bool

- **key**: string - a key of element to get.
- **defaultValue**: bool - the default value
- **returns**: bool - boolean value of the element or default value if conversion is not supported. 


#### GetAsDateTime
Converts map element into a Date or returns the current date if conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../boolean_converter/#tobooleanwithdefault)

> (c [*StringValueMap]()) GetAsDateTime(key string) time.Time

- **key**: string - a key of element to get.
- **returns**: time.Time - Date value of the element or the current date if conversion is not supported. 


#### GetAsDateTimeWithDefault
Converts map element into a Date or returns default value if conversion is not possible.  
See [DateTimeConverter.ToDateTimeWithDefault](../date_time_converter/#todatetimewithdefault)

> (c [*StringValueMap]()) GetAsDateTimeWithDefault(key string, defaultValue time.Time) time.Time

- **key**: string - a key of element to get.
- **defaultValue**: time.Time - the default value
- **returns**: time.Time - Date value of the element or default value if conversion is not supported.


#### GetAsDouble
Converts map element into a double or returns 0 if conversion is not possible.

> (c [*StringValueMap]()) GetAsDouble(key string) float64

- **key**: string - a key of element to get.
- **returns**: float64 - double value of the element or 0 if conversion is not supported. 


#### GetAsDoubleWithDefault
Converts map element into a double or returns default value if conversion is not possible.  
See [DoubleConverter.ToDoubleWithDefault](../double_converter/#todoublewithdefault)

> (c [*StringValueMap]()) GetAsDoubleWithDefault(key string, defaultValue float64) float64

- **key**: string - a key of element to get.
- **defaultValue**: float64 - the default value
- **returns**: float64 - double value of the element or default value if conversion is not supported. 


#### GetAsFloat
Converts map element into a float or returns 0 if conversion is not possible.

> (c [*StringValueMap]()) GetAsFloat(key string) float32

- **key**: string - a key of element to get.
- **returns**: float32 - float value of the element or 0 if conversion is not supported. 


#### GetAsFloatWithDefault
Converts map element into a flot or returns default value if conversion is not possible.  
See [FloatConverter.ToFloatWithDefault](../float_converter/#tofloatwithdefault)

> (c [*StringValueMap]()) GetAsFloatWithDefault(key string, defaultValue float32) float32

- **key**: string - a key of element to get.
- **defaultValue**: float32 - the default value
- **returns**: float32 - flot value of the element or default value if conversion is not supported. 


#### GetAsInteger
Converts map element into an integer or returns 0 if conversion is not possible.

> (c [*StringValueMap]()) GetAsInteger(key string) int

- **key**: string - a key of element to get.
- **returns**: int - integer value of the element or 0 if conversion is not supported. 


#### GetAsIntegerWithDefault
Converts map element into an integer or returns default value if conversion is not possible.  
See [IntegerConverter.ToIntegerWithDefault](../integer_converter/#tointegerwithdefault)

> (c [*StringValueMap]()) GetAsIntegerWithDefault(key string, defaultValue int) int

- **key**: string - a key of element to get.
- **defaultValue**: int - the default value
- **returns**: int - integer value of the element or default value if conversion is not supported. 


#### GetAsLong
Converts map element into a long or returns 0 if conversion is not possible.

> (c [*StringValueMap]()) GetAsLong(key string) int64

- **key**: string - a key of element to get.
- **returns**: int64 - long value of the element or 0 if conversion is not supported.


#### GetAsLongWithDefault
Converts map element into a long or returns default value if conversion is not possible.  
See [LongConverter.ToLongWithDefault](../long_converter/#tolongwithdefault)

> (c [*StringValueMap]()) GetAsLongWithDefault(key string, defaultValue int64) int64

- **key**: string - a key of element to get.
- **defaultValue**: int64 - the default value
- **returns**: int64 - long value of the element or default value if conversion is not supported. 


#### GetAsMap
Converts map element into an AnyValueMap or returns empty AnyValueMap if conversion is not possible.

> (c [*StringValueMap]()) GetAsMap(key string) [*AnyValueMap](../any_value_map)

- **key**: string - a key of element to get.
- **returns**: [*AnyValueMap](../any_value_map) - long value of the element or 0 if conversion is not supported.


#### GetAsMapWithDefault
Converts map element into an AnyValueMap or returns default value if conversion is not possible.

> (c [*StringValueMap]()) GetAsMapWithDefault(key string, defaultValue [*AnyValueMap](../any_value_map)) [*AnyValueMap](../any_value_map)

- **key**: string - a key of element to get.
- **defaultValue**: [*AnyValueMap](../any_value_map) - the default value
- **returns**: [*AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported. 


#### GetAsNullableArray
Converts map element into an AnyValueArray or returns nil if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.NewAnyValueMapFromValue](../any_value_map/#newanyvaluemapfromvalue)

> (c [*StringValueMap]()) GetAsNullableArray(key string) [*AnyValueArray](../any_value_array)

- **key**: string - a key of element to get.
- **returns**: [*AnyValueArray](../any_value_array) - AnyValueMap value of the element or default value if conversion is not supported.


#### GetAsNullableBoolean
Converts map element into a boolean or returns nil if conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../boolean_converter/#tonullableboolean)

> (c [*StringValueMap]()) GetAsNullableBoolean(key string) *bool

- **key**: string - a key of element to get.
- **returns**: *bool - boolean value of the element or nil if conversion is not supported. 


#### GetAsNullableDateTime
Converts map element into a Date or returns nil if conversion is not possible.  
See [DateTimeConverter.ToNullableDateTime](../date_time_converter/#tonullabledatetime)

> (c [*StringValueMap]()) GetAsNullableDateTime(key string) *time.Time

- **key**: string - a key of element to get.
- **returns**: *time.Time - Date value of the element or nil if conversion is not supported. 


#### GetAsNullableDouble
Converts map element into a double or returns nil if conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../double_converter/#tonullabledouble)

> (c [*StringValueMap]()) GetAsNullableDouble(key string) *float64

- **key**: string - a key of element to get.
- **returns**: number - double value of the element or nil if conversion is not supported.


#### GetAsNullableDouble
Converts map element into a float or returns nil if conversion is not possible.  
See [FloatConverter.ToNullableFloat](../float_converter/#tonullablefloat)

> (c [*StringValueMap]()) GetAsNullableDouble(key string) *float64

- **key**: string - a key of element to get.
- **returns**: *float64 - float value of the element or nil if conversion is not supported.


#### GetAsNullableInteger
Converts map element into an integer or returns nil if conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../integer_converter/#tonullableinteger)

> (c [*StringValueMap]()) GetAsNullableInteger(key string) *int

- **key**: string - a key of element to get.
- **returns**: *int - integer value of the element or nil if conversion is not supported. 


#### GetAsNullableLong
Converts map element into a long or returns nil if conversion is not possible.  
See [LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> (c [*StringValueMap]()) GetAsNullableLong(key string) *int64

- **key**: string - a key of element to get.
- **returns**: *int64 - long value of the element or nil if conversion is not supported.


#### GetAsNullableMap
Converts map element into an AnyValueMap or returns nil if conversion is not possible.

> (c [*StringValueMap]()) GetAsNullableMap(key string) [*AnyValueMap](../any_value_map)

- **key**: string - a key of element to get.
- **returns**: [*AnyValueMap](../any_value_map) - AnyValueMap value of the element or nil if conversion is not supported. 


#### GetAsNullableString
Converts map element into a string or returns nil if conversion is not possible.  
See [StringConverter.ToNullableString](../string_converter/#tonullablestring)

> (c [*StringValueMap]()) GetAsNullableString(key string) *string

- **key**: string - a key of element to get.
- **returns**: *string - string value of the element or nil if conversion is not supported. 


#### GetAsNullableType
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns nil.    
See [TypeConverter.ToNullableType](../type_converter/#tonullabletype)

> (c [*StringValueMap]()) GetAsNullableType(typ [convert.TypeCode](../../convert/type_code), key string) interface{}

- **typ**: [convert.TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **key**: string - a key of element to get.
- **returns**: interface{} - element value defined by the typecode or nil if conversion is not supported. 


#### GetAsObject
Gets the value stored in map element without any conversions.
When element key is not defined it returns the entire map value.   

> (c [*StringValueMap]()) GetAsObject(key string) interface{}

- **key**: string - (optional) a key of the element to get
- **returns**: interface{} - the element value or value of the map when index is not defined. 


#### GetAsString
Converts map element into a string or returns "" if conversion is not possible.

> (c [*StringValueMap]()) GetAsString(key string) string

- **key**: string - (optional) a key of the element to get
- **returns**: string - string value of the element or "" if conversion is not supported. 


#### GetAsStringWithDefault
Converts map element into a string or returns "" if conversion is not possible.

> (c [*StringValueMap]()) GetAsStringWithDefault(key string, defaultValue string) string

- **key**: string - a key of element to get.
- **defaultValue**: string - the default value
- **returns**: string - string value of the element or default value if conversion is not supported. 


#### GetAsType
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.

> (c [*StringValueMap]()) GetAsType(typ [convert.TypeCode](../../convert/type_code), key string) interface{}

- **type**: [convert.TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **key**: string - a key of element to get.
- **returns**: interface{} - element value defined by the typecode or default if conversion is not supported. 


#### GetAsTypeWithDefault
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.  
See [TypeConverter.ToTypeWithDefault](../type_converter/#totypewithdefault)

> (c [*StringValueMap]()) GetAsTypeWithDefault(typ [convert.TypeCode](../../convert/type_code), key string, defaultValue interface{}) interface{}

- **type**: [convert.TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **key**: string - a key of element to get.
- **defaultValue**: interface{} - the default value
- **returns**: interface{} - element value defined by the typecode or default value if conversion is not supported. 


#### GetAsValue
Converts map element into an AnyValue or returns an empty AnyValue if conversion is not possible.  
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> (c [*StringValueMap]()) GetAsValue(key string) [*AnyValue](../any_value)

- **key**: string - a key of element to get.
- **returns**: [*AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if conversion is not supported. 


#### Keys
Gets keys of all elements stored in this map.

> (c [*StringValueMap]()) Keys() []string

- **returns**: string[] - a list with all map keys. 


#### Len
Gets a number of elements stored in this map.

> (c [*StringValueMap]()) Len() int

- **returns**: int - the number of elements in this map.


#### Put
Puts a new value into map element specified by its key.

> (c [*StringValueMap]()) Put(key string, value interface{})

- **key**: string - a key of the element to put.
- **value**: interface{} - a new value for map element.


#### Remove
Removes a map element specified by its key

> (c [*StringValueMap]()) Remove(key string)

- **key**: string - a key of the element to remove.


#### SetAsObject
Sets a new value to map element specified by its index.
When the index is not defined, it resets the entire map value.
This method has double purpose because method overrides are not supported in JavaScript.  
See [MapConverter.ToMap](../../convert/map_converter/#tomap)

> (c [*StringValueMap]()) SetAsObject(key string, value interface{})

- **key**: string - (optional) a key of the element to set
- **value**: interface{} - a new element or map value.


#### String
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*

> (c [*StringValueMap]()) String() string

- **returns**: string - a string representation of the object.



### Examples

```go
value1 := NewStringValueMapFromString("key1=1;key2=123.456;key3=2018-01-01");

value1.GetAsBoolean("key1");   // Result: true
value1.GetAsInteger("key2");   // Result: 123
value1.GetAsFloat("key2");     // Result: 123.456
value1.GetAsDateTime("key3");  // Result: new Date(2018,0,1)
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
