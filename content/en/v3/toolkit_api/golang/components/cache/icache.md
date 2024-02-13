---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Interface for caches that are used to cache values to improve performance.
---

### Description

The ICache interface defines methods for caches that are used to cache values, in order to improve performance.

### Methods

#### Contains
Contains check is value stores

> Contains(ctx context.Context, correlationId string, key string) bool

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - value key in store.
#### Remove
Removes a value from the cache by its key.

> Remove(ctx context.Context, correlationId string, key string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: error - return error if not removed.

#### Retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns nil.

> Retrieve(ctx context.Context, correlationId string, key string) (interface{}, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: (interface{}, error) - cached value or nil if value wasn't found or timeout expired.


#### Store
Stores value in the cache with expiration time.

> Store(ctx context.Context, correlationId string, key string, value interface{}, timeout int64) (interface{}, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: interface{} - value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: (interface{}, error) - cached value stored in the cache.
