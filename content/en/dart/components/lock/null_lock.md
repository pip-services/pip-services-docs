---
type: docs
title: "NullLock"
linkTitle: "NullLock"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Dummy lock implementation with no real effect.

   
---

**Implements:** [ILock](../ilock)

### Description

The NullLock allows you to create a dummy lock with no real effect.

Important points

-  It can be used in testing or in situations when a lock is required but must be disabled.

### Instance methods

#### acquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

`@override`
> Future acquireLock(String correlationId, String key, int ttl, int timeout)

- **correlationId**: String -(optional) transaction id to trace execution through a call chain. 
- **key**: String - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **timeout**: int - a lock acquisition timeout.



#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

`@override`
> Future\<bool\> tryAcquireLock(String correlationId, String key, int ttl)

- **correlationId**: String -(optional) transaction id to trace execution through call chain. 
- **key**: String - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **return**: Future\<bool\> - lock result


#### releaseLock
Releases prevously acquired lock by its key.

`@override`
> Future releaseLock(String correlationId, String key)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a unique lock key to release.


### See also
- #### [ILock](../ilock)
