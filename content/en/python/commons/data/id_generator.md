---
type: docs
title: "IdGenerator"
linkTitle: "IdGenerator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Helper class used to generate unique object IDs.
.
---

### Description

The IdGenerator class allows you to generate unique IDs for objects. 

Important points

- It supports two types of IDs: short and long.
- ShortIDs are 9-digit random numbers. They are not guaranteed be unique.
- Long IDs are string GUIDs. They are globally unique and 32-character long.

### Static methods

#### next_long
Generates a globally unique 32-digit object ID.
The value is a string representation of a GUID value.

> `static` next_long(): str

- **returns**: str - a generated 32-digit object ID


#### next_short
Generates a random 9-digit random ID (code).

Remember: The returned value is not guaranteed to be unique.

> `static` next_short(): str

- **returns**: str - a generated random 9-digit code

### Examples

```python
IdGenerator.next_long()      # Possible result: "234ab342c56a2b49c2ab42bf23ff991ac"
IdGenerator.next_short()     # Possible result: "23495247"
```
