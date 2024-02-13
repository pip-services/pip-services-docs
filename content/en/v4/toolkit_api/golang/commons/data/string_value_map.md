---
type: docs
title: "StringValueMap"
linkTitle: "StringValueMap"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    Cross-language implementation of a map (dictionary) where all keys and values are strings.
    
---

### Description

The StringValueMap class allows you to create a cross-language implementation of a map (dictionary) where all keys and values are strings.

Important points

- The class provides several methods to convert the stored values to different types, such as array, boolean or datetime.
- This class is widely used in Pip.Services as a basis for variety of classes, such as [ConfigParams](../../components/config/config_params), [ConnectionParams](../../../config/connect/connection_params), [CredentialParams](../../../config/auth/credential_params) (in the Pip.Services components package) and others.

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
- **returns**: [StringValueMap](../string_value_map) - newly created StringValueMap.


#### NewStringValueMapFromString
Parses semicolon-separated key-value pairs and returns them as a [StringValueMap](../string_value_map).

> NewStringValueMapFromString(line string) [*StringValueMap](../string_value_map)

- **line**: string - semicolon-separated key-value list to initialize StringValueMap.
- **returns**: [*StringValueMap](../string_value_map) - newly created StringValueMap.


#### NewStringValueMapFromTuples
Creates a new [StringValueMap](../string_value_map) from a list of key-value pairs called tuples.

> NewStringValueMapFromTuples(tuples ...any) [*StringValueMap](../string_value_map)

- **tuples**: ...any - list of values where odd elements are keys and the following even elements are values
- **returns**: [*StringValueMap](../string_value_map) - newly created StringValueMap.


#### NewStringValueMapFromTuplesArray
Creates a new StringValueMap from a list of key-value pairs called tuples.
The method is similar to [NewStringValueMapFromTuples](#newstringvaluemapfromtuples) but tuples are passed as array instead of parameters.

> NewStringValueMapFromTuplesArray(tuples []any) [*StringValueMap](../string_value_map)

- **tuples**: []any - list of values where odd elements are keys and the following even elements are values
- **returns**: [*StringValueMap](../string_value_map) - newly created StringValueMap.

#### NewStringValueMapFromValue
Converts specified value into StringValueMap.

> NewStringValueMapFromValue(value any) [*StringValueMap](../string_value_map)

- **value**: any - value to be converted
- **returns**: [*StringValueMap](../string_value_map) - newly created StringValueMap.


### Methods

#### Append
Appends new elements to this map.

> (c [*StringValueMap]()) Append(values map[string]string)

- **map**: map[string]string - map with elements to be added.


#### Clear
Clears this map by removing all its elements.

> (c [*StringValueMap]()) Clear()


#### Clone
Creates a binary clone of this object.

> (c *StringValueMap) Clone() any

- **returns**: any - clone of this object.


#### InnerValue
InnerValue return inner values of map as any

> (c [*StringValueMap]()) InnerValue() any

- **returns**: any - type code of the object value.

#### Get
Gets a map element specified by its key.

> (c [*StringValueMap]()) Get(key string) (string, bool)

- **key**: string - key of the element to get.
- **returns**: (string, bool) - value of the map element.


#### GetAsArray
Converts a map element into an AnyValueArray or returns an empty AnyValueArray if the conversion is not possible.  
See [AnyValueArray](../any_value_array), [AnyValueArray.NewAnyValueArrayFromValue](../any_value_array/#newanyvaluearrayfromvalue)

> (c [*StringValueMap]()) GetAsArray(key string) [*AnyValueArray](../any_value_array)

- **key**: string - key of element to get.
- **returns**: [*AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if the conversion is not supported.


#### GetAsArrayWithDefault
Converts a map element into an AnyValueArray or returns a default value if the conversion is not possible.  
See [AnyValueArray](../any_value_array)

> (c [*StringValueMap]()) GetAsArrayWithDefault(key string, defaultValue [*AnyValueArray](../any_value_array)) [*AnyValueArray](../any_value_array)

- **key**: string - a key of element to get.
- **defaultValue**: [*AnyValueArray](../any_value_array) - default value
- **returns**: [*AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if conversion is not supported. 


#### GetAsBoolean
Converts a map element into a boolean or returns false if the conversion is not possible.

> (c [*StringValueMap]()) GetAsBoolean(key string) bool

- **key**: string - a key of element to get.
- **returns**: bool - boolean value of the element or false if the conversion is not supported.


#### GetAsBooleanWithDefault
Converts a map element into a boolean or returns a default value if the conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> (c [*StringValueMap]()) GetAsBooleanWithDefault(key string, defaultValue bool) bool

- **key**: string - key of element to get.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value of the element or default value if the conversion is not supported. 


#### GetAsDateTime
Converts a map element into a Date or returns the current date if the conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> (c [*StringValueMap]()) GetAsDateTime(key string) time.Time

- **key**: string - key of element to get.
- **returns**: time.Time - Date value of the element or the current date if the conversion is not supported. 


#### GetAsDateTimeWithDefault
Converts a map element into a Date or returns a default value if the conversion is not possible.  
See [DateTimeConverter.ToDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> (c [*StringValueMap]()) GetAsDateTimeWithDefault(key string, defaultValue time.Time) time.Time

- **key**: string - key of element to get.
- **defaultValue**: time.Time - default value
- **returns**: time.Time - Date value of the element or default value if the conversion is not supported.


#### GetAsDouble
Converts a map element into a double or returns 0 if the conversion is not possible.

> (c [*StringValueMap]()) GetAsDouble(key string) float64

- **key**: string - key of element to get.
- **returns**: float64 - double value of the element or 0 if the conversion is not supported. 


#### GetAsDoubleWithDefault
Converts a map element into a double or returns default value if the conversion is not possible.  
See [DoubleConverter.ToDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> (c [*StringValueMap]()) GetAsDoubleWithDefault(key string, defaultValue float64) float64

- **key**: string - key of element to get.
- **defaultValue**: float64 - default value
- **returns**: float64 - double value of the element or default value if the conversion is not supported. 


#### GetAsFloat
Converts a map element into a float or returns 0 if the conversion is not possible.

> (c [*StringValueMap]()) GetAsFloat(key string) float32

- **key**: string - key of element to get.
- **returns**: float32 - float value of the element or 0 if the conversion is not supported. 


#### GetAsFloatWithDefault
Converts a map element into a float or returns a default value if the conversion is not possible.  
See [FloatConverter.ToFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> (c [*StringValueMap]()) GetAsFloatWithDefault(key string, defaultValue float32) float32

- **key**: string - key of element to get.
- **defaultValue**: float32 - default value
- **returns**: float32 - flot value of the element or default value if the conversion is not supported. 

#### GetAsULong
Converts map element into a unsigned long or returns 0 if conversion is not possible.

> (c [*StringValueMap]()) GetAsULong(key string) uint64 

- **key**: string - key string a key of element to get.
- **returns**: uint64 - value of the element or 0 if conversion is not supported.

#### GetAsULongWithDefault
Converts map element into a unsigned long or returns default value if conversion is not possible.

> (c [*StringValueMap]()) GetAsULongWithDefault(key string, defaultValue uint64) uint64

- **key**: string - string a key of element to get. 
- **defaultValue**: uint64 - the default value
- **returns**: uint64 - value of the element or default value if conversion is not supported.

#### GetAsInteger
Converts map element into an integer or returns 0 if the conversion is not possible.

> (c [*StringValueMap]()) GetAsInteger(key string) int

- **key**: string - key of element to get.
- **returns**: int - integer value of the element or 0 if the conversion is not supported. 

#### GetAsUInteger
GetAsUInteger converts object value into an unsigned integer or returns 0 if conversion is not possible.

> (c [*StringValueMap]()) GetAsUInteger() 

- **returns**: uint - unsigned integer value or 0 if conversion is not supported.

#### GetAsIntegerWithDefault
Converts a map element into an integer or returns a default value if the conversion is not possible.  
See [IntegerConverter.ToIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> (c [*StringValueMap]()) GetAsIntegerWithDefault(key string, defaultValue int) int

- **key**: string - key of element to get.
- **defaultValue**: int - default value
- **returns**: int - integer value of the element or default value if the conversion is not supported. 

#### GetAsUIntegerWithDefault
GetAsUIntegerWithDefault converts object value into a unsigned integer or returns default value if conversion is not possible.

> (c [*StringValueMap]()) GetAsUIntegerWithDefault(defaultValue uint) uint

- **defaultValue**: uint - the default value 
- **returns**: uint - unsigned integer value or default if conversion is not supported.

#### GetAsLong
Converts map element into a long or returns 0 if the conversion is not possible.

> (c [*StringValueMap]()) GetAsLong(key string) int64

- **key**: string - key of element to get.
- **returns**: int64 - long value of the element or 0 if the conversion is not supported.


#### GetAsLongWithDefault
Converts a map element into a long or returns default value if the conversion is not possible.  
See [LongConverter.ToLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> (c [*StringValueMap]()) GetAsLongWithDefault(key string, defaultValue int64) int64

- **key**: string - key of element to get.
- **defaultValue**: int64 - the default value
- **returns**: int64 - long value of the element or default value if the conversion is not supported. 


#### GetAsMap
Converts a map element into an AnyValueMap or returns an empty AnyValueMap if the conversion is not possible.

> (c [*StringValueMap]()) GetAsMap(key string) [*AnyValueMap](../any_value_map)

- **key**: string - key of element to get.
- **returns**: [*AnyValueMap](../any_value_map) - long value of the element or 0 if the conversion is not supported.


#### GetAsMapWithDefault
Converts a map element into an AnyValueMap or returns a default value if the conversion is not possible.

> (c [*StringValueMap]()) GetAsMapWithDefault(key string, defaultValue [*AnyValueMap](../any_value_map)) [*AnyValueMap](../any_value_map)

- **key**: string - key of element to get.
- **defaultValue**: [*AnyValueMap](../any_value_map) - default value
- **returns**: [*AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if the conversion is not supported. 


#### GetAsNullableArray
Converts a map element into an AnyValueArray or returns nil if the conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.NewAnyValueMapFromValue](../any_value_map/#newanyvaluemapfromvalue)

> (c [*StringValueMap]()) GetAsNullableArray(key string) [*AnyValueArray](../any_value_array)

- **key**: string - key of element to get.
- **returns**: [*AnyValueArray](../any_value_array) - AnyValueMap value of the element or default value if the conversion is not supported.


#### GetAsNullableBoolean
Converts a map element into a boolean or returns nil if the conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> (c [*StringValueMap]()) GetAsNullableBoolean(key string) (bool, bool)

- **key**: string - key of element to get.
- **returns**: (bool, bool) - boolean value of the element or nil if the conversion is not supported. 


#### GetAsNullableDateTime
Converts a map element into a Date or returns nil if the conversion is not possible.  
See [DateTimeConverter.ToNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> (c [*StringValueMap]()) GetAsNullableDateTime(key string) (time.Time, bool)

- **key**: string - key of element to get.
- **returns**: (time.Time, bool) - Date value of the element or nil if the conversion is not supported. 


#### GetAsNullableDouble
Converts a map element into a double or returns nil if the conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> (c [*StringValueMap]()) GetAsNullableDouble(key string) (float64, bool)

- **key**: string - key of element to get.
- **returns**: (float64, bool) - double value of the element or nil if the conversion is not supported.


#### GetAsNullableDouble
Converts a map element into a float or returns nil if the conversion is not possible.  
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> (c [*StringValueMap]()) GetAsNullableDouble(key string) *float64

- **key**: string - key of element to get.
- **returns**: *float64 - float value of the element or nil if the conversion is not supported.


#### GetAsNullableInteger
Converts a map element into an integer or returns nil if the conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> (c [*StringValueMap]()) GetAsNullableInteger(key string) (int, bool)

- **key**: string - key of element to get.
- **returns**: (int, bool) - integer value of the element or nil if the conversion is not supported. 

#### GetAsNullableUInteger
GetAsNullableUInteger converts object value into an unsigned integer or returns default value if conversion is not possible.

> (c [*StringValueMap]()) GetAsNullableUInteger() (uint, bool)

- **returns**: (uint, bool) - integer value or default if conversion is not supported.

#### GetAsNullableFloat
Converts a map element into a float or returns nil if the conversion is not possible. 
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> (c [*AnyValueMap]()) GetAsNullableFloat(key string) (float32, bool)

- **key**: string - key of the element to get.
- **returns**: (float32, bool) - float value of the element or nil if the conversion is not supported. 

#### GetAsNullableLong
Converts a map element into a long or returns nil if the conversion is not possible.  
See [LongConverter.ToNullableLong](../../convert/long_converter/#tonullablelong)

> (c [*StringValueMap]()) GetAsNullableLong(key string) *int64

- **key**: string - key of element to get.
- **returns**: *int64 - long value of the element or nil if the conversion is not supported.

#### GetAsNullableULong
Converts map element into a long or returns null if conversion is not possible.

> (c [*StringValueMap]()) GetAsNullableULong(key string) (uint64, bool)

- **key**: string - key string a key of element to get.
- **returns**: (uint64, bool) - value of the element or null if conversion is not supported.

#### GetAsNullableMap
Converts a map element into an AnyValueMap or returns nil if the conversion is not possible.

> (c [*StringValueMap]()) GetAsNullableMap(key string) ([*AnyValueMap](../any_value_map), bool)

- **key**: string - key of element to get.
- **returns**: ([*AnyValueMap](../any_value_map), bool) - AnyValueMap value of the element or nil if the conversion is not supported. 


#### GetAsNullableString
Converts a map element into a string or returns nil if the conversion is not possible.  
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring)

> (c [*StringValueMap]()) GetAsNullableString(key string) (string, bool)

- **key**: string - key of element to get.
- **returns**: (string, bool) - string value of the element or nil if the conversion is not supported. 


#### GetAsNullableType
Converts a map element into a value defined by a specified typecode.
If conversion is not possible it returns nil.    
See [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> (c [*StringValueMap]()) GetAsNullableType(typ [convert.TypeCode](../../convert/type_code), key string) any

- **typ**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **key**: string - key of element to get.
- **returns**: any - element value defined by the typecode or nil if the conversion is not supported. 


#### GetAsObject
Gets the value stored in a map element without any conversions.
When element key is not defined it returns the entire map value.   

> (c [*StringValueMap]()) GetAsObject(key string) any

- **key**: string - (optional) key of the element to get
- **returns**: any - element value or value of the map when index is not defined. 

#### GetAsSingleObject
GetAsSingleObject gets the value stored in map element without any conversions. 
When element index is not defined it returns the entire array value.

> (c [*StringValueMap]()) GetAsSingleObject() any

- **returns**: any - the element value or value of the array when index is not defined.

#### SetAsSingleObject
SetAsSingleObject sets a new value to map.

> (c [*StringValueMap]()) SetAsSingleObject(value any)

- **value**: any - object value

#### GetAsString
Converts a map element into a string or returns "" if the conversion is not possible.

> (c [*StringValueMap]()) GetAsString(key string) string

- **key**: string - (optional) key of the element to get
- **returns**: string - string value of the element or "" if the conversion is not supported. 


#### GetAsStringWithDefault
Converts a map element into a string or returns "" if the conversion is not possible.

> (c [*StringValueMap]()) GetAsStringWithDefault(key string, defaultValue string) string

- **key**: string - key of element to get.
- **defaultValue**: string - default value
- **returns**: string - string value of the element or default value if the conversion is not supported. 


#### GetAsType
Converts a map element into a value defined by a specified typecode.
If conversion is not possible it returns a default value for the specified type.

> (c [*StringValueMap]()) GetAsType(typ [convert.TypeCode](../../convert/type_code), key string) any

- **type**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **key**: string - key of element to get.
- **returns**: any - element value defined by the typecode or default if the conversion is not supported. 


#### GetAsTypeWithDefault
Converts a map element into a value defined by a specified typecode.
If the conversion is not possible it returns a default value for the specified type.  
See [TypeConverter.ToTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> (c [*StringValueMap]()) GetAsTypeWithDefault(typ [convert.TypeCode](../../convert/type_code), key string, defaultValue any) any

- **type**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **key**: string - key of element to get.
- **defaultValue**: any - default value
- **returns**: any - element value defined by the typecode or default value if the conversion is not supported. 


#### GetAsValue
Converts a map element into an AnyValue or returns an empty AnyValue if the conversion is not possible.  
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> (c [*StringValueMap]()) GetAsValue(key string) [*AnyValue](../any_value)

- **key**: string - key of element to get.
- **returns**: [*AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if the conversion is not supported. 


#### Keys
Gets keys of all elements stored in this map.

> (c [*StringValueMap]()) Keys() []string

- **returns**: string[] - list with all map keys. 


#### Len
Gets a number of elements stored in this map.

> (c [*StringValueMap]()) Len() int

- **returns**: int - number of elements in this map.


#### Put
Puts a new value into a map element specified by its key.

> (c [*StringValueMap]()) Put(key string, value any)

- **key**: string - key of the element to put.
- **value**: any - new value for map element.


#### Remove
Removes a map element specified by its key

> (c [*StringValueMap]()) Remove(key string)

- **key**: string - key of the element to remove.


#### SetAsObject
Sets a new value to a map element specified by its index.
When the index is not defined, it resets the entire map value.
This method has double purpose because method overrides are not supported in JavaScript.  
See [MapConverter.ToMap](../../convert/map_converter/#tomap)

> (c [*StringValueMap]()) SetAsObject(key string, value any)

- **key**: string - (optional) key of the element to set
- **value**: any - new element or map value.


#### String
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*

> (c [*StringValueMap]()) String() string

- **returns**: string - string representation of the object.


#### MarshalJSON
Converts StringValueMap to json bytes
> (c [*StringValueMap]()) MarshalJSON() ([]byte, error)

- **returns**: ([]byte, error) - json byte array

#### UnmarshalJSON 
Parse json data into StringValueMap struct

> (c *StringValueMap) UnmarshalJSON(data []byte) error

- **data**: []byte - json data bytes
- **returns**: error - nil or error

### Examples

```go
value1 := NewStringValueMapFromString("key1=1;key2=123.456;key3=2018-01-01")

value1.GetAsBoolean("key1")   // Result: true
value1.GetAsInteger("key2")   // Result: 123
value1.GetAsFloat("key2")     // Result: 123.456
value1.GetAsDateTime("key3")  // Result: new Date(2018,0,1)
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

