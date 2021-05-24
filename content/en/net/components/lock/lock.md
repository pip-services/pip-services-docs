---
type: docs
title: "Lock"
linkTitle: "Lock"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Abstract lock that implements the default lock acquisition routine.
---

**Inherits**: [ILock](../ilock), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The Lock class represents an abstract lock that implements the defaul lock acquisition routine. 

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> `public` void AcquireLock(string correlationId, string key, long ttl, long timeout)

- **correlationId**: string -(optional) transaction id to trace execution through a call chain. 
- **key**: string - a unique lock key to acquire.
- **ttl**: long - a lock timeout (time to live) in milliseconds.
- **timeout**: long - a lock acquisition timeout.


#### Configure
Configures component by passing configuration parameters.

> `public virual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Abstract methods

#### ReleaseLock
Releases a prevously acquired lock by its key.

> `public abstract` void ReleaseLock(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique lock key to release.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public abstract` bool TryAcquireLock(string correlationId, string key, long ttl)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: long - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
