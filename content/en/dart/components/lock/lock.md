---
type: docs
title: "Lock"
linkTitle: "Lock"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Abstract lock that implements the default lock acquisition routine.
---

**Implements:** [ILock](../ilock), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The Lock class represents an abstract lock that implements the default lock acquisition routine. 

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### acquireLock
Makes multiple attempts to acquire a lock by its key within a given time interval.

`@override`
> Future acquireLock(String correlationId, String key, int ttl, int timeout)

- **correlationId**: String -(optional) transaction id used to trace execution through a call chain. 
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **timeout**: int - lock acquisition timeout.


#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### releaseLock
Releases a prevously acquired lock by its key.

`@override`
> Future releaseLock(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.
- **key**: String - unique lock key to release.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns a positive or negative result immediately.

> Future\<bool\> tryAcquireLock(String correlationId, String key, int ttl)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **returns**: Future\<bool\> - lock result


### See also
- #### [ILock](../ilock)
