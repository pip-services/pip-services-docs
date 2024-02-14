---
type: docs
title: "RandomBoolean"
linkTitle: "RandomBoolean"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for boolean values.
---

### Description

The RandomBoolean class allows you to generate random boolean values.

### Static methods

#### chance
Calculates "chance" out of "max chances".
Example: 1 chance out of 3 chances (or 33.3%)

> `public static` boolean chance(float chances, float maxChances)

- **chances**: float - chance proportional to maxChances.
- **maxChances**: float - maximum number of chances.
- **returns**: boolean - true or false for settled chance.

#### nextBoolean
Generates a random boolean value.

> `public static` boolean nextBoolean()

- **returns**: boolean - random boolean.

### Examples

```typescript
{@code
  boolean value1 = RandomBoolean.nextBoolean();    // Possible result: true
  boolean value2 = RandomBoolean.chance(1,3);      // Possible result: false
  }

```
