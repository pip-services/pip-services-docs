---
type: docs
title: "NullStateStore"
linkTitle: "NullStateStore"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-logic-dotnet"
description: >
    Dummy state store implementation that doesn't do anything.
---

**Inherits:** [IStateStore](../istate_store)

### Description

It can be used in testing or in situations when state management is not required
but shall be disabled.


### Instance methods


#### DeleteAsync
Deletes a state from the store by its key.

> `public` Task\<T\> DeleteAsync\<T\>(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - a unique value key.
- **return**: Task\<T\> - removed item


#### LoadAsync
Loads state from the store using its key.
If value is missing in the store it returns null.

> `public` Task\<T\> LoadAsync\<T\>(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - a unique state key.
- **return**: Task\<T\> - the state value or `null` if value wasn't found.


#### LoadBulkAsync
Loads an array of states from the store using their keys.

> `public` Task\<List\<[StateValue](../state_value)\<T\>\>\> LoadBulkAsync\<T\>(IContext context, List\<string\> keys)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **keys**: List\<string\> - unique state keys.
- **returns**: Task\<List\<[StateValue](../state_value)\<T\>\>\> - an array with state values and their corresponding keys.


#### SaveAsync
Saves state into the store.

> `public` Task\<T\> SaveAsync\<T\>(IContext context, string key, T value)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - a unique state key.
- **value**: T - a state value.
- **returns**: Task\<T\> - execution duration in milliseconds.


### See also
- #### [ICache](../../cache/icache)
