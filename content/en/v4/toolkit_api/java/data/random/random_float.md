---
type: docs
title: "RandomFloat"
linkTitle: "RandomFloat"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for float values.
---

### Description

The RandomFloat class allows you to generate random float values.

### Static methods

#### nextFloat
Generates a float in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `public static`float nextFloat(float min, float max)

- **min**: float - (minimum value of the float that will be generated.   

If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.

- **max**: float - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: float - generated random float value.

#### updateFloat
Updates (drifts) a float value within specified range.

> `public static` float updateFloat(float value, float range)

- **value**: float - float value to drift.
- **range**: float - (optional) range. Default: 10% of the value.
- **returns**: float - updated float value.

### Examples

```java
{
  float value1 = RandomFloat.nextFloat(5, 10);     // Possible result: 7.3
  float value2 = RandomFloat.nextFloat(10);        // Possible result: 3.7
  float value3 = RandomFloat.updateFloat(10, 3);   // Possible result: 9.2
  }

```
