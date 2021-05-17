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
Creates a new instance of the map and assigns its value.

> `public` constructor(map: any = null)

- **map**: any - (optional) values to initialize this map.


### Instance methods

#### append
Appends new elements to this map.

> `public` append(map: any): void

- **map**: any - a map with elements to be added.


#### clear
Clears this map by removing all its elements.

> `public` clear(): void


#### clone
Creates a binary clone of this object.

> `public` clone(): any

- **returns**: any - a clone of this object.


#### get
Gets a map element specified by its key.

> `public` get(key: string): string

- **key**: string - a key of the element to get.
- **returns**: string - the value of the map element.


#### getAsArray
Converts map element into an AnyValueArray or returns empty AnyValueArray if conversion is not possible.  
See [AnyValueArray](../any_value_array), [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public` getAsArray(key: string): [AnyValueArray](../any_value_array)

- **key**: string - a key of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if conversion is not supported.


#### getAsArrayWithDefault
Converts map element into an AnyValueArray or returns default value if conversion is not possible.  
See [AnyValueArray](../any_value_array)

> `public` getAsArrayWithDefault(key: string, defaultValue: [AnyValueArray](../any_value_array)): [AnyValueArray](../any_value_array)

- **key**: string - a key of element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - the default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if conversion is not supported. 


#### getAsBoolean
Converts map element into a boolean or returns false if conversion is not possible.

> `public` getAsBoolean(key: string): boolean

- **key**: string - a key of element to get.
- **returns**: boolean - boolean value of the element or false if conversion is not supported.


#### getAsBooleanWithDefault
Converts map element into a boolean or returns default value if conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../boolean_converter/#tobooleanwithdefault)

> `public` getAsBooleanWithDefault(key: string, defaultValue: boolean): boolean

- **key**: string - a key of element to get.
- **defaultValue**: boolean - the default value
- **returns**: boolean - boolean value of the element or default value if conversion is not supported. 


#### getAsDateTime
Converts map element into a Date or returns the current date if conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../boolean_converter/#tobooleanwithdefault)

> `public` getAsDateTime(key: string): Date

- **key**: string - a key of element to get.
- **returns**: Date - Date value of the element or the current date if conversion is not supported. 


#### getAsDateTimeWithDefault
Converts map element into a Date or returns default value if conversion is not possible.  
See [DateTimeConverter.toDateTimeWithDefault](../date_time_converter/#todatetimewithdefault)

> `public` getAsDateTimeWithDefault(key: string, defaultValue: Date): Date

- **key**: string - a key of element to get.
- **defaultValue**: Date - the default value
- **returns**: Date - Date value of the element or default value if conversion is not supported.


#### getAsDouble
Converts map element into a double or returns 0 if conversion is not possible.

> `public` getAsDouble(key: string): number

- **key**: string - a key of element to get.
- **returns**: number - double value of the element or 0 if conversion is not supported. 


#### getAsDoubleWithDefault
Converts map element into a double or returns default value if conversion is not possible.  
See [DoubleConverter.toDoubleWithDefault](../double_converter/#todoublewithdefault)

> `public` getAsDoubleWithDefault(key: string, defaultValue: number): number

- **key**: string - a key of element to get.
- **defaultValue**: number - the default value
- **returns**: number - double value of the element or default value if conversion is not supported. 


#### getAsDouble
Converts map element into a float or returns 0 if conversion is not possible.

> `public` getAsFloat(key: string): number

- **key**: string - a key of element to get.
- **returns**: number - float value of the element or 0 if conversion is not supported. 


#### getAsFloatWithDefault
Converts map element into a flot or returns default value if conversion is not possible.  
See [FloatConverter.toFloatWithDefault](../float_converter/#tofloatwithdefault)

> `public` getAsFloatWithDefault(key: string, defaultValue: number): number

- **key**: string - a key of element to get.
- **defaultValue**: number - the default value
- **returns**: number - flot value of the element or default value if conversion is not supported. 


#### getAsInteger
Converts map element into an integer or returns 0 if conversion is not possible.

> `public` getAsInteger(key: string): number

- **key**: string - a key of element to get.
- **returns**: number - integer value of the element or 0 if conversion is not supported. 


#### getAsIntegerWithDefault
Converts map element into an integer or returns default value if conversion is not possible.  
See [IntegerConverter.toIntegerWithDefault](../integer_converter/#tointegerwithdefault)

> `public` getAsIntegerWithDefault(key: string, defaultValue: number): number

- **key**: string - a key of element to get.
- **defaultValue**: number - the default value
- **returns**: number - integer value of the element or default value if conversion is not supported. 


#### getAsLong
Converts map element into a long or returns 0 if conversion is not possible.

> `public` getAsLong(key: string): number

- **key**: string - a key of element to get.
- **returns**: number - long value of the element or 0 if conversion is not supported.


#### getAsLongWithDefault
Converts map element into a long or returns default value if conversion is not possible.  
See [LongConverter.toLongWithDefault](../long_converter/#tolongwithdefault)

> `public` getAsLongWithDefault(key: string, defaultValue: number): number

- **key**: string - a key of element to get.
- **defaultValue**: number - the default value
- **returns**: number - long value of the element or default value if conversion is not supported. 


#### getAsMap
Converts map element into an AnyValueMap or returns empty AnyValueMap if conversion is not possible.

> `public` getAsMap(key: string): [AnyValueMap](../any_value_map)

- **key**: string - a key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - long value of the element or 0 if conversion is not supported.


#### getAsMapWithDefault
Converts map element into an AnyValueMap or returns default value if conversion is not possible.

> `public` getAsMapWithDefault(key: string, defaultValue: [AnyValueMap](../any_value_map)): [AnyValueMap](../any_value_map)

- **key**: string - a key of element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - the default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported. 


#### getAsNullableArray
Converts map element into an AnyValueArray or returns null if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> `public` getAsNullableArray(key: string): [AnyValueMap](../any_value_map)

- **key**: string - a key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported.


#### getAsNullableBoolean
Converts map element into a boolean or returns null if conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../boolean_converter/#tonullableboolean)

> `public` getAsNullableBoolean(key: string): boolean

- **key**: string - a key of element to get.
- **returns**: boolean - boolean value of the element or null if conversion is not supported. 


#### getAsNullableDateTime
Converts map element into a Date or returns null if conversion is not possible.  
See [DateTimeConverter.toNullableDateTime](../date_time_converter/#tonullabledatetime)

> `public` getAsNullableDateTime(key: string): Date

- **key**: string - a key of element to get.
- **returns**: Date - Date value of the element or null if conversion is not supported. 


#### getAsNullableDouble
Converts map element into a double or returns null if conversion is not possible.  
See [DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `public` getAsNullableDouble(key: string): number

- **key**: string - a key of element to get.
- **returns**: number - double value of the element or null if conversion is not supported.


#### getAsNullableFloat
Converts map element into a float or returns null if conversion is not possible.  
See [FloatConverter.toNullableFloat](../float_converter/#tonullablefloat)

> `public` getAsNullableFloat(key: string): number

- **key**: string - a key of element to get.
- **returns**: number - float value of the element or null if conversion is not supported.


#### getAsNullableInteger
Converts map element into an integer or returns null if conversion is not possible.  
See [IntegerConverter.toNullableInteger](../integer_converter/#tonullableinteger)

> `public` getAsNullableInteger(key: string): number

- **key**: string - a key of element to get.
- **returns**: number - integer value of the element or null if conversion is not supported. 


#### getAsNullableLong
Converts map element into a long or returns null if conversion is not possible.  
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `public` getAsNullableLong(key: string): number

- **key**: string - a key of element to get.
- **returns**: number - long value of the element or null if conversion is not supported.


#### getAsNullableMap
Converts map element into an AnyValueMap or returns null if conversion is not possible.

> `public` getAsNullableMap(key: string): [AnyValueMap](../any_value_map)

- **key**: string - a key of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if conversion is not supported. 


#### getAsNullableString
Converts map element into a string or returns null if conversion is not possible.  
See [StringConverter.toNullableString](../string_converter/#tonullablestring)

> `public` getAsNullableString(key: string): string

- **key**: string - a key of element to get.
- **returns**: string - string value of the element or null if conversion is not supported. 


#### getAsNullableType
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns null.    
See [TypeConverter.toNullableType](../type_converter/#tonullabletype)

> `public` getAsNullableType\<T\>(type: [TypeCode](../../convert/type_code), key: string): T

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **key**: string - a key of element to get.
- **returns**: T - element value defined by the typecode or null if conversion is not supported. 


#### getAsObject
Gets the value stored in map element without any conversions.
When element key is not defined it returns the entire map value.   

> `public` getAsObject(key: string = undefined): any

- **key**: string - (optional) a key of the element to get
- **returns**: any - the element value or value of the map when index is not defined. 


#### getAsString
Converts map element into a string or returns "" if conversion is not possible.

> `public` getAsString(key: string): string

- **key**: string - (optional) a key of the element to get
- **returns**: string - string value of the element or "" if conversion is not supported. 


#### getAsStringWithDefault
Converts map element into a string or returns "" if conversion is not possible.

> `public` getAsStringWithDefault(key: string, defaultValue: string): string

- **key**: string - a key of element to get.
- **defaultValue**: string - the default value
- **returns**: string - string value of the element or default value if conversion is not supported. 


#### getAsType
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.

> `public` getAsType\<T\>(type: [TypeCode](../../convert/type_code), key: string): T

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **key**: string - a key of element to get.
- **returns**: T - element value defined by the typecode or default if conversion is not supported. 


#### getAsTypeWithDefault
Converts map element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.  
See [TypeConverter.toTypeWithDefault](../type_converter/#totypewithdefault)

> `public` getAsTypeWithDefault\<T\>(type: [TypeCode](../../convert/type_code), key: string, defaultValue: T): T

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **key**: string - a key of element to get.
- **defaultValue**: T - the default value
- **returns**: T - element value defined by the typecode or default value if conversion is not supported. 


#### getAsValue
Converts map element into an AnyValue or returns an empty AnyValue if conversion is not possible.  
See [AnyValue](../any_value), [AnyValue.constructors](../any_value/#constructors)

> `public` getAsValue(key: string): [AnyValue](../any_value)

- **key**: string - a key of element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if conversion is not supported. 


#### getKeys
Gets keys of all elements stored in this map.

> `public` getKeys(): string[]

- **returns**: string[] - a list with all map keys. 


#### length
Gets a number of elements stored in this map.

> `public` length(): number

- **returns**: number - the number of elements in this map.


#### put
Puts a new value into map element specified by its key.

> `public` put(key: string, value: any): void

- **key**: string - a key of the element to put.
- **value**: any - a new value for map element.


#### remove
Removes a map element specified by its key

> `public` remove(key: string): void

- **key**: string - a key of the element to remove.


#### setAsObject
Sets a new value to map element specified by its index.
When the index is not defined, it resets the entire map value.
This method has double purpose because method overrides are not supported in JavaScript.  
See [MapConverter.toMap](../../convert/map_converter/#tomap)

> `public` setAsObject(key: any, value: any = undefined): void

- **key**: string - (optional) a key of the element to set
- **value**: any - a new element or map value.


#### toString
Gets a string representation of the object.
The result is a semicolon-separated list of key-value pairs as
*"key1=value1;key2=value2;key=value3"*

> `public` toString(): string 

- **returns**: string - a string representation of the object.

### Static methods

#### fromMaps
Creates a new AnyValueMap by merging two or more maps.
Maps defined later in the list override values from previously defined maps.

> `public static` fromMaps(...maps: any[]): [StringValueMap](../string_value_map) 

- **maps**: any[] - an array of maps to be merged
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


#### fromString
Parses semicolon-separated key-value pairs and returns them as a [StringValueMap](../string_value_map).

> `public static` fromString(line: string): [StringValueMap](../string_value_map) 

- **line**: string - semicolon-separated key-value list to initialize StringValueMap.
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


#### fromTuples
Creates a new [StringValueMap](../string_value_map) from a list of key-value pairs called tuples.

> `public static` fromTuples(...tuples: any[]): [StringValueMap](../string_value_map)

- **tuples**: any[] - a list of values where odd elements are keys and the following even elements are values
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


#### fromTuplesArray
Creates a new StringValueMap from a list of key-value pairs called tuples.
The method is similar to [fromTuples](#fromtuples) but tuples are passed as array instead of parameters.

> `public static` fromTuplesArray(tuples: any[]): [StringValueMap](../string_value_map)

- **tuples**: any[] - a list of values where odd elements are keys and the following even elements are values
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.

#### fromValue
Converts specified value into StringValueMap.

> `public static` fromValue(value: any): [StringValueMap](../string_value_map)

- **value**: any - value to be converted
- **returns**: [StringValueMap](../string_value_map) - a newly created StringValueMap.


### Examples

```typescript
let value1 = StringValueMap.fromString("key1=1;key2=123.456;key3=2018-01-01");
  
value1.getAsBoolean("key1");   // Result: true
value1.getAsInteger("key2");   // Result: 123
value1.getAsFloat("key2");     // Result: 123.456
value1.getAsDateTime("key3");  // Result: new Date(2018,0,1)

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
