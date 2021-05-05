---
type: docs
title: "NullCache"
linkTitle: "NullCache"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Dummy cache implementation that doesn't do anything.

    It can be used in testing or in situations when cache is required
    but shall be disabled.

---

**Implements**: [ICache](../icache)

See also [ICache](../icache)

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


### See also
- #### [ICache](../icache)