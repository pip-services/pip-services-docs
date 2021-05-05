---
type: docs
title: "ICache"
linkTitle: "ICache"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Interface for caches that are used to cache values to improve performance.
---

### Methods

#### remove
Removes a value from the cache by its key.

>  remove(correlation_id: Optional[str], key: str)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique value key.


#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns None.

> retrieve(correlation_id: Optional[str], key: str): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique value key.
- **returns**: Any - a cached value or None if value wasn't found or timeout expired.


#### store
Stores value in the cache with expiration time.

> store(correlation_id: Optional[str], key: str, value: Any, timeout: int): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique value key.
- **value**: Any - a value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Any - a cached value stored in the cache.