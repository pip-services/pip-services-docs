---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Lock that is used to synchronize execution within one process using shared memory.

    Remember: This implementation is not suitable for synchronization of distributed processes.
---

**Implemenst:** [Lock](../lock)

See also [ILock](../ilock), [Lock](../lock)

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


**Example:**
```python
lock = MemoryLock()
lock.acquire_lock("123", "key1", None, None)
# processing
lock.release_lock("123", "key1")

```


### Methods

#### release_lock
Releases prevously acquired lock by its key.

> `abstractmethod` release_lock(correlation_id: Optional[str], key: str)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique lock key to release.


#### try_acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `abstractmethod` try_acquire_lock(correlation_id: Optional[str], key: str, ttl: float): bool

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique lock key to acquire.
- **ttl**: float - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
