---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Dummy cache implementation that doesn't do anything.

---

**Implements**: [ICache](../icache)

### Description

The NullCache class allows you to implement a dummy cache that doesn't do anything.

Important points

- It can be used in testing or in situations where a cache is required but must be disabled.

### Static methods

#### remove
Removes a value from the cache by its key.

> `public` remove(correlationId: string, key: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired, it returns null.

> `public` retrieve(correlationId: string, key: string): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **returns**: Promise\<any\> - a cached value or null, if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> `public` store(correlationId: string, key: string, value: any, timeout: number): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - a cached value stored in the cache.


### See also
- #### [ICache](../icache)
