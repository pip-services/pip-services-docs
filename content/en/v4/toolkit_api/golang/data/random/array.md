---
type: docs
title: "Array"
linkTitle: "Array"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go/random"
description: >
    Random generator for array objects.
---

### Description

The Array class can be used as a random generator for array objects.

### Static methods

#### pick
Picks a random element from specified array.

> `static` pick(values: List[Any]): Any

- **values**: List[Any] - an array of any type
- **returns**: Any - a randomly picked item.

### Examples

```python
value1 = Array.pick([1, 2, 3, 4]) # Possible result: 3

```

