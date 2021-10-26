---
type: docs
title: "NullStateStore"
linkTitle: "NullStateStore"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Dummy state store implementation that doesn't do anything.
---

**Implements:** [IStateStore](../istate_store)

### Description

It can be used in testing or in situations when state management is not required
but shall be disabled.

### Constructors
Creates a new instance of the state store.

> NewEmptyNullStateStore()

### Instance methods


#### Delete
Deletes a state from the store by its key.

> (c [*NullStateStore]()) Delete(correlationId string, key string) interface{}

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **return**: interface{} - removed item


#### Load
Loads state from the store using its key.
If value is missing in the store it returns null.

> (c [*NullStateStore]()) Load(correlationId string, key string) interface{}

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **return**: interface{} - the state value or `null` if value wasn't found.


#### LoadBulk
Loads an array of states from the store using their keys.

> (c [*NullStateStore]()) LoadBulk(correlationId string, keys []string) [][*StateValue](../state_value)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **keys**: []string - unique state keys.
- **returns**: [][*StateValue](../state_value) - an array with state values and their corresponding keys.


#### Save
Saves state into the store.

> (c [*NullStateStore]()) Save(correlationId string, key string, value interface{}) interface{}

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **value**: interface{} - a state value.
- **returns**: interface{} - execution duration in milliseconds.


### See also
- #### [ICache](../../cache/icache)
