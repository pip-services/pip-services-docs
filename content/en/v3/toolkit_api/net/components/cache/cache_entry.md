---
type: docs
title: "CacheEntry"
linkTitle: "CacheEntry"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Data object used to store cached values with their keys used by [MemoryCache](../memory_cache).
---

### Description

The CacheEntry class allows you to create a data object that can be used to store cached values with their keys used by [MemoryCache](../memory_cache).

### Constructors
Creates a new instance of the cache entry and assigns its values.

> `public` CacheEntry(string key, object value, long timeout)

- **key**: string - unique key to locate the value.
- **value**: object - value to be stored.
- **timeout**: long - expiration timeout in milliseconds.


### Properties

#### Key
Gets the key to locate the cached value.

> `public` string Key { get; }

#### Value
Gets the cached value.

> `public` object Value [ get, private set ]

#### Expiration
Gets the expiration timeout.

> `public` long Expiration [ get, private set ]


### Instance methods


#### IsExpired
Checks if this value has already expired.

> `public` bool IsExpired()

- **returns**: bool - true if the value has already expired and false otherwise.


#### SetValue
Sets a new value and extends its expiration.

> `public` void SetValue(object value, long timeout)

- **value**: object - new cached value.
- **timeout**: long - expiration timeout in milliseconds.
