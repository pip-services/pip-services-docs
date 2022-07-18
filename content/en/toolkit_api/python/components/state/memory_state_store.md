---
type: docs
title: "MemoryStateStore"
linkTitle: "MemoryStateStore"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
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

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### delete
Deletes a state from the store by its key.

> delete(correlation_id: Optional[str], key: str): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **key**: str - a unique value key.
- **return**: Any - removed item


#### load
Loads state from the store using its key.
If value is missing in the store it returns null.

> load(correlation_id: Optional[str], key: str): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **key**: str - a unique state key.
- **return**: Any - the state value or `null` if value wasn't found.


#### load_bulk
Loads an array of states from the store using their keys.

> load_bulk(self, correlation_id: Optional[str], keys: List[str]) -> List[[StateValue](../state_value)]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **keys**: List[str] - unique state keys.
- **returns**: List[[StateValue](../state_value)] - an array with state values and their corresponding keys.


#### save
Saves state into the store.

> save(correlation_id: Optional[str], key: str, value: Any): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **key**: str - a unique state key.
- **value**: Any - a state value.
- **returns**: Any - execution duration in milliseconds.


### Examples

```python
store = MemoryStateStore()

value = store.load("123", "key1")
...
store.save("123", "key1", "ABC")
```

### See also
- #### [ICache](../../cache/icache)
