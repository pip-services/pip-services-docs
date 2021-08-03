---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Lock used to synchronize the execution of a process using shared memory.

    
---

**Inherits**: [Lock](../lock)

### Description

The MemoryLock class is used to synchronize the execution of a process using shared memory.

**Important points**

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### ReleaseLock
Releases a prevously acquired lock by its key.

> `public override` void ReleaseLock(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` bool TryAcquireLock(string correlationId, string key, long ttl)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: long - lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result

### Examples

```cs
var lock = new MemoryLock();
lock.TryAcquireLock("123", "key1", 0);
try {
   // Processing...
}
finally  {
   lock.ReleaseLock("123", "key1");
   // Continue...
});

```

### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
