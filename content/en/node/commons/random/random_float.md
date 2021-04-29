---
type: docs
title: "RandomFloat"
linkTitle: "RandomFloat"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for float values.
---

**Example:**

```typescript
let value1 = RandomFloat.nextFloat(5, 10);     // Possible result: 7.3
let value2 = RandomFloat.nextFloat(10);        // Possible result: 3.7
let value3 = RandomFloat.updateFloat(10, 3);   // Possible result: 9.2

```


### Methods

#### nextFloat
Generates a float in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `public static` nextFloat(min: number, max: number = null): number

- **min**: number - (minimum value of the float that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: number = null - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: number - generated random float value.

#### updateFloat
Updates (drifts) a float value within specified range defined

> `public static` updateFloat(value: number, range: number = null): number

- **value**: number - a float value to drift.
- **range**: number = null - (optional) a range. Default: 10% of the value
- **returns**: number - TODO add description.