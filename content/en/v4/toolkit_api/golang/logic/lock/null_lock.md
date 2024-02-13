---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Dummy lock implementation with no real effect.

---

**Implements:** [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

Important points

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Instance methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within given time interval.

> (c *NullLock) AcquireLock(ctx [context.Context](../../../components/context/icontext), key string, ttl int, timeout int) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: int64 - a lock timeout (time to live) in milliseconds.
- **timeout** int64 - a lock acquisition timeout
- **returns**: bool - lock result


#### ReleaseLock
Releases a prevously acquired lock by its key.

> (c *NullLock) ReleaseLock(ctx context.Context, key string) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to release.

#### TryAcquireLock
TryAcquireLock makes a single attempt to acquire a lock by its key. It returns immediately a positive or negative result.

> (c *NullLock) TryAcquireLock(ctx [context.Context](../../../components/context/icontext), key string, ttl int) (bool, error)
> 
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: int64 - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result

### See also
- #### [ILock](../ilock)

