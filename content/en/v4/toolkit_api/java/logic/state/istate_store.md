---
type: docs
title: "IStateStore"
linkTitle: "IStateStore"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-logic-java"
description: >
    Interface for state storages that are used to store and retrieve transaction states.
---

### Description

TODO: add description

### Instance methods

#### delete
Deletes a state from the store by its key.

> <T> T delete([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique value key.
- **return**: <T> T - removed item


#### load
Loads state from the store using its key.
If value is missing in the store it returns null.

> <T> T load([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique state key.
- **return**: <T> T - the state value or `null` if value wasn't found.


#### loadBulk
Loads an array of states from the store using their keys.

> <T> List<StateValue<T>> loadBulk([IContext](../../../components/context/icontext) context, List<String> keys)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **keys**: List<String> - unique state keys.
- **returns**: List<StateValue<T>> - an array with state values and their corresponding keys.


#### save
Saves state into the store.

> <T> T save([IContext](../../../components/context/icontext) context, String key, T value)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique state key.
- **value**: T - a state value.
- **returns**: <T> T - execution duration in milliseconds.
