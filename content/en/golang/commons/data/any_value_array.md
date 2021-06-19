---
type: docs
title: "AnyValueArray"
linkTitle: "AnyValueArray"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Cross-language implementation of a dynamic array object that can hold values of any type.
    It also provides methods to convert the stored values to different types.
---


### Description

The AnyValueArray class provides a cross-language implementation of a dynamic array object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors

#### NewAnyValueArray
Creates a new instance of the array and assigns its value.

> NewAnyValueArray(values []interface{}) [*AnyValueArray]()

- **values**: []interface{} - (optional) values to initialize this array.


### NewEmptyAnyValueArray
Creates a new instance of the empty array.

> NewEmptyAnyValueArray() [*AnyValueArray]()

### NewAnyValueArrayFromString
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.

> NewAnyValueArrayFromString(values string, separator string, removeDuplicates bool) [*AnyValueArray](../any_value_array)

- **values**: string - string value to be split and assigned to AnyValueArray
- **separator**: string - separator used to split the string
- **removeDuplicates**: boolean - (optional) true to remove duplicated elements
- **returns**: [*AnyValueArray](../any_value_array) - newly created AnyValueArray.

#### NewAnyValueArrayFromValues
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.  
See [ArrayConverter.ToNullableArray](../../convert/array_converter/#tonullablearray)

> NewAnyValueArrayFromValues(values ...interface{}) [*AnyValueArray](../any_value_array)

- **values**: ...interface{} - value to be converted
- **returns**: [*AnyValueArray](../any_value_array) - newly created AnyValueArray.


#### NewAnyValueArrayFromValue
Creates a new AnyValueArray from a list of values

> NewAnyValueArrayFromValue(value interface{}) [*AnyValueArray](../any_value_array)

- **values**: interface{} - list of values to initialize the created AnyValueArray
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

> (c [*AnyValueArray]()) Append(elements []interface{})

- **elements**: []interface{} - list of elements to be added.


#### Clear
Clears this array by removing all its elements.

> (c [*AnyValueArray]()) Clear()


#### Clone
Creates a binary clone of this object.

> (c [*AnyValueArray]()) Clone() interface{}

- **returns**: interface{} - clone of this object.


#### Contains
Checks if this array contains a value.
The check uses direct comparison between elements and the specified value.

> (c [*AnyValueArray]()) Contains(value interface{}) bool

- **value**: interface{} - value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### ContainsAsType
Checks if this array contains a value.
The check before comparison converts elements and the value to type specified by type code.   
See [TypeConverter.ToType](../../convert/type_converter/#totype), [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> (c [*AnyValueArray]()) ContainsAsType(typ [convert.TypeCode](../../convert/type_code), value interface{}) bool

- **typ**: [convert.TypeCode](../../convert/type_code) - type code that defines a type to convert values before comparison
- **value**: interface{} - value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### Get
Gets an array element specified by its index.

> (c [*AnyValueArray]()) Get(index int) interface{}

- **index**: int - index of the element to get.
- **returns**: interface{} - value of the array element.


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
See [LongConverter.ToLongWithDefault](../../convert/LongConverter/#tolongwithdefault)

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

> (c [*AnyValueArray]()) GetAsNullableArray(index int) [*AnyValueArray](../any_value_array)

- **index**: int - index of the element to get.
- **returns**: [*AnyValueArray](../any_value_array) - AnyValueArray value of the element or nil if the conversion is not supported. 


#### GetAsNullableBoolean
Converts array element into a boolean or returns nil if the conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../converter/boolean_converter/#tonullableboolean)

> (c [*AnyValueArray]()) GetAsNullableBoolean(index int) *bool

- **index**: int - index of the element to get.
- **returns**: *bool - boolean value of the element or nil if the conversion is not supported.


#### GetAsNullableDateTime
Converts an array element into a Date or returns nil if the conversion is not possible.  
See [DateTimeConverter.ToNullableDateTime](../../converter/date_time_converter/#tonullabledatetime)

> (c [*AnyValueArray]()) GetAsNullableDateTime(index int) *time.Time

- **index**: int - index of the element to get.
- **returns**: *time.Time - Date value of the element or nil if the conversion is not supported. 


#### GetAsNullableDouble
Converts an array element into a double or returns nil if the conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> (c [*AnyValueArray]()) GetAsNullableDouble(index int) *float64

- **index**: int - index of the element to get.
- **returns**: *float64 - double value of the element or nil if the conversion is not supported.


#### GetAsNullableFloat
Converts an array element into a float or returns nil if the conversion is not possible.  
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> (c [*AnyValueArray]()) GetAsNullableFloat(index int) *float32

- **index**: int - index of element to get.
- **returns**: *float32 - float value of the element or nil if the conversion is not supported. 


#### GetAsNullableInteger
Converts an array element into a float or returns nil if the conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> (c [*AnyValueArray]()) GetAsNullableInteger(index int) *int

- **index**: int - index of the element to get.
- **returns**: *int - integer value of the element or nil if the conversion is not supported. 


#### GetAsNullableLong
Converts an array element into a long or returns nil if the conversion is not possible.  
See [LongConverter.ToNullableLong](../../convert/long_converter/#tonullablelong)

> (c [*AnyValueArray]()) GetAsNullableLong(index int) *int64

- **index**: int - index of the element to get.
- **returns**: *int64 - long value of the element or nil if the conversion is not supported.


#### GetAsNullableMap
Converts an array element into a long or returns nil if the conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap](../any_value_map/#fromvalue)

> (c [*AnyValueArray]()) GetAsNullableMap(index int) [*AnyValueMap](../any_value_map)

- **index**: number - index of the element to get.
- **returns**: [*AnyValueMap](../any_value_map) - AnyValueMap value of the element or nil if conversion is not supported. 


#### GetAsNullableString
Converts an array element into a string or returns nil if the conversion is not possible.  
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring),

> (c [*AnyValueArray]()) GetAsNullableString(index int) *string

- **index**: int - a index of element to get.
- **returns**: *string - string value of the element or nil if conversion is not supported.


#### GetAsNullableType
Converts an array element into a value defined by a specified typecode.
If conversion is not possible it returns nil.  
See [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> (c [*AnyValueArray]()) GetAsNullableType(typ [convert.TypeCode](../../convert/type_code), index int) interface{}

- **typ**: [convert.TypeCode](../../convert/type_code) - tTypeCode that defined the type of the result
- **index**: int - index of the element to get.
- **returns**: interface{} - element value defined by the typecode or nil if the conversion is not supported. 


#### GetAsObject
Gets the value stored in array element without any conversions.
When element index is not defined it returns the entire array value.

> (c [*AnyValueArray]()) GetAsObject(index int) interface{}

- **index**: int - (optional) index of the element to get
- **returns**: interface{} - element value or value of the array when index is not defined.


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

> (c [*AnyValueArray]()) GetAsType(typ [convert.TypeCode](../../convert/type_code), index int) interface{}

- **typ**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **index**: int - index of the element to get.
- **returns**: interface{} - element value defined by the typecode or default if the conversion is not supported.


#### GetAsTypeWithDefault
Converts an array element into a value defined by a specivied typecode.
If conversion is not possible it returns a default value for the specified type.  
See [TypeConverter.ToTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> (c [*AnyValueArray]()) GetAsTypeWithDefault(typ [convert.TypeCode](../../convert/type_code), index int, defaultValue interface{}) interface{}

- **type**: [convert.TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **index**: int - index of element to get.
- **defaultValue**: interface{} - default value
- **returns**: interface{} - element value defined by the typecode or default value if the conversion is not supported. 


#### GetAsValue
Converts an array element into an AnyValue or returns an empty AnyValue if the conversion is not possible.  
See [AnyValue](../any_value), [AnyValues.constructors](../any_value/#constructors)

> (c [*AnyValueArray]()) GetAsValue(index int) [*AnyValue](../any_value)

- **index**: int - index of element to get.
- **returns**: [*AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if conversion is not supported. 

#### InnerValue
Returns the inner value of array as interface{}.

> (c *AnyValue) InnerValue() interface{}

- **returns**: interface{} - inner value of arrays.

#### Value
Returns array of elements []interface{}.

> (c *AnyValue) Value() interface{}

- **returns**: interface{} - array of elements.


#### Put
Puts a new value into an array element specified by its index. 

> (c [*AnyValueArray]()) Put(index int, value interface{})

- **index**: int - index of the element to put.
- **value**: interface{} - new value for array element.


#### Remove
Removes an array element specified by its index

> (c [*AnyValueArray]()) Remove(index int)

- **index**: int - index of the element to remove.


#### SetAsObject
Sets a new value to an array element specified by its index.
When the index is not defined, it resets the entire array value.
This method has double purpose because method overrides are not supported in JavaScript.  
See [ArrayConverter.ToArray](../../convert/array_converter/#toarray)

> (c [*AnyValueArray]()) SetAsObject(index int, value interface{})

- **index**: int - (optional) index of the element to set
- **value**: interface{} - new element or array value.


#### String
Gets a string representation of the object.
The result is a comma-separated list of string representations of individual elements as
*"value1,value2,value3"*  
See [StringConverter.ToString](../../convert/string_converter/#tostring)

> (c [*AnyValueArray]()) String() string

- **returns**: string - string representation of the object.



### Examples
```go
value1 :=  NewAnyValueArray([1, "123.456", "2018-01-01"]);

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
