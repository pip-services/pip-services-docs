---
type: docs
title: "Variant"
linkTitle: "Variant"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines a container for variant values.
---

### Description

The Variant class allows you to define a container for variant values.


### Constructors
Constructs this class and assignes a variant value. 

> `public` Variant(object value)

- **value**: object - value to be assigned to this variant.


Constructs an empty variant

> `public` Variant()


### Fields

<span class="hide-title-link">
Empty

> `public static readonly` **Empty** = new [Variant()]()

</span>


### Properties

#### AsArray
Gets and sets a variant value as a variant array.

> `public` [Variant[]]() AsArray { get; set; }

#### AsBoolean
Gets and sets a variant value as boolean.

> `public` bool AsBoolean { get; set; }


#### AsDateTime
Gets and sets a variant value as DateTime.

> `public` DateTime AsDateTime { get; set; }

- **returns**: Date - value as DateTime.

#### AsDouble
Gets and sets a variant value as double.

> `public` double AsDouble { get; set; }


#### AsFloat
Gets and sets a variant value as float.

> `public` float AsFloat { get; set; }

#### AsInteger
Gets and sets a variant value as integer.

> `public` int AsInteger { get; set; }


#### AsLong
Gets and sets a variant value as long.

> `public` long AsLong { get; set; }


#### AsObject
Gets and sets a variant value as object.

> `public` object AsObject { get; set; }


#### AsString
Gets and sets a variant value as string.

> `public` string AsString { get; set; }


#### AsTimeSpan
Gets and sets a variant value as TimeSpan.

> `public` TimeSpan AsTimeSpan { get; set; }


#### Length
Gets the length of the array

> `public` int Length { get; }


#### Type
Gets and sets a type of the variant value

> `public` [VariantType](../variant_type) Type { get; set; }



### Instance methods

#### Assign
Assignes a new value to this object.

> `public` void Assign([Variant]() value)

- **value**: [Variant]() - new value to be assigned.


#### Clear
Clears this object and assignes a [VariantType.Null](../variant_type) type.

> `public` void Clear()


#### Clone
Clones the variant value

> `public` [Variant]() Clone()

- **value**: [Variant]() - cloned value of this variant


#### Equals
Compares this object to the specified one.

> `public override` bool Equals(object obj)

- **obj**: object - object to be compared.
- **returns**: bool - *true* if the objects are equal.


#### GetByIndex
Gets an array element by its index.

> `public` [Variant]() GetByIndex(int index)

- **index**: int - element's index.
- **returns**: [Variant]() - requested array element.


#### IsEmpty
Checks is this variant value is empty.

> `public` bool IsEmpty()

- **returns**: bool - *true* is this variant value is empty.


#### IsNull
Checks is this variant value is Null.

> `public` bool IsNull()

- **returns**: bool - *true* if this variant value is Null.


#### SetByIndex
Sets an array element by its index.

> `public` void SetByIndex(int index, [Variant]() element)

- **index**: int - element index.
- **element**: [Variant]() - element value.


#### ToString
Returns a string value for this object.

> `public override` string ToString()

- **returns**: string - string value for this object.

### Static methods

#### FromArray
Creates a new variant from Array value.

> `public static` Variant FromArray([Variant[]]() value)

- **value**: [Variant[]]() - variant value.
- **returns**: [Variant]() - created variant object.


#### FromBoolean
Creates a new variant from a Boolean value.

> `public static` [Variant]() FromBoolean(bool value)

- **value**: bool - variant value.
- **returns**: [Variant]() - created variant object.


#### FromDateTime
Creates a new variant from a DateTime value.

> `public static` [Variant]() FromDateTime(DateTime value)

- **value**: Date - variant value.
- **returns**: [Variant]() - created variant object.


#### FromDouble
Creates a new variant from a Double value.

> `public static` [Variant]() FromDouble(double value)

- **value**: double - variant value.
- **returns**: [Variant]() - created variant object.


#### FromFloat
Creates a new variant from a Float value.

> `public static` [Variant]() FromFloat(float value)

- **value**: float - variant value.
- **returns**: [Variant]() - created variant object.


#### FromInteger
Creates a new variant from an Integer value.

> `public static` [Variant]() FromInteger(int value)

- **value**: int - variant value.
- **returns**: [Variant]() - created variant object.


#### FromLong
Creates a new variant from a Long value.

> `public static` [Variant]() FromLong(long value)

- **value**: long - variant value.
- **returns**: [Variant]() - created variant object.


#### FromObject
Creates a new variant from an Object value.

> `public static` [Variant]() FromObject(object value)

- **value**: object - variant value.
- **returns**: [Variant]() - created variant object.


#### FromString
Creates a new variant from a String value.

> `public static` [Variant]() FromString(string value)

- **value**: string - variant value.
- **returns**: [Variant]() - created variant object.


#### FromTimeSpan
Creates a new variant from a TimeSpan value.

> `public static` [Variant]() FromTimeSpan(TimeSpan value)

- **value**: TimeSpan - variant value.
- **returns**: [Variant]() - created variant object.
