---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Dummy cache implementation that doesn't do anything.

---

### Description

The NullCache class allows you to implement a dummy cache that doesn't do anything.

Important points

- It can be used in testing or in situations where a cache is required but must be disabled.


### Constructors

#### NewNullCache
Creates a new instance of the cache.

> NewNullCache[T any]() [*NullCache[T]]()

### Methods

#### Contains

> (c [*NullCache[T]]()) Contains(ctx context.Context, correlationId string, key string) bool

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: bool - returns true if value contains.

#### Remove
Removes a value from the cache by its key.

> (c [*NullCache[T]]()) Remove(ctx context.Context, correlationId string, key string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: error - return error if the value was not removed.


#### Retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns nil.

> (c [*NullCache[T]]()) Retrieve(ctx context.Context, correlationId string, key string) (any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: (any, error) - cached value or nil, if value wasn't found or timeout expired.

#### Store
Stores value in the cache with an expiration time.

> (c [*NullCache[T]]()) Store(ctx context.Context, correlationId string, key string, value any, timeout int64) (any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: any - value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: (any, error) - cached value stored in the cache.


### See also
- #### [ICache](../icache)
