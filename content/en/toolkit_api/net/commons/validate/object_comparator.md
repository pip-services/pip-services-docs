---
type: docs
title: "ObjectComparator"
linkTitle: "ObjectComparator"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Comparator over two values of any type.
---

### Description

The ObjectComparator class allows you to perform a comparison over two values of any type.

### Static methods

#### AreEqual
Checks if two values are equal.
The operation can be performed over values of any type.

> `public static` bool AreEqual(object value1, object value2)

- **value1**: object - first value to compare
- **value2**: object - second value to compare
- **returns**: bool - true if values are equal and false otherwise

#### AreNotEqual
Checks if two values are NOT equal. 
The operation can be performed over values of any type.

> `public static` bool AreNotEqual(object value1, object value2)

- **value1**: object - first value to compare 
- **value2**: object - second value to compare
- **returns**: bool - true if values are NOT equal and false otherwise

#### Compare
Perform a comparison operation over two arguments.
The operation can be performed over values of any type.

> `public static` bool Compare(object value1, string operation, object value2)

- **value1**: object - first argument to compare
- **operation**: string - comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value2**: object - second argument to compare
- **returns**: bool - result of the comparison operation

#### IsGreater
Checks if the first value is greater than the second one.
The operation can be performed over numbers or strings.

> `public static` bool IsGreater(object value1, object value2)

- **value1**: object - first value to compare
- **value2**: object - second value to compare
- **returns**: bool - true if the first value is greater than second and false otherwise.

#### IsLess
Checks if the first value is less than the second one.
The operation can be performed over numbers or strings.

> `public static` bool IsLess(object value1, object value2)

- **value1**: object - first value to compare
- **value2**: object - second value to compare
- **returns**: bool - true if the first value is less than second and false otherwise.

#### Match
Checks if a string matches a regular expression

> `public static` bool Match(object value1, object value2)

- **value1**: object - string value to match
- **value2**: object - regular expression string
- **returns**: bool - true if the value matches the regular expression and false otherwise.

### Examples

```cs
ObjectComparator.Compare(2, "GT", 1);        // Result: true
ObjectComparator.AreEqual("A", "B");         // Result: false

```
