---
type: docs
title: "Lock"
linkTitle: "Lock"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Abstract lock that implements the default lock acquisition routine.
---

**Implemenst:** [ILock](../ilock), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The Lock class represents an abstract lock that implements the defaul lock acquisition routine. 

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### acquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> `public` acquireLock(correlationId: string, key: string, ttl: number, timeout: number): Promise\<void\>

- **correlationId**: string -(optional) transaction id to trace execution through a call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **timeout**: number - a lock acquisition timeout.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Abstract methods

#### releaseLock
Releases a prevously acquired lock by its key.

> `public abstract` releaseLock(correlationId: string, key: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique lock key to release.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public abstract` tryAcquireLock(correlationId: string, key: string, ttl: number): Promise\<boolean\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
