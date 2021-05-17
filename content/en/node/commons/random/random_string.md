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

#### pickChar
Picks a random character from a string.

> `public static` pickChar(values: string): string

- **values**: string - a string to pick a char from
- **returns**: string - a randomly picked char.

#### distort
Distorts a string by randomly replacing characters in it.

> `public static` distort(value: string): string

- **value**: string - a string to distort.
- **returns**: string - a distored string.

#### nextAlphaChar
Generates random alpha characted [A-Za-z]

> `public static` nextAlphaChar(): string

- **returns**: string - a random characted.

#### nextString
Generates a random string, consisting of upper and lower case letters (of the English alphabet), 
digits (0-9), and symbols ("_,.:-/.[].{},#-!,$=%.+^.&*-() ").

> `public static` nextString(minLength: number, maxLength: number): string

- **minLength**: number - (optional) minimum string length.
- **maxLength**: number - maximum string length.
- **returns**: string - a random string.

### Examples

```typescript
let value1 = RandomString.pickChar("ABC");     // Possible result: "C"
let value2 = RandomString.pick(["A","B","C"]); // Possible result: "gBW"

```