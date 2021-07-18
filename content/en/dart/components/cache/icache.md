---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for caches that are used to cache values to improve performance.
---

### Description

The ICache interface defines methods for caches that are used to cache values, in order to improve performance.

### Instance methods

#### remove
Removes a value from the cache by its key.

> Future\<dynamic\> remove(String correlationId, String key)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a unique value key.
- **returns**: Future\<dynamic\> - Future that receives an null for success


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns null.

> Future\<dynamic\> retrieve(String correlationId, String key)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a unique value key.
- **returns**: Future\<dynamic\> - a cached value or null if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> Future\<dynamic\> store(String correlationId, String key, value, int timeout)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a unique value key.
- **value**: dynamic - a value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Future\<dynamic\> - a cached value stored in the cache.
