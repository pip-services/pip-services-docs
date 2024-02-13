---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Lock used to synchronize the execution of a process using shared memory.

    
---

**Extends:** [Lock](../lock)

### Description

The MemoryLock class is used to synchronize the execution of a process using shared memory.

Important points

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### ReleaseLock
Releases prevously acquired lock by its key.

> (c *MemoryLock) ReleaseLock(ctx [context.Context](../../../components/context/icontext), key string) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to release.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> func (c *MemoryLock) TryAcquireLock(ctx [context.Context](../../../components/context/icontext), key string, ttl int64) (bool, error) 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: int64 - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result

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

