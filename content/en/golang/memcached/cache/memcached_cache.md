---
type: docs
title: "MemcachedCache"
linkTitle: "MemcachedCache"
gitUrl: "https://github.com/pip-services3-go/pip-services3-memcached-go"
description: >
    Distributed cache that stores values in Memcached's caching service.
---

### Description
The MemcachedCache class allows you to create distributed cache that stores values in Memcached's caching service. 

Important points

- The current implementation does not support authentication.

#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
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
    - **idle**: idle timeout before disconnect in milliseconds (default: 5 sec)


#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection

### Constructors

#### NewMemcachedLock
Method are creates a new instance of this lock.

> NewMemcachedLock() [*MemcachedLock]()

### Instance methods

#### Close
Closes a component and frees used resources.

> (c [*MemcachedCache]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured

#### Configure
Configures a component by passing its configuration parameters.

> (c [*MemcachedCache]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### IsOpen
Checks if the component is open.

> (c [*MemcachedCache]()) IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.
> (c [*MemcachedCache]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured

#### Remove
Removes a value from the cache by its key.

> (c [*MemcachedCache]()) Remove(correlationId string, key string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: error - error or nil no errors occured

#### Retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns nil.

> (c [*MemcachedCache]()) Retrieve(correlationId string, key string) (value interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **return**: (value interface{}, err error) - cached value or *nil* if nothing was found.

#### SetReferences
Sets references to dependent components.

> (c [*MemcachedCache]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### Store
Stores a value in the cache with an expiration time.

> (c [*MemcachedCache]()) Store(correlationId string, key string, value interface{}, timeout int64) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: interface{} - value to store.
- **timeout**: int64 - expiration timeout in milliseconds.
- **returns**: (result interface{}, err error) - stored value


### Examples

```go
lock := NewMemcachedLock();
lock.Configure(cconf.NewConfigParamsFromTuples(
  "host", "localhost",
  "port", 11211,
));
err := lock.Open("123")
if err != nil {
  ...
}
result, err := lock.TryAcquireLock("123", "key1", 3000)
if result {
	// Processing...
}
err = lock.ReleaseLock("123", "key1")
// Continue...

```
