---
type: docs
title: "ILock"
linkTitle: "ILock"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for locks used to synchronize work or parallel processes and to prevent collisions.

    
---

### Description

The ILock interface provides methods to create locks used to synchronize work or parallel processes and to prevent collisions.

**Important points**

- The interface allows to manage multiple locks identified by unique keys. 

### Instance methods

#### AcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> void AcquireLock(string correlationId, string key, long ttl, long timeout)

- **correlationId**: string -(optional) transaction id used to trace execution through the call chain. 
- **key**: string - unique lock key to acquire.
- **ttl**: long - lock timeout (time to live) in milliseconds.
- **timeout**: long - lock acquisition timeout.



#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> bool TryAcquireLock(string correlationId, string key, long ttl)

- **correlationId**: string -(optional) transaction id used to trace execution through the call chain. 
- **key**: string - unique lock key to acquire.
- **ttl**: long - lock timeout (time to live) in milliseconds.
- **return**: bool - lock result


#### ReleaseLock
Releases a prevously acquired lock by its key.

> void ReleaseLock(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.
