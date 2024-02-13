---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-logic-dotnet"
description: >
    Dummy lock implementation with no real effect.

---

**Inherits**: [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

**Important points**

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Instance methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> `public` AcquireLock(IContext context, string key, long ttl, long timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: string - unique lock key to acquire.
- **ttl**: long - lock timeout (time to live) in milliseconds.
- **timeout**: long - lock acquisition timeout.


#### ReleaseLock
Releases a prevously acquired lock by its key.

> `public` ReleaseLock(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique lock key to release.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` bool TryAcquireLock(IContext context, string key, long ttl)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: long - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
