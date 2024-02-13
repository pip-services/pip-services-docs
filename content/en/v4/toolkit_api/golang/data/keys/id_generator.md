---
type: docs
title: "IdGenerator"
linkTitle: "IdGenerator"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-data-go"
description: > 
    Helper class used to generate object IDs.

---

### Description

The IdGenerator class allows you to generate IDs for objects. 

Important points

- It supports two types of IDs: short and long.
- ShortIDs are 9-digit random numbers. They are not guaranteed be unique.
- Long IDs are string GUIDs. They are globally unique and 32-character long.

### Methods

#### NextLong
Generates a globally unique 32-digit object ID.
The value is a string representation of a GUID value.

> (c *TIdGenerator) NextLong() string

- **returns**: string - a generated 32-digit object ID


#### NextShort
Generates a random 9-digit random ID (code).

Note: The returned value is not guaranteed to be unique.

> (c *TIdGenerator) NextShort() string

- **returns**: string - generated random 9-digit code

### Examples

```go
IdGenerator.NextLong();      // Possible result: "234ab342c56a2b49c2ab42bf23ff991ac"
IdGenerator.NextShort();     // Possible result: "23495247"
```

