---
type: docs
title: "RedisLock"
linkTitle: "RedisLock"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-redis-gox"
description: >
    Distributed lock that is implemented based on the Redis in-memory database.

---

**Implements**: [Lock](../../../components/lock/lock)  

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
    - **db_num**: database number in Redis  (default 0)


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials


### Constructors

#### NewRedisLock
Creates a new instance of this lock.

> NewRedisLock() [*RedisLock]()

### Methods


#### Close
Closes the component and frees used resources.

> (c [*RedisLock]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*RedisLock]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**; context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> (c [*RedisLock]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> (c [*RedisLock]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### ReleaseLock
Releases a prevously acquired lock by its key.

> (c [*RedisLock]()) ReleaseLock(ctx context.Context, correlationId string, key string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.
- **returns**: error - error or nil if no errors occurred.

#### SetReferences
Sets references to dependent components.

> (c [*RedisLock]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> (c [*RedisLock]()) TryAcquireLock(ctx context.Context, correlationId string, key string, ttl int64) (result bool, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: int64 - lock timeout (time to live) in milliseconds.
- **returns**: (result bool, err error) - *true* if lock was successfully acquired and *false* otherwise.

### Examples

```golang
ctx := context.Background()

lock = NewRedisRedis();
lock.Configure(ctx, cconf.NewConfigParamsFromTuples(
  "host", "localhost",
  "port", 6379,
))

err = lock.Open(ctx, "123")
...

result, err := lock.TryAcquireLock(ctx, "123", "key1", 3000)
if result {
	// Processing...
}
err = lock.ReleaseLock(ctx, "123", "key1")
// Continue...

```
