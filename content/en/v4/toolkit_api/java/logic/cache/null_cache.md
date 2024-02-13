---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-logic-java"
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

> `public` void remove([IContext](../../../components/context/icontext) context, String key) 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique value key.


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired, it returns null.

> `public` Object retrieve([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique value key.
- **returns**: Object - a cached value or null, if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> `public` Object store([IContext](../../../components/context/icontext) context, String key, Object value, long timeToLive)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique value key.
- **value**: Object - a value to store.
- **timeToLive**: long - expiration timeout in milliseconds.
- **returns**: Object - a cached value stored in the cache.


### See also
- #### [ICache](../icache)
