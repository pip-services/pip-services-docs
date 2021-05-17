---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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

#### releaseLock
Releases prevously acquired lock by its key.

> `public` release_lock(correlationId: string, key: string)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to release.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` try_acquire_lock(correlationId: string, key: string, ttl: number): bool

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result

### Examples

```typescript
let lock = new MemoryLock();
   
await lock.acquire("123", "key1");
try {
   // Processing...
} finally {
   await lock.releaseLock("123", "key1");
}
// Continue...

```

### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
