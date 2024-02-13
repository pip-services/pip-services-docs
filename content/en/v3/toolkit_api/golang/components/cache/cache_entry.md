---
type: docs
title: "CacheEntry"
linkTitle: "CacheEntry"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Data object to store cached values with their keys used by [MemoryCache](../memory_cache).
---

### Description

The CacheEntry class allows you to create a data object that can be used to store cached values with their keys used by [MemoryCache](../memory_cache).

### Constructors
Creates a new instance of the cache entry and assigns its values.
value T a value to be stored.
> NewCacheEntry[T any](key string, value any, timeout int64) [*CacheEntry[T]]()

- **key**: string - unique key to locate the value.
- **value**: any - value to be stored.
- **timeout**: int64 - expiration timeout in milliseconds.


### Methods

#### Expiration
Gets the expiration timeout.

> (c *CacheEntry[T]) Expiration() time.Time

- **returns**: time.Time - expiration timeout in milliseconds.


#### Key
Gets the key to locate the cached value.

> (c *CacheEntry[T]) Key() string

- **returns**: string - value key.


#### Value
Gets the cached value.

> (c *CacheEntry[T]) Value() T

- **returns**: T - value object.


#### IsExpired
Checks if this value has already expired.

> (c *CacheEntry[T]) IsExpired() bool

- **returns**: bool - true if the value has already expired and false otherwise.


#### SetValue
Sets a new value and extends its expiration.

> (c *CacheEntry[T]) SetValue(value T, timeout int64)

- **value**: T - new cached value.
- **timeout**: int64 - expiration timeout in milliseconds.
