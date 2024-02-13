---
type: docs
title: "ILock"
linkTitle: "ILock"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-logic-dart"
description: >
    Interface for locks used to synchronize work or parallel processes and to prevent collisions.

    
---

### Description

The ILock interface provides the methods to create locks used to synchronize work or parallel processes and to prevent collisions.

**Important points**

- The interface allows to manage multiple locks identified by unique keys. 

### Instance methods

#### acquireLock
Makes a single attempt to acquire a lock by its key.
It returns a positive or negative result immediately.

> Future acquireLock(IContext? context, String key, int ttl, int timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **timeout**: int - lock acquisition timeout.



#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns a positive or negative result immediately.

> Future\<bool\> tryAcquireLock(IContext? context, String key, int ttl)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **return**: Future\<bool\> - lock result


#### releaseLock
Releases a prevously acquired lock by its key.

> Future releaseLock(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique lock key to release.
