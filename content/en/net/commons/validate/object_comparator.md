---
type: docs
title: "ObjectComparator"
linkTitle: "ObjectComparator"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Comparator over two values of any type.
---

### Description

The ObjectComparator class allows you to perform a comparison over two values of any type.

### Static methods

#### areEqual
Checks if two values are equal.
The operation can be performed over values of any type.

> `public static` areEqual(value1: any, value2: any): boolean

- **value1**: any - the first value to compare
- **value2**: any - the second value to compare
- **returns**: boolean - true if values are equal and false otherwise

#### areNotEqual
Checks if two values are NOT equal
The operation can be performed over values of any type.

> `public static` areNotEqual(value1: any, value2: any): boolean

- **value1**: any - the first value to compare 
- **value2**: any - the second value to compare
- **returns**: boolean - true if values are NOT equal and false otherwise

#### compare
Perform comparison operation over two arguments.
The operation can be performed over values of any type.

> `public static` compare(value1: any, operation: string, value2: any): boolean

- **value1**: any - the first argument to compare
- **operation**: string - the comparison operation: *"==" ("=", "EQ"), "!= " ("<>", "NE"); "<"/">" ("LT"/"GT"), "<="/">=" ("LE"/"GE"); "LIKE"*.
- **value2**: any - the second argument to compare
- **returns**: boolean - result of the comparison operation

#### isGreater
Checks if first value is greater than the second one.
The operation can be performed over numbers or strings.

> `public static` isGreater(value1: any, value2: any): boolean

- **value1**: any - the first value to compare
- **value2**: any - the second value to compare
- **returns**: boolean - true if the first value is greater than second and false otherwise.

#### isLess
Checks if first value is less than the second one.
The operation can be performed over numbers or strings.

> `public static` isLess(value1: any, value2: any): boolean

- **value1**: any - the first value to compare
- **value2**: any - the second value to compare
- **returns**: boolean - true if the first value is less than second and false otherwise.

#### match
Checks if string matches a regular expression

> `public static` match(value: any, regexp: any): boolean

- **value**: any - a string value to match
- **regexp**: any - a regular expression string
- **returns**: boolean - true if the value matches regular expression and false otherwise.

### Examples

```typescript
ObjectComparator.compare(2, "GT", 1);        // Result: true
ObjectComparator.areEqual("A", "B");         // Result: false

```