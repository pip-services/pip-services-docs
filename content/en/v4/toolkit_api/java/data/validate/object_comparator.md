---
type: docs
title: "ObjectComparator"
linkTitle: "ObjectComparator"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Comparator over two values of any type.
---

### Description

The ObjectComparator class allows you to perform a comparison over two values of any type.

### Static methods

#### areEqual
Checks if two values are equal.
The operation can be performed over values of any type.

> `public static` boolean areEqual(Object value1, Object value2)

- **value1**: Object - first value to compare.
- **value2**: Object - second value to compare.
- **returns**: boolean - true if values are equal and false otherwise.

#### areNotEqual
Checks if two values are NOT equal.
The operation can be performed over values of any type.

> `public static` boolean areNotEqual(Object value1, Object value2)

- **value1**: Object - first value to compare 
- **value2**: Object - second value to compare
- **returns**: boolean - true if values are NOT equal and false otherwise

#### compare
Perform a comparison operation over two arguments.
The operation can be performed over values of any type.

> `public static` boolean compare(Object value1, String operation, Object value2)

- **value1**: Object - first argument to compare.
- **operation**: String - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value2**: Object - the second argument to compare.
- **returns**: boolean - result of the comparison operation.

#### more
Checks if the first value is greater than the second one.
The operation can be performed over numbers or strings.

> `public static` boolean more(Object value1, Object value2)

- **value1**: Object - first value to compare
- **value2**: Object - second value to compare
- **returns**: boolean - true if the first value is greater than second and false otherwise.

#### less
Checks if first value is less than the second one.
The operation can be performed over numbers or strings.

> `public static` boolean less(Object value1, Object value2)

- **value1**: Objecty - first value to compare
- **value2**: Object - second value to compare
- **returns**: boolean - true if the first value is less than second and false otherwise.

#### match
Checks if a string matches a regular expression

> `public static` boolean match(Object value1, Object value2)

- **value**: Object - string value to match.
- **regexp**: Object - regular expression string.
- **returns**: boolean - true if the value matches the regular expression and false otherwise.

### Examples

```java
{@code
  ObjectComparator.compare(2, "GT", 1);        // Result: true
  ObjectComparator.areEqual("A", "B");         // Result: false
  }

```
