---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-logic-node"
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

### Examples

```typescript
let lock = new MemoryLock();
   
await lock.acquire(new Context(), "key1");
try {
   // Processing...
} finally {
   await lock.releaseLock(new Context(), "key1");
}
// Continue...

```

### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
