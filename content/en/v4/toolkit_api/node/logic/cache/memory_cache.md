---
type: docs
title: "MemoryCache"
linkTitle: "MemoryCache"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-logic-node"
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

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### remove
Removes a value from the cache by its key.

> `public` remove(context: [IContext](../../../components/context/icontext), key: string): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns null.

> `public` retrieve(context: [IContext](../../../components/context/icontext), key: string): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: any - a cached value or null if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> `public` store(context: [IContext](../../../components/context/icontext), key: string, value: any, timeout: number): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - a cached value stored in the cache.

### Examples

```typescript
let cache = new MemoryCache();
   
await cache.store(new Context(), "key1", "ABC");
...
let value = await cache.retrieve(new Context(), "key1");
// Result: "ABC"
```

### See also
- #### [ICache](../icache)
