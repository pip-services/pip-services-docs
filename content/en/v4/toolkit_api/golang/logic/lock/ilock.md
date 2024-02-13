---
type: docs
title: "ILock"
linkTitle: "ILock"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Interface for locks used to synchronize work or parallel processes and to prevent collisions.

    
---

### Description

The ILock interface provides the methods to create locks used to synchronize work or parallel processes and to prevent collisions.

Important points

- The interface allows to manage multiple locks identified by unique keys. 

### Instance methods

#### acquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> acquireLock(context: [IContext](../../../components/context/icontext), key: string, ttl: number, timeout: number): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **timeout**: number - a lock acquisition timeout.



#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> tryAcquireLock(context: [IContext](../../../components/context/icontext), key: string, ttl: number): Promise\<boolean\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **return**: Promise\<boolean\> - lock result


#### releaseLock
Releases prevously acquired lock by its key.

> releaseLock(context: [IContext](../../../components/context/icontext), key: string) :Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to release.

