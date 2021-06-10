---
type: docs
title: "ObjectComparator"
linkTitle: "ObjectComparator"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Comparator over two values of any type.
---

### Description

The ObjectComparator class allows you to perform a comparison over two values of any type.

### Methods

#### Equal
Checks if two values are equal.
The operation can be performed over values of any type.

> (c *TObjectComparator) AreEqual(value1 interface{}, value2 interface{}) bool

- **value1**: interface{} - the first value to compare
- **value2**: interface{} - the second value to compare
- **returns**: bool - true if values are equal and false otherwise

#### AreNotEqual
Checks if two values are NOT equal
The operation can be performed over values of any type.

> (c *TObjectComparator) AreNotEqual(value1 interface{}, value2 interface{}) bool

- **value1**: interface{} - the first value to compare 
- **value2**: interface{} - the second value to compare
- **returns**: bool - true if values are NOT equal and false otherwise

#### Compare
Perform comparison operation over two arguments.
The operation can be performed over values of any type.

> (c *TObjectComparator) Compare(value1 interface{}, operation string, value2 interface{}) bool

- **value1**: interface{} - the first argument to compare
- **operation**: string - the comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value2**: interface{} - the second argument to compare
- **returns**: bool - result of the comparison operation

#### IsGreater
Checks if first value is greater than the second one.
The operation can be performed over numbers or strings.

> (c *TObjectComparator) IsGreater(value1 interface{}, value2 interface{}) bool

- **value1**: interface{} - the first value to compare
- **value2**: interface{} - the second value to compare
- **returns**: bool - true if the first value is greater than second and false otherwise.

#### IsLess
Checks if first value is less than the second one.
The operation can be performed over numbers or strings.

> (c *TObjectComparator) IsLess(value1 interface{}, value2 interface{}) bool

- **value1**: interface{} - the first value to compare
- **value2**: interface{} - the second value to compare
- **returns**: bool - true if the first value is less than second and false otherwise.

#### Match
Checks if string matches a regular expression

> (c *TObjectComparator) Match(value1 interface{}, value2 interface{}) bool

- **value**: interface{} - a string value to match
- **regexp**: interface{} - a regular expression string
- **returns**: bool - true if the value matches regular expression and false otherwise.

### Examples

```go
ObjectComparator.Compare(2, "GT", 1);        // Result: true
ObjectComparator.AreEqual("A", "B");         // Result: false

```