---
type: docs
title: "RandomArray"
linkTitle: "RandomArray"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for array objects.
---

**Example:**

```typescript
let value1 = RandomArray.pick([1, 2, 3, 4]); // Possible result: 3

```


### Methods

#### pick
Picks a random element from specified array.

> `public static` pick\<T\>(values: T[]): T

- **values**: T[] - an array of any type
- **returns**: T - a randomly picked item.