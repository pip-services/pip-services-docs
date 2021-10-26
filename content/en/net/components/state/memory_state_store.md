---
type: docs
title: "MemoryStateStore"
linkTitle: "MemoryStateStore"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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

#### Configure
Configures component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### DeleteAsync
Deletes a state from the store by its key.

> `public` Task\<T\> DeleteAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **return**: Task\<T\> - removed item


#### LoadAsync
Loads state from the store using its key.
If value is missing in the store it returns null.

> `public` Task\<T\> LoadAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **return**: Task\<T\> - the state value or `null` if value wasn't found.


#### LoadBulkAsync
Loads an array of states from the store using their keys.

> `public` Task\<List\<[StateValue](../state_value)\<T\>\>\> LoadBulkAsync\<T\>(string correlationId, List\<string\> keys)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **keys**: List\<string\> - unique state keys.
- **returns**: Task\<List\<[StateValue](../state_value)\<T\>\>\> - an array with state values and their corresponding keys.


#### SaveAsync
Saves state into the store.

> `public` Task\<T\> SaveAsync\<T\>(string correlationId, string key, T value)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **value**: T - a state value.
- **returns**: Task\<T\> - execution duration in milliseconds.


### Examples

```cs
var store = new MemoryStateStore();

var value = await store.LoadAsync("123", "key1");
...
await store.save("123", "key1", "ABC");
```

### See also
- #### [ICache](../../cache/icache)
