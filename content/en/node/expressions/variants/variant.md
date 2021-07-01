---
type: docs
title: "Variant"
linkTitle: "Variant"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines container for variant values.
---

### Description

TODO: add description


### Constructors
Constructs this class and assignes another variant value.

> `public` constructor(value?: any)

- **value**: any - a value to be assigned to this variant.


### Fields

<span class="hide-title-link">

TODO: add description
> `public static` **Empty** = new [Variant(null)]()

</span>


### Properties

#### asArray
Gets variant value as variant array

> `public` asArray(): [Variant[]]()

- **returns**: [Variant[]]() - value as variant array.


Sets variant value as variant array

> `public` asArray(value: Variant[])

- **value**: [Variant[]]() - a value to be set.

#### asBoolean
Gets variant value as boolean

> `public` asBoolean(): boolean 

- **returns**: boolean - value as boolean.

Sets variant value as boolean
> `public` asBoolean(value: boolean)

- **value**: boolean - a value to be set


#### asDateTime
Gets variant value as DateTime

> `public` asDateTime(): Date

- **returns**: Date - value as DateTime.

Sets variant value as DateTime

> `public` asDateTime(value: Date)

- **value**: Date - a value to be set

#### asDouble
Gets variant value as double

> `public` asDouble(): number

- **returns**: number - value as double.

Sets variant value as double

> `public` asDouble(value: number)

- **value**: number - a value to be set.


#### asFloat
Gets variant value as float

> `public` asFloat(): number

- **returns**: number - value as float.

Sets variant value as float

> `public` asFloat(value: number)

- **value**: number - value as float.

#### asInteger
Gets variant value as integer

> `public` asInteger(): number

- **returns**: number - value as integer.

Sets variant value as integer

> `public` asInteger(value: number)

- **value**: number - value as integer.


#### asLong
Gets variant value as long

> `public` asLong(): number

- **returns**: number - value as long.

Sets variant value as long

> `public` asLong(value: number)

- **value**: number - value as long.


#### asObject
Gets variant value as object

> `public` asObject(): any

- **returns**: any - value as object.

Sets variant value as object

> `public` asObject(value: any)

- **value**: any - value as object.


#### asString
Gets variant value as string

> `public` asString(): string

- **returns**: string - value as string.

Sets variant value as string

> `public` asString(value: string)

- **value**: string - value as string.


#### asTimeSpan
Gets variant value as TimeSpan

> `public` asTimeSpan(): number

- **returns**: number - value as TimeSpan.

Sets variant value as TimeSpan

> `public` asTimeSpan(value: number)

- **value**: number - value as TimeSpan.


#### length
Gets length of the array

> `public` length(): number

- **returns**: number - The length of the array or 0.

Sets a new array length

> `public` length(value: number)

- **value**: number - a new array length


#### type
Gets a type of the variant value

> `public` type(): [VariantType](../variant_type)

- **returns**: [VariantType](../variant_type) - the variant value type.



### Instance methods

#### assign
Assignes a new value to this object.

> `public` assign(value: [Variant]()): void

- **value**: [Variant]() - A new value to be assigned.


#### clear
Clears this object and assignes a [VariantType.Null](../variant_type) type.

> `public` clear(): void 


#### clear
Cloning the variant value

> `public` clone(): [Variant]()

- **value**: [Variant]() - The cloned value of this variant


#### equals
Compares this object to the specified one.

> `public` equals(obj: any): boolean

- **obj**: any - An object to be compared.
- **returns**: boolean - *true* if objects are equal.


#### getByIndex
Gets an array element by its index.

> `public` getByIndex(index: number): [Variant]()

- **index**: number - an element index.
- **returns**: [Variant]() - a requested array element.


#### isEmpty
Checks is this variant value empty.

> `public` isEmpty(): boolean

- **returns**: boolean - *true* is this variant value is empty.


#### isNull
Checks is this variant value Null.

> `public` isNull(): boolean

- **returns**: boolean - *true* if this variant value is Null.


#### setByIndex
Sets an array element by its index.

> `public` setByIndex(index: number, element: [Variant]()): void

- **index**: number - an element index.
- **element**: [Variant]() - an element value.


#### toString
Returns a string value for this object.

> `public` toString(): string

- **returns**: string - a string value for this object.

### Static methods

#### fromArray
Creates a new variant from Array value.

> `public static` fromArray(value: [Variant[]]()): [Variant]()

- **value**: [Variant[]]() - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromBoolean
Creates a new variant from Boolean value.

> `public static` fromBoolean(value: boolean): [Variant]()

- **value**: boolean - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromDateTime
Creates a new variant from DateTime value.

> `public static` fromDateTime(value: Date): [Variant]()

- **value**: Date - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromDouble
Creates a new variant from DateTime value.

> `public static` fromDouble(value: number): [Variant]()

- **value**: number - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromFloat
Creates a new variant from Float value.

> `public static` fromFloat(value: number): [Variant]()

- **value**: number - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromInteger
Creates a new variant from Integer value.

> `public static` fromInteger(value: number): [Variant]()

- **value**: number - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromLong
Creates a new variant from Long value.

> `public static` fromLong(value: number): [Variant]()

- **value**: number - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromObject
Creates a new variant from Object value.

> `public static` fromObject(value: any): [Variant]()

- **value**: any - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromString
Creates a new variant from String value.

> `public static` fromString(value: string): [Variant]()

- **value**: string - a variant value.
- **returns**: [Variant]() - a created variant object.


#### fromTimeSpan
Creates a new variant from TimeSpan value.

> `public static` fromTimeSpan(value: number): [Variant]()

- **value**: number - a variant value.
- **returns**: [Variant]() - a created variant object.