---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-logic-dart"
description: >
    Lock used to synchronize the execution of a process using shared memory.

    
---

**Extends:** [Lock](../lock)

### Description

The MemoryLock class is used to synchronize the execution of a process using shared memory.

**Important points**

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### releaseLock
Releases a prevously acquired lock by its key.

`@override`
> Future releaseLock(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique lock key to release.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns a positive or negative result immediately.

`@override`
> Future\<bool\> tryAcquireLock(IContext? context, String key, int ttl)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **returns**: Future\<bool\> - lock result

### Examples

```dart
var lock = MemoryLock();
        try {
        lock.acquire("123", "key1")
            // Processing...
        } finally {
            lock.releaseLock("123", "key1",
                // Continue...
        }
    }
});
```

### See also
- #### [ILock](../ilock)
- #### [Lock](../lock)
