---
type: docs
title: "RandomBoolean"
linkTitle: "RandomBoolean"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for boolean values.
---

### Description

The RandomBoolean class allows you to generate random boolean values.

### Static methods

#### Chance
Calculates "chance" out of "max chances".
Example: 1 chance out of 3 chances (or 33.3%)

> `public static` bool Chance(float chance, float maxChances)

- **chance**: float - chance proportional to maxChances.
- **maxChances**: float - maximum number of chances
- **returns**: bool - true or false for settled chance

#### NextBoolean
Generates a random boolean value.

> `public static` bool NextBoolean()

- **returns**: bool - random boolean.

### Examples

```cs
var value1 = RandomBoolean.NextBoolean();    // Possible result: true
var value2 = RandomBoolean.Chance(1,3);      // Possible result: false

```
