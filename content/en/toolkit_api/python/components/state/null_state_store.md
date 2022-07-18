---
type: docs
title: "NullStateStore"
linkTitle: "NullStateStore"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Dummy state store implementation that doesn't do anything.
---

**Implements:** [IStateStore](../istate_store)

### Description

It can be used in testing or in situations when state management is not required
but shall be disabled.


### Instance methods


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


### See also
- #### [ICache](../../cache/icache)
