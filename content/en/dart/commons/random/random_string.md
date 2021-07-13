---
type: docs
title: "RandomString"
linkTitle: "RandomString"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Random generator for string values.
---

### Description

The class RandomString allows you to generate random strings.

### Static methods

#### distort
Distorts a string by randomly replacing characters in it.

> `static` String distort(String value)

- **value**: String - string to distort.
- **returns**: String - distorted string.

#### nextAlphaChar
Generates a random alpha characted [A-Za-z]

> `static` String nextAlphaChar()

- **returns**: String - random characted.

#### nextString
Generates a random string, consisting of upper and lower case letters (of the English alphabet), 
digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").

> `static` String nextString(int minLength, int maxLength)

- **minLength**: int - (optional) minimum string length.
- **maxLength**: int - maximum string length.
- **returns**: String - random string.


#### pick
Picks a random string from an array of strings.

> `static` String pick(List\<String\> values)

- **values**: List\<String\> - Picks a random character from an array of strings.
- **returns**: String - randomly picked char.

#### pickChar
Picks a random character from a string.

> `static` String pickChar(String values)

- **values**: String - string to pick a char from.
- **returns**: String - randomly picked char.

### Examples

```dart
var value1 = RandomString.pickChar('ABC');     // Possible result: 'C'
var value2 = RandomString.pick(['A','B','C']); // Possible result: 'gBW'

```
