---
type: docs
title: "MemoryCache"
linkTitle: "MemoryCache"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Cache that stores values in the process memory.


---

### Description

The MemoryCache class allows you to create a cache that stores values in the process memory.

Important points

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **timeout**: default caching timeout in milliseconds (default: 1 minute)
- **max_size**: maximum number of values stored in this cache (default: 1000)


### Constructors

#### NewMemoryCache
Creates a new instance of the cache.

> NewMemoryCache() [*MemoryCache]()

#### NewMemoryCacheFromConfig
Creates a new instance of the cache.

> NewMemoryCacheFromConfig(cfg [*config.ConfigParams](../../../commons/config/config_params)) [*MemoryCache])()

- **cfg**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*MemoryCache]()) Configure(cfg [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Clear
Clear a value from the cache.

> (c [*MemoryCache]()) Clear(correlationId string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: error - return error if not cleared.

#### Remove
Removes a value from the cache by its key.

> (c [*MemoryCache]()) Remove(correlationId string, key string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: error - returns error if not removed.


#### Retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns nil.

> (c [*MemoryCache]()) Retrieve(correlationId string, key string) (interface{}, error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: (interface{}, error) - a cached value or nil if value wasn't found or timeout expired.


#### RetrieveAs
Retrieve cached value from the cache using its key and restore into reference object. If value is missing in the cache or expired it returns false.

> (c *MemoryCache) RetrieveAs(correlationId string, key string, result interface{}) (interface{}, error)

- **correlationId**: string - transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **result**: (interface{}, error) - pointer to object for restore


#### Store
Stores value in the cache with expiration time.

> (c [*MemoryCache]()) Store(correlationId string, key string, value interface{}, timeout int64) (interface{}, error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: interface{} - a value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: (interface{}, error) - a cached value stored in the cache.

### Examples

```go
cache := NewMemoryCache();
res, err := cache.Store("123", "key1", "ABC", 10000);
```

### See also
- #### [ICache](../icache)
