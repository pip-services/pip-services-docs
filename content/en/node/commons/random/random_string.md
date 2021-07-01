---
type: docs
title: "RandomString"
linkTitle: "RandomString"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for string values.
---

### Description

The class RandomString allows you to generate random strings.

### Static methods

#### distort
Distorts a string by randomly replacing characters in it.

> `public static` distort(value: string): string

- **value**: string - string to distort.
- **returns**: string - distorted string.

#### nextAlphaChar
Generates a random alpha characted [A-Za-z]

> `public static` nextAlphaChar(): string

- **returns**: string - random characted.

#### nextString
Generates a random string, consisting of upper and lower case letters (of the English alphabet), 
digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").

> `public static` nextString(minLength: number, maxLength: number): string

- **minLength**: number - (optional) minimum string length.
- **maxLength**: number - maximum string length.
- **returns**: string - random string.


#### pick
Picks a random string from an array of strings.

> `public static` pick(values: string[]): string

- **values**: string[] - Picks a random character from an array of strings.
- **returns**: string - randomly picked char.

#### pickChar
Picks a random character from a string.

> `public static` pickChar(values: string): string

- **values**: string - string to pick a char from.
- **returns**: string - randomly picked char.

### Examples

```typescript
let value1 = RandomString.pickChar("ABC");     // Possible result: "C"
let value2 = RandomString.pick(["A","B","C"]); // Possible result: "gBW"

```
