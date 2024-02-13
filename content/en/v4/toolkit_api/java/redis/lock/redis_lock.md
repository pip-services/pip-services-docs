---
type: docs
title: "RedisLock"
linkTitle: "RedisLock"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-redis-java"
description: >
    Distributed lock that is implemented based on the Redis in-memory database.

---

**Extends**: [Lock](../../../logic/lock/lock)  

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable)


### Description

The RedisLock class enables the creation of a distributed lock using Redis in-memory database, providing efficient synchronization and coordination among multiple processes or nodes in distributed systems, thereby enhancing performance and reliability


#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials



### Instance methods

#### close
Closes the component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - true if the component is open and false otherwise.

#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### releaseLock
Releases a prevously acquired lock by its key.

> `public` void releaseLock([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique lock key to release.

#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` boolean tryAcquireLock([IContext](../../../components/context/icontext) context, String key, int ttl)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **returns**: boolean - *true* if lock was successfully acquired and *false* otherwise.

### Examples


