---
type: docs
title: "MemoryCache"
linkTitle: "MemoryCache"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Cache that stores values in the process memory.


---

**Implements**: [ICache](../icache), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The MemoryCache class allows you to create a cache that stores values in the process memory.

**Important points**

- This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters
**options**:
- **timeout**: default caching timeout in milliseconds (default: 1 minute)
- **max_size**: maximum number of values stored in this cache (default: 1000)

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### remove
Removes a value from the cache by its key.

`@override`
> Future\<dynamic\> remove(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - Future that receives an null for success


#### retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns null.

`@override`
> Future\<dynamic\> retrieve(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - cached value or null if the value wasn't found or timeout expired.


#### store
Stores a value in the cache with expiration time.

`@override`
> Future\<dynamic\> store(String correlationId, String key, value, int timeout)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **value**: dynamic - value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Future\<dynamic\> - cached value stored in the cache.

### Examples

```dart
var cache = new MemoryCache();

await cache.store('123', 'key1', 'ABC');

var value await cache.retrive('123', 'key1');

// Result: 'ABC'
```

### See also
- #### [ICache](../icache)
