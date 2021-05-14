---
type: docs
title: "ObjectComparator"
linkTitle: "ObjectComparator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Comparator over two values of any type.
---

### Description

The ObjectComparator class allows you to perform a comparison over two values of any type.

### Static methods

#### are_equal
Checks if two values are equal.
The operation can be performed over values of any type.

> `static` are_equal(value1: Any, value2: Any): bool

- **value1**: Any - the first value to compare
- **value2**: Any - the second value to compare
- **returns**: bool - true if values are equal and false otherwise

#### are_not_equal
Checks if two values are NOT equal. 
The operation can be performed over values of any type.

> `static` are_not_equal(value1: Any, value2: Any): bool

- **value1**: Any - the first value to compare 
- **value2**: Any - the second value to compare
- **returns**: bool - true if values are NOT equal and false otherwise

#### compare
Perform comparison operation over two arguments.
The operation can be performed over values of any type.

> `static` compare(value1: Any, operation: str, value2: Any): bool

- **value1**: Any - the first argument to compare
- **operation**: str - the comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value2**: Any - the second argument to compare
- **returns**: bool - result of the comparison operation

#### is_greater
Checks if first value is greater than the second one.
The operation can be performed over numbers or strings.

> `static` is_greater(value1: Any, value2: Any): bool

- **value1**: Any - the first value to compare
- **value2**: Any - the second value to compare
- **returns**: bool - true if the first value is greater than second and false otherwise.

#### is_less
Checks if first value is less than the second one.
The operation can be performed over numbers or strings.

> `static` is_less(value1: Any, value2: Any): bool

- **value1**: Any - the first value to compare
- **value2**: Any - the second value to compare
- **returns**: bool - true if the first value is less than second and false otherwise.

#### match
Checks if string matches a regular expression

> `static` match(value: Any, regexp: Any): bool

- **value**: Any - a string value to match
- **regexp**: Any - a regular expression string
- **returns**: bool - true if the value matches regular expression and false otherwise.

### Examples

```python
ObjectComparator.compare(2, "GT", 1)        # Result: true
ObjectComparator.are_equal("A", "B")         # Result: false

```
