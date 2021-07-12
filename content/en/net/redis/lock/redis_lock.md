---
type: docs
title: "RedisLock"
linkTitle: "RedisLock"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-redis-dotnet"
description: >
    Distributed lock that is implemented based on the Redis in-memory database.

---

**Inherits**: [Lock](../../../components/lock/lock), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)


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

#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### ReleaseLock
Releases a prevously acquired lock by its key.

> `public override` void ReleaseLock(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public override` bool TryAcquireLock(string correlationId, string key, long ttl)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
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
