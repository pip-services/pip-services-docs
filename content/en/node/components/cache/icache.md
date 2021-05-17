---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Interface for caches that are used to cache values to improve performance.
---

### Description

The ICache interface defines methods for caches that are used to cache values, in order to improve performance.

### Instance methods

#### remove
Removes a value from the cache by its key.

>  remove(correlationId: string, key: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns None.

> retrieve(correlationId: string, key: string): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: any - a cached value or None if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> store(correlationId: string, key: string, value: any, timeout: number): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - a cached value stored in the cache.
