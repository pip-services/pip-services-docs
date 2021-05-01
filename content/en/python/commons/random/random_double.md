---
type: docs
title: "RandomDouble"
linkTitle: "RandomDouble"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Random generator for double values.
---

### Description

The RandomDouble class allows you to generate random double values.

### Static methods

#### next_double
Generates a random double value in the range ['min_year', 'max_year'].

> `static` next_double(mmin: float, mmax: float = None): float

- **mmin**: float - (optional) minimum range value
- **mmax**: float = null - max range value
- **returns**: float - a random double value.

#### update_double
Updates (drifts) a double value within specified range defined

> `static` update_double(value: float, rrange: float = None): float

- **value**: float - a double value to drift.
- **rrange**: float = null - (optional) a range. Default: 10% of the value
- **returns**: float - TODO add description.

### Examples

```python
value1 = RandomDouble.next_double(5, 10)     # Possible result: 8.276012024925908
value2 = RandomDouble.next_double(10)        # Possible result: 4.558593480049594
```
