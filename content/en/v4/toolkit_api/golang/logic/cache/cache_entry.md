---
type: docs
title: "CacheEntry"
linkTitle: "CacheEntry"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Data object to store cached values with their keys used by [MemoryCache](../memory_cache)
    
---

### Description

TODO: add description

### Constructors
Creates a new instance of the cache entry and assigns its values.

> NewCacheEntry[T any](key string, value T, timeout int64) *CacheEntry[T]

- **key**: string - a unique key to locate the value.
- **value**: T - a value to be stored.
- **timeout**: int64 - expiration timeout in milliseconds.

### Instance methods

#### Key
Gets the key to locate the cached value.

> (c *CacheEntry[T]) Key() string

- **returns**: string - the value key.


#### Value
Gets the cached value.

> func (c *CacheEntry[T]) Value() T

- **returns**: any - the value object.

#### Expiration
Gets the expiration timeout.

> func (c *CacheEntry[T]) Expiration() time.Time

- **returns**: time -Time the expiration timeout in milliseconds.

#### setValue
Sets a new value and extends its expiration.

> (c *CacheEntry[T]) SetValue(value T, timeout int64)

- **value**: T - a new cached value.
- **timeout**: int64 - a expiration timeout in milliseconds.

#### isExpired
Checks if this value already expired.

> func (c *CacheEntry[T]) IsExpired() bool

- **returns**: boolean - true if the value already expires and false otherwise.


