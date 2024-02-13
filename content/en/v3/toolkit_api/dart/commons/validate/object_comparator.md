---
type: docs
title: "ObjectComparator"
linkTitle: "ObjectComparator"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Comparator over two values of any type.
---

### Description

The ObjectComparator class allows you to perform a comparison over two values of any type.

### Static methods

#### areEqual
Checks if two values are equal.
The operation can be performed over values of any type.

> `static` bool areEqual(dynamic value1, dynamic value2)

- **value1**: dynamic - first value to compare.
- **value2**: dynamic - second value to compare.
- **returns**: bool - true if values are equal and false otherwise.

#### areNotEqual
Checks if two values are NOT equal.
The operation can be performed over values of any type.

> `static` bool areNotEqual(dynamic value1, dynamic value2)

- **value1**: dynamic - first value to compare 
- **value2**: dynamic - second value to compare
- **returns**: bool - true if values are NOT equal and false otherwise

#### compare
Perform a comparison operation over two arguments.
The operation can be performed over values of any type.

> `static` bool compare(dynamic value1, String operation, dynamic value2)

- **value1**: dynamic - first argument to compare.
- **operation**: String - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value2**: dynamic - second argument to compare.
- **returns**: bool - result of the comparison operation.

#### isGreater
Checks if the first value is greater than the second one.
The operation can be performed over numbers or strings.

> `static` bool isGreater(dynamic value1, dynamic value2)

- **value1**: dynamic - first value to compare
- **value2**: dynamic - second value to compare
- **returns**: bool - true if the first value is greater than the second one and false otherwise.

#### isLess
Checks if the first value is less than the second one.
The operation can be performed over numbers or strings.

> `static` bool isLess(dynamic value1, dynamic value2)

- **value1**: dynamic - first value to compare
- **value2**: dynamic - second value to compare
- **returns**: bool - true if the first value is less than the second one and false otherwise.

#### match
Checks if a string matches a regular expression

> `static` bool match(dynamic value, dynamic regexp)

- **value**: dynamic - string value to match.
- **regexp**: dynamic - regular expression string.
- **returns**: bool - true if the value matches the regular expression and false otherwise.

### Examples

```dart
ObjectComparator.compare(2, 'GT', 1);        // Result: true
ObjectComparator.areEqual('A', 'B');         // Result: false

```
