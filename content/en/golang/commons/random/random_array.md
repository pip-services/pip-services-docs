---
type: docs
title: "RandomArray"
linkTitle: "RandomArray"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Random generator for array objects.
---

### Description

The RandomArray class can be used as a random generator for array objects.

### Methods

#### Pick
Picks a random element from specified array.

> (c *TRandomArray) Pick(value interface{}) interface{}

- **values**: interface{} - an array of any type
- **returns**: interface{} - a randomly picked item.

### Examples

```go
value1 := RandomArray.Pick([1, 2, 3, 4]); // Possible result: 3

```
