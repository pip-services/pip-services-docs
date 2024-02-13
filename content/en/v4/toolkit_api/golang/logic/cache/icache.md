---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Interface for caches that are used to cache values to improve performance.
    
---

### Description


The interface serves as a foundational structure and set of methods specifically tailored to manage caches, optimizing the performance of the system by efficiently storing and retrieving values, thereby reducing the need for repeated computations.

### Instance methods

#### Retrieve
Retrieve cached value from the cache using its key. If value is missing in the cache or expired it returns nil.

> Retrieve(ctx [context.Context](../../../components/context/icontext), key string) (T, error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: any - the cached value or error if value wasn't found.


#### Store
Stores value in the cache with expiration time.

> Store(ctx [context.Context](../../../components/context/icontext), key string, value T, timeout int64) (T, error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: any - The value that was stored in the cache.

#### Remove
Removes a value from the cache by its key.

> Remove(ctx [context.Context](../../../components/context/icontext), key string) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key. 

#### Contains
Checks if a value is stored.

> Contains(ctx [context.Context](../../../components/context/icontext), key string) bool

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key. 
