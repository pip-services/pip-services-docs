---
type: docs
title: "NullStateStore"
linkTitle: "NullStateStore"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Dummy state store implementation that doesn't do anything.
---

**Implements:** [IStateStore](../istate_store)

### Description

It can be used in testing or in situations when state management is not required
but shall be disabled.


### Instance methods


#### Delete
Deletes a state from the store by its key.

> (c *NullStateStore[T]) Delete(ctx [context.Context](../../../components/context/icontext), key string) T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique value key.
- **return**: any - removed item


#### Load
Loads state from the store using its key.
If value is missing in the store it returns null.

>(c *NullStateStore[T]) Load(ctx [context.Context](../../../components/context/icontext), key string) T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique state key.
- **return**: any - the state value or `null` if value wasn't found.


#### LoadBulk
Loads an array of states from the store using their keys.

> (c *NullStateStore[T]) LoadBulk(ctx [context.Context](../../../components/context/icontext), keys []string) []StateValue[T]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **keys**: string[] - unique state keys.
- **returns**: any - an array with state values and their corresponding keys.


#### Save
Saves state into the store.

> (c *NullStateStore[T]) Save(ctx [context.Context](../../../components/context/icontext), key string, value T) T 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a unique state key.
- **value**: any - a state value.
- **returns**: any - execution duration in milliseconds.


### See also
- #### [ICache](../../cache/icache)

