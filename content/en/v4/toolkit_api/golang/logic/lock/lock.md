---
type: docs
title: "Lock"
linkTitle: "Lock"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Abstract lock that implements the default lock acquisition routine.
---

**Implements:** [ILock](../ilock), [IReconfigurable](../../../components/config/ireconfigurable)

### Description

The Lock class represents an abstract lock that implements the defaul lock acquisition routine. 

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> func (c *Lock) AcquireLock(ctx [context.Context](../../../components/context/icontext), key string, ttl int64, timeout int64) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **timeout**: number - a lock acquisition timeout.


#### configure
Configures component by passing configuration parameters.

> func (c *Lock) Configure(ctx [context.Context](../../../components/context/icontext), config *config.ConfigParams)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

### Abstract methods

#### InheritLock
inherit lock from ILockOverrides
> func InheritLock(overrides ILockOverrides) *Lock


### See also
- #### [ILock](../ilock)

