---
type: docs
title: "Variant"
linkTitle: "Variant"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines a container for variant values.
---

### Description

The Variant class allows you to define a container for variant values.


### Constructors
Constructs this class and assignes a variant value.

> `public` constructor(value?: any)

- **value**: any - value to be assigned to this variant.


### Fields

<span class="hide-title-link">

TODO: add description
> `public static` **Empty** = new [Variant(null)]()

</span>


### Properties

#### asArray
Gets a variant value as a variant array.

> `public` asArray(): [Variant[]]()

- **returns**: [Variant[]]() - value as variant array.


Sets a variant value as variant array.

> `public` asArray(value: Variant[])

- **value**: [Variant[]]() - a value to be set.

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

Sets a variant value as DateTime

> `public` asDateTime(value: Date)

- **value**: Date - a value to be set

#### asDouble
Gets a variant value as double.

> `public` asDouble(): number

- **returns**: number - value as double.

Sets a variant value as double

> `public` asDouble(value: number)

- **value**: number - value to be set.


#### asFloat
Gets a variant value as float.

> `public` asFloat(): number

- **returns**: number - value as float.

Sets a variant value as float.

> `public` asFloat(value: number)

- **value**: number - value as float.

#### asInteger
Gets a variant value as integer.

> `public` asInteger(): number

- **returns**: number - value as integer.

Sets a variant value as integer.

> `public` asInteger(value: number)

- **value**: number - value as integer.


#### asLong
Gets a variant value as long.

> `public` asLong(): number

- **returns**: number - value as long.

Sets a variant value as long

> `public` asLong(value: number)

- **value**: number - value as long.


#### asObject
Gets a variant value as object.

> `public` asObject(): any

- **returns**: any - value as object.

Sets a variant value as object

> `public` asObject(value: any)

- **value**: any - value as object.


#### asString
Gets a variant value as string.

> `public` asString(): string

- **returns**: string - value as string.

Sets a variant value as string.

> `public` asString(value: string)

- **value**: string - value as string.


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

> `public` assign(value: [Variant]()): void

- **value**: [Variant]() - new value to be assigned.


#### clear
Clears this object and assignes a [VariantType.Null](../variant_type) type.

> `public` clear(): void 


#### clear
Cloning the variant value

> `public` clone(): [Variant]()

- **value**: [Variant]() - cloned value of this variant


#### equals
Compares this object to the specified one.

> `public` equals(obj: any): boolean

- **obj**: any - object to be compared.
- **returns**: boolean - *true* if the objects are equal.


#### getByIndex
Gets an array element by its index.

> `public` getByIndex(index: number): [Variant]()

- **index**: number - element's index.
- **returns**: [Variant]() - requested array element.


#### isEmpty
Checks is this variant value is empty.

> `public` isEmpty(): boolean

- **returns**: boolean - *true* is this variant value is empty.


#### isNull
Checks is this variant value is Null.

> `public` isNull(): boolean

- **returns**: boolean - *true* if this variant value is Null.


#### setByIndex
Sets an array element by its index.

> `public` setByIndex(index: number, element: [Variant]()): void

- **index**: number - element index.
- **element**: [Variant]() - element value.


#### toString
Returns a string value for this object.

> `public` toString(): string

- **returns**: string - string value for this object.

### Static methods

#### fromArray
Creates a new variant from Array value.

> `public static` fromArray(value: [Variant[]]()): [Variant]()

- **value**: [Variant[]]() - variant value.
- **returns**: [Variant]() - created variant object.


#### fromBoolean
Creates a new variant from a Boolean value.

> `public static` fromBoolean(value: boolean): [Variant]()

- **value**: boolean - variant value.
- **returns**: [Variant]() - created variant object.


#### fromDateTime
Creates a new variant from a DateTime value.

> `public static` fromDateTime(value: Date): [Variant]()

- **value**: Date - variant value.
- **returns**: [Variant]() - created variant object.


#### fromDouble
Creates a new variant from a DateTime value.

> `public static` fromDouble(value: number): [Variant]()

- **value**: number - variant value.
- **returns**: [Variant]() - created variant object.


#### fromFloat
Creates a new variant from a Float value.

> `public static` fromFloat(value: number): [Variant]()

- **value**: number - variant value.
- **returns**: [Variant]() - created variant object.


#### fromInteger
Creates a new variant from an Integer value.

> `public static` fromInteger(value: number): [Variant]()

- **value**: number - variant value.
- **returns**: [Variant]() - created variant object.


#### fromLong
Creates a new variant from a Long value.

> `public static` fromLong(value: number): [Variant]()

- **value**: number - variant value.
- **returns**: [Variant]() - created variant object.


#### fromObject
Creates a new variant from an Object value.

> `public static` fromObject(value: any): [Variant]()

- **value**: any - variant value.
- **returns**: [Variant]() - created variant object.


#### fromString
Creates a new variant from a String value.

> `public static` fromString(value: string): [Variant]()

- **value**: string - variant value.
- **returns**: [Variant]() - created variant object.


#### fromTimeSpan
Creates a new variant from a TimeSpan value.

> `public static` fromTimeSpan(value: number): [Variant]()

- **value**: number - variant value.
- **returns**: [Variant]() - created variant object.
