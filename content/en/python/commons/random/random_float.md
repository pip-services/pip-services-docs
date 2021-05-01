---
type: docs
title: "RandomFloat"
linkTitle: "RandomFloat"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Random generator for float values.
---

### Description

The RandomFloat class allows you to generate random float values.

### Static methods

#### next_float
Generates a float in the range ['min', 'max']. If 'max' is omitted, then the range will be set to [0, 'min'].

> `static` next_float(min: float, max:  float = None): float

- **min**: float - (minimum value of the float that will be generated. 
If 'max' is omitted, then 'max' is set to 'min' and 'min' is set to 0.
- **max**: float = null - (optional) maximum value of the float that will be generated. Defaults to 'min' if omitted.
- **returns**: float - generated random float value.

#### update_float
Updates (drifts) a float value within specified range defined

> `static` update_float(value: float, range: float = None): float

- **value**: float - a float value to drift.
- **range**: float = null - (optional) a range. Default: 10% of the value
- **returns**: float - TODO add description.

### Examples

```python
value1 = RandomFloat.next_float(5, 10)     # Possible result: 8.109282778264653
value2 = RandomFloat.next_float(10)        # Possible result: 5.281760648272185
value3 = RandomFloat.update_float(10, 3)   # Possible result: 7.731874405844179
```
