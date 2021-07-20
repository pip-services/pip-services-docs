---
type: docs
title: "RedisLock"
linkTitle: "RedisLock"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-redis-dart"
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

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### releaseLock
Releases a prevously acquired lock by its key.

`@override`
> Future releaseLock(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique lock key to release.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

`@override`
> Future\<bool\> tryAcquireLock(String correlationId, String key, int ttl) 

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique lock key to acquire.
- **ttl**: int - lock timeout (time to live) in milliseconds.
- **returns**: Future\<bool\> - *true* if lock was successfully acquired and *false* otherwise.

### Examples

```dart
var lock = RedisLock();
lock.configure(ConfigParams.fromTuples([
  'host', 'localhost',
  'port', 6379
]));

await lock.open('123');
  ...
await lock.acquire('123', 'key1');

try {
    // Processing...
} finally {
   await lock.releaseLock('123', 'key1');
    // Continue...
}

```
