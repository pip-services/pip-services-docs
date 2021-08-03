---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for caches that are used to improve performance.
---

### Description

The ICache interface defines methods for caches that are used to improve performance.

### Instance methods

#### reRemoveAsyncmove
Removes a value from the cache by its key.

> Task RemoveAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to used trace execution through the call chain.
- **key**: string - unique value key.


#### RetrieveAsync
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns null.

> Task\<T\> RetrieveAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: Task\<T\> - cached value or null if value wasn't found or timeout expired.


#### StoreAsync
Stores a value in the cache with an expiration time.

> Task\<T\> StoreAsync(string correlationId, string key, T value, long timeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: T - value to store.
- **timeout**: long - expiration timeout in milliseconds.
- **returns**: Task\<T\> - cached value stored in the cache.
