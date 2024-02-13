---
type: docs
title: "Array"
linkTitle: "Array"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Random generator for array objects.
---

### Description

The Array class can be used as a random generator for array objects.

### Methods

#### Pick
Picks a random element from a specified array.

> Pick(value any) any

- **values**: any - array of any type
- **returns**: any - randomly picked item.

### Examples

```go
value1 := random.Array.Pick([]int{1, 2, 3, 4}) // Possible result: 3

```
