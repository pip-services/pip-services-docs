---
type: docs
title: "MemoryCache"
linkTitle: "MemoryCache"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Cache that stores values in the process memory.


---

**Implements**: [ICache](../icache), [IReconfigurable](../../../commons/config/ireconfigurable)

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

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### remove
Removes a value from the cache by its key.

> `public` remove(correlationId: string, key: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns None.

> `public` retrieve(correlationId: string, key: string): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: any - a cached value or None if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> `public` store(correlationId: string, key: string, value: any, timeout: number): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - a cached value stored in the cache.

### Examples

```typescript
let cache = new MemoryCache();
   
await cache.store("123", "key1", "ABC");
...
let value = await cache.retrieve("123", "key1");
// Result: "ABC"
```

### See also
- #### [ICache](../icache)
