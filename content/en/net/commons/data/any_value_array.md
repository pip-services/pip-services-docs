---
type: docs
title: "AnyValueArray"
linkTitle: "AnyValueArray"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Cross-language implementation of a dynamic array object that can hold values of any type.
    It also provides methods to convert the stored values to different types.
---

**Inherits**: [ICloneable](../icloneable), List\<object\>

### Description

The AnyValueArray class provides a cross-language implementation of a dynamic array object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors
Creates a new instance of the array and assigns its value.

> `public` AnyValueArray(object[] values)

- **values**: object[] - (optional) values to initialize this array.

Creates a new instance of the array and assigns its value.

> `public` AnyValueArray(IEnumerable values)

- **values**: IEnumerable - (optional) values to initialize this array.

Creates a new instance of the array.

> `public` AnyValueArray()


### Instance methods

#### Append
Appends new elements to this array.

> `public` void Append(object[] values)

- **values**: object[] - a list of elements to be added.


#### Append
Appends new elements to this array.

> `public` void Append(IEnumerable values)

- **values**: IEnumerable - a list of elements to be added.


#### Clone
Creates a binary clone of this object.

> `public` object Clone()

- **returns**: object - a clone of this object.


#### Contains
Checks if this array contains a value.
The check uses direct comparison between elements and the specified value.

> `public` bool Contains(object value)

- **value**: object - a value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### ContainsAs
Checks if this array contains a value.
The check before comparison converts elements and the value to type specified by type code.   
See [TypeConverter.ToType](../../convert/type_converter/#totype), [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)

> `public` bool ContainsAs\<T\>(object value)

- **value**: any - a value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### Get
Gets an array element specified by its index.

> `public virtual` object Get(int index)

- **index**: int - an index of the element to get.
- **returns**: object - the value of the array element.


#### GetAsArray
Converts array element into an AnyValueArray or returns empty AnyValueArray if conversion is not possible.

> `public` [AnyValueArray](../any_value_array) GetAsArray(int index)

- **index**: int - an index of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if conversion is not supported. 


#### GetAsArrayWithDefault
Converts array element into an AnyValueArray or returns default value if conversion is not possible.

> `public` [AnyValueArray](../any_value_array) GetAsArrayWithDefault(int index, [AnyValueArray](../any_value_array) defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: [AnyValueArray](../any_value_array) - the default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if conversion is not supported.


#### GetAsBoolean
Converts array element into a bool or returns false if conversion is not possible.

> `public` bool GetAsBoolean(int index)

- **index**: int - an index of element to get.
- **returns**: bool - bool value ot the element or false if conversion is not supported. 


#### GetAsBooleanWithDefault
Converts array element into a bool or returns default value if conversion is not possible.  
See [BooleanConverter.ToBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` bool GetAsBooleanWithDefault(int index, bool defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: bool - the default value
- **returns**: bool - bool value ot the element or default value if conversion is not supported.


#### GetAsDateTime
Converts array element into a DateTime or returns the current date if conversion is not possible.

> `public` DateTime GetAsDateTime(int index)

- **index**: int - an index of element to get.
- **returns**: DateTime - DateTime value ot the element or the current date if conversion is not supported. 


#### GetAsDateTimeWithDefault
Converts array element into a DateTime or returns default value if conversion is not possible.  
See [DateTimeConverter.ToDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` DateTime GetAsDateTimeWithDefault(int index, DateTime defaultValue?)

- **index**: int - an index of element to get.
- **defaultValue**: DateTime - the default value
- **returns**: DateTime - DateTime value ot the element or default value if conversion is not supported. 


#### GetAsNullableTimeSpan
TODO: add description

> `public` TimeSpan GetAsNullableTimeSpan(int index)

- **index**: int - TODO: add description
- **returns**: TimeSpan - TODO: add description


#### GetAsTimeSpan
TODO: add description

> `public` TimeSpan GetAsTimeSpan(int index)

- **index**: int - TODO: add description
- **returns**: TimeSpan - TODO: add description

#### GetAsTimeSpanWithDefault
TODO: add description

> `public` TimeSpan GetAsTimeSpanWithDefault(int index, TimeSpan? defaultValue)

- **index**: int - TODO: add description
- **defaultValue**: TimeSpan - TODO: add description
- **returns**: TimeSpan - TODO: add description


#### GetAsNullableEnum
TODO: add description

> `public` T GetAsNullableEnum\<T\>(int index)

- **index**: int - TODO: add description
- **returns**: T - TODO: add description


#### GetAsEnum
TODO: add description

> `public` T GetAsEnum\<T\>(int index)

- **index**: int - TODO: add description
- **returns**: T - TODO: add description


#### GetAsEnumWithDefault
TODO: add description

> `public` T GetAsEnumWithDefault\<T\>(int index, T defaultValue)

- **index**: int - TODO: add description
- **defaultValue**: T - TODO: add description
- **returns**: T - TODO: add description


#### GetAsDouble
Converts array element into a double or returns 0 if conversion is not possible.

> `public` double GetAsDouble(int index)

- **index**: int - an index of element to get.
- **returns**: double - double value ot the element or 0 if conversion is not supported. 


#### GetAsDoubleWithDefault
Converts array element into a double or returns default value if conversion is not possible.

> `public` double GetAsDoubleWithDefault(int index, double defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: double - the default value
- **returns**: double - double value ot the element or default value if conversion is not supported.

#### GetAsFloat
Converts array element into a float or returns 0 if conversion is not possible.

> `public` float GetAsFloat(int index)

- **index**: int - an index of element to get.
- **returns**: float - float value ot the element or 0 if conversion is not supported.


#### GetAsFloatWithDefault
Converts array element into a float or returns default value if conversion is not possible.   
See [FloatConverter.ToFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` float GetAsFloatWithDefault(int index, float defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: float - the default value
- **returns**: float - float value ot the element or default value if conversion is not supported. 


#### GetAsInteger
Converts array element into an integer or returns 0 if conversion is not possible.

> `public` int GetAsInteger(int index)

- **index**: int - an index of element to get.
- **returns**: int - integer value ot the element or 0 if conversion is not supported. 


#### GetAsIntegerWithDefault
Converts array element into an integer or returns default value if conversion is not possible.  
See [IntegerConverter.ToIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` int GetAsIntegerWithDefault(int index, int defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: int - the default value
- **returns**: int - integer value ot the element or default value if conversion is not supported.


#### GetAsLong
Converts array element into a long or returns 0 if conversion is not possible.

> `public` long getAsLong(int index)

- **index**: int - an index of element to get.
- **returns**: long - long value ot the element or 0 if conversion is not supported.


#### GetAsLongWithDefault
Converts array element into a long or returns default value if conversion is not possible.  
See [LongConverter.ToLongWithDefault](../../convert/LongConverter/#tolongwithdefault)

> `public` long GetAsLongWithDefault(int index, long defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: long - the default value
- **returns**: long - long value ot the element or default value if conversion is not supported. 


#### GetAsMap
Converts array element into an AnyValueMap or returns empty AnyValueMap if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.FromValue](../any_value_map/#fromvalue)

> `public` [AnyValueMap](../any_value_map) GetAsMap(int index)

- **index**: int - an index of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or empty AnyValueMap if conversion is not supported.


#### GetAsMapWithDefault
Converts array element into an AnyValueMap or returns default value if conversion is not possible.

> `public` [AnyValueMap](../any_value_map) GetAsMapWithDefault(int index, [AnyValueMap](../any_value_map) defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: [AnyValueMap](../any_value_map) - the default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported.


#### GetAsNullableArray
Converts array element into an AnyValueArray or returns null if conversion is not possible.

> `public` [AnyValueArray](../any_value_array) GetAsNullableArray(int index)

- **index**: int - an index of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or null if conversion is not supported. 


#### GetAsNullableBoolean
Converts array element into a bool or returns null if conversion is not possible.  
See [BooleanConverter.ToNullableBoolean](../../converter/boolean_converter/#tonullableboolean)

> `public` bool GetAsNullableBoolean(int index)

- **index**: int - an index of element to get.
- **returns**: bool - bool value of the element or null if conversion is not supported.


#### GetAsNullableDateTime
Converts array element into a DateTime or returns null if conversion is not possible.  
See [DateTimeConverter.ToNullableDateTime](../../converter/date_time_converter/#tonullabledatetime)

> `public` DateTime GetAsNullableDateTime(int index)

- **index**: int - an index of element to get.
- **returns**: DateTime - DateTime value of the element or null if conversion is not supported. 


#### GetAsNullableDouble
Converts array element into a double or returns null if conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` double GetAsNullableDouble(int index)

- **index**: int - an index of element to get.
- **returns**: double - double value of the element or null if conversion is not supported.


#### GetAsNullableFloat
Converts array element into a float or returns null if conversion is not possible.  
See [FloatConverter.ToNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` float GetAsNullableFloat(int index)

- **index**: int - an index of element to get.
- **returns**: float - float value of the element or null if conversion is not supported. 


#### GetAsNullableInteger
Converts array element into a float or returns null if conversion is not possible.  
See [IntegerConverter.ToNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` float GetAsNullableInteger(int index)

- **index**: int - an index of element to get.
- **returns**: float - integer value of the element or null if conversion is not supported. 


#### GetAsNullableLong
Converts array element into a long or returns null if conversion is not possible.  
See [LongConverter.ToNullableLong](../../convert/long_converter/#tonullablelong)

> `public` long GetAsNullableLong(int index)

- **index**: int - an index of element to get.
- **returns**: long - long value of the element or null if conversion is not supported.


#### GetAsNullableMap
Converts array element into a long or returns null if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap](../any_value_map/#fromvalue)

> `public` [AnyValueMap](../any_value_map) GetAsNullableMap(int index)

- **index**: int - an index of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or null if conversion is not supported. 


#### GetAsNullableString
Converts array element into a string or returns null if conversion is not possible.  
See [StringConverter.ToNullableString](../../convert/string_converter/#tonullablestring),

> `public` string GetAsNullableString(int index)

- **index**: int - an index of element to get.
- **returns**: string - string value of the element or null if conversion is not supported.


#### GetAsNullableType
Converts array element into a value defined by specied typecode.
If conversion is not possible it returns null.  
See [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)
**T** - the class type

> `public` T GetAsNullableType\<T\>(int index)

- **index**: int - an index of element to get.
- **returns**: T - element value defined by the typecode or null if conversion is not supported. 


#### GetAsNullableTypeWithDefault
Converts array element into a value defined by specied typecode. 
If conversion is not possible it returns default value.
See [TypeConverter.ToNullableType](../../convert/type_converter/#tonullabletype)
**T** - the class type

> `public` T GetAsNullableType\<T\>(int index, T defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: T - the default value
- **returns**: T - value of element defined by the typecode or default value if conversion is not supported.


#### GetAsObject
Gets the value stored in this array element without any conversions.

> `public` object GetAsObject() 

- **returns**: object - the value of the array element.


#### GetAsObject
Gets the value stored in array element without any conversions.
When element index is not defined it returns the entire array value.

> `public` object GetAsObject(int index) 

- **index**: int - (optional) an index of the element to get
- **returns**: object - the element value or value of the array when index is not defined.


#### GetAsString
Converts array element into a string or returns *""* if conversion is not possible.

> `public` string GetAsString(int index)

- **index**: int - an index of element to get.
- **returns**: string - string value ot the element or *""* if conversion is not supported. 


#### GetAsStringWithDefault
Converts array element into a string or returns default value if conversion is not possible.  
See [StringConverter.ToStringWithDefault](../../convert/string_converter/#tostringwithdefault)

> `public` string GetAsStringWithDefault(int index, string defaultValue)

- **index**: int - an index of element to get.
- **defaultValue**: string - the default value
- **returns**: string - string value ot the element or default value if conversion is not supported.


#### GetAsType!
**TODO: this method is not realized yet for this language**

Converts array element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.

> `public` T GetAsType\<T\>([TypeCode](../../convert/type_code) type, int index)

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **index**: int - an index of element to get.
- **returns**: T - element value defined by the typecode or default if conversion is not supported.


#### GetAsTypeWithDefault!
**TODO: this method is not realized yet for this language**

Converts array element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.  
See [TypeConverter.toTypeWithDefault](../../convert/type_converter/#totypewithdefault)

> `public` T GetAsTypeWithDefault\<T\>([TypeCode](../../convert/type_code) type, int index, T defaultValue) 

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **index**: int - an index of element to get.
- **defaultValue**: T - the default value
- **returns**: T - element value defined by the typecode or default value if conversion is not supported. 


#### GetAsValue
Converts array element into an AnyValue or returns an empty AnyValue if conversion is not possible.  
See [AnyValue](../any_value), [AnyValues.constructors](../any_value/#constructors)

> `public` [AnyValue](../any_value) GetAsValue(int index)

- **index**: int - an index of element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if conversion is not supported. 


#### Set
Sets a new value into array element specified by its index. 

> `public virtual` void Set(int index, object value)

- **index**: int - an index of the element to put.
- **value**: object - a new value for array element.


#### SetAsObject
Sets a new value for this array element.
See [ArrayConverter.ToArray](../../convert/array_converter/#toarray)

> `public` void SetAsObject(object value)

- **value**: object - a new element or array value.


#### SetAsObject
Sets a new value to array element specified by its index.
When the index is not defined, it resets the entire array value. 
See [ArrayConverter.toArray](../../convert/array_converter/#toarray)

> `public` void SetAsObject(int index, object value)

- **index**: int - (optional) an index of the element to set
- **value**: object - a new element or array value.


#### ToString
Gets a string representation of the object.
The result is a comma-separated list of string representations of individual elements as
*"value1,value2,value3"*  
See [StringConverter.ToString](../../convert/string_converter/#tostring)

> `public override` string ToString()

- **returns**: string - a string representation of the object.


### Static methods

#### FromString
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.

> `public static` [AnyValueArray](../any_value_array) FromString(string values, char separator, bool removeDuplicates)

- **values**: string - a string value to be split and assigned to AnyValueArray
- **separator**: char - a separator to split the string
- **removeDuplicates**: bool - (optional) true to remove duplicated elements
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.


#### FromString
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.

> `public static` [AnyValueArray](../any_value_array) FromString(string values, char separator)

- **values**: string - a string value to be split and assigned to AnyValueArray
- **separator**: char - a separator to split the string
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.


#### FromValue
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.  
See [ArrayConverter.ToNullableArray](../../convert/array_converter/#tonullablearray)

> `public static` [AnyValueArray](../any_value_array) FromValue(object value)

- **values**: object - value to be converted
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.


#### FromValues
Creates a new AnyValueArray from a list of values

> `public static` [AnyValueArray](../any_value_array) FromValues(params object[] values)

- **values**: object[] - a list of values to initialize the created AnyValueArray
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.




### Examples
```cs
var value1 = new AnyValueArray(new object[]{1, "123.456", "2018-01-01"});

value1.GetAsBoolean(0);   // Result: true
value1.GetAsInteger(1);   // Result: 123
value1.GetAsFloat(1);     // Result: 123.456
value1.GetAsDateTime(2);  // Result: new DateTime(2018,0,1)
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
