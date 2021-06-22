---
type: docs
title: "ILock"
linkTitle: "ILock"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Interface for locks used to synchronize work or parallel processes and to prevent collisions.

    
---

### Description

The ILock interface provides the methods to create locks used to synchronize work or parallel processes and to prevent collisions.

Important points

- The interface allows to manage multiple locks identified by unique keys. 

### Methods

#### AcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> AcquireLock(correlationId string, key string, ttl int64, timeout int64) error

- **correlationId**: string -(optional) transaction id to trace execution through a call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: int64 - a lock timeout (time to live) in milliseconds.
- **timeout**: int64 - a lock acquisition timeout.
- **returns**: error - returns error if not ackuired



#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> TryAcquireLock(correlationId string, key string, ttl int64) (bool, error)

- **correlationId**: string -(optional) transaction id to trace execution through call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: int64 - a lock timeout (time to live) in milliseconds.
- **return**: (bool, error) - lock result


#### ReleaseLock
Releases prevously acquired lock by its key.

> ReleaseLock(correlationId string, key string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to release.
- **returns**: error - returns error if not released
