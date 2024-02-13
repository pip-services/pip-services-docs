---
type: docs
title: "CacheEntry"
linkTitle: "CacheEntry"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-logic-java"
description: >
    Data object to store cached values with their keys used by [MemoryCache](../memory_cache)
    
---

### Description

TODO: add description

### Constructors
Creates a new instance of the cache entry and assigns its values.

> `public` CacheEntry(String key, Object value, long timeout)

- **key**: String - a unique key to locate the value.
- **value**: Object - a value to be stored.
- **timeout**: long - expiration timeout in milliseconds.

### Instance methods

#### getKey
Gets the key to locate the cached value.

> `public`String getKey()

- **returns**: String - the value key.


#### getValue
Gets the cached value.

> `public` Object getValue()

- **returns**: String - the value object.

#### getExpiration
Gets the expiration timeout.

> `public` long getExpiration()

- **returns**: long - the expiration timeout in milliseconds.

#### setValue
Sets a new value and extends its expiration.

> `public` void setValue(Object value, long timeout)

- **value**: Object - a new cached value.
- **timeout**: long - a expiration timeout in milliseconds.

#### isExpired
Checks if this value already expired.

> `public` boolean isExpired()

- **returns**: boolean - true if the value already expires and false otherwise.

