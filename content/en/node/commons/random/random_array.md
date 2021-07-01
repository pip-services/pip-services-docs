---
type: docs
title: "RandomArray"
linkTitle: "RandomArray"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for array objects.
---

### Description

The RandomArray class can be used as a random generator for array objects.

### Static methods

#### pick
Picks a random element from a specified array.

> `public static` pick\<T\>(values: T[]): T

- **values**: T[] - array of any type
- **returns**: T - randomly picked item.

### Examples

```typescript
let value1 = RandomArray.pick([1, 2, 3, 4]); // Possible result: 3

```
