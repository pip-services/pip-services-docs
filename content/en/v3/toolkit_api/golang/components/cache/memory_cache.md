---
type: docs
title: "MemoryCache"
linkTitle: "MemoryCache"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
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

> NewMemoryCache[T any]() [*MemoryCache[T]]()

#### NewMemoryCacheFromConfig
Creates a new instance of the cache.

> NewMemoryCacheFromConfig[T any](ctx context.Context, cfg [*config.ConfigParams](../../../commons/config/config_params)) [*MemoryCache])()

- **ctx**: context.Context - operation context.
- **cfg**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


### Methods

#### Configure
Configures a component by passing its configuration parameters.

> (c [*MemoryCache[T]]()) Configure(ctx context.Context, cfg [*config.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Contains
Contains check is value contains in cache and time not expire.

> Contains(ctx context.Context, correlationId string, key string) bool

- **ctx**: context.Context - operation context.
- **correlationId**: string - transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: bool - returns true if value contains.

#### Clear
Clears a value from the cache.

> (c [*MemoryCache[T]]()) Clear(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - return error if not cleared.

#### Remove
Removes a value from the cache by its key.

> (c [*MemoryCache[T]]()) Remove(ctx context.Context, correlationId string, key string) error

 **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: error - returns error if not removed.


#### Retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns nil.

> (c [*MemoryCache[T]]()) Retrieve(ctx context.Context, correlationId string, key string) (interface{}, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: (interface{}, error) - cached value or nil if value wasn't found or timeout expired.


#### Store
Stores a value in the cache with expiration time.

> (c [*MemoryCache[T]]()) Store(ctx context.Context, correlationId string, key string, value interface{}, timeout int64) (interface{}, error)

 **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: interface{} - value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: (interface{}, error) - cached value stored in the cache.

### Examples

```go
cache := NewMemoryCache[string]()
res, err := cache.Store(contex.Background(), "123", "key1", "ABC", 10000)
```

### See also
- #### [ICache](../icache)
