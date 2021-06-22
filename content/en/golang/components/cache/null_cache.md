---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
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

> NewNullCache() [*NullCache]()

### Methods

#### Remove
Removes a value from the cache by its key.

> (c [*NullCache]()) Remove(correlationId string, key string) error

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **returns**: error - return error if not removed.


#### Retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired, it returns nil.

> (c [*NullCache]()) Retrieve(correlationId string, key string) (interface{}, error)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **returns**: (interface{}, error) - a cached value or nil, if value wasn't found or timeout expired.


#### RetrieveAs
Retrieve cached value from the cache using its key and restore into reference object. If value is missing in the cache or expired it returns false.

> (c *MemoryCache) RetrieveAs(correlationId string, key string, result interface{}) (interface{}, error)

- **correlationId**: string - transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **result**: (interface{}, error) - pointer to object for restore


#### Store
Stores value in the cache with expiration time.

> (c [*NullCache]()) Store(correlationId string, key string, value interface{}, timeout int64) (interface{}, error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: interface{} - a value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: (interface{}, error) - a cached value stored in the cache.


### See also
- #### [ICache](../icache)
