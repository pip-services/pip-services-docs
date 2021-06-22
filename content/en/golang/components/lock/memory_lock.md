---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Lock used to synchronize the execution of a process using shared memory.

    
---

**Implements:** [Lock](../lock)

### Description

The MemoryLock class is used to synchronize the execution of a process using shared memory.

Important points

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)

### Constructors

#### NewMemoryLock
Create new memory lock
 
> NewMemoryLock() [*MemoryLock]()


### Methods

#### ReleaseLock
Releases prevously acquired lock by its key.

> (c [*MemoryLock]()) ReleaseLock(correlationId string, key string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to release.
- **returns**: error - returns error if not released


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> (c [*MemoryLock]()) TryAcquireLock(correlationId string, key string, ttl int64) (bool, error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: int64 - a lock timeout (time to live) in milliseconds.
- **returns**: (bool, error) - lock result

### Examples

```go
lock := NewMemoryLock()
err = lock.Acquire("123", "key1")

if err == nil {
    defer _ = lock.ReleaseLock("123", "key1")
    // Processing...
}

```

### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
