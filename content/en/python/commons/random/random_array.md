---
type: docs
title: "RandomArray"
linkTitle: "RandomArray"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Random generator for array objects.
---

**Example:**

```python
value1 = RandomArray.pick([1, 2, 3, 4]) # Possible result: 3

```


### Methods

#### pick
Picks a random element from specified array.

> `static` pick(values: List[T]): T

- **values**: List[T] - an array of any type
- **returns**: T - a randomly picked item.