---
type: docs
title: "ILock"
linkTitle: "ILock"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Interface for locks used to synchronize work or parallel processes and to prevent collisions.

    
---

### Description

The ILock interface provides the methods to create locks used to synchronize work or parallel processes and to prevent collisions.

Important points

- The interface allows to manage multiple locks identified by unique keys. 

### Instance methods

#### acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> acquire_lock(correlation_id: Optional[str], key: str, ttl: float, timeout: float)

- **correlation_id**: Optional[str] -(optional) transaction id to trace execution through a call chain. 
- **key**: str - a unique lock key to acquire.
- **ttl**: float - a lock timeout (time to live) in milliseconds.
- **timeout**: float - a lock acquisition timeout.



#### try_acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> try_acquire_lock(correlation_id: Optional[str], key: str, ttl: float): bool

- **correlation_id**: Optional[str] -(optional) transaction id to trace execution through call chain. 
- **key**: str - a unique lock key to acquire.
- **ttl**: float - a lock timeout (time to live) in milliseconds.
- **return**: bool - lock result


#### release_lock
Releases prevously acquired lock by its key.

> release_lock(correlation_id: Optional[str], key: str)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique lock key to release.
