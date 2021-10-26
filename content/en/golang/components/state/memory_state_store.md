---
type: docs
title: "MemoryStateStore"
linkTitle: "MemoryStateStore"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    State store that keeps states in the process memory.
---

**Implements:** [IReconfigurable](../../../commons/config/ireconfigurable), [IStateStore](../istate_store)

### Description

**Remember:** This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters

**options**:
- **timeout**: default caching timeout in milliseconds (default: disabled)

### Constructors
Creates a new instance of the state store.

> NewEmptyMemoryStateStore()

### Instance methods

#### Configure
Configures component by passing configuration parameters.

> (c [*MemoryStateStore]()) Configure(config *cconf.ConfigParams)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Delete
Deletes a state from the store by its key.

> (c [*MemoryStateStore]()) Delete(correlationId string, key string) interface{}

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **return**: interface{} - removed item


#### Load
Loads state from the store using its key.
If value is missing in the store it returns null.

> (c [*MemoryStateStore]()) Load(correlationId string, key string) interface{}

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **return**: interface{} - the state value or `null` if value wasn't found.


#### LoadBulk
Loads an array of states from the store using their keys.

> (c [*MemoryStateStore]()) LoadBulk(correlationId string, keys []string) [][*StateValue](../state_value)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **keys**: []string - unique state keys.
- **returns**: [][*StateValue](../state_value) - an array with state values and their corresponding keys.


#### Save
Saves state into the store.

> (c [*MemoryStateStore]()) Save(correlationId string, key string, value interface{}) interface{}

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **value**: interface{} - a state value.
- **returns**: interface{} - execution duration in milliseconds.


### Examples

```go
let store = new MemoryStateStore();

let value = await store.load("123", "key1");
...
await store.save("123", "key1", "ABC");
```

### See also
- #### [ICache](../../cache/icache)
