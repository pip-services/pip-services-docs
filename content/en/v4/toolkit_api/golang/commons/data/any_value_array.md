---
type: docs
title: "AnyValueArray"
linkTitle: "AnyValueArray"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    Cross-language implementation of a dynamic array object that can hold values of any type.
    It also provides methods to convert the stored values to different types.
---


### Description

The AnyValueArray class provides a cross-language implementation of a dynamic array object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors

#### NewAnyValueArray
Creates a new instance of the array and assigns its value.

> NewAnyValueArray(values []any) [*AnyValueArray]()

- **values**: []any - (optional) values to initialize this array.


### NewEmptyAnyValueArray
Creates a new instance of the empty array.

> NewEmptyAnyValueArray() [*AnyValueArray]()

### NewAnyValueArrayFromString
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.

> NewAnyValueArrayFromString(values string, separator string, removeDuplicates bool) [*AnyValueArray](../any_value_array)

- **values**: string - string value to be split and assigned to AnyValueArray
- **separator**: string - separator used to split the string
- **removeDuplicates**: bool - (optional) true to remove duplicated elements
- **returns**: [*AnyValueArray](../any_value_array) - newly created AnyValueArray.

#### NewAnyValueArrayFromValues
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.  
See [ArrayConverter.ToNullableArray](../../convert/array_converter/#tonullablearray)

> NewAnyValueArrayFromValues(values ...any) [*AnyValueArray](../any_value_array)

- **values**: ...any - value to be converted
- **returns**: [*AnyValueArray](../any_value_array) - newly created AnyValueArray.


#### NewAnyValueArrayFromValue
Creates a new AnyValueArray from a list of values

> NewAnyValueArrayFromValue(value any) [*AnyValueArray](../any_value_array)

- **values**: any - list of values to initialize the created AnyValueArray
- **returns**: [*AnyValueArray](../any_value_array) - newly created AnyValueArray.

#### NewAnyValueArrayFromString
Splits specified string into elements using a separator and assigns the elements to a newly created AnyValueArray.

> NewAnyValueArrayFromString(values string, separator string, removeDuplicates bool) *AnyValueArray

- **values**: string - string value to be split and assigned to AnyValueArray
- **separator**: string - separator to split the string
- **removeDuplicates**: bool true to remove duplicated elements


### Methods

#### Append
Appends new elements to this array.

> (c [*AnyValueArray]()) Append(elements []any)

- **elements**: []any - list of elements to be added.


#### Clear
Clears this array by removing all its elements.

> (c [*AnyValueArray]()) Clear()


#### Clone
Creates a binary clone of this object.

> (c [*AnyValueArray]()) Clone() any

- **returns**: any - clone of this object.


#### Contains
Checks if this array contains a value.
The check uses direct comparison between elements and the specified value.

> (c [*AnyValueArray]()) Contains(value any) bool

- **value**: any - value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### ContainsAsType
Checks if this array contains a value.
The check before comparison converts elements and the value to type specified by type code.   
See [TypeConverter.ToType](../../convert/type_converter/#totype), [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> (c [*AnyValueArray]()) ContainsAsType(typ [convert.TypeCode](../../convert/type_code), value any) bool

- **typ**: [convert.TypeCode](../../convert/type_code) - type code that defines a type to convert values before comparison
- **value**: any - value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### Get
Gets an array element specified by its index.

> (c [*AnyValueArray]()) Get(index int) (any, bool)

- **index**: int - index of the element to get.
- **returns**: (any, bool) - value and true or nil and false if index is not valid.


#### GetAsArray
Converts an array element into an AnyValueArray or returns an empty AnyValueArray if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsArray(index int) [*AnyValueArray]()

- **index**: int - index of element to get.
- **returns**: [*AnyValueArray]() - AnyValueArray value of the element or empty AnyValueArray if conversion is not supported. 


#### GetAsArrayWithDefault
Converts an array element into an AnyValueArray or returns a default value if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsArrayWithDefault(index int, defaultValue [*AnyValueArray]()) [*AnyValueArray]()

- **index**: int - index of element to get.
- **defaultValue**: [*AnyValueArray]() - default value
- **returns**: [*AnyValueArray]() - AnyValueArray value of the element or default value if the conversion is not supported.


#### GetAsBoolean
Converts an array element into a boolean or returns false if theconversion is not possible.

> (c [*AnyValueArray]()) GetAsBoolean(index int) bool

- **index**: int - index of element to get.
- **returns**: bool - boolean value ot the element or false if the conversion is not supported. 


#### GetAsBooleanWithDefault
Converts an array element into a boolean or returns a default value if the conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> (c [*AnyValueArray]()) GetAsBooleanWithDefault(index int, defaultValue bool) bool

- **index**: int - index of element to get.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value ot the element or default value if the conversion is not supported.


#### GetAsDateTime
Converts an array element into a Date or returns the current date if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsDateTime(index int) time.Time

- **index**: int - index of element to get.
- **returns**: time.Time - Date value ot the element or the current date if the conversion is not supported. 


#### GetAsDateTimeWithDefault
Converts an array element into a Date or returns a default value if the conversion is not possible.  
See [DateTimeConverter.ToDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> (c [*AnyValueArray]()) GetAsDateTimeWithDefault(index int, defaultValue time.Time) time.Time

- **index**: int - index of element to get.
- **defaultValue**: time.Time - default value
- **returns**: time.Time - Date value ot the element or default value if the conversion is not supported. 


#### GetAsDouble
Converts an array element into a double or returns 0 if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsDouble(index int) float64

- **index**: int - index of element to get.
- **returns**: float64 - double value ot the element or 0 if the conversion is not supported. 


#### GetAsDoubleWithDefault
Converts an array element into a double or returns a default value if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsDoubleWithDefault(index int, defaultValue float64) float64

- **index**: int - index of element to get.
- **defaultValue**: float64 - default value
- **returns**: float64 - double value ot the element or default value if the conversion is not supported.

#### GetAsFloat
Converts an array element into a float or returns 0 if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsFloat(index int) float32

- **index**: int - index of element to get.
- **returns**: float32 - float value ot the element or 0 if the conversion is not supported.


#### GetAsFloatWithDefault
Converts an array element into a float or returns a default value if the conversion is not possible.   
See [FloatConverter.ToFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> (c [*AnyValueArray]()) GetAsFloatWithDefault(index int, defaultValue float32) float32

- **index**: int - index of the element to get.
- **defaultValue**: float32 - default value
- **returns**: float32 - float value ot the element or default value if conversion is not supported. 


#### GetAsInteger
Converts an array element into an integer or returns 0 if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsInteger(index int) int

- **index**: int - index of the element to get.
- **returns**: int - integer value ot the element or 0 if the conversion is not supported. 


#### GetAsIntegerWithDefault
Converts an array element into an integer or returns a default value if the conversion is not possible.  
See [IntegerConverter.ToIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> (c [*AnyValueArray]()) GetAsIntegerWithDefault(index int, defaultValue int) int

- **index**: int - index of the element to get.
- **defaultValue**: int - default value
- **returns**: int - integer value ot the element or default value if the conversion is not supported.


#### GetAsLong
Converts an array element into a long or returns 0 if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsLong(index int) int64

- **index**: int - index of the element to get.
- **returns**: int64 - long value ot the element or 0 if the conversion is not supported.


#### GetAsLongWithDefault
Converts an array element into a long or returns a default value if the conversion is not possible.  
See [LongConverter.ToLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> (c [*AnyValueArray]()) GetAsLongWithDefault(index int, defaultValue int64) int64

- **index**: int - index of the element to get.
- **defaultValue**: int64 - default value
- **returns**: int64 - long value ot the element or default value if the conversion is not supported. 


#### GetAsMap
Converts an array element into an AnyValueMap or returns an empty AnyValueMap if theconversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.NeFromValue](../any_value_map/#fromvalue)

> (c [*AnyValueArray]()) GetAsMap(index int) [*AnyValueMap](../any_value_map)

- **index**: int - index of the element to get.
- **returns**: [*AnyValueMap](../any_value_map) - AnyValueMap value of the element or empty AnyValueMap if the  conversion is not supported.


#### GetAsMapWithDefault
Converts an array element into an AnyValueMap or returns a default value if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsMapWithDefault(index int, defaultValue [*AnyValueMap](../any_value_map)) [*AnyValueMap](../any_value_map)

- **index**: int - index of the element to get.
- **defaultValue**: [*AnyValueMap](../any_value_map) - default value
- **returns**: [*AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if the conversion is not supported.


#### GetAsNullableArray
Converts an array element into an AnyValueArray or returns nil if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsNullableArray(index int) ([*AnyValueArray](../any_value_array), bool)

- **index**: int - index of the element to get.
- **returns**: ([*AnyValueArray](../any_value_array), bool) - *AnyValueArray value of the element and true or nil and false if conversion is not supported or index is invalid. 


#### GetAsNullableBoolean
Converts array element into a boolean or returns nil if the conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> (c [*AnyValueArray]()) GetAsNullableBoolean(index int) (bool, bool)

- **index**: int - index of the element to get.
- **returns**: (bool, bool) - boolean value of the element and true or false and false if conversion is not supported or index is invalid.


#### GetAsNullableDateTime
Converts an array element into a Date or returns nil if the conversion is not possible.  
See [DateTimeConverter.ToNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> (c [*AnyValueArray]()) GetAsNullableDateTime(index int) (time.Time, bool)

- **index**: int - index of the element to get.
- **returns**: (time.Time, bool) - value of the element and true or zero time and false if conversion is not supported or index is invalid. 


#### GetAsNullableDouble
Converts an array element into a double or returns nil if the conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> (c [*AnyValueArray]()) GetAsNullableDouble(index int) (float64, bool)

- **index**: int - index of the element to get.
- **returns**: (float64, bool) - value of the element and true or 0 and false if conversion is not supported or index is invalid.

#### GetAsNullableDuration
Converts array element into a time.Duration or returns nil if conversion is not possible.

> (c [*AnyValueArray]()) GetAsNullableDuration(index int) (time.Duration, bool)

- **index**: int - an index of element to get.
- **returns**: (time.Duration, bool) - value of the element and true or 0 and false if conversion is not supported or index is ivalid.

#### GetAsDuration 
Converts array element into a time.Duration or returns the current date if conversion is not possible.

> (c [*AnyValueArray]()) GetAsDuration(index int) time.Duration

- **index**: int - an index of element to get.
- **returns**: time.Duration - value ot the element or the current date if conversion is not supported.

#### GetAsDurationWithDefault
Converts array element into a time.Duration or returns default value if conversion is not possible.

> (c [*AnyValueArray]()) GetAsDurationWithDefault(index int, defaultValue time.Duration) time.Duration

- **index**: int - an index of element to get.
- **defaultValue**: time.Duration - the default value
- **returns**: time.Duration - value ot the element or default value if conversion is not supported.

#### GetAsNullableFloat
Converts an array element into a float or returns nil if the conversion is not possible.  
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> (c [*AnyValueArray]()) GetAsNullableFloat(index int) (float32, bool)

- **index**: int - index of element to get.
- **returns**: (float32, bool) - float64 value of the element and true or 0 and false if conversion is not supported or index is invalid. 


#### GetAsNullableInteger
Converts an array element into a float or returns nil if the conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> (c [*AnyValueArray]()) GetAsNullableInteger(index int) (int, bool)

- **index**: int - index of the element to get.
- **returns**: (int, bool) - integer value of the element and true or 0 and false if conversion is not supported or index is invalid.

#### GetAsNullableUInteger
GetAsNullableUInteger converts array element into an unsigned integer or returns nil if conversion is not possible.
See [IntegerConverter.ToNullableUInteger](../../convert/integer_converter/#tonullableuinteger)

> (c [*AnyValueArray]()) GetAsNullableUInteger(index int) (uint, bool)

- **index**: int - index int an index of element to get.
- **returns**: (uint, bool) - unsigned integer value of the element and true or 0 and false if conversion is not supported or index is invalid.

#### GetAsUInteger 
GetAsUInteger converts array element into an unsigned integer or returns 0 if conversion is not possible.

See [IntegerConverter.GetAsUIntegerWithDefault](../../convert/integer_converter/#getssuintegerwithdefault)

> (c [*AnyValueArray]()) GetAsUInteger(index int) uint

- **index**: int - index int an index of element to get.
- **returns** uint - uint unsigned integer value ot the element or 0 if conversion is not supported.

#### GetAsUIntegerWithDefault
Converts array element into an integer or returns default value if conversion is not possible.

See [IntegerConverter.ToUIntegerWithDefault](../../convert/integer_converter/#touintegerwithdefault)

> (c [*AnyValueArray]()) GetAsUIntegerWithDefault(index int, defaultValue uint) uint

- **index**: int - index int an index of element to get.
- **defaultValue**: uint - uint the default value
- **returns**: uint - uint unsigned integer value ot the element or default value if conversion is not supported.

#### GetAsNullableLong
Converts an array element into a long or returns nil if the conversion is not possible.  
See [LongConverter.ToNullableLong](../../convert/long_converter/#tonullablelong)

> (c [*AnyValueArray]()) GetAsNullableLong(index int) (int64, bool)

- **index**: int - index of the element to get.
- **returns**: (int64, bool) - int64 value of the element and true or 0 and false if conversion is not supported or index is invalid.

#### GetAsNullableULong
GetAsNullableULong converts array element into a unsigned long or returns nil if conversion is not possible.
See [LongConverter.ToNullableULong](../../convert/long_converter/#tonullableulong)

> (c [*AnyValueArray]()) GetAsNullableULong(index int) (uint64, bool)

- **index**: index - int an index of element to get.
- **returns**: (uint64, bool) - uint64 value of the element and true or 0 and false if conversion is not supported or index is invalid.

#### GetAsULong
Converts array element into a unsigned long or returns 0 if conversion is not possible.

See [LongConverter.ToULongWithDefault](../../convert/long_converter/#toulongwithdefault)

> (c [*AnyValueArray]()) GetAsULong(index int) uint64

- **index**: int - an index of element to get.
- **returns**: uint64 - value ot the element or 0 if conversion is not supported.

#### GetAsULongWithDefault
Converts array element into a unsigned long or returns default value if conversion is not possible.

> (c [*AnyValueArray]()) GetAsULongWithDefault(index int, defaultValue uint64) uint64

- **index**: int - an index of element to get.
- **defaultValue**: uint64 - the default value.
- **returns**: value ot the element or default value if conversion is not supported.

#### GetAsNullableMap
Converts an array element into a long or returns nil if the conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap](../any_value_map/#fromvalue)

> (c [*AnyValueArray]()) GetAsNullableMap(index int) ([*AnyValueMap](../any_value_map), bool)

- **index**: int - index of the element to get.
- **returns**: ([*AnyValueMap](../any_value_map), bool) - *AnyValueMap value of the element and true or nil and false if conversion is not supported or index is invalid. 


#### GetAsNullableString
Converts an array element into a string or returns nil if the conversion is not possible.  
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring),

> (c [*AnyValueArray]()) GetAsNullableString(index int) (string, bool)

- **index**: int - a index of element to get.
- **returns**: (string, bool) - string value of the element and true or "" and false if conversion is not supported or index is invalid.


#### GetAsNullableType
Converts an array element into a value defined by a specified typecode.
If conversion is not possible it returns nil.  
See [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> (c [*AnyValueArray]()) GetAsNullableType(typ [convert.TypeCode](../../convert/type_code), index int) (any, bool)

- **typ**: [convert.TypeCode](../../convert/type_code) - tTypeCode that defined the type of the result
- **index**: int - index of the element to get.
- **returns**: (any, bool) - element value defined by the typecode and true or nil and false if conversion is not supported or index is invalid.


#### GetAsObject
Gets the value stored in array element without any conversions.
When element index is not defined it returns the entire array value.

> (c [*AnyValueArray]()) GetAsObject(index int) (any, bool)

- **index**: int - (optional) index of the element to get
- **returns**: (any, bool) - any the element value or value of the array when index is not defined.

#### GetAsSingleObject 
Inflate AnyValueArray as single object

> (c [*AnyValueArray]()) GetAsSingleObject() any

- **returns**: any - single object.

#### SetAsSingleObject
SetAsSingleObject sets AnyValueArray from input object

> (c [*AnyValueArray]()) SetAsSingleObject(value any)

- **value**: any - value any input object.

#### GetAsString
Converts an array element into a string or returns *""* if the conversion is not possible.

> (c [*AnyValueArray]()) GetAsString(index int) string

- **index**: int - index of element to get.
- **returns**: string - string value ot the element or *""* if the conversion is not supported. 


#### GetAsStringWithDefault
Converts an array element into a string or returns a default value if the conversion is not possible.  
See [StringConverter.ToStringWithDefault](../../convert/string_converter/#tostringwithdefault)

> (c [*AnyValueArray]()) GetAsStringWithDefault(index int, defaultValue string) string

- **index**: int - index of the element to get.
- **defaultValue**: string - default value
- **returns**: string - string value ot the element or default value if the conversion is not supported.


#### GetAsType
Converts an array element into a value defined by a specified typecode.
If conversion is not possible it returns a default value for the specified type.

> (c [*AnyValueArray]()) GetAsType(typ [convert.TypeCode](../../convert/type_code), index int) any

- **typ**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **index**: int - index of the element to get.
- **returns**: any - element value defined by the typecode or default if the conversion is not supported.


#### GetAsTypeWithDefault
Converts an array element into a value defined by a specivied typecode.
If conversion is not possible it returns a default value for the specified type.  
See [TypeConverter.ToTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> (c [*AnyValueArray]()) GetAsTypeWithDefault(typ [convert.TypeCode](../../convert/type_code), index int, defaultValue any) any

- **type**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **index**: int - index of element to get.
- **defaultValue**: any - default value
- **returns**: any - element value defined by the typecode or default value if the conversion is not supported. 


#### GetAsValue
Converts an array element into an AnyValue or returns an empty AnyValue if the conversion is not possible.  
See [AnyValue](../any_value), [AnyValues.constructors](../any_value/#constructors)

> (c [*AnyValueArray]()) GetAsValue(index int) ([*AnyValue](../any_value), bool)

- **index**: int - index of element to get.
- **returns**: ([*AnyValue](../any_value), bool) - AnyValue value of the element and true or empty AnyValue and false if conversion is not supported or index is invalid. 

#### InnerValue
Returns the inner value of array as any.

> (c [*AnyValueArray]()) InnerValue() any

- **returns**: any - inner value of arrays.

#### IsValidIndex 
IsValidIndex checks that 0 <= index < len.

> (c [*AnyValueArray]()) IsValidIndex(index int) bool

- **index**: int - index int an index of the element to get.
- **returns**: bool - returns true if index valid

#### Value
Returns array of elements []any.

> (c [*AnyValueArray]()) Value() any

- **returns**: any - array of elements.

#### Len
Len returns length of array

> (c [*AnyValueArray]()) Len() int

- **returns**: int - length of array

#### Put
Puts a new value into an array element specified by its index. 

> (c [*AnyValueArray]()) Put(index int, value any)

- **index**: int - index of the element to put.
- **value**: any - new value for array element.


#### Remove
Removes an array element specified by its index

> (c [*AnyValueArray]()) Remove(index int) bool

- **index**: int - index of the element to remove.
- **returns**: bool - deletion result.


#### SetAsObject
Sets a new value to an array element specified by its index.
When the index is not defined, it resets the entire array value.
This method has double purpose because method overrides are not supported in JavaScript.  
See [ArrayConverter.ToArray](../../convert/array_converter/#toarray)

> (c [*AnyValueArray]()) SetAsObject(index int, value any) bool

- **index**: int - (optional) index of the element to set
- **value**: any - new element or array value.
- **returns**: bool - set result.


#### String
Gets a string representation of the object.
The result is a comma-separated list of string representations of individual elements as
*"value1,value2,value3"*  
See [StringConverter.ToString](../../convert/string_converter/#tostring)

> (c [*AnyValueArray]()) String() string

- **returns**: string - string representation of the object.



### Examples
```go
value1 :=  NewAnyValueArray([]any{1, "123.456", "2018-01-01"});

value1.GetAsBoolean(0);   // Result: true
value1.GetAsInteger(1);   // Result: 123
value1.GetAsFloat(1);     // Result: 123.456
value1.GetAsDateTime(2);  // Result: new Date(2018,0,1)
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

