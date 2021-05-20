---
type: docs
title: "AnyValueArray"
linkTitle: "AnyValueArray"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Cross-language implementation of a dynamic array object that can hold values of any type.
    It also provides methods to convert the stored values to different types.
---

**Extends:** Array\<any\> 
**Implements:** [ICloneable](../icloneable)

### Description

The AnyValueArray class provides a cross-language implementation of a dynamic array object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors
Creates a new instance of the array and assigns its value.

> `public` constructor(values: any[] = null)

- **values**: any[] - (optional) values to initialize this array.


### Instance methods

#### append
Appends new elements to this array.

> `public` append(elements: any[]): void

- **elements**: any[] - a list of elements to be added.


#### clear
Clears this array by removing all its elements.

> `public` clear(): void


#### clone
Creates a binary clone of this object.

> `public` clone(): any

- **returns**: any - a clone of this object.


#### contains
Checks if this array contains a value.
The check uses direct comparison between elements and the specified value.

> `public` contains(value: any): boolean

- **value**: any - a value to be checked
- **returns**: boolean - true if this array contains the value or false otherwise.


#### containsAsType
Checks if this array contains a value.
The check before comparison converts elements and the value to type specified by type code.   
See [TypeConverter.toType](../../convert/type_converter/#totype), [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` containsAsType\<T\>(typeCode: [TypeCode](../../convert/type_code), value: any): boolean

- **typeCode**: [TypeCode](../../convert/type_code) - a type code that defines a type to convert values before comparison
- **value**: any - a value to be checked
- **returns**: boolean - true if this array contains the value or false otherwise.


#### get
Gets an array element specified by its index.

> `public` get(index: number): any

- **index**: number - an index of the element to get.
- **returns**: any - the value of the array element.


#### getAsArray
Converts array element into an AnyValueArray or returns empty AnyValueArray if conversion is not possible.

> `public` getAsArray(index: number): [AnyValueArray](../any_value_array)

- **index**: number - an index of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if conversion is not supported. 


#### getAsArrayWithDefault
Converts array element into an AnyValueArray or returns default value if conversion is not possible.

> `public` getAsArrayWithDefault(index: number, defaultValue: [AnyValueArray](../any_value_array)): [AnyValueArray](../any_value_array)

- **index**: number - an index of element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - the default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if conversion is not supported.


#### getAsBoolean
Converts array element into a boolean or returns false if conversion is not possible.

> `public` getAsBoolean(index: number): boolean

- **index**: number - an index of element to get.
- **returns**: boolean - boolean value ot the element or false if conversion is not supported. 


#### getAsBooleanWithDefault
Converts array element into a boolean or returns default value if conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` getAsBooleanWithDefault(index: number, defaultValue: boolean): boolean

- **index**: number - an index of element to get.
- **defaultValue**: boolean - the default value
- **returns**: boolean - boolean value ot the element or default value if conversion is not supported.


#### getAsDateTime
Converts array element into a Date or returns the current date if conversion is not possible.

> `public` getAsDateTime(index: number): Date

- **index**: number - an index of element to get.
- **returns**: Date - Date value ot the element or the current date if conversion is not supported. 


#### getAsDateTimeWithDefault
Converts array element into a Date or returns default value if conversion is not possible.  
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` getAsDateTimeWithDefault(index: number, defaultValue: Date): Date

- **index**: number - an index of element to get.
- **defaultValue**: Date - the default value
- **returns**: Date - Date value ot the element or default value if conversion is not supported. 


#### getAsDouble
Converts array element into a double or returns 0 if conversion is not possible.

> `public` getAsDouble(index: number): number

- **index**: number - an index of element to get.
- **returns**: number - double value ot the element or 0 if conversion is not supported. 


#### getAsDoubleWithDefault
Converts array element into a double or returns default value if conversion is not possible.

> `public` getAsDoubleWithDefault(index: number, defaultValue: number): number

- **index**: number - an index of element to get.
- **defaultValue**: number - the default value
- **returns**: number - double value ot the element or default value if conversion is not supported.

#### getAsFloat
Converts array element into a float or returns 0 if conversion is not possible.

> `public` getAsFloat(index: number): number

- **index**: number - an index of element to get.
- **returns**: number - float value ot the element or 0 if conversion is not supported.


#### getAsFloatWithDefault
Converts array element into a float or returns default value if conversion is not possible.   
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` getAsFloatWithDefault(index: number, defaultValue: number): number

- **index**: number - an index of element to get.
- **defaultValue**: number - the default value
- **returns**: number - float value ot the element or default value if conversion is not supported. 


#### getAsInteger
Converts array element into an integer or returns 0 if conversion is not possible.

> `public` getAsInteger(index: number): number

- **index**: number - an index of element to get.
- **returns**: number - integer value ot the element or 0 if conversion is not supported. 


#### getAsIntegerWithDefault
Converts array element into an integer or returns default value if conversion is not possible.  
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` getAsIntegerWithDefault(index: number, defaultValue: number): number

- **index**: number - an index of element to get.
- **defaultValue**: number - the default value
- **returns**: number - integer value ot the element or default value if conversion is not supported.


#### getAsLong
Converts array element into a long or returns 0 if conversion is not possible.

> `public` getAsLong(index: number): number

- **index**: number - an index of element to get.
- **returns**: number - long value ot the element or 0 if conversion is not supported.


#### getAsLongWithDefault
Converts array element into a long or returns default value if conversion is not possible.  
See [LongConverter.toLongWithDefault](../../convert/LongConverter/#tolongwithdefault)

> `public` getAsLongWithDefault(index: number, defaultValue: number): number

- **index**: number - an index of element to get.
- **defaultValue**: number - the default value
- **returns**: number - long value ot the element or default value if conversion is not supported. 


#### getAsMap
Converts array element into an AnyValueMap or returns empty AnyValueMap if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> `public` getAsMap(index: number): [AnyValueMap](../any_value_map)

- **index**: number - an index of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or empty AnyValueMap if conversion is not supported.


#### getAsMapWithDefault
Converts array element into an AnyValueMap or returns default value if conversion is not possible.

> `public` getAsMapWithDefault(index: number, defaultValue: [AnyValueMap](../any_value_map)): [AnyValueMap](../any_value_map)

- **index**: number - an index of element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - the default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported.


#### getAsNullableArray
Converts array element into an AnyValueArray or returns null if conversion is not possible.

> `public` getAsNullableArray(index: number): [AnyValueArray](../any_value_array)

- **index**: number - an index of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or null if conversion is not supported. 


#### getAsNullableBoolean
Converts array element into a boolean or returns null if conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../../converter/boolean_converter/#tonullableboolean)

> `public` getAsNullableBoolean(index: number): boolean

- **index**: number - an index of element to get.
- **returns**: boolean - boolean value of the element or null if conversion is not supported.


#### getAsNullableDateTime
Converts array element into a Date or returns null if conversion is not possible.  
See [DateTimeConverter.toNullableDateTime](../../converter/date_time_converter/#tonullabledatetime)

> `public` getAsNullableDateTime(index: number): Date

- **index**: number - an index of element to get.
- **returns**: Date - Date value of the element or null if conversion is not supported. 


#### getAsNullableDouble
Converts array element into a double or returns null if conversion is not possible.  
See [DoubleConverter.toNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` getAsNullableDouble(index: number): number

- **index**: number - an index of element to get.
- **returns**: number - double value of the element or null if conversion is not supported.


#### getAsNullableFloat
Converts array element into a float or returns null if conversion is not possible.  
See [FloatConverter.toNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` getAsNullableFloat(index: number): number

- **index**: number - an index of element to get.
- **returns**: number - float value of the element or null if conversion is not supported. 


#### getAsNullableInteger
Converts array element into a float or returns null if conversion is not possible.  
See [IntegerConverter.toNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` getAsNullableInteger(index: number): number

- **index**: number - an index of element to get.
- **returns**: number - integer value of the element or null if conversion is not supported. 


#### getAsNullableLong
Converts array element into a long or returns null if conversion is not possible.  
See [LongConverter.toNullableLong](../../convert/long_converter/#tonullablelong)

> `public` getAsNullableLong(index: number): number

- **index**: number - an index of element to get.
- **returns**: number - long value of the element or null if conversion is not supported.


#### getAsNullableMap
Converts array element into a long or returns null if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap](../any_value_map/#fromvalue)

> `public` getAsNullableMap(index: number): [AnyValueMap](../any_value_map)

- **index**: number - an index of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if conversion is not supported. 


#### getAsNullableString
Converts array element into a string or returns null if conversion is not possible.  
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring),

> `public` getAsNullableString(index: number): string

- **index**: number - an index of element to get.
- **returns**: string - string value of the element or null if conversion is not supported.


#### getAsNullableType
Converts array element into a value defined by specied typecode.
If conversion is not possible it returns null.  
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` getAsNullableType\<T\>(type: [TypeCode](../../convert/type_code), index: number): T

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **index**: number - an index of element to get.
- **returns**: T - element value defined by the typecode or null if conversion is not supported. 


#### getAsObject
Gets the value stored in array element without any conversions.
When element index is not defined it returns the entire array value.

> `public` getAsObject(index: number = undefined): any 

- **index**: number - (optional) an index of the element to get
- **returns**: any - the element value or value of the array when index is not defined.


#### getAsString
Converts array element into a string or returns *""* if conversion is not possible.

> `public` getAsString(index: number): string

- **index**: number - an index of element to get.
- **returns**: string - string value ot the element or *""* if conversion is not supported. 


#### getAsStringWithDefault
Converts array element into a string or returns default value if conversion is not possible.  
See [StringConverter.toStringWithDefault](../../convert/string_converter/#tostringwithdefault)

> `public` getAsStringWithDefault(index: number, defaultValue: string): string

- **index**: number - an index of element to get.
- **defaultValue**: string - the default value
- **returns**: string - string value ot the element or default value if conversion is not supported.


#### getAsType
Converts array element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.

> `public` getAsType\<T\>(type: [TypeCode](../../convert/type_code), index: number): T

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **index**: number - an index of element to get.
- **returns**: T - element value defined by the typecode or default if conversion is not supported.


#### getAsTypeWithDefault
Converts array element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.  
See [TypeConverter.toTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> `public` getAsTypeWithDefault\<T\>(type: [TypeCode](../../convert/type_code), index: number, defaultValue: T): T 

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **index**: number - an index of element to get.
- **defaultValue**: T - the default value
- **returns**: T - element value defined by the typecode or default value if conversion is not supported. 


#### getAsValue
Converts array element into an AnyValue or returns an empty AnyValue if conversion is not possible.  
See [AnyValue](../any_value), [AnyValues.constructors](../any_value/#constructors)

> `public` getAsValue(index: number): [AnyValue](../any_value)

- **index**: number - an index of element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if conversion is not supported. 


#### put
Puts a new value into array element specified by its index. 

> `public` put(index: number, value: any): void

- **index**: number - an index of the element to put.
- **value**: any - a new value for array element.


#### remove
Removes an array element specified by its index

> `public` remove(index: number): void

- **index**: number - an index of the element to remove.


#### setAsObject
Sets a new value to array element specified by its index.
When the index is not defined, it resets the entire array value.
This method has double purpose because method overrides are not supported in JavaScript.  
See [ArrayConverter.toArray](../../convert/array_converter/#toarray)

> `public` setAsObject(index: any, value: any = undefined): void

- **index**: number - (optional) an index of the element to set
- **value**: any - a new element or array value.


#### toString
Gets a string representation of the object.
The result is a comma-separated list of string representations of individual elements as
*"value1,value2,value3"*  
See [StringConverter.toString](../../convert/string_converter/#tostring)

> `public` toString(): string

- **returns**: string - a string representation of the object.


### Static methods

#### fromString
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.

> `public static` fromString(values: string, separator: string, removeDuplicates: boolean = false): [AnyValueArray](../any_value_array)

- **values**: string - a string value to be split and assigned to AnyValueArray
- **separator**: string - a separator to split the string
- **removeDuplicates**: boolean - (optional) true to remove duplicated elements
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.


#### fromValue
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.  
See [ArrayConverter.toNullableArray](../../convert/array_converter/#tonullablearray)

> `public static` fromValue(value: any): [AnyValueArray](../any_value_array)

- **values**: any - value to be converted
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.


#### fromValues
Creates a new AnyValueArray from a list of values

> `public static` fromValues(...values: any[]): [AnyValueArray](../any_value_array)

- **values**: any[] - a list of values to initialize the created AnyValueArray
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.




### Examples
```typescript
let value1 = new AnyValueArray([1, "123.456", "2018-01-01"]);
   
value1.getAsBoolean(0);   // Result: true
value1.getAsInteger(1);   // Result: 123
value1.getAsFloat(1);     // Result: 123.456
value1.getAsDateTime(2);  // Result: new Date(2018,0,1)
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
