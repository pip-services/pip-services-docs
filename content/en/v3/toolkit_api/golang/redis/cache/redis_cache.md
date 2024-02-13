---
type: docs
title: "RedisCache"
linkTitle: "RedisCache"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-redis-gox"
description: >
    Distributed cache that stores values in a Redis in-memory database.

---

### Description

The RedisCache class allows you to create distributed caches that store values in a Redis in-memory database.

#### Configuration parameters

- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from IDiscovery
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- credential(s):
    - **store_key**: key to retrieve parameters from credential store
    - **username**: username (currently is not used)
    - **password**: user's password
- options:
    - **retries**: number of retries (default: 3)
    - **timeout**: default caching timeout in milliseconds (default: 1 minute)
    - **db_num**: database number in Redis  (default 0)
    - **max_size**: maximum number of values stored in this cache (default: 1000)
    - **cluster**: enable redis cluster


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) stores to resolve credentials

### Constructors

#### NewRedisCache
Creates a new instance of this cache.

> NewRedisCache[T any]() [*RedisCache[T]]()

### Fields

<span class="hide-title-link">

#### connectionResolver
Connection resolver
> **connectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver) 

#### credentialResolver
Credential resolver
> **credentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Methods

#### Close
Closes a component and frees used resources.

> (c [*RedisCache[T]]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### Contains
Contains check is value stores.

> (c *RedisCache[T]) Contains(ctx context.Context, correlationId string, key string) bool

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string -  a unique value key.
- **returns**: bool - true if value contains.

#### Configure
Configures a component by passing its configuration parameters.

> (c [*RedisCache[T]]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### IsOpen
Checks if the component is open.

> (c [*RedisCache[T]]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> (c [*RedisCache[T]]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### Remove
Removes a value from the cache by its key.

> (c [*RedisCache[T]]()) Remove(ctx context.Context, correlationId string, key string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: error - error or nil if no errors occurred.

#### Retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or has expired, it returns nil.

> (c [*RedisCache[T]]()) Retrieve(ctx context.Context, correlationId string, key string) (value interface{}, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: (value interface{}, err error) - retrieved cached value or *nil* if nothing was found.

#### SetReferences
Sets references to dependent components.

> (c [*RedisCache[T]]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### Store
Stores a value in the cache with an expiration time.

> (c [*RedisCache[T]]()) Store(ctx context.Context, correlationId string, key string, value interface{}, timeout int64) (result interface{}, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: interface{} - value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: (result interface{}, err error) - stored value.


### Examples
```go
ctx := context.Background()

cache = NewRedisCache[string]();
cache.Configure(ctx, cconf.NewConfigParamsFromTuples(
  "host", "localhost",
  "port", 6379,
))

err = cache.Open(ctx, "123")
...

ret, err := cache.Store(ctx, "123", "key1", []byte("ABC"))
if err != nil {
	...
}

res, err := cache.Retrieve(ctx, "123", "key1")
value, _ := res.([]byte)
fmt.Println(string(value))     // Result: "ABC"

```
