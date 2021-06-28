---
type: docs
title: "RandomArray"
linkTitle: "RandomArray"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Random generator for array objects.
---

### Description

The RandomArray class can be used as a random generator for array objects.

### Static methods


#### Pick
Picks a random element from specified array.
**T** - the class type

> `public static` T Pick\<T\>(T[] values)

- **values**: T[] - array of any type
- **returns**: T - randomly picked item.

#### Pick
Picks a random element from specified list.
**T** - class type

> `public static` T Pick\<T\>(List\<T\> values)

- **values**: List\<T\> - array of any type
- **returns**: T - randomly picked item.

### Examples

```сы
var value1 = RandomArray.Pick(new int []{1, 2, 3, 4}); // Possible result: 3

```
