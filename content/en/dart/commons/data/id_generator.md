---
type: docs
title: "IdGenerator"
linkTitle: "IdGenerator"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

#### nextLong
Generates a globally unique 32-digit object ID.
The value is a string representation of a GUID value.

> `static` String nextLong()

- **returns**: String - generated 32-digit object ID


#### nextShort
Generates a random 9-digit random ID (code).

Note: The returned value is not guaranteed to be unique.

> `static` String nextShort()

- **returns**: String - generated random 9-digit code

### Examples

```dart
IdGenerator.nextLong();      // Possible result: '234ab342c56a2b49c2ab42bf23ff991ac'
IdGenerator.nextShort();     // Possible result: '23495247'
```
