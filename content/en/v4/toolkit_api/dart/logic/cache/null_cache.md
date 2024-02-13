---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-logic-dart"
description: >
    Dummy cache implementation that doesn't do anything.

---

**Implements**: [ICache](../icache)

### Description

The NullCache class allows you to implement a dummy cache that doesn't do anything.

**Important points**

- It can be used in testing or in situations where a cache is required but must be disabled.

### Instance methods

#### remove
Removes a value from the cache by its key.

`@override`
> Future\<dynamic\> remove(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - Future that receives an null for success


#### retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns null.

`@override`
> Future\<dynamic\> retrieve(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - cached value or null, if the value wasn't found or timeout expired.


#### store
Stores a value in the cache with expiration time.

`@override`
> Future\<dynamic\> store(IContext? context, String key, value, int timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique value key.
- **value**: dynamic - value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Future\<dynamic\> - cached value stored in the cache.


### See also
- #### [ICache](../icache)
