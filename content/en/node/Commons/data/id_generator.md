---
type: docs
title: "IdGenerator"
linkTitle: "IdGenerator"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Helper class to generate unique object IDs.
    It supports two types of IDs: long and short.
 

    Long IDs are string GUIDs. They are globally unique and 32-character long.


    ShortIDs are just 9-digit random numbers. They are not guaranteed be unique.
---

**Example:**
```typescript
IdGenerator.nextLong();      // Possible result: "234ab342c56a2b49c2ab42bf23ff991ac"
IdGenerator.nextShort();     // Possible result: "23495247"
```

### Methods


#### nextLong
Generates a globally unique 32-digit object ID.
The value is a string representation of a GUID value.

> `public static` nextLong(): string

- **returns**: string - a generated 32-digit object ID


#### nextShort
Generates a random 9-digit random ID (code).

Remember: The returned value is not guaranteed to be unique.

> `public static` nextShort(): string

- **returns**: string - a generated random 9-digit code