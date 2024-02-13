---
type: docs
title: "IStateStore"
linkTitle: "IStateStore"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Interface for state storages that are used to store and retrieve transaction states.
---

### Description

TODO: add description

### Instance methods

#### Delete
Deletes a state from the store by its key.

>Delete(ctx [context.Context](../../../components/context/icontext), key string) T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **return**: any - removed item


#### Load
Loads state from the store using its key.
If value is missing in the store it returns null.

> Load([ctx context.Context](../../../components/context/icontext), key string) T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique state key.
- **return**: any - the state value or `null` if value wasn't found.


#### LoadBulk
Loads an array of states from the store using their keys.

> LoadBulk(ctx [context.Context]LoadBulk(ctx context.Context, keys []string) []StateValue[T], keys []string) []StateValue[T]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **keys**: string[] - unique state keys.
- **returns**: Promise<[StateValue](../state_value)\<T\>[]> - an array with state values and their corresponding keys.


#### Save
Saves state into the store.

> Save(ctx [context.Context](../../../components/context/icontext), key string, value T) T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique state key.
- **value**: any - a state value.
- **returns**: any - execution duration in milliseconds.

