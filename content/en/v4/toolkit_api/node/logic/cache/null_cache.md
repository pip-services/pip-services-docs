---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-logic-node"
description: >
    Dummy cache implementation that doesn't do anything.

---

**Implements**: [ICache](../icache)

### Description

The NullCache class allows you to implement a dummy cache that doesn't do anything.

Important points

- It can be used in testing or in situations where a cache is required but must be disabled.

### Instance methods

#### remove
Removes a value from the cache by its key.

> `public` remove(context: [IContext](../../../components/context/icontext), key: string): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired, it returns null.

> `public` retrieve(context: [IContext](../../../components/context/icontext), key: string): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: Promise\<any\> - a cached value or null, if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> `public` store(context: [IContext](../../../components/context/icontext), key: string, value: any, timeout: number): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - a cached value stored in the cache.


### See also
- #### [ICache](../icache)
