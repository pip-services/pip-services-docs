---
type: docs
title: "MemoryCache"
linkTitle: "MemoryCache"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Cache that stores values in the process memory.


---

**Implements**: [ICache](../icache), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The MemoryCache class allows you to create a cache that stoers values in the process memory.

Important points

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **timeout**: default caching timeout in milliseconds (default: 1 minute)
- **max_size**: maximum number of values stored in this cache (default: 1000)

### Instance methods

#### configure
Configures component by passing configuration parameters.

>  configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### remove
Removes a value from the cache by its key.

> remove(correlation_id: Optional[str], key: str)

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

### Examples

```python
cache = MemoryCache()
cache.store("123", "key1", "ABC", 0)
```

### See also
- #### [ICache](../icache)
