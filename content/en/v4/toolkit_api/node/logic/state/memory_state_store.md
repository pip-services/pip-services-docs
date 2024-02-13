---
type: docs
title: "MemoryStateStore"
linkTitle: "MemoryStateStore"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-logic-node"
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

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### delete
Deletes a state from the store by its key.

> `public` delete\<T\>(context: [IContext](../../../components/context/icontext), key: string): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **return**: Promise\<T\> - removed item


#### load
Loads state from the store using its key.
If value is missing in the store it returns null.

> `public` load\<T\>(context: [IContext](../../../components/context/icontext), key: string): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique state key.
- **return**: Promise\<T\> - the state value or `null` if value wasn't found.


#### loadBulk
Loads an array of states from the store using their keys.

> `public` loadBulk\<T\>(context: [IContext](../../../components/context/icontext), keys: string[]): Promise<[StateValue](../state_value)\<T\>[]>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **keys**: string[] - unique state keys.
- **returns**: Promise<[StateValue](../state_value)\<T\>[]> - an array with state values and their corresponding keys.


#### save
Saves state into the store.

> `public` save\<T\>(context: [IContext](../../../components/context/icontext), key: string, value: any): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique state key.
- **value**: any - a state value.
- **returns**: Promise\<T\> - execution duration in milliseconds.


### Examples

```typescript
let store = new MemoryStateStore();

let value = await store.load(new Context(), "key1");
...
await store.save(new Context(), "key1", "ABC");
```

### See also
- #### [ICache](../../cache/icache)
