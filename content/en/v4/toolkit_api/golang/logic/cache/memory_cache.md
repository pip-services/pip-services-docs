---
type: docs
title: "MemoryCache"
linkTitle: "MemoryCache"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Cache that stores values in the process memory.


---

**Implements**: [ICache](../icache), [IReconfigurable](../../../components/config/ireconfigurable)

### Description

The MemoryCache class allows you to create a cache that stores values in the process memory.

Important points

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **timeout**: default caching timeout in milliseconds (default: 1 minute)
- **max_size**: maximum number of values stored in this cache (default: 1000)

### Instance methods

#### Configure
Configures component by passing configuration parameters.

> (c *MemoryCache[T]) Configure(ctx [context.Context](../../../components/context/icontext), cfg *config.ConfigParams)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Remove
Removes a value from the cache by its key.

> (c *MemoryCache[T]) Remove(ctx [context.Context](../../../components/context/icontext), key string) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.


#### Retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns null.

> (c *MemoryCache[T]) Retrieve(ctx [context.Context](../../../components/context/icontext), key string) (T, error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: any - a cached value or null if value wasn't found or timeout expired.


#### Store
Stores value in the cache with expiration time.

> (c *MemoryCache[T]) Store(ctx [context.Context](../../../components/context/icontext), key string, value T, timeout int64) (T, error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: any - a cached value stored in the cache.

### Examples

```go
cache := NewMemoryCache[string]();
res, err := cache.Store(contex.Background(), "key1", "ABC", 10000);
```

### See also
- #### [ICache](../icache)

