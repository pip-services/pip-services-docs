---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

`@override`
> Future\<dynamic\> remove(String correlationId, String key)

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **key**: String - a unique value key.
- **returns**: Future\<dynamic\> - Future that receives an null for success


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired, it returns null.

`@override`
> Future\<dynamic\> retrieve(String correlationId, String key)

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **key**: String - a unique value key.
- **returns**: Future\<dynamic\> - a cached value or null, if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

`@override`
> Future\<dynamic\> store(String correlationId, String key, value, int timeout)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a unique value key.
- **value**: dynamic - a value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Future\<dynamic\> - a cached value stored in the cache.


### See also
- #### [ICache](../icache)
