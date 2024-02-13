---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-logic-python"
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

>  remove(context: Optional[IContext], key: str)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique value key.


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired, it returns None.

> retrieve(context: Optional[IContext], key: str): Any

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique value key.
- **returns**: Any - a cached value or None, if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> store(context: Optional[IContext], key: str, value: Any, timeout: int): Any

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique value key.
- **value**: Any - a value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Any - a cached value stored in the cache.


### See also
- #### [ICache](../icache)
