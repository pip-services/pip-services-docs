---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Dummy lock implementation that doesn't do anything.

    It can be used in testing or in situations when lock is required
    but shall be disabled.
---

**Implemenst:** [ILock](../ilock)

See also [ILock](../ilock)


### Methods

#### acquire_lock
Makes multiple attempts to acquire a lock by its key within give time interval.

> acquire_lock(correlation_id: Optional[str], key: str, ttl: float, timeout: float)

- **correlation_id**: Optional[str] -(optional) transaction id to trace execution through call chain. 
- **key**: str - a unique lock key to acquire.
- **ttl**: float - a lock timeout (time to live) in milliseconds.
- **timeout**: float - a lock acquisition timeout.


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
