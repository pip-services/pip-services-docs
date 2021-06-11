---
type: docs
title: "CacheEntry"
linkTitle: "CacheEntry"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Data object to store cached values with their keys used by [MemoryCache](../memory_cache).
---

### Description

The CacheEntry class allows you to create a data object that can be used to store cached values with their keys used by [MemoryCache](../memory_cache).

### Constructors
Creates a new instance of the cache entry and assigns its values.

> NewCacheEntry(key string, value interface{}, timeout int64) [*CacheEntry]()

- **key**: string - a unique key to locate the value.
- **value**: interface{} - a value to be stored.
- **timeout**: int64 - expiration timeout in milliseconds.


### Methods

#### Expiration
Gets the expiration timeout.

> (c *CacheEntry) Expiration() time.Time

- **returns**: time.Time - the expiration timeout in milliseconds.


#### Key
Gets the key to locate the cached value.

> (c *CacheEntry) Key() string

- **returns**: string - the value key.


#### Value
Gets the cached value.

> (c *CacheEntry) Value() interface{}

- **returns**: interface{} - the value object.


#### IsExpired
Checks if this value has already expired.

> (c *CacheEntry) IsExpired() bool

- **returns**: bool - true if the value has already expired and false otherwise.


#### SetValue
Sets a new value and extends its expiration.

> (c *CacheEntry) SetValue(value interface{}, timeout int64)

- **value**: interface{} - a new cached value.
- **timeout**: int64 - a expiration timeout in milliseconds.
