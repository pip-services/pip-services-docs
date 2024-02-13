---
type: docs
title: "MemcachedCache"
linkTitle: "MemcachedCache"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-memcached-gox"
description: >
    Distributed cache that stores values in Memcached's caching service.
---

### Description
The MemcachedCache class allows you to create distributed cache that stores values in Memcached's caching service. 

**Important points**

- The current implementation does not support authentication.

#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **max_size**: maximum number of values stored in this cache (default: 1000)        
    - **max_key_size**: maximum key length (default: 250)
    - **max_expiration**: maximum expiration duration in milliseconds (default: 2592000)
    - **max_value**: maximum value length (default: 1048576)
    - **pool_size**: pool size (default: 5)
    - **reconnect**: reconnection timeout in milliseconds (default: 10 sec)
    - **retries**: number of retries (default: 3)
    - **timeout**: default caching timeout in milliseconds (default: 1 minute)
    - **failures**: number of failures before stop retrying (default: 5)
    - **retry**: retry timeout in milliseconds (default: 30 sec)
    - **idle**: idle timeout before disconnecting in milliseconds (default: 5 sec)


#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection

### Constructors

#### NewMemcachedCache
Creates a new instance of this lock.

> NewMemcachedCache[T any]() [*MemcachedCache[T]]()

### Methods

#### Close
Closes a component and frees used resources.

> (c [*MemcachedCache[T]]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred

#### Contains
Contains check is value stores

> Contains(ctx context.Context, context [IContext](../../../components/context/icontext), key string) bool

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - a unique value key.

#### Configure
Configures a component by passing its configuration parameters.

> (c [*MemcachedCache[T]]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### IsOpen
Checks if the component is open.

> (c [*MemcachedCache[T]]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.
> (c [*MemcachedCache[T]]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred

#### Remove
Removes a value from the cache by its key.

> (c [*MemcachedCache[T]]()) Remove(ctx context.Context, context [IContext](../../../components/context/icontext), key string) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **returns**: error - error or nil if no errors occurred

#### Retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns nil.

> (c [*MemcachedCache[T]]()) Retrieve(ctx context.Context, context [IContext](../../../components/context/icontext), key string) (value T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **return**: (value T, err error) - cached value or *nil* if nothing was found.

#### SetReferences
Sets references to dependent components.

> (c [*MemcachedCache[T]]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

#### Store
Stores a value in the cache with an expiration time.

> (c [*MemcachedCache[T]]()) Store(ctx context.Context, context [IContext](../../../components/context/icontext), key string, value T, timeout int64) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **value**: T - value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: (result T, err error) - stored value


### Examples

```go
ctx := context.Background()

cache := NewMemcachedCache[string]()
cache.Configure(ctx, cconf.NewConfigParamsFromTuples(
  "host", "localhost",
  "port", 11211,
))
err := cache.Open(ctx, "123")
  ...
ret, err := cache.Store(ctx, "123", "key1", []byte("ABC"))
if err != nil {
	...
}
res, err := cache.Retrive(ctx, "123", "key1")
value, _ := res.([]byte)
fmt.Println(string(value))  // Result: "ABC"

```

