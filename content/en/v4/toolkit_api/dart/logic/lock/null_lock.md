---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-logic-dart"
description: >
    Dummy lock implementation with no real effect.

   
---

**Implements:** [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

**Important points**

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Instance methods

#### acquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

`@override`
> Future acquireLock(IContext? context, String key, int ttl, int timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **timeout**: int - lock acquisition timeout.



#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns a positive or negative result immediately.

`@override`
> Future\<bool\> tryAcquireLock(IContext? context, String key, int ttl)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **return**: Future\<bool\> - lock result


#### releaseLock
Releases prevously acquired lock by its key.

`@override`
> Future releaseLock(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique lock key to release.


### See also
- #### [ILock](../ilock)
