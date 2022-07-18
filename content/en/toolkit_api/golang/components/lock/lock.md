---
type: docs
title: "Lock"
linkTitle: "Lock"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Abstract lock that implements the default lock acquisition routine.
---

**Implements:** [ILock](../ilock)

### Description

The Lock class represents an abstract lock that implements the defaul lock acquisition routine. 

#### Configuration parameters
**options**:
- **retry_timeout**: timeout (in milliseconds) to retry lock acquisition. (Default: 100)

### Constructors

#### InheritLock
Inherits lock from ILock

> InheritLock(overrides ILockOverrides) [*Lock]()

- **overrides**: ILockOverrides - inherited lock

### Methods

#### AcquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> (c [*Lock]()) AcquireLock(correlationId string, key string, ttl int64, timeout int64) error

- **correlationId**: string -(optional) transaction id used to trace execution through the call chain. 
- **key**: string - unique lock key to acquire.
- **ttl**: int64 - lock timeout (time to live) in milliseconds.
- **timeout**: int64 - lock acquisition timeout.
- **returns**: error - returns error if not acquired


#### Configure
Configures component by passing configuration parameters.

> (c [*Lock]()) Configure(config [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


### See also
- #### [ILock](../ilock)
