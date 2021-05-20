---
type: docs
title: "RandomString"
linkTitle: "RandomString"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for string values.
---

### Description

The class RandomString allows you to generate random strings.

### Static methods

#### Distort
Distorts a string by randomly replacing characters in it.

> `public static` string Distort(string value)

- **value**: string - a string to distort.
- **returns**: string - a distored string.

#### NextAlphaChar
Generates random alpha characted [A-Za-z]

> `public static` string NextAlphaChar()

- **returns**: string - a random characted.

#### NextString
Generates a random string, consisting of upper and lower case letters (of the English alphabet), 
digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").

> `public static` string NextString(int minLength, int maxLength)

- **minLength**: int - (optional) minimum string length.
- **maxLength**: int - maximum string length.
- **returns**: string - a random string.

#### Pick

Picks a random character from a string.

> `public static` string Pick(string values)

- **values**: string - a string to pick a char from string

- **returns**: string - a randomly picked char.


#### Pick

Picks a random character from an array of string.

> `public static` string Pick(string[] values)

- **values**: string - a string to pick from array strings
- **returns**: string - a randomly picked string.


### Examples

```cs
var value1 = RandomString.Pick("ABC");     // Possible result: "C"
var value2 = RandomString.Pick(new String {"A","B","C"}); // Possible result: "B"

```