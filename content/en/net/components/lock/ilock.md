---
type: docs
title: "ILock"
linkTitle: "ILock"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for locks used to synchronize work or parallel processes and to prevent collisions.

    
---

### Description

The ILock interface provides the methods to create locks used to synchronize work or parallel processes and to prevent collisions.

Important points

- The interface allows to manage multiple locks identified by unique keys. 

### Instance methods

#### AcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> void AcquireLock(string correlationId, string key, long ttl, long timeout)

- **correlationId**: string -(optional) transaction id to trace execution through a call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: long - a lock timeout (time to live) in milliseconds.
- **timeout**: long - a lock acquisition timeout.



#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> bool TryAcquireLock(string correlationId, string key, long ttl)

- **correlationId**: string -(optional) transaction id to trace execution through call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: long - a lock timeout (time to live) in milliseconds.
- **return**: lock result


#### ReleaseLock
Releases prevously acquired lock by its key.

> void ReleaseLock(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to release.
