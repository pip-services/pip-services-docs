---
type: docs
title: "AnyValueArray"
linkTitle: "AnyValueArray"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Cross-language implementation of a dynamic array object that can hold values of any type.
    It also provides methods to convert the stored values to different types.
---

**Implements:** [ICloneable](../icloneable), list

### Description

The AnyValueArray class provides a cross-language implementation of a dynamic array object that can hold values of any type. In addition, it provides several methods to convert the stored values to different types, such as boolean, integer or datetime.

### Constructors
Creates a new instance of the array and assigns its value.

> AnyValueArray(values: Sequence[Any] = None)

- **values**:  Sequence[Any] - (optional) values to initialize this array.


### Instance methods

#### appends
Appends new elements to this array.

> appends(elements: List[Any])

- **elements**: List[Any] - a list of elements to be added.


#### clear
Clears this array by removing all its elements.

> clear()


#### clone
Creates a binary clone of this object.

> clone(): Any

- **returns**: Any - a clone of this object.


#### contains
Checks if this array contains a value.
The check uses direct comparison between elements and the specified value.

> contains(value: Any): bool

- **value**: Any - a value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### contains_as_type
Checks if this array contains a value.
The check before comparison converts elements and the value to type specified by type code.   
See [TypeConverter.to_type](../../convert/type_converter/#to_type), [TypeConverter.to_nullable_type](../../convert/type_converter/#to_nullable_type)

> contains_as_type(value_type: [TypeCode](../../convert/type_code), value: Any): bool

- **value_type**: [TypeCode](../../convert/type_code) - a type code that defines a type to convert values before comparison
- **value**: Any - a value to be checked
- **returns**: bool - true if this array contains the value or false otherwise.


#### get
Gets an array element specified by its index.

> get(index: int): Any

- **index**: int - an index of the element to get.
- **returns**: Any - the value of the array element.


#### get_as_array
Converts array element into an AnyValueArray or returns empty AnyValueArray if conversion is not possible.

> get_as_array(index: int): [AnyValueArray](../any_value_array)

- **index**: int - an index of element to get.
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or empty AnyValueArray if conversion is not supported. 


#### get_as_array_with_default
Converts array element into an AnyValueArray or returns default value if conversion is not possible.

> get_as_array_with_default(index: int, default_value: [AnyValueArray](../any_value_array)): [AnyValueArray](../any_value_array)

- **index**: int - an index of element to get.
- **default_value**: [AnyValueArray](../any_value_array) - the default value
- **returns**: [AnyValueArray](../any_value_array) - AnyValueArray value of the element or default value if conversion is not supported.


#### get_as_boolean
Converts array element into a boolean or returns false if conversion is not possible.

> get_as_boolean(index: int): bool

- **index**: int - an index of element to get.
- **returns**: bool - bool value ot the element or false if conversion is not supported. 


#### get_as_boolean_with_default
Converts array element into a boolean or returns default value if conversion is not possible.  
See [BooleanConverter.to_boolean_with_default](../../convert/boolean_converter/#to_boolean_with_default)

> get_as_boolean_with_default(index: int, default_value: bool): bool

- **index**: int - an index of element to get.
- **default_value**: bool - the default value
- **returns**: bool - boolean value ot the element or default value if conversion is not supported.


#### get_as_datetime
Converts array element into a Date or returns the current date if conversion is not possible.

> get_as_datetime(index: int): datetime

- **index**: int - an index of element to get.
- **returns**: datetime - date value ot the element or the current date if conversion is not supported. 


#### get_as_datetime_with_default
Converts array element into a Date or returns default value if conversion is not possible.  
See [DateTimeConverter.to_datetime_with_default](../../convert/date_time_converter/#to_datetime_with_default)

> get_as_datetime_with_default(index: int, default_value: datetime): datetime

- **index**: int - an index of element to get.
- **default_value**: datetime - the default value
- **returns**: datetime - date value ot the element or default value if conversion is not supported. 


#### get_as_double
Converts array element into a double or returns 0 if conversion is not possible.

> get_as_double(index: int): float

- **index**: int - an index of element to get.
- **returns**: float - double value ot the element or 0 if conversion is not supported. 


#### get_as_double_with_default
Converts array element into a double or returns default value if conversion is not possible.

> get_as_double_with_default(index: int, default_value: float): float

- **index**: int - an index of element to get.
- **default_value**: float - the default value
- **returns**: float - double value ot the element or default value if conversion is not supported.


#### get_as_nullable_double
Converts array element into a double or returns null if conversion is not possible.

> get_as_nullable_double(index: int): Optional[float]

- **index**: int - an index of element to get.
- **returns**: Optional[float] - double value of the element or null if conversion is not supported.


#### get_as_float
Converts array element into a float or returns 0 if conversion is not possible.

> get_as_float(index: int): float

- **index**: int - an index of element to get.
- **returns**: float - float value ot the element or 0 if conversion is not supported.


#### get_as_float_with_default
Converts array element into a float or returns default value if conversion is not possible.   
See [FloatConverter.to_float_with_default](../../convert/float_converter/#to_float_with_default)

> get_as_float_with_default(index: int, default_value: float): float

- **index**: int - an index of element to get.
- **default_value**: float - the default value
- **returns**: float - number value ot the element or default value if conversion is not supported. 


#### get_as_integer
Converts array element into an integer or returns 0 if conversion is not possible.

> get_as_integer(index: int): int

- **index**: int - an index of element to get.
- **returns**: int - integer value ot the element or 0 if conversion is not supported. 


#### get_as_integer_with_default
Converts array element into an integer or returns default value if conversion is not possible.  
See [IntegerConverter.to_integer_with_default](../../convert/integer_converter/#to_integer_with_default)

> get_as_integer_with_default(index: int, default_value: int): int

- **index**: int - an index of element to get.
- **default_value**: int - the default value
- **returns**: int - integer value ot the element or default value if conversion is not supported.


#### get_as_long
Converts array element into a long or returns 0 if conversion is not possible.

> get_as_long(index: int): float

- **index**: int - an index of element to get.
- **returns**: float - long value ot the element or 0 if conversion is not supported.


#### get_as_long_with_default
Converts array element into a long or returns default value if conversion is not possible.  
See [LongConverter.to_long_with_default](../../convert/LongConverter/#to_long_with_default)

> get_as_long_with_default(index: int, default_value: float): float

- **index**: int - an index of element to get.
- **default_value**: float - the default value
- **returns**: float - long value ot the element or default value if conversion is not supported. 


#### get_as_map
Converts array element into an AnyValueMap or returns empty AnyValueMap if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.from_value](../any_value_map/#from_value)

> get_as_map(index: int): [AnyValueMap](../any_value_map)

- **index**: int - an index of element to get.
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or empty AnyValueMap if conversion is not supported.


#### get_as_map_with_default
Converts array element into an AnyValueMap or returns default value if conversion is not possible.

> get_as_map_with_default(index: int, default_value: [AnyValueMap](../any_value_map)): [AnyValueMap](../any_value_map)

- **index**: int - an index of element to get.
- **default_value**: [AnyValueMap](../any_value_map) - the default value
- **returns**: [AnyValueMap](../any_value_map) - AnyValueMap value of the element or default value if conversion is not supported.


#### get_as_nullable_array
Converts array element into an AnyValueArray or returns null if conversion is not possible.

> get_as_nullable_array(index: int): Optional[[AnyValueArray](../any_value_array)]

- **index**: int - an index of element to get.
- **returns**: Optional[[AnyValueArray](../any_value_array)] - AnyValueArray value of the element or null if conversion is not supported. 


#### get_as_nullable_boolean
Converts array element into a boolean or returns null if conversion is not possible.  
See [BooleanConverter.to_nullable_boolean](../../converter/boolean_converter/#to_nullable_boolean)

> get_as_nullable_boolean(index: int): Optional[bool]

- **index**: int - an index of element to get.
- **returns**: Optional[bool] - boolean value of the element or null if conversion is not supported.


#### get_as_nullable_datetime
Converts array element into a Date or returns null if conversion is not possible.  
See [DateTimeConverter.to_nullable_datetime](../../converter/date_time_converter/#to_nullable_datetime)

> get_as_nullable_datetime(index: int): Optional[datetime]

- **index**: int - an index of element to get.
- **returns**: Optional[datetime] - datetime value of the element or null if conversion is not supported. 


#### get_as_nullable_double
Converts array element into a double or returns null if conversion is not possible.  
See [DoubleConverter.to_nullable_double](../../convert/double_converter/#to_nullable_double)

> get_as_nullable_double(index: int): Optional[float]

- **index**: int - an index of element to get.
- **returns**: Optional[float] - double value of the element or null if conversion is not supported.


#### get_as_nullable_float
Converts array element into a float or returns null if conversion is not possible.  
See [FloatConverter.to_nullable_float](../../convert/float_converter/#to_nullable_float)

> get_as_nullable_float(index: int): Optional[float]

- **index**: int - an index of element to get.
- **returns**: Optional[float] - float value of the element or null if conversion is not supported. 


#### get_as_nullable_integer
Converts array element into a float or returns null if conversion is not possible.  
See [IntegerConverter.to_nullable_integer](../../convert/integer_converter/#to_nullable_integer)

> get_as_nullable_integer(index: int): Optional[int]

- **index**: int - an index of element to get.
- **returns**: Optional[int] - integer value of the element or null if conversion is not supported. 


#### get_as_nullable_long
Converts array element into a long or returns null if conversion is not possible.  
See [LongConverter.to_nullable_long](../../convert/long_converter/#to_nullable_long)

> get_as_nullable_long(index: int): Optional[float]

- **index**: int - an index of element to get.
- **returns**: Optional[float] - long value of the element or null if conversion is not supported.


#### get_as_nullable_map
Converts array element into a long or returns null if conversion is not possible.  
See [AnyValueMap](../any_value_map), [AnyValueMap.from_value](../any_value_map/#from_value)

> get_as_nullable_map(index: int): Optional[[AnyValueMap](../any_value_map)]

- **index**: int - an index of element to get.
- **returns**: Optional[[AnyValueMap](../any_value_map)] - AnyValueMap value of the element or null if conversion is not supported. 


#### get_as_nullable_string
Converts array element into a string or returns null if conversion is not possible.  
See [StringConverter.to_nullable_string](../../convert/string_converter/#to_nullable_string),

> get_as_nullable_string(index: int): str

- **index**: int - an index of element to get.
- **returns**: str - string value of the element or null if conversion is not supported.


#### get_as_nullable_type
Converts array element into a value defined by specied typecode.
If conversion is not possible it returns null.  
See [TypeConverter.to_nullable_type](../../convert/type_converter/#to_nullable_type)

> get_as_nullable_type(value_type: [TypeCode](../../convert/type_code), index: int): T

- **value_type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **index**: number - an index of element to get.
- **returns**: T - element value defined by the typecode or null if conversion is not supported. 


#### get_as_object
Gets the value stored in array element without any conversions.
When element index is not defined it returns the entire array value.

> get_as_object(index: int = None): Any 

- **index**: int - (optional) an index of the element to get
- **returns**: Any - the element value or value of the array when index is not defined.


#### get_as_string
Converts array element into a string or returns *""* if conversion is not possible.

> get_as_string(index: int): str

- **index**: int = undefined - an index of element to get.
- **returns**: str - string value ot the element or *""* if conversion is not supported. 


#### get_as_string_with_default
Converts array element into a string or returns default value if conversion is not possible.  
See [StringConverter.to_string_with_default](../../convert/string_converter/#to_string_with_default)

> get_as_string_with_default(index: int, default_value: str): str

- **index**: int - an index of element to get.
- **default_value**: str - the default value
- **returns**: str - string value ot the element or default value if conversion is not supported.


#### get_as_type
Converts array element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.

> get_as_type(value_type: [TypeCode](../../convert/type_code), index: int): T

- **value_type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **index**: int - an index of element to get.
- **returns**: T - element value defined by the typecode or default if conversion is not supported.


#### get_as_type_with_default
Converts array element into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.  
See [TypeConverter.to_type_with_default](../../convert/type_converter/#to_type_with_default)

> get_as_type_with_default(value_type: [TypeCode](../../convert/type_code), index: int, default_value: T): T 

- **value_type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **index**: int - an index of element to get.
- **default_value**: T - the default value
- **returns**: T - element value defined by the typecode or default value if conversion is not supported. 


#### get_as_value
Converts array element into an AnyValue or returns an empty AnyValue if conversion is not possible.  
See [AnyValue](../any_value), [AnyValues.constructors](../any_value/#constructors)

> get_as_value(index: int): [AnyValue](../any_value)

- **index**: int - an index of element to get.
- **returns**: [AnyValue](../any_value) - AnyValue value of the element or empty AnyValue if conversion is not supported. 


#### put
Puts a new value into array element specified by its index. 

> put(index: int, value: Any)

- **index**: int - an index of the element to put.
- **value**: Any - a new value for array element.


#### remove
Removes an array element specified by its index

> remove(index: int)

- **index**: int - an index of the element to remove.


#### set_as_object
Sets a new value to array element specified by its index.
When the index is not defined, it resets the entire array value.
This method has double purpose because method overrides are not supported in JavaScript.  
See [ArrayConverter.to_array](../../convert/array_converter/#to_array)

> set_as_object(index: int, value: Any = None)

- **index**: int - (optional) an index of the element to set
- **value**: Any - a new element or array value.


#### to_string
Gets a string representation of the object.
The result is a comma-separated list of string representations of individual elements as
*"value1,value2,value3"*  
See [StringConverter.to_string](../../convert/string_converter/#to_string)

> to_string(): str

- **returns**: str - a string representation of the object.


#### from_string
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.

> `static` from_string(values: str, separator: str, removeDuplicates: bool = False): [AnyValueArray](../any_value_array)

- **values**: str - a string value to be split and assigned to AnyValueArray
- **separator**: str - a separator to split the string
- **removeDuplicates**: bool = false - (optional) true to remove duplicated elements
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.


#### from_value
Splits specified string into elements using a separator and assigns 
the elements to a newly created AnyValueArray.  
See [ArrayConverter.to_nullable_array](../../convert/array_converter/#to_nullable_array)

> `static` from_value(value: Any): [AnyValueArray](../any_value_array)

- **values**: Any - value to be converted
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.


#### from_values
Creates a new AnyValueArray from a list of values

> `static` from_values(*values: Any): [AnyValueArray](../any_value_array)

- **values**: Any - a list of values to initialize the created AnyValueArray
- **returns**: [AnyValueArray](../any_value_array) - a newly created AnyValueArray.


#### to_string
Gets a string representation of the object.
The result is a comma-separated list of string representations of individual elements as
*"value1,value2,value3"*  
See [StringConverter.to_string](../../convert/string_converter/#to_string)

> to_string(): str

- **returns**: str - a string representation of the object.

### Examples
```python
value1 = AnyValueArray([1, "123.456", "2018-01-01"])

value1.get_as_boolean(0)   # Result: true
value1.get_as_integer(1)   # Result: 123
value1.get_as_float(1)     # Result: 123.456
value1.get_as_datetime(2)  # Result: datetime.datetime(2018,0,1)
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
