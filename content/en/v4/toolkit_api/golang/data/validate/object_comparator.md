---
type: docs
title: "ObjectComparator"
linkTitle: "ObjectComparator"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: >
    Comparator over two values of any type.
---

### Description

The ObjectComparator class allows you to perform a comparison over two values of any type.

### Methods

#### Equal
Checks if two values are equal.
The operation can be performed over values of any type.

> AreEqual(value1 any, value2 any) bool

- **value1**: any - first value to compare
- **value2**: any - second value to compare
- **returns**: bool - true if values are equal and false otherwise

#### AreNotEqual
Checks if two values are NOT equal
The operation can be performed over values of any type.

> AreNotEqual(value1 any, value2 any) bool

- **value1**: any - first value to compare 
- **value2**: any - second value to compare
- **returns**: bool - true if values are NOT equal and false otherwise

#### Compare
Perform comparison operation over two arguments.
The operation can be performed over values of any type.

> Compare(value1 any, operation string, value2 any) bool

- **value1**: any - first argument to compare
- **operation**: string - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value2**: any - second argument to compare
- **returns**: bool - result of the comparison operation

#### IsGreater
Checks if the first value is greater than the second one.
The operation can be performed over numbers or strings.

> IsGreater(value1 any, value2 any) bool

- **value1**: any - first value to compare
- **value2**: any - second value to compare
- **returns**: bool - true if the first value is greater than second and false otherwise.

#### IsLess
Checks if the first value is less than the second one.
The operation can be performed over numbers or strings.

> IsLess(value1 any, value2 any) bool

- **value1**: any - first value to compare
- **value2**: any - second value to compare
- **returns**: bool - true if the first value is less than second and false otherwise.

#### Match
Checks if a string matches a regular expression

> Match(value1 any, value2 any) bool

- **value**: any - string value to match
- **regexp**: any - regular expression string
- **returns**: bool - true if the value matches the regular expression and false otherwise.

### Examples

```go
ObjectComparator.Compare(2, "GT", 1);        // Result: true
ObjectComparator.AreEqual("A", "B");         // Result: false

```

