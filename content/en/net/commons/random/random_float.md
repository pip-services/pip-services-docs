---
type: docs
title: "RandomFloat"
linkTitle: "RandomFloat"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for float values.
---

### Description

The RandomFloat class allows you to generate random float values.

### Static methods

#### NextFloat
Generates a random float value in the range to "max".

> `public static` float NextFloat(float maxValue)

- **max**: float - max range value
- **returns**: float - generated random float value.


#### NextFloat
Generates a float in the range ['min', 'max']. 
If 'max' is omitted, then the range will be set to [0, 'min'].

> `public static` float NextFloat(float minValue, float maxValue)

- **min**: float - (minimum value of the float that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: float - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: float - generated random float value.


#### UpdateFloat
Updates (drifts) a float value without specified range defined

> `public static` float UpdateFloat(float value)

- **value**: float  - float value to drift.
- **returns**: float  - updated random float value.


#### UpdateFloat
Updates (drifts) a float value within specified range defined

> `public static` float UpdateFloat(float value, float range)

- **value**: float - float value to drift.
- **range**: float - (optional) range. Default: 10% of the value
- **returns**: float - updated float value.

### Examples

```cs
var value1 = RandomFloat.NextFloat(5, 10);     // Possible result: 7.3
var value2 = RandomFloat.NextFloat(10);        // Possible result: 3.7
var value3 = RandomFloat.UpdateFloat(10, 3);   // Possible result: 9.2

```
