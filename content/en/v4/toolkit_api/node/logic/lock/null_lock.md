---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-logic-node"
description: >
    Dummy lock implementation with no real effect.

---

**Implements:** [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

Important points

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Instance methods

#### acquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> `public` acquireLock(context: [IContext](../../../components/context/icontext), key: string, ttl: number, timeout: number)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **timeout**: number - a lock acquisition timeout.


#### releaseLock
Releases prevously acquired lock by its key.

> `public` releaseLock(context: [IContext](../../../components/context/icontext), key: string)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to release.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` tryAcquireLock(context: [IContext](../../../components/context/icontext), key: string, ttl: number): bool

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
