---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Dummy lock implementation with no real effect.

---

**Inherits**: [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

Important points

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Instance methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> `public` AcquireLock(string correlationId, string key, long ttl, long timeout)

- **correlationId**: string -(optional) transaction id to trace execution through call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: long - a lock timeout (time to live) in milliseconds.
- **timeout**: long - a lock acquisition timeout.


#### ReleaseLock
Releases prevously acquired lock by its key.

> `public` ReleaseLock(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to release.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` bool TryAcquireLock(string correlationId, string key, long ttl)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: long - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
