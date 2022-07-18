---
type: docs
title: "RandomBoolean"
linkTitle: "RandomBoolean"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Random generator for boolean values.
---

### Description

The RandomBoolean class allows you to generate random boolean values.

### Static methods

#### chance
Calculates "chance" out of "max chances".
Example: 1 chance out of 3 chances (or 33.3%)

> `static` bool chance(double chance, double maxChances)

- **chance**: double - chance proportional to maxChances.
- **maxChances**: double - maximum number of chances.
- **returns**: bool - true or false for settled chance.

#### nextBoolean
Generates a random boolean value.

> `static` bool nextBoolean()

- **returns**: bool - random boolean.

### Examples

```dart
var value1 = RandomBoolean.nextBoolean();    // Possible result: true
var value2 = RandomBoolean.chance(1,3);      // Possible result: false

```
