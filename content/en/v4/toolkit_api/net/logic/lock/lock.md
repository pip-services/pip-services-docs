---
type: docs
title: "Lock"
linkTitle: "Lock"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-logic-dotnet"
description: >
    Abstract lock that implements the default lock acquisition routine.
---

**Inherits**: [ILock](../ilock), [IReconfigurable](../../../components/config/ireconfigurable)

### Description

The Lock class represents an abstract lock that implements the defaul lock acquisition routine. 

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> `public` void AcquireLock(IContext context, string key, long ttl, long timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **key**: string - unique lock key to acquire.
- **ttl**: long - lock timeout (time to live) in milliseconds.
- **timeout**: long - lock acquisition timeout.


#### Configure
Configures a component by passing its configuration parameters.

> `public virual` void Configure([ConfigParams](../../../components/config/config_params) config)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Abstract methods

#### ReleaseLock
Releases a prevously acquired lock by its key.

> `public abstract` void ReleaseLock(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique lock key to release.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public abstract` bool TryAcquireLock(IContext context, string key, long ttl)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: long - lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
