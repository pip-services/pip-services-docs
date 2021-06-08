---
type: docs
title: "RandomString"
linkTitle: "RandomString"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Random generator for string values.
---

### Description

The class RandomString allows you to generate random strings.

### Methods

#### Distort
Distorts a string by randomly replacing characters in it.

> (c *TRandomString) Distort(value string) string

- **value**: string - a string to distort.
- **returns**: string - a distored string.

#### NextAlphaChar
Generates random alpha characted [A-Za-z]

> (c *TRandomString) NextAlphaChar() byte

- **returns**: byte - a random characted.

#### NextString
Generates a random string, consisting of upper and lower case letters (of the English alphabet), 
digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").

> (c *TRandomString) NextString(minLength int, maxLength int) string

- **minLength**: int - (optional) minimum string length.
- **maxLength**: int - maximum string length.
- **returns**: string - a random string.


#### Pick
Picks a random string from an array of string.

> (c *TRandomString) Pick(values []string) string

- **values**: []string - Picks a random character from an array of string.
- **returns**: string - a randomly picked char.

#### PickChar
Picks a random character from a string.

> (c *TRandomString) PickChar(values string) byte

- **values**: string - a string to pick a char from
- **returns**: byte - a randomly picked char.

### Examples

```go
value1 := RandomString.pickChar("ABC");     // Possible result: "C"
value2 := RandomString.pick(["A","B","C"]); // Possible result: "gBW"

```