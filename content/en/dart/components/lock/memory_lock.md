---
type: docs
title: "MemoryLock"
linkTitle: "MemoryLock"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

`@override`
> Future releaseLock(String correlationId, String key)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a unique lock key to release.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

`@override`
> Future\<bool\> tryAcquireLock(String correlationId, String key, int ttl)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
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
