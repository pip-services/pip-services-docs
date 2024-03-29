---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-logic-python"
description: >
    Dummy lock implementation with no real effect.

   
---

**Implements:** [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

Important points

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Instance methods

#### acquire_lock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> acquire_lock(context: Optional[IContext], key: str, ttl: int, timeout: int)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: str - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **timeout**: int - a lock acquisition timeout.

#### release_lock
Releases prevously acquired lock by its key.

> release_lock(context: Optional[IContext], key: str)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique lock key to release.


#### try_acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> try_acquire_lock(context: Optional[IContext], key: str, ttl: int): bool

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
