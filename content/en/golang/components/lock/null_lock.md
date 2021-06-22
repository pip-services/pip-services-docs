---
type: docs
title: "NullLock"
linkTitle: "NullLock"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Dummy lock implementation with no real effect.

   
---

**Implements:** [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

Important points

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Constructors

#### NewNullLock
Create new null lock

> NewNullLock() [*NullLock]()

### Methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> (c [*NullLock]()) AcquireLock(correlationId string, key string, ttl int, timeout int) error

- **correlationId**: string -(optional) transaction id to trace execution through call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **timeout**: int - a lock acquisition timeout.
- **returns**: error - returns error if not acquired.


#### ReleaseLock
Releases prevously acquired lock by its key.

> (c [*NullLock]()) ReleaseLock(correlationId string, key string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to release.
- **returns**: error - returns error if not released.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> (c [*NullLock]()) TryAcquireLock(correlationId string, key string, ttl int) (bool, error)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **returns**: (bool, error) - lock result


### See also
- #### [ILock](../ilock)
