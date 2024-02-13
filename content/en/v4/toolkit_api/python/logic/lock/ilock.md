---
type: docs
title: "ILock"
linkTitle: "ILock"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-logic-python"
description: >
    Interface for locks used to synchronize work or parallel processes and to prevent collisions.

    
---

### Description

The ILock interface provides the methods to create locks used to synchronize work or parallel processes and to prevent collisions.

**Important points**

- The interface allows to manage multiple locks identified by unique keys. 

### Instance methods

#### acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> acquire_lock(context: Optional[IContext], key: str, ttl: int, timeout: int)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: str - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **timeout**: int - a lock acquisition timeout.



#### try_acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> try_acquire_lock(context: Optional[IContext], key: str, ttl: int): bool

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: str - a unique lock key to acquire.
- **ttl**: int - a lock timeout (time to live) in milliseconds.
- **return**: bool - lock result


#### release_lock
Releases prevously acquired lock by its key.

> release_lock(context: Optional[IContext], key: str)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique lock key to release.
