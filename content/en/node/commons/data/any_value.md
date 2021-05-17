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
The value stored by this object.
> `public` **value**: any

</span>

### Instance methods

#### clone
Creates a binary clone of this object.

> `public` clone(): any

- **returns**: any - a clone of this object.

#### equals
Compares this object value to specified specified value.
When direct comparison gives negative results it tries
to compare values as strings.

> `public` equals(obj: any): boolean

- **obj**: any - the value to be compared with.
- **returns**: boolean - true when objects are equal and false otherwise.

#### equalsAsType
Compares this object value to specified specified value.
When direct comparison gives negative results it converts 
values to type specified by type code and compare them again.    
See [TypeConverter.toType](../../convert/type_converter/#totype)

> `public` equalsAsType/<T/>(type: [TypeCode](../../convert/type_code), obj: any): boolean

- **type**: [TypeCode](../../convert/type_code) - the value to be compared with.
- **obj**: any - TODO add description
- **returns**: any - true when objects are equal and false otherwise.


#### getAsArray
Converts object value into an AnyArray or returns empty AnyArray if conversion is not possible.  
See [AnyValueArray.fromValue](../any_value_array/#fromvalue)

> `public` getAsArray(): [AnyValueArray](../any_value_array)

- **returns**: [AnyArray](../any_array) - AnyArray value or empty AnyArray if conversion is not supported. 

#### getAsBoolean
Converts object value into a boolean or returns false if conversion is not possible.

> `public` getAsBoolean(): boolean

- **returns**: boolean - string value or false if conversion is not supported. 

#### getAsBooleanWithDefault
Converts object value into a boolean or returns default value if conversion is not possible.  
See [BooleanConverter.toBooleanWithDefault](../../convert/boolean_converter/#tobooleanwithdefault)

> `public` getAsBooleanWithDefault(defaultValue: boolean): boolean

- **defaultValue**: boolean - the default value.
- **returns**: boolean - boolean value or default if conversion is not supported. 

#### getAsDateTime
Converts object value into a Date or returns current date if conversion is not possible.

> `public` getAsDateTime(): Date

- **returns**: Date - Date value or current date if conversion is not supported.

#### getAsDateTimeWithDefault
Converts object value into a Date or returns default value if conversion is not possible.   
See [DateTimeConverter.toDateTimeWithDefault](../../convert/date_time_converter/#todatetimewithdefault)

> `public` getAsDateTimeWithDefault(defaultValue: Date): Date

- **defaultValue**: Date - the default value.
- **returns**: Date - Date value or default if conversion is not supported.


#### getAsDouble
Converts object value into a double or returns 0 if conversion is not possible.

> `public` getAsDouble(): number

- **returns**: number - double value or 0 if conversion is not supported.


#### getAsDoubleWithDefault
Converts object value into a double or returns default value if conversion is not possible.    
See [DoubleConverter.toDoubleWithDefault](../../convert/double_converter/#todoublewithdefault)

> `public` getAsDoubleWithDefault(defaultValue: number): number

- **defaultValue**: number - the default value.
- **returns**: number - double value or default if conversion is not supported.


#### getAsFloat
Converts object value into a float or returns 0 if conversion is not possible.

> `public` getAsFloat(): number

- **returns**: number - float value or 0 if conversion is not supported. 


#### getAsFloatWithDefault
Converts object value into a float or returns default value if conversion is not possible.    
See [FloatConverter.toFloatWithDefault](../../convert/float_converter/#tofloatwithdefault)

> `public` getAsFloatWithDefault(defaultValue: number): number

- **defaultValue**: number - the default value.
- **returns**: number - float value or default if conversion is not supported.


#### getAsInteger
Converts object value into an integer or returns 0 if conversion is not possible.

> `public` getAsInteger(): number

- **returns**: number - integer value or 0 if conversion is not supported. 


#### getAsIntegerWithDefault
Converts object value into a integer or returns default value if conversion is not possible.    
See [IntegerConverter.toIntegerWithDefault](../../convert/integer_converter/#tointegerwithdefault)

> `public` getAsIntegerWithDefault(defaultValue: number): number

- **default_value**: number - the default value.
- **returns**: number -  integer value or default if conversion is not supported.


#### getAsLong
Converts object value into a long or returns 0 if conversion is not possible.

> `public` getAsLong(): number

- **returns**: number -  long value or 0 if conversion is not supported. 


#### getAsLongWithDefault
Converts object value into a long or returns default value if conversion is not possible.    
See [LongConverter.toLongWithDefault](../../convert/long_converter/#tolongwithdefault)

> `public` getAsLongWithDefault(defaultValue: number): number

- **default_value**: number - the default value.
- **returns**: number -  long value or default if conversion is not supported. 


#### getAsMap
Converts object value into AnyMap or returns empty AnyMap if conversion is not possible.    
See [AnyValueMap.fromValue](../any_value_map/#fromvalue)

> `public` getAsMap(): [AnyValueMap](../any_value_map)

- **returns**: [AnyValueMap](../any_value_map) -  AnyMap value or empty AnyMap if conversion is not supported.


#### getAsNullableBoolean
Converts object value into a boolean or returns null if conversion is not possible.  
See [BooleanConverter.toNullableBoolean](../../convert/boolean_converter/#tonullableboolean)

> `public` getAsNullableBoolean(): boolean

- **returns**: boolean - boolean value or null if conversion is not supported.


#### getAsNullableDateTime
Converts object value into a Date or returns null if conversion is not possible.   
See [DateTimeConverter.toNullableDateTime](../../convert/date_time_converter/#tonullabledatetime)

> `public` getAsNullableDateTime(): Date

- **returns**: Date - Date value or null if conversion is not supported.


#### getAsNullableDouble
Converts object value into a double or returns null if conversion is not possible.    
See [DoubleConverter.toNullableDouble](../../convert/double_converter/#tonullabledouble)

> `public` getAsNullableDouble(): number

- **returns**: number - double value or null if conversion is not supported.


#### getAsNullableFloat
Converts object value into a float or returns null if conversion is not possible.    
See [FloatConverter.toNullableFloat](../../convert/float_converter/#tonullablefloat)

> `public` getAsNullableFloat(): number

- **returns**: number - float value or null if conversion is not supported.


#### getAsNullableInteger
Converts object value into an integer or returns null if conversion is not possible.  
See [IntegerConverter.toNullableInteger](../../convert/integer_converter/#tonullableinteger)

> `public` getAsNullableInteger(): number

- **returns**: number - integer value or null if conversion is not supported. 


#### getAsNullableLong
Converts object value into a long or returns null if conversion is not possible.   
See [LongConverter.toNullableLong](../../convert/long_converter/#tonullablelong)

> `public` getAsNullableLong(): number

- **returns**: number - long value or null if conversion is not supported. 


#### getAsNullableString
Converts object value into a string or returns null if conversion is not possible.    
See [StringConverter.toNullableString](../../convert/string_converter/#tonullablestring)

> `public` getAsNullableString(): string

- **returns**: string - string value or null if conversion is not supported. 


#### getAsNullableType
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns null.  
See [TypeConverter.toNullableType](../../convert/type_converter/#tonullabletype)

> `public` getAsNullableType\<T\>(type: [TypeCode](../../convert/type_code)): T

- **type**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **returns**: T - value defined by the typecode or null if conversion is not supported. 


#### getAsObject
Gets the value stored in this object without any conversions

> `public` getAsObject(): any

- **returns**: any - the object value. 


#### getAsString
Converts object value into a string or returns *""* if conversion is not possible.

> `public` getAsString(): string

- **returns**: string - string value or *""* if conversion is not supported. 


#### getAsStringWithDefault
Converts object value into a string or returns default value if conversion is not possible.

> `public` getAsStringWithDefault(defaultValue: string): string

- **defaultValue**: string - the default value.
- **returns**: string - string value or default if conversion is not supported.


#### getAsType
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns default value for the specified type.

> `public` getAsType\<T\>(typeCode: [TypeCode](../../convert/type_code)): T

- **typeCode**: string - the TypeCode that defined the type of the result
- **returns**: string - value defined by the typecode or type default value if conversion is not supported. 


#### getAsTypeWithDefault
Converts object value into a value defined by specied typecode.
If conversion is not possible it returns default value.

> `public` getAsTypeWithDefault\<T\>(typeCode: [TypeCode](../../convert/type_code), defaultValue: T): T

- **typeCode**: [TypeCode](../../convert/type_code) - the TypeCode that defined the type of the result
- **defaultValue**: T - the default value
- **returns**: T - value defined by the typecode or type default value if conversion is not supported. 


#### getTypeCode
Gets type code for the value stored in this object.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> `public` getTypeCode(): [TypeCode](../../convert/type_code)

- **returns**: [TypeCode](../../convert/type_code) - type code of the object value. 


#### hashCode
Gets an object hash code which can be used to optimize storing and searching.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode)

> `public` hashCode(): number

- **returns**: number - an object hash code. 


#### setAsObject
Sets a new value for this object

> `public` setAsObject(value: any): void

- **value**: any - the new object value.



#### toString
Gets a string representation of the object.  
See [StringConverter.toString](../../convert/string_converter/#tostring)

> `public` toString(): any

- **returns**: any - a string representation of the object.


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


