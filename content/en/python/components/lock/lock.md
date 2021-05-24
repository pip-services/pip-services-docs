---
type: docs
title: "Lock"
linkTitle: "Lock"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Abstract lock that implements the default lock acquisition routine.
---

**Implements:** [ILock](../ilock), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The Lock class represents an abstract lock that implements the defaul lock acquisition routine. 

#### Configuration parameters
**options**:
- **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)


### Instance methods

#### acquire_lock
Makes multiple attempts to acquire a lock by its key within a given time interval.

> acquire_lock(correlation_id: Optional[str], key: str, ttl: float, timeout: float)

- **correlation_id**: Optional[str] -(optional) transaction id to trace execution through a call chain. 
- **key**: str - a unique lock key to acquire.
- **ttl**: float - a lock timeout (time to live) in milliseconds.
- **timeout**: float - a lock acquisition timeout.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Abstract methods

#### release_lock
Releases a prevously acquired lock by its key.

> `abstractmethod` release_lock(correlation_id: Optional[str], key: str)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **key**: str - a unique lock key to release.


#### try_acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `abstractmethod` try_acquire_lock(correlation_id: Optional[str], key: str, ttl: float): bool

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a unique lock key to acquire.
- **ttl**: float - a lock timeout (time to live) in milliseconds.
- **returns**: bool - lock result


### See also
- #### [ILock](../ilock)
