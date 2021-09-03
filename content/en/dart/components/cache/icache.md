---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for caches that are used to cache values to improve performance.
---

### Description

The ICache interface defines methods for caches that are used to cache values to improve performance.

### Instance methods

#### remove
Removes a value from the cache by its key.

> Future\<dynamic\> remove(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - Future that receives a null for success


#### retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired it returns null.

> Future\<dynamic\> retrieve(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - cached value or null if value wasn't found or timeout expired.


#### store
Stores a value in the cache with expiration time.

> Future\<dynamic\> store(String correlationId, String key, value, int timeout)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **value**: dynamic - value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Future\<dynamic\> - cached value stored in the cache.
