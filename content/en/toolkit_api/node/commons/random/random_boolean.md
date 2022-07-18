---
type: docs
title: "RandomBoolean"
linkTitle: "RandomBoolean"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for boolean values.
---

### Description

The RandomBoolean class allows you to generate random boolean values.

### Static methods

#### chance
Calculates "chance" out of "max chances".
Example: 1 chance out of 3 chances (or 33.3%)

> `public static` chance(chance: number, maxChances: number): boolean

- **chance**: number - chance proportional to maxChances.
- **maxChances**: number - maximum number of chances.
- **returns**: boolean - true or false for settled chance.

#### nextBoolean
Generates a random boolean value.

> `public static` nextBoolean(): boolean

- **returns**: boolean - random boolean.

### Examples

```typescript
let value1 = RandomBoolean.nextBoolean()   // Possible result: True
let value2 = RandomBoolean.chance(1,3)     // Possible result: False

```
