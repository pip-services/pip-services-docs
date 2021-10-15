---
type: docs
title: "Variant"
linkTitle: "Variant"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Defines a container for variant values.
---

### Description

The Variant class allows you to define a container for variant values.


### Constructors
Constructs this class and assignes a variant value. 

> Variant([dynamic value])

- **value**: dynamic - value to be assigned to this variant.


### Fields

<span class="hide-title-link">
Empty

> `static` **Empty** = [Variant(null)])()

</span>


### Properties

#### asArray
Gets a variant value as a variant array.

> List<[Variant]()> get asArray

- **returns**: [Variant]() - value as variant array.


Sets a variant value as variant array.

> set asArray(List<[Variant]()>? value)

- **value**: List<[Variant]()>? - value to be set.

#### asBoolean
Gets a variant value as boolean.

> bool get asBoolean

- **returns**: bool - value as boolean.

Sets a variant value as boolean.
> set asBoolean(bool value)

- **value**: bool - value to be set


#### asDateTime
Gets a variant value as DateTime.

> DateTime get asDateTime

- **returns**: DateTime - value as DateTime.

Sets a variant value as DateTime.

> set asDateTime(DateTime value)

- **value**: DateTime - value to be set

#### asDouble
Gets a variant value as double.

> double get asDouble

- **returns**: double - value as double.

Sets a variant value as double.

> set asDouble(double value)

- **value**: double - value to be set.


#### asFloat
Gets a variant value as float.

> double get asFloat

- **returns**: double - value as float.

Sets a variant value as float.

> set asFloat(double value)

- **value**: double - value to be set..

#### asInteger
Gets a variant value as integer.

> int get asInteger

- **returns**: int - value as integer.

Sets a variant value as integer.

> set asInteger(dynamic value)

- **value**: int - value to be set.


#### asLong
Gets a variant value as long.

> int get asLong

- **returns**: int - value as long.

Sets a variant value as long

> set asLong(int value)

- **value**: int - value to be set.


#### asObject
Gets a variant value as object.

> dynamic get asObject

- **returns**: dynamic - value as object.

Sets a variant value as object

> set asObject(dynamic value)

- **value**: dynamic - value to be set.


#### asString
Gets a variant value as string.

> String get asString

- **returns**: String - value as string.

Sets a variant value as string.

> set asString(String value) 

- **value**: String - value to be set.


#### asTimeSpan
Gets a variant value as TimeSpan.

> int get asTimeSpan

- **returns**: int - value as TimeSpan.

Sets a variant value as TimeSpan.

> set asTimeSpan(int value)

- **value**: int - value as TimeSpan.


#### length
Gets the length of the array

> int get length

- **returns**: int - length of the array or 0.

Sets a new array length

> set length(int value)

- **value**: int - new array length


#### type
Gets a type of the variant value

> [VariantType](../variant_type) get type

- **returns**: [VariantType](../variant_type) - variant value type.



### Instance methods

#### assign
Assignes a new value to this object.

> void assing([Variant?]() value)

- **value**: [Variant?]() - new value to be assigned.


#### clear
Clears this object and assignes a [VariantType.Null](../variant_type) type.

> void clear()


#### clone
Clones the variant value

> [Variant]() clone()

- **value**: [Variant]() - cloned value of this variant


#### equals
Compares this object to the specified one.

> bool equals(dynamic obj)

- **obj**: dynamic - object to be compared.
- **returns**: bool - *true* if the objects are equal.


#### getByIndex
Gets an array element by its index.

> [Variant]() getByIndex(int index)

- **index**: int - element's index.
- **returns**: [Variant]() - requested array element.


#### isEmpty
Checks is this variant value is empty.

> bool isEmpty()

- **returns**: bool - *true* is this variant value is empty.


#### isNull
Checks is this variant value is Null.

> bool isNull()

- **returns**: bool - *true* if this variant value is Null.


#### setByIndex
Sets an array element by its index.

> void setByIndex(int index, [Variant]() element)

- **index**: int - element index.
- **element**: [Variant]() - element value.


#### toString2
Returns a string value for this object.

> String toString2()

- **returns**: String - string value for this object.

### Static methods

#### fromArray
Creates a new variant from Array value.

> `static` [Variant]() fromArray(List<[Variant]()> value)

- **value**: List<[Variant]()> - variant value.
- **returns**: [Variant]() - created variant object.


#### fromBoolean
Creates a new variant from a Boolean value.

> `static` [Variant]() fromBoolean(bool value)

- **value**: bool - variant value.
- **returns**: [Variant]() - created variant object.


#### fromDateTime
Creates a new variant from a DateTime value.

> `static` [Variant]() fromDateTime(DateTime value)

- **value**: DateTime - variant value.
- **returns**: [Variant]() - created variant object.


#### fromDouble
Creates a new variant from a Double value.

> `static` [Variant]() fromDouble(double value)

- **value**: double - variant value.
- **returns**: [Variant]() - created variant object.


#### fromFloat
Creates a new variant from a Float value.

> `static` [Variant]() fromFloat(double value)

- **value**: double - variant value.
- **returns**: [Variant]() - created variant object.


#### fromInteger
Creates a new variant from an Integer value.

> `static` [Variant]() fromInteger(int value)

- **value**: int - variant value.
- **returns**: [Variant]() - created variant object.


#### fromLong
Creates a new variant from a Long value.

> `static` [Variant]() fromLong(int value)

- **value**: int - variant value.
- **returns**: [Variant]() - created variant object.


#### fromObject
Creates a new variant from an Object value.

> `static` [Variant]() fromObject(dynamic value)

- **value**: dynamic - variant value.
- **returns**: [Variant]() - created variant object.


#### fromString
Creates a new variant from a String value.

> `static` [Variant]() fromString(String value)

- **value**: String - variant value.
- **returns**: [Variant]() - created variant object.


#### fromTimeSpan
Creates a new variant from a TimeSpan value.

> `static` [Variant]() fromTimeSpan(int value)

- **value**: int - variant value.
- **returns**: [Variant]() - created variant object.
