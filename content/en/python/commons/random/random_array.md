---
type: docs
title: "RandomArray"
linkTitle: "RandomArray"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Random generator for array objects.
---

### Description

The RandomArray class can be used as a random generator for array objects.

### Static methods

#### pick
Picks a random element from specified array.

> `static` pick(values: List[Any]): Any

- **values**: List[Any] - an array of any type
- **returns**: Any - a randomly picked item.

### Examples

```python
value1 = RandomArray.pick([1, 2, 3, 4]) # Possible result: 3

```
