---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Dummy cache implementation that doesn't do anything.

---

**Implements**: [ICache](../icache)

### Description

The NullCache class allows you to implement a dummy cache that doesn't do anything.

Important points

- It can be used in testing or in situations where a cache is required but must be disabled.

### Instance methods

#### Remove
Removes a value from the cache by its key.

> (c *NullCache[T]) Remove(ctx [context.Context](../../../components/context/icontext), key string) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.


#### Retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired, it returns null.

> (c *NullCache[T]) Retrieve(ctx [context.Context](../../../components/context/icontext), key string) (T, error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: any - a cached value or null, if value wasn't found or timeout expired.


#### Store
Stores value in the cache with expiration time.

> (c *NullCache[T]) Store(ctx [context.Context](../../../components/context/icontext), key string, value T, timeout int64) (T, error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: any - a cached value stored in the cache.


### See also
- #### [ICache](../icache)

