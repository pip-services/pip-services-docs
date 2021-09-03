---
type: docs
title: "CacheEntry"
linkTitle: "CacheEntry"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Data object to store cached values with their keys used by [MemoryCache](../memory_cache).
---

### Description

The CacheEntry class allows you to create a data object that can be used to store cached values with their keys used by [MemoryCache](../memory_cache).

### Constructors
Creates a new instance of the cache entry and assigns its values.

> CacheEntry(String key, dynamic value, int timeout)

- **key**: String - unique key to locate the value.
- **value**: dynamic - value to be stored.
- **timeout**: int - expiration timeout in milliseconds.


### Instance methods

#### getExpiration
Gets the expiration timeout.

> int getExpiration()

- **returns**: int - expiration timeout in milliseconds.


#### getKey
Gets the key to locate the cached value.

> String getKey()

- **returns**: String - value key.


#### getValue
Gets the cached value.

> dynamic getValue()

- **returns**: dynamic - value object.


#### isExpired
Checks if this value has already expired.

> bool isExpired()

- **returns**: bool - true if the value has already expired and false otherwise.


#### setValue
Sets a new value and extends its expiration.

> void setValue(value, int timeout)

- **value**: dynamic - new cached value.
- **timeout**: int - expiration timeout in milliseconds.
