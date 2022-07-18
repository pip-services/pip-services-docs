---
type: docs
title: "MemoryStateStore"
linkTitle: "MemoryStateStore"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    State store that keeps states in the process memory.
---

**Implements:** [IReconfigurable](../../../commons/config/ireconfigurable), [IStateStore](../istate_store)

### Description

**Remember:** This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters

**options**:
- **timeout**: default caching timeout in milliseconds (default: disabled)


### Instance methods

#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### delete
Deletes a state from the store by its key.

> Future\<T?\> delete\<T\>(String? correlationId, String key)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **key**: String - a unique value key.
- **return**: Future\<T?\> - removed item


#### load
Loads state from the store using its key.
If value is missing in the store it returns null.

> Future\<T?\> load\<T\>(String? correlationId, String key)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **key**: String - a unique state key.
- **return**: Future\<T?\> - the state value or `null` if value wasn't found.


#### loadBulk
Loads an array of states from the store using their keys.

> Future\<List\<StateValue\<T\>\>\> loadBulk\<T\>(String? correlationId, List\<String\> keys)

- **correlationId**: String? - (optional) transaction id to trace execution through call chain.
- **keys**: List\<String\> - unique state keys.
- **returns**: Future\<List\<[StateValue](../state_value)\<T\>\>\> - an array with state values and their corresponding keys.

#### save
Saves state into the store.

> Future\<T\> save\<T\>(String? correlationId, String key, value)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **key**: String - a unique state key.
- **value**: dynamic - a state value.
- **returns**: Future\<T\> - execution duration in milliseconds.


### Examples

```dart
var store = MemoryStateStore();

var value = await store.load("123", "key1");
...
await store.save("123", "key1", "ABC");
```

### See also
- #### [ICache](../../cache/icache)
