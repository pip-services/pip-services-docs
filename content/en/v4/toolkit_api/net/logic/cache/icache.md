---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-logic-dotnet"
description: >
    Interface for caches that are used to improve performance.
---

### Description

The ICache interface defines methods for caches that are used to improve performance.

### Instance methods

#### reRemoveAsyncmove
Removes a value from the cache by its key.

> Task RemoveAsync(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.


#### RetrieveAsync
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns null.

> Task\<T\> RetrieveAsync\<T\>(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **returns**: Task\<T\> - cached value or null if value wasn't found or timeout expired.


#### StoreAsync
Stores a value in the cache with an expiration time.

> Task\<T\> StoreAsync(IContext context, string key, T value, long timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **value**: T - value to store.
- **timeout**: long - expiration timeout in milliseconds.
- **returns**: Task\<T\> - cached value stored in the cache.

