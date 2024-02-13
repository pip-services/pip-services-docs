---
type: docs
title: "IStateStore"
linkTitle: "IStateStore"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-logic-python"
description: >
    Interface for state storages that are used to store and retrieve transaction states.
---

### Description

TODO: add description

### Abstract methods

#### delete
Deletes a state from the store by its key.

> `abstractmethod` delete(context: Optional[IContext], key: str): Any

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique value key.
- **return**: Any - removed item


#### load
Loads state from the store using its key.
If value is missing in the store it returns null.

> `abstractmethod` load(context: Optional[IContext], key: str): Any

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique state key.
- **return**: Any - the state value or `null` if value wasn't found.


#### load_bulk
Loads an array of states from the store using their keys.

> `abstractmethod` load_bulk(self, context: Optional[IContext], keys: List[str]) -> List[[StateValue](../state_value)]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **keys**: List[str] - unique state keys.
- **returns**: List[[StateValue](../state_value)] - an array with state values and their corresponding keys.


#### save
Saves state into the store.

> `abstractmethod` save(context: Optional[IContext], key: str, value: Any): Any

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a unique state key.
- **value**: Any - a state value.
- **returns**: Any - execution duration in milliseconds.
