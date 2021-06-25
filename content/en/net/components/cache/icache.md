---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for caches that are used to cache values to improve performance.
---

### Description

The ICache interface defines methods for caches that are used to cache values, in order to improve performance.

### Instance methods

#### reRemoveAsyncmove
Removes a value from the cache by its key.

> Task RemoveAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.


#### RetrieveAsync
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns null.

> Task\<T\> RetrieveAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: Task\<T\> - a cached value or null if value wasn't found or timeout expired.


#### StoreAsync
Stores value in the cache with expiration time.

> Task\<T\> StoreAsync(string correlationId, string key, T value, long timeout)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: T - a value to store.
- **timeout**: long - expiration timeout in milliseconds.
- **returns**: Task\<T\> - a cached value stored in the cache.
