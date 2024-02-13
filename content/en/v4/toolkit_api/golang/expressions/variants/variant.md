---
type: docs
title: "Variant"
linkTitle: "Variant"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Defines a container for variant values.
---

### Description

The Variant class allows you to define a container for variant values.


### Constructors

#### EmptyVariant
Constructs an empty variant object
> EmptyVariant() [*Variant]()

#### NewVariant
Constructs this class and assignes a variant value. 

> NewVariant(value interface{}) [*Variant]()

- **value**: interface{} - value to be assigned to this variant.

#### VariantFromInteger
Creates a new variant from an Integer value.
> VariantFromInteger(value int) [*Variant]()

- **value**: int - variant value.

#### VariantFromLong
Creates a new variant from a Long value.
> VariantFromLong(value int64) [*Variant]()

- **value**: int64 - variant value.

#### VariantFromBoolean
Creates a new variant from a Boolean value.
> VariantFromBoolean(value bool) [*Variant]()

- **value**: bool - variant value.

#### VariantFromFloat
Creates a new variant from a Float value.
> VariantFromFloat(value float32) [*Variant]()

- **value**: float32 - variant value.

#### VariantFromDouble
Creates a new variant from a Double value.
> VariantFromDouble(value float64) [*Variant]()

- **value**: float64 - variant value.

#### VariantFromString
Creates a new variant from a String value.
> VariantFromString(value string) [*Variant]()

- **value**: string - variant value.


#### VariantFromDateTime
Creates a new variant from a DateTime value.
> VariantFromDateTime(value time.Time) [*Variant]()

- **value**: time.Time - variant value.


#### VariantFromTimeSpan
Creates a new variant from a TimeSpan value.
> VariantFromTimeSpan(value time.Duration) [*Variant]()

- **value**: time.Duration - variant value.

#### VariantFromObject
Creates a new variant from a Object value.
> VariantFromObject(value interface{}) [*Variant]()

- **value**: interface{} - variant value.

#### VariantFromArray
Creates a new variant from an Array value.
> VariantFromArray(value [[]*Variant]()) [*Variant]()

- **value**: [[]*Variant]() - variant value.


### Fields

<span class="hide-title-link">
Empty variant constant

> Empty: [*Variant]() = [EmptyVariant()](#emptyvariant)

</span>


### Properties

#### AsArray
Gets a variant value as a variant array.

> (c [*Variant]()) AsArray() [[]*Variant]()

- **returns**: [[]*Variant]() - value as variant array.

#### SetAsArray
Sets a variant value as variant array.

> (c [*Variant]()) SetAsArray(value [[]*Variant]())

- **value**: [[]*Variant]() - value to be set.

#### AsBoolean
Gets a variant value as boolean.

> (c [*Variant]()) AsBoolean() bool

- **returns**: bool - value as boolean.

#### SetAsBoolean
Sets a variant value as boolean.
> (c [*Variant]()) SetAsBoolean(value bool)

- **value**: bool - value to be set


#### AsDateTime
Gets a variant value as DateTime.

> (c [*Variant]()) AsDateTime() time.Time

- **returns**: time.Time - value as DateTime.

#### SetAsDateTime
Sets a variant value as DateTime.

> (c [*Variant]()) SetAsDateTime(value time.Time)

- **value**: time.Time - value to be set

#### AsDouble
Gets a variant value as double.

> (c [*Variant]()) AsDouble() float64 

- **returns**: float64 - value as double.

#### SetAsDouble
Sets a variant value as double.

> (c [*Variant]()) SetAsDouble(value float64)

- **value**: float64 - value to be set.


#### AsFloat
Gets a variant value as float.

> (c [*Variant]()) AsFloat() float32

- **returns**: float32 - value as float.

#### SetAsFloat
Sets a variant value as float.

> (c [*Variant]()) SetAsFloat(value float32)

- **value**: float32 - value to be set..

#### AsInteger
Gets a variant value as integer.

> (c [*Variant]()) AsInteger() int

- **returns**: int - value as integer.

#### SetAsInteger
Sets a variant value as integer.

> (c [*Variant]()) SetAsInteger(value int)

- **value**: int - value to be set.


#### AsLong
Gets a variant value as long.

> (c [*Variant]()) AsLong() int64

- **returns**: int64 - value as long.

#### SetAsLong
Sets a variant value as long

> (c [*Variant]()) SetAsLong(value int64)

- **value**: int64 - value to be set.


#### AsObject
Gets a variant value as object.

> (c [*Variant]()) AsObject() interface{}

- **returns**: interface{} - value as object.

#### SetAsObject
Sets a variant value as object

> (c [*Variant]()) SetAsObject(value interface{})

- **value**: interface{} - value to be set.


#### AsString
Gets a variant value as string.

> (c [*Variant]()) AsString() string

- **returns**: string - value as string.

#### SetAsString
Sets a variant value as string.

> (c [*Variant]()) SetAsString(value string)

- **value**: string - value to be set.


#### AsTimeSpan
Gets a variant value as TimeSpan.

> (c [*Variant]()) AsTimeSpan() time.Duration

- **returns**: time.Duration - value as TimeSpan.

#### SetAsTimeSpan

Sets a variant value as TimeSpan.

> (c [*Variant]()) SetAsTimeSpan(value time.Duration)

- **value**: time.Duration - value as TimeSpan.


#### Length
Gets the length of the array.

> (c [*Variant]()) Length() int

- **returns**: int - length of the array or 0.

#### SetLength
Sets a new array length.

> (c [*Variant]()) SetLength(value int)

- **value**: int - new array length


#### Type
Gets a type of the variant value

> (c [*Variant]()) Type() int

- **returns**: int - variant value type ([VariantType](../variant_type)).



### Methods

#### Assign
Assignes a new value to this object.

> (c [*Variant]()) Assign(value [*Variant]())

- **value**: [*Variant]() - new value to be assigned.


#### Clear
Clears this object and assignes a [VariantType.Null](../variant_type) type.

> (c [*Variant]()) Clear()


#### Clone
Clones the variant value.

> (c [*Variant]()) Clone() [*Variant]()

- **value**: [*Variant]() - cloned value of this variant


#### Equals
Compares this object to the specified one.

> (c [*Variant]()) Equals(obj interface{}) bool

- **obj**: interface{} - object to be compared.
- **returns**: bool - *true* if the objects are equal.


#### GetByIndex
Gets an array element by its index.

> (c [*Variant]()) GetByIndex(index int) [Variant]()

- **index**: int - element's index.
- **returns**: [Variant]() - requested array element.


#### IsEmpty
Checks is this variant value is empty.

> (c [*Variant]()) IsEmpty() bool

- **returns**: bool - *true* is this variant value is empty.


#### IsNull
Checks is this variant value is Null.

> (c [*Variant]()) IsNull() bool

- **returns**: bool - *true* if this variant value is Null.


#### SetByIndex
Sets an array element by its index.

> (c [*Variant]()) SetByIndex(index int, element [*Variant]())

- **index**: int - element index.
- **element**: [*Variant]() - element value.


#### String
Returns a string value for this object.

> (c [*Variant]()) String() string 

- **returns**: string - string value for this object.

