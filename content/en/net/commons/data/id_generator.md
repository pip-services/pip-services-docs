---
type: docs
title: "IdGenerator"
linkTitle: "IdGenerator"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Helper class used to generate object IDs.

---

### Description

The IdGenerator class allows you to generate IDs for objects. 

**Important points**

- It supports two types of IDs: short and long.
- ShortIDs are 9-digit random numbers. They are not guaranteed be unique.
- Long IDs are string GUIDs. They are globally unique and 32-character long.

### Static methods

#### NextLong
Generates a globally unique 32-digit object ID.
The value is a string representation of a GUID value.

> `public static` string NextLong()

- **returns**: string - generated 32-digit object ID


#### NextShort
Generates a random 9-digit random ID (code).

Remember: The returned value is not guaranteed to be unique.

> `public static` string NextShort()

- **returns**: string - generated random 9-digit code

### Examples

```cs
IdGenerator.NextLong();      // Possible result: "234ab342c56a2b49c2ab42bf23ff991ac"
IdGenerator.NextShort();     // Possible result: "23495247"
```
