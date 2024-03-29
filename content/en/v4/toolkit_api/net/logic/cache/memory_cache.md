---
type: docs
title: "MemoryCache"
linkTitle: "MemoryCache"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-logic-dotnet"
description: >
    Cache that stores values in the process memory.


---

**Inherits**: [ICache](../icache), [IReconfigurable](../../../components/config/ireconfigurable)

### Description

The MemoryCache class allows you to create a cache that stores values in the process memory.

**Important points**

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **timeout**: default caching timeout in milliseconds (default: 1 minute)
- **max_size**: maximum number of values stored in this cache (default: 1000)


### Constructors
Creates an instance of a local in-memory cache component

> `public` MemoryCache([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters.

Creates an instance of a local in-memory cache component.

> `public` MemoryCache()



### Instance methods

#### ClearAsync
Clears the component's state.

> Task ClearAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures the component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### RemoveAsync
Removes a value from the cache by its key.

> `public override` Task RemoveAsync(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.


#### RetrieveAsync
Retrieves a cached value from the cache using its key.
If value is missing in the cache or expired, it returns null.

> `public` Task\<T\> RetrieveAsync\<T\>(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **returns**: Task\<T\> - cached value or null if value wasn't found or timeout expired.


#### StoreAsync
Stores a value in the cache with an expiration time.

> `public` Task\<T\> StoreAsync\<T\>(IContext context, string key, T value, long timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **value**: T - value to store.
- **timeout**: long - expiration timeout in milliseconds.
- **returns**: Task\<T\> - cached value stored in the cache.

### Examples

```cs
var cache = new MemoryCache();
...
cache.StoreAsync("123", "key1", "ABC", 0);
...
```

### See also
- #### [ICache](../icache)

