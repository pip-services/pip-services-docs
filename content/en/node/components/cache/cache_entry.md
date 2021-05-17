---
type: docs
title: "CacheEntry"
linkTitle: "CacheEntry"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Data object to store cached values with their keys used by [MemoryCache](../memory_cache).
---

### Description

The CacheEntry class allows you to create a data object that can be used to store cached values with their keys used by [MemoryCache](../memory_cache).

### Constructors
Creates a new instance of the cache entry and assigns its values.

> `public` constructor(key: string, value: any, timeout: number)

- **key**: string - a unique key to locate the value.
- **value**: any - a value to be stored.
- **timeout**: number - expiration timeout in milliseconds.


### Instance methods

#### getExpiration
Gets the expiration timeout.

> `public` getExpiration(): number

- **returns**: number - the expiration timeout in milliseconds.


#### getKey
Gets the key to locate the cached value.

> `public` getKey(): string

- **returns**: string - the value key.


#### getValue
Gets the cached value.

> `public` getValue(): any

- **returns**: any - the value object.


#### isExpired
Checks if this value has already expired.

> `public` isExpired(): boolean

- **returns**: boolean - true if the value has already expired and false otherwise.


#### setValue
Sets a new value and extends its expiration.

> `public` setValue(value: any, timeout: number): void

- **value**: any - a new cached value.
- **timeout**: number - a expiration timeout in milliseconds.
