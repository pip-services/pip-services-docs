---
type: docs
title: "RandomDouble"
linkTitle: "RandomDouble"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for double values.
---

### Description

The RandomDouble class allows you to generate random double values.

### Static methods

#### nextDouble
Generates a random double value in the range ['minYear', 'maxYear'].

> `public static` nextDouble(min: number, max: number = null): number

- **min**: number - (optional) minimum range value
- **max**: number = null - max range value
- **returns**: number - a random double value.

#### updateDouble
Updates (drifts) a double value within specified range defined

> `public static` updateDouble(value: number, range: number = null): number

- **value**: number - a double value to drift.
- **range**: number = null - (optional) a range. Default: 10% of the value
- **returns**: number - updated float value.

### Examples

```typescript
let value1 = RandomDouble.nextDouble(5, 10);     // Possible result: 7.3
let value2 = RandomDouble.nextDouble(10);        // Possible result: 3.7
let value3 = RandomDouble.updateDouble(10, 3);   // Possible result: 9.2

```