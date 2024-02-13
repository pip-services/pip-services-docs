---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://[IContext](../../../components/context/icontext)"
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

> `public` void releaseLock([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique lock key to release.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` boolean tryAcquireLock([IContext](../../../components/context/icontext) context, String key, int ttl)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **returns**: boolean - lock result

### Examples

```java
{@code
  MemoryLock lock = new MemoryLock();
  try {
   // Processing...
  }
  finally  {
  lock.releaseLock("123", "key1");
   // Continue...
  });
  }

```

### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
