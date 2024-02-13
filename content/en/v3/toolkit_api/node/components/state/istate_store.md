---
type: docs
title: "IStateStore"
linkTitle: "IStateStore"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Interface for state storages that are used to store and retrieve transaction states.
---

### Description

TODO: add description

### Instance methods

#### delete
Deletes a state from the store by its key.

> delete\<T\>(correlationId: string, key: string): Promise\<T\>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **return**: Promise\<T\> - removed item


#### load
Loads state from the store using its key.
If value is missing in the store it returns null.

> load\<T\>(correlationId: string, key: string): Promise\<T\>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **return**: Promise\<T\> - the state value or `null` if value wasn't found.


#### loadBulk
Loads an array of states from the store using their keys.

> loadBulk\<T\>(correlationId: string, keys: string[]): Promise<[StateValue](../state_value)\<T\>[]>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **keys**: string[] - unique state keys.
- **returns**: Promise<[StateValue](../state_value)\<T\>[]> - an array with state values and their corresponding keys.


#### save
Saves state into the store.

> save\<T\>(correlationId: string, key: string, value: any): Promise\<T\>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **value**: any - a state value.
- **returns**: Promise\<T\> - execution duration in milliseconds.
