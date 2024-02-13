---
type: docs
title: "Variant"
linkTitle: "Variant"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines a container for variant values.
---

### Description

The Variant class allows you to define a container for variant values.


### Constructors
Constructs this class and assignes a variant value. 

> Variant(value: Any = None)

- **value**: Any - value to be assigned to this variant.


### Properties

#### Empty
Empty
> `static` Empty():  [Variant]()


#### as_array
Gets a variant value as a variant array.

> as_array(): List[[Variant]()]

- **returns**: List[[Variant]()] - value as variant array.


Sets a variant value as variant array.

> as_array(value: List[[Variant]()])

- **value**: List[[Variant]()] - value to be set.

#### as_boolean
Gets a variant value as boolean.

> as_boolean(): bool

- **returns**: bool- value as boolean.

Sets a variant value as boolean.
> as_boolean(value: bool)

- **value**: bool- value to be set


#### as_datetime
Gets a variant value as DateTime.

> as_datetime(): datetime

- **returns**: datetime - value as DateTime.

Sets a variant value as DateTime.

> as_datetime(value: datetime)

- **value**: datetime - value to be set

#### as_double
Gets a variant value as double.

> as_double(): float

- **returns**: float - value as double.

Sets a variant value as double.

> as_double(value: float)

- **value**: float - value to be set.


#### as_float
Gets a variant value as float.

> as_float(): float

- **returns**: float - value as float.

Sets a variant value as float.

> as_float(value: float)

- **value**: float - value to be set..

#### as_integer
Gets a variant value as integer.

> as_integer(): int

- **returns**: int - value as integer.

Sets a variant value as integer.

> as_integer(value: int)

- **value**: int - value to be set.


#### as_long
Gets a variant value as long.

> as_long(): int

- **returns**: int - value as long.

Sets a variant value as long

> as_long(value: int)

- **value**: int - value to be set.


#### as_object
Gets a variant value as object.

> as_object(): Any

- **returns**: Any - value as object.

Sets a variant value as object

> as_object(value: Any)

- **value**: Any - value to be set.


#### as_string
Gets a variant value as string.

> as_string(): str

- **returns**: str - value as string.

Sets a variant value as string.

> as_string(value: str)

- **value**: str - value to be set.


#### as_time_span
Gets a variant value as TimeSpan.

> as_time_span(): int

- **returns**: int - value as TimeSpan.

Sets a variant value as TimeSpan.

> as_time_span(value: int)

- **value**: int - value as TimeSpan.


#### length
Gets the length of the array

> length(): int

- **returns**: int - length of the array or 0.

Sets a new array length

> length(value: int)

- **value**: int - new array length


#### type
Gets a type of the variant value

> type(): [VariantType](../variant_type)

- **returns**: [VariantType](../variant_type) - variant value type.



### Instance methods

#### assign
Assignes a new value to this object.

> assign(value: [Variant]())

- **value**: [Variant]() - new value to be assigned.


#### clear
Clears this object and assignes a [VariantType.Null](../variant_type) type.

> clear() 


#### clone
Clones the variant value

> clone(): [Variant]()

- **value**: [Variant]() - cloned value of this variant


#### equals
Compares this object to the specified one.

> equals(obj: Any): bool

- **obj**: Any - object to be compared.
- **returns**: bool- *true* if the objects are equal.


#### get_by_index
Gets an array element by its index.

> get_by_index(index: int): [Variant]()

- **index**: int - element's index.
- **returns**: [Variant]() - requested array element.


#### is_empty
Checks is this variant value is empty.

> is_empty(): bool

- **returns**: bool- *true* is this variant value is empty.


#### is_null
Checks is this variant value is None.

> is_null(): bool

- **returns**: bool- *true* if this variant value is None.


#### set_by_index
Sets an array element by its index.

> set_by_index(index: int, element: [Variant]()): void

- **index**: int - element index.
- **element**: [Variant]() - element value.


#### to_string
Returns a string value for this object.

> to_string(): str

- **returns**: str - string value for this object.

### Static methods

#### from_array
Creates a new variant from Array value.

> `static` from_array(value: List[[Variant]()]): [Variant]()

- **value**: List[[Variant]()] - variant value.
- **returns**: [Variant]() - created variant object.


#### from_boolean
Creates a new variant from a Boolean value.

> `static` from_boolean(value: bool): [Variant]()

- **value**: bool- variant value.
- **returns**: [Variant]() - created variant object.


#### from_datetime
Creates a new variant from a DateTime value.

> `static` from_datetime(value: datetime): [Variant]()

- **value**: datetime - variant value.
- **returns**: [Variant]() - created variant object.


#### from_double
Creates a new variant from a Double value.

> `static` from_double(value: float): [Variant]()

- **value**: float - variant value.
- **returns**: [Variant]() - created variant object.


#### from_float
Creates a new variant from a Float value.

> `static` from_float(value: float): [Variant]()

- **value**: float - variant value.
- **returns**: [Variant]() - created variant object.


#### from_integer
Creates a new variant from an Integer value.

> `static` from_integer(value: int): [Variant]()

- **value**: int - variant value.
- **returns**: [Variant]() - created variant object.


#### from_long
Creates a new variant from a Long value.

> `static` from_long(value: int): [Variant]()

- **value**: int - variant value.
- **returns**: [Variant]() - created variant object.


#### from_object
Creates a new variant from an Object value.

> `static` from_object(value: Any): [Variant]()

- **value**: Any - variant value.
- **returns**: [Variant]() - created variant object.


#### from_string
Creates a new variant from a String value.

> `static` from_string(value: str): [Variant]()

- **value**: str - variant value.
- **returns**: [Variant]() - created variant object.


#### from_time_span
Creates a new variant from a TimeSpan value.

> `static` from_time_span(value: int): [Variant]()

- **value**: int - variant value.
- **returns**: [Variant]() - created variant object.
