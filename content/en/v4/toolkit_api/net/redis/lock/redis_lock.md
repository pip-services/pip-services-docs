---
type: docs
title: "RedisLock"
linkTitle: "RedisLock"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-redis-dotnet"
description: >
    Distributed lock that is implemented based on the Redis in-memory database.

---

**Inherits**: [Lock](../../../logic/lock/lock), [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable)


### Description

The RedisLock class allows you to create a distributed lock that is implemented based on the Redis in-memory database.


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

#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### ReleaseLock
Releases a prevously acquired lock by its key.

> `public override` void ReleaseLock(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique lock key to release.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public override` bool TryAcquireLock(IContext context, string key, long ttl)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: long - lock timeout (time to live) in milliseconds.
- **returns**: bool - *true* if lock was successfully acquired and *false* otherwise.

### Examples

```cs
var lock = new RedisLock();
lock.Configure(ConfigParams.FromTuples(
  "host", "localhost",
  "port", 6379 ));

lock.OpenAsync("123");

lock.TryAcquireLock("123", "key1", 0);
lock.ReleaseLock("123", "key1");

```
