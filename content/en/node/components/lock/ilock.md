---
type: docs
title: "ILock"
linkTitle: "ILock"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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

> acquireLock(correlationId: string, key: string, ttl: number, timeout: number): Promise\<void\>

- **correlationId**: string -(optional) transaction id to trace execution through a call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **timeout**: number - a lock acquisition timeout.



#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> tryAcquireLock(correlationId: string, key: string, ttl: number): Promise\<boolean\>

- **correlationId**: string -(optional) transaction id to trace execution through call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **timeout**: number - a lock acquisition timeout.
- **return**: lock result


#### releaseLock
Releases prevously acquired lock by its key.

> releaseLock(correlationId: string, key: string) :Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to release.
