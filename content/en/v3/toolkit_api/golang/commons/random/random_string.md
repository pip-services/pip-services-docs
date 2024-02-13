---
type: docs
title: "String"
linkTitle: "String"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Random generator for string values.
---

### Description

The class String allows you to generate random strings.

### Methods

#### Distort
Distorts a string by randomly replacing characters in it.

> Distort(value string) string

- **value**: string - string to distort.
- **returns**: string - distored string.

#### NextAlphaChar
Generates random alpha characted [A-Za-z]

> NextAlphaChar() byte

- **returns**: byte - random characted.

#### NextString
Generates a random string, consisting of upper and lower case letters (of the English alphabet), 
digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").

> NextString(minLength int, maxLength int) string

- **minLength**: int - (optional) minimum string length.
- **maxLength**: int - maximum string length.
- **returns**: string - random string.


#### Pick
Picks a random string from an array of strings.

> Pick(values []string) string

- **values**: []string - Picks a random character from an array of strings.
- **returns**: string - randomly picked char.

#### PickChar
Picks a random character from a string.

> PickChar(values string) byte

- **values**: string - string to pick a char from
- **returns**: byte - randomly picked char.

### Examples

```go
value1 := String.pickChar("ABC");     // Possible result: "C"
value2 := String.pick(["A","B","C"]); // Possible result: "gBW"

```
