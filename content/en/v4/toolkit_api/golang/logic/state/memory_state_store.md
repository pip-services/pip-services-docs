---
type: docs
title: "MemoryStateStore"
linkTitle: "MemoryStateStore"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
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

> (c *MemoryStateStore[T]) Configure(ctx [context.Context](../../../commons/config/config_params), config *cconf.ConfigParams)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Delete
Deletes a state from the store by its key.

> (c *MemoryStateStore[T]) Delete(ctx [context.Context](../../../components/context/icontext), key string) T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **return**: any - removed item


#### Load
Loads state from the store using its key.
If value is missing in the store it returns null.

> (c *MemoryStateStore[T]) Load(ctx [context.Context](../../../components/context/icontext), key string) T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique state key.
- **return**: any - the state value or `null` if value wasn't found.


#### LoadBulk
Loads an array of states from the store using their keys.

> (c *MemoryStateStore[T]) LoadBulk(ctx [context.Context](../../../components/context/icontext), keys []string) []StateValue[T]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **keys**: string[] - unique state keys.
- **returns**: any> - an array with state values and their corresponding keys.


#### Save
Saves state into the store.

> (c *MemoryStateStore[T]) Save(ctx [context.Context](../../../components/context/icontext), key string, value T) T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique state key.
- **value**: any - a state value.
- **returns**: any - execution duration in milliseconds.


### Examples

```go
		store := NewMemoryStateStore[MyType]();
		value := store.Load(context.Background(), "123", "key1");
		...
		store.Save(context.Background(), "123", "key1", MyType{});
```

### See also
- #### [ICache](../../cache/icache)

