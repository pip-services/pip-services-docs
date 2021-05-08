---
type: docs
title: "CacheEntry"
linkTitle: "CacheEntry"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Data object to store cached values with their keys used by [MemoryCache](../memory_cache).
---

### Description

The CacheEntry class allows you to create a data object that can be used to store cached values with their keys used by [MemoryCache](../memory_cache).

### Constructors
Creates a new instance of the cache entry and assigns its values.

> CacheEntry(key: str, value: str, timeout: int)

- **key**: str - a unique key to locate the value.
- **value**: str - a value to be stored.
- **timeout**: int - expiration timeout in milliseconds.


### Instance methods

#### get_expiration
Gets the expiration timeout.

>  get_expiration(): int

- **returns**: int - the expiration timeout in milliseconds.


#### get_key
Gets the key to locate the cached value.

> get_key(): str

- **returns**: str - the value key.


#### get_value
Gets the cached value.

> get_value(): Any

- **factory**: Any - the value object.


#### is_expired
Checks if this value already expired.

> is_expired(): bool

- **returns**: bool - true if the value already expires and false otherwise.


#### set_value
Sets a new value and extends its expiration.

> set_value(value: Any, timeout: int)

- **value**: bool - a new cached value.
- **timeout**: int - a expiration timeout in milliseconds.
