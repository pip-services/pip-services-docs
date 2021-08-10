---
type: docs
title: "RedisLock"
linkTitle: "RedisLock"
gitUrl: "https://github.com/pip-services3-python/pip-services3-redis-python"
description: >
    Distributed lock that is implemented based on the Redis in-memory database.

---

**Extends**: [Lock](../../../components/lock/lock)  

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)


### Description

The RedisLock class allows you to create a distributed lock that is implemented based on the Redis in-memory database.


#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: key to retrieve parameters from credential store
    - **username**: username (currently is not used)
    - **password**: user's password
- **options**:
    - **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)
    - **retries**: number of retries (default: 3)


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Instance methods

#### close
Closes the component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### release_lock
Releases a prevously acquired lock by its key.

> release_lock(correlation_id: Optional[str], key: str)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **key**: str - unique lock key to release.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### try_acquire_lock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> try_acquire_lock(correlation_id: Optional[str], key: str, ttl: int): bool

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **key**: str - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **returns**: bool - *true* if lock was successfully acquired and *false* otherwise.

### Examples

```python

lock = RedisLock()
lock.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 6379
))
lock.open("123")
lock.acquire_lock("123", "key1", 3000, 1000)
try:
    # Processing...
    pass
finally:
    lock.release_lock("123", "key1")

```
