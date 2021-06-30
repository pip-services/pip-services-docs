---
type: docs
title: "AnyValue"
linkTitle: "AnyValue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Cross-language implementation of a dynamic object that can hold a value of any type.
    It also provides methods to convert the stored value to different types.
---

**Implements:** [ICloneable](../icloneable)

### Description

The AnyValue class provides a cross-language implementation of a dynamic object that can hold a value of any type. In addition, it provides methods to convert the stored value to different types, such as string or integer.

### Constructors
Creates a new instance of the object and assigns its value.

> `public` constructor(value: any = null)

- **value**: any - (optional) value to initialize this object.

### Fields

<span class="hide-title-link">

#### value
Value stored by this object.
> `public` **value**: any

</span>

### Instance methods

#### clone
Creates a binary clone of this object.

> `public` clone(): any

- **returns**: any - clone of this object.

#### equals
Compares this object's value to a specified specified value.
When a direct comparison gives a negative result it tries
to compare the values as strings.

> `public` equals(obj: any): boolean

- **obj**: any - value to be compared with.
- **returns**: boolean - true when objects are equal and false otherwise.

#### equalsAsType
Compares this object's value to a specified value.
When direct comparison gives a negative result it converts the 
values to a type specified by the type code and compares them again.    
See [TypeConverter.toType](../../convert/type_converter/#totype)

> `public` equalsAsType/<T/>(type: [TypeCode](../../convert/type_code), obj: any): boolean

- **type**: [TypeCode](../../convert/type_code) - value to be compared with.
- **obj**: Any - args to be compared with.
- **returns**: any - true when the objects are equal and false otherwise.


#### getAsArray
Converts the object's value into an AnyArray or returns an empty AnyArray if the conversion is not possible.  
See [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public` getAsArray(): [AnyValueArray](../any_value_array)

- **returns**: [AnyValueArray](../any_value_array) - AnyArray value or empty AnyArray if the conversion is not supported. 

#### getAsBoolean
Converts an object's value into a boolean or returns false if the conversion is not possible.

> `public` getAsBoolean(): boolean

- **returns**: boolean - string value or false if the conversion is not supported. 

#### getAsBooleanWithDefault
Converts an object's value into a boolean or returns a given default value if the conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` getAsBooleanWithDefault(defaultValue: boolean): boolean

- **defaultValue**: boolean - default value.
- **returns**: boolean - boolean value or given default if the conversion is not supported. 

#### getAsDateTime
Converts an object's value into Date or returns the current date if the conversion is not possible.

> `public` getAsDateTime(): Date

- **returns**: Date - Date value or current date if the conversion is not supported.

#### getAsDateTimeWithDefault
Converts an object's value into Date or returns a given default value if the conversion is not possible.   
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` getAsDateTimeWithDefault(defaultValue: Date): Date

- **defaultValue**: Date - default value.
- **returns**: Date - Date value or given default if the conversion is not supported.


#### getAsDouble
Converts an object's value into a double or returns 0 if the conversion is not possible.

> `public` getAsDouble(): number

- **returns**: number - double value or 0 if the conversion is not supported.


#### getAsDoubleWithDefault
Converts an object's value into a double or returns a default value if the conversion is not possible.    
See [DoubleConverter.toDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> `public` getAsDoubleWithDefault(defaultValue: number): number

- **defaultValue**: number - default value.
- **returns**: number - double value or default if the conversion is not supported.


#### getAsFloat
Converts an object's value into a float or returns 0 if the conversion is not possible.

> `public` getAsFloat(): number

- **returns**: number - float value or 0 if the conversion is not supported. 


#### getAsFloatWithDefault
Converts an object's value into a float or returns a given default value if the conversion is not possible.    
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` getAsFloatWithDefault(defaultValue: number): number

- **defaultValue**: number - default value.
- **returns**: number - float value or default if the conversion is not supported.


#### getAsInteger
Converts an object's value into an integer or returns 0 if the conversion is not possible.

> `public` getAsInteger(): number

- **returns**: number - integer value or 0 if the conversion is not supported. 


#### getAsIntegerWithDefault
Converts an object's value into an integer or returns a given default value if conversion is not possible.    
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` getAsIntegerWithDefault(defaultValue: number): number

- **defaultValue**: number - default value.
- **returns**: number -  integer value or default if the conversion is not supported.


#### getAsLong
Converts an object's value into a long or returns 0 if the conversion is not possible.

> `public` getAsLong(): number

- **returns**: number -  long value or 0 if the conversion is not supported. 


#### getAsLongWithDefault
Converts an object's value into a long or returns a given default value if the conversion is not possible.    
See [LongConverter.toLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> `public` getAsLongWithDefault(defaultValue: number): number

- **defaultValue**: number - default value.
- **returns**: number -  long value or given default if the conversion is not supported. 


#### getAsMap
Converts an object's value into AnyMap or returns an empty AnyMap object if the conversion is not possible.    
See [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> `public` getAsMap(): [AnyValueMap](../any_value_map)

- **returns**: [AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if the conversion is not supported.


#### getAsNullableBoolean
Converts an object's value into a boolean or returns null if the conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> `public` getAsNullableBoolean(): boolean

- **returns**: boolean - boolean value or null if the conversion is not supported.


#### getAsNullableDateTime
Converts an object's value into Date or returns null if the conversion is not possible.   
See [DateTimeConverter.toNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> `public` getAsNullableDateTime(): Date

- **returns**: Date - Date value or null if the conversion is not supported.


#### getAsNullableDouble
Converts an object's value into a double or returns null if the conversion is not possible.    
See [DoubleConverter.toNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` getAsNullableDouble(): number

- **returns**: number - double value or null if the conversion is not supported.


#### getAsNullableFloat
Converts an object's value into a float or returns null if the conversion is not possible.    
See [FloatConverter.toNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` getAsNullableFloat(): number

- **returns**: number - float value or null if the conversion is not supported.


#### getAsNullableInteger
Converts an object's value into an integer or returns null if the conversion is not possible.  
See [IntegerConverter.toNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` getAsNullableInteger(): number

- **returns**: number - integer value or null if the conversion is not supported. 


#### getAsNullableLong
Converts an object's value into a long or returns null if the conversion is not possible.   
See [LongConverter.toNullableLong](../../convert/long_converter/#tonullablelong)

> `public` getAsNullableLong(): number

- **returns**: number - long value or null if the conversion is not supported. 


#### getAsNullableString
Converts an object's value into a string or returns null if the conversion is not possible.    
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring)

> `public` getAsNullableString(): string

- **returns**: string - string value or null if the conversion is not supported. 


#### getAsNullableType
Converts an object's value into a value defined by a specified typecode.
If conversion is not possible it returns null.  
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` getAsNullableType\<T\>(type: [TypeCode](../../convert/type_code)): T

- **type**: [TypeCode](../../convert/type_code) - TypeCode that defined the type of the result
- **returns**: T - value defined by the typecode or null if the conversion is not supported. 


#### getAsObject
Gets the value stored in this object without any conversion.

> `public` getAsObject(): any

- **returns**: any - object value. 


#### getAsString
Converts an object's value into a string or returns *""* if the conversion is not possible.

> `public` getAsString(): string

- **returns**: string - string value or *""* if the conversion is not supported. 


#### getAsStringWithDefault
Converts an object's value into a string or returns a given default value if the conversion is not possible.

> `public` getAsStringWithDefault(defaultValue: string): string

- **defaultValue**: string - default value.
- **returns**: string - string value or given default if the conversion is not supported.


#### getAsType
Converts an object's value into a value defined by a specifieded typecode.
If conversion is not possible, it returns the default value for the specified type.

> `public` getAsType\<T\>(typeCode: [TypeCode](../../convert/type_code)): T

- **typeCode**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **returns**: string - value defined by the typecode or type default value if the conversion is not supported. 


#### getAsTypeWithDefault
Converts an object's value into a value defined by a specified typecode.
If conversion is not possible, it returns the given default value.

> `public` getAsTypeWithDefault\<T\>(typeCode: [TypeCode](../../convert/type_code), defaultValue: T): T

- **typeCode**: [TypeCode](../../convert/type_code) - TypeCode that defines the type of the result
- **defaultValue**: T - default value
- **returns**: T - value defined by the typecode or given default value if the conversion is not supported. 


#### getTypeCode
Gets the type's code for the value stored in this object.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> `public` getTypeCode(): [TypeCode](../../convert/type_code)

- **returns**: [TypeCode](../../convert/type_code) - type's code of the object's value. 


#### hashCode
Gets an object hash code which can be used to optimize storing and searching.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> `public` hashCode(): number

- **returns**: number - object hash code. 


#### setAsObject
Sets a new value for this object.

> `public` setAsObject(value: any): void

- **value**: any - new object value.



#### toString
Gets a string representation of the object.  
See [StringConverter.toString](../../convert/string_converter/#tostring)

> `public` toString(): string

- **returns**: string - string representation of the object.


### Examples

```typescript
let value1 = new AnyValue("123.456");

value1.getAsInteger();   // Result: 123
value1.getAsString();    // Result: "123.456"
value1.getAsFloat();     // Result: 123.456
```

### See also
- #### [StringConverter](../../convert/string_converter)
- #### [TypeConverter](../../convert/type_converter)
- #### [BooleanConverter](../../convert/boolean_converter)
- #### [IntegerConverter](../../convert/integer_converter)
- #### [LongConverter](../../convert/long_converter)
- #### [DoubleConverter](../../convert/double_converter)
- #### [FloatConverter](../../convert/float_converter)
- #### [DateTimeConverter](../../convert/date_time_converter)
- #### [ICloneable](../icloneable)


