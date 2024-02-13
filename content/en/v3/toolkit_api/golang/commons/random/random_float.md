---
type: docs
title: "Float"
linkTitle: "Float"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Random generator for float values.
---

### Description

The Float class allows you to generate random float values.

### Methods

#### NextFloat
Generates a float in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> NextFloat(min float32, max float32) float32

- **min**: float32 - (minimum value of the float that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: float32 - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: float32 - generated random float value.

#### UpdateFloat
Updates (drifts) a float value within specified range defined

> UpdateFloat(value float32, interval float32) float32

- **value**: float32 - float value to drift.
- **range**: float32 - (optional) range. Default: 10% of the value
- **returns**: float32 - updated float value.

### Examples

```go
value1 := Float.NextFloat(5, 10);     // Possible result: 7.3
value2 := Float.NextFloat(10);        // Possible result: 3.7
value3 := Float.UpdateFloat(10, 3);   // Possible result: 9.2

```
