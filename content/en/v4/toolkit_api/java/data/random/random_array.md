---
type: docs
title: "RandomArray"
linkTitle: "RandomArray"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: >
    Random generator for array objects.
---

### Description

The RandomArray class can be used as a random generator for array objects.

### Static methods

#### pick
Picks a random element from a specified array.

> `public static` <T> T pick(List<T> values) 

- **values**: List<T> - array of any type
- **returns**: <T> T - randomly picked item.

### Examples

```java
{@code
  int value1 = RandomArray.pick(new int []{1, 2, 3, 4}); // Possible result: 3
  }

```
