---
type: docs
title: "Double"
linkTitle: "Double"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go/random"
description: >
    Random generator for double values.
---

### Description

The Double class allows you to generate random double values.

### Static methods

#### next_double
Generates a random double value in the range ['min_value', 'max_value'].

> `static` next_double(mmin: float, mmax: float = None): float

- **mmin**: float - (optional) minimum range value
- **mmax**: float = None - max range value
- **returns**: float - a random double value.

#### update_double
Updates (drifts) a double value within a specified range defined

> `static` update_double(value: float, rrange: float = None): float

- **value**: float - a double value to drift.
- **rrange**: float = None - (optional) a range. Default: 10% of the value
- **returns**: float - updated float value.

### Examples

```python
value1 = Double.next_double(5, 10)     # Possible result: 8.276012024925908
value2 = Double.next_double(10)        # Possible result: 4.558593480049594
```
