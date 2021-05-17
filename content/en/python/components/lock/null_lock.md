---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Dummy lock implementation with no real effect.

   
---

**Implemenst:** [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

Important points

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Instance methods

#### acquire_lock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> acquire_lock(correlation_id: Optional[str], key: str, ttl: float, timeout: float)

- **correlation_id**: Optional[str] -(optional) transaction id to trace execution through call chain. 
- **key**: str - a unique lock key to acquire.
- **ttl**: float - a lock timeout (time to live) in milliseconds.
- **timeout**: float - a lock acquisition timeout.

#### release_lock
Releases prevously acquired lock by its key.

> release_lock(correlation_id: Optional[str], key: str)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique lock key to release.


#### try_acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> try_acquire_lock(correlation_id: Optional[str], key: str, ttl: float): bool

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **key**: str - a unique lock key to acquire.
- **ttl**: float - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
