---
type: docs
title: "RandomString"
linkTitle: "RandomString"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for string values.
---

### Description

The class RandomString allows you to generate random strings.

### Static methods

#### distort
Distorts a string by randomly replacing characters in it.

> `public static` String distort(String value)

- **value**: String - string to distort.
- **returns**: String - distorted string.

#### nextAlphaChar
Generates a random alpha characted [A-Za-z]

> `public static` char nextAlphaChar()

- **returns**: char - random characted.

#### nextString
Generates a random string, consisting of upper and lower case letters (of the English alphabet), 
digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").

> `public static` String nextString(int min, int max)

- **minLength**: int - (optional) minimum string length.
- **maxLength**: int - maximum string length.
- **returns**: String - random string.


#### pick
Picks a random string from an array of strings.

> `public static` String pick(String[] values)

- **values**: String[] - Picks a random character from an array of strings.
- **returns**: String - randomly picked char.

#### pickChar
Picks a random character from a string.

> `public static` char pickChar(String values)

- **values**: String - string to pick a char from.
- **returns**: String - randomly picked char.

### Examples

```java
{
  char value1 = RandomString.pickChar("ABC");     // Possible result: "C"
  String value2 = RandomString.pick(new String {"A","B","C"}); // Possible result: "B"
  }

```
