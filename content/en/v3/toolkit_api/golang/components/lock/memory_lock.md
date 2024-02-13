---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
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
- **retry_timeout**: timeout (in milliseconds) to retry lock acquisition. (Default: 100)

### Constructors

#### NewMemoryLock
Creates new memory lock
 
> NewMemoryLock() [*MemoryLock]()


### Methods

#### ReleaseLock
Releases a prevously acquired lock by its key.

> (c [*MemoryLock]()) ReleaseLock(ctx context.Context, correlationId string, key string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.
- **returns**: error - returns error if not released


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> (c [*MemoryLock]()) TryAcquireLock(ctx context.Context, correlationId string, key string, ttl int64) (bool, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: int64 - lock timeout (time to live) in milliseconds.
- **returns**: (bool, error) - lock result

### Examples

```go
lock := NewMemoryLock()
err = lock.AcquireLock(context.Background(), "123", "key1")

if err == nil {
	 _ = lock.ReleaseLock(context.Background(), "123", "key1")
	// Processing...
}

```

### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
