---
type: docs
title: "RedisLock"
linkTitle: "RedisLock"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-redis-nodex"
description: >
    Distributed lock that is implemented based on Redis in-memory database.

---

**Extends**: [Lock](../../../components/lock/lock)  

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)


### Description

TODO: add description


#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: key to retrieve parameters from credential store
    - **username**: user name (currently is not used)
    - **password**: user password
- **options**:
    - **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)
    - **retries**: number of retries (default: 3)


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Instance methods

#### close
Configures components by passing configuration parameters.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### configure
Configures components by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### releaseLock
Releases prevously acquired lock by its key.

> `public` releaseLock(correlationId: string, key: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to release.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` tryAcquireLock(correlationId: string, key: string, ttl: number): Promise\<boolean\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique lock key to acquire.
- **ttl**: number - a lock timeout (time to live) in milliseconds.
- **returns**: Promise\<boolean\> - *true* if lock was successfully acquired and *false* otherwise.

### Examples

```typescript
let lock = new RedisRedis();
lock.configure(ConfigParams.fromTuples(
  "host", "localhost",
  "port", 6379
));
lock.open("123");
await lock.acquire("123", "key1");
try {
  // Processing...
} finally {
  await lock.releaseLock("123", "key1");
}

```
