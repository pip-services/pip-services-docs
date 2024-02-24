---
type: docs
title: "Variant"
linkTitle: "Variant"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines a container for variant values.
---

### Description

The Variant class allows you to define a container for variant values.


### Constructors
Constructs this class and assignes a variant value. 

> `public` Variant(Object value)

- **value**: Object - value to be assigned to this variant.


### Fields

<span class="hide-title-link">
Empty

> `public static` **Empty** = new [Variant(null)]()

</span>


### Properties

#### asArray
Gets a variant value as a variant array.

> `public` asArray(): [Variant[]]()

- **returns**: [Variant[]]() - value as variant array.


Sets a variant value as variant array.

> `public` asArray(value: [Variant[]]())

- **value**: [Variant[]]() - value to be set.

#### asBoolean
Gets a variant value as boolean.

> `public` asBoolean(): boolean 

- **returns**: boolean - value as boolean.

Sets a variant value as boolean.
> `public` asBoolean(value: boolean)

- **value**: boolean - value to be set


#### asDateTime
Gets a variant value as DateTime.

> `public` asDateTime(): Date

- **returns**: Date - value as DateTime.

Sets a variant value as DateTime.

> `public` asDateTime(value: Date)

- **value**: Date - value to be set

#### asDouble
Gets a variant value as double.

> `public` asDouble(): number

- **returns**: number - value as double.

Sets a variant value as double.

> `public` asDouble(value: number)

- **value**: number - value to be set.


#### asFloat
Gets a variant value as float.

> `public` asFloat(): number

- **returns**: number - value as float.

Sets a variant value as float.

> `public` asFloat(value: number)

- **value**: number - value to be set..

#### asInteger
Gets a variant value as integer.

> `public` asInteger(): number

- **returns**: number - value as integer.

Sets a variant value as integer.

> `public` asInteger(value: number)

- **value**: number - value to be set.


#### asLong
Gets a variant value as long.

> `public` asLong(): number

- **returns**: number - value as long.

Sets a variant value as long

> `public` asLong(value: number)

- **value**: number - value to be set.


#### asObject
Gets a variant value as object.

> `public` asObject(): any

- **returns**: any - value as object.

Sets a variant value as object

> `public` asObject(value: any)

- **value**: any - value to be set.


#### asString
Gets a variant value as string.

> `public` asString(): string

- **returns**: string - value as string.

Sets a variant value as string.

> `public` asString(value: string)

- **value**: string - value to be set.


#### asTimeSpan
Gets a variant value as TimeSpan.

> `public` asTimeSpan(): number

- **returns**: number - value as TimeSpan.

Sets a variant value as TimeSpan.

> `public` asTimeSpan(value: number)

- **value**: number - value as TimeSpan.


#### length
Gets the length of the array

> `public` length(): number

- **returns**: number - length of the array or 0.

Sets a new array length

> `public` length(value: number)

- **value**: number - new array length


#### type
Gets a type of the variant value

> `public` type(): [VariantType](../variant_type)

- **returns**: [VariantType](../variant_type) - variant value type.



### Instance methods

#### assign
Assignes a new value to this object.

> `public` void assign([Variant]() value)

- **value**: [Variant]() - new value to be assigned.


#### clear
Clears this object and assignes a [VariantType.Null](../variant_type) type.

> `public` void clear() 


#### clone
Clones the variant value

> `public` [Variant]() clone()

- **value**: [Variant]() - cloned value of this variant


#### equals
Compares this object to the specified one.

> `public` boolean equals(Object obj)

- **obj**: Object - object to be compared.
- **returns**: boolean - *true* if the objects are equal.


#### getByIndex
Gets an array element by its index.

> `public` [Variant]() getByIndex(int index) throws Exception

- **index**: int - element's index.
- **returns**: [Variant]() - requested array element.


#### isEmpty
Checks is this variant value is empty.

> `public` boolean isEmpty()

- **returns**: boolean - *true* is this variant value is empty.


#### isNull
Checks is this variant value is Null.

> `public` boolean isNull()

- **returns**: boolean - *true* if this variant value is Null.


#### setByIndex
Sets an array element by its index.

> `public` void setByIndex(int index, [Variant]() element) throws Exception

- **index**: int - element index.
- **element**: [Variant]() - element value.


#### toString
Returns a string value for this object.

> `public` String toString()

- **returns**: String - string value for this object.

### Static methods

#### fromArray
Creates a new variant from Array value.

> `public static` [Variant]() fromArray(List<[Variant]()> value)

- **value**: [Variant]() - variant value.
- **returns**: [Variant]() - created variant object.


#### fromBoolean
Creates a new variant from a Boolean value.

> `public static` [Variant]() fromBoolean(boolean value)

- **value**: boolean - variant value.
- **returns**: [Variant]() - created variant object.


#### fromDateTime
Creates a new variant from a DateTime value.

> `public static` [Variant]() fromDateTime(ZonedDateTime value)

- **value**: ZonedDateTime - variant value.
- **returns**: [Variant]() - created variant object.


#### fromDouble
Creates a new variant from a Double value.

> `public static` [Variant]() fromDouble(Double value)

- **value**: Double - variant value.
- **returns**: [Variant]() - created variant object.


#### fromFloat
Creates a new variant from a Float value.

> `public static` [Variant]() fromFloat(Float value)

- **value**: Float - variant value.
- **returns**: [Variant]() - created variant object.


#### fromInteger
Creates a new variant from an Integer value.

> `public static` [Variant]() fromInteger(Integer value)

- **value**: Integer - variant value.
- **returns**: [Variant]() - created variant object.


#### fromLong
Creates a new variant from a Long value.

> `public static` [Variant]() fromLong(Long value)

- **value**: Long - variant value.
- **returns**: [Variant]() - created variant object.


#### fromObject
Creates a new variant from an Object value.

> `public static` [Variant]() fromObject(Object value)

- **value**: Object - variant value.
- **returns**: [Variant]() - created variant object.


#### fromString
Creates a new variant from a String value.

> `public static` [Variant]() fromString(String value)

- **value**: String - variant value.
- **returns**: [Variant]() - created variant object.


#### fromTimeSpan
Creates a new variant from a TimeSpan value.

> `public static` [Variant]() fromTimeSpan(Long value)

- **value**: Long - variant value.
- **returns**: [Variant]() - created variant object.

#### getAsInteger
Gets a variant value as Integer
> `public` Integer getAsInteger()

- **returns**: Integer - variant value as Integer

#### setAsInteger
Sets a variant value as Integer
> `public` void setAsInteger(Integer value)

- **value**: Integer - variant value as Integer.

#### getAsLong
Gets a variant value as Long
> `public` Long getAsLong()

- **returns**: Long - variant value as Long.
  
#### setAsLong
Sets a variant value as Long
> `public` void setAsLong(Long value)

- **value**: Long - variant value as Long.

#### getAsBoolean
Gets a variant value as Boolean.
> `public` Boolean getAsBoolean()

- **returns**: Boolean - variant value as Boolean.

#### setAsBoolean
Sets a variant value as Boolean.
> `public` void setAsBoolean(Boolean value)

- **value**: Boolean - variant value as Boolean.

#### getAsFloat
Sets a variant value as Float.
> `public` Float getAsFloat()

- **returns**: Long - variant value as Float.

#### setAsFloat
Sets a variant value as Float.
> `public` void setAsFloat(Float value)

- **value**: Long - variant value as Float.

#### getAsDouble
Gets a variant value as Double.
> `public` Double getAsDouble()

- **returns**: Double - vvariant value as Double.

#### setAsDouble
Sets a variant value as Double.
> `public` void setAsDouble(Double value)

- **value**: Double - vvariant value as Double.

#### getAsString
Gets a variant value as String.
> `public` String getAsString()

- **returns**: String - variant value as String.

#### setAsString
Sets a variant value as String.
> `public` void setAsString(String value)

- **value**: String - variant value as String.

#### getAsObject
Gets a variant value as Object
> `public` Object getAsObject()

- **returns**: Object - created variant object.

#### setAsObject
Sets variant value as Object
> `public` void setAsObject(Object value)

- **value**: Object - created variant object.
