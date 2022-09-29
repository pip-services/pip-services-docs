---
type: docs
title: "NullStateStore"
linkTitle: "NullStateStore"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Dummy state store implementation that doesn't do anything.
---

**Implements:** [IStateStore](../istate_store)

### Description

It can be used in testing or in situations when state management is not required
but shall be disabled.

### Constructors
Creates a new instance of the state store.

> NewEmptyNullStateStore[T any]()

### Instance methods


#### Delete
Deletes a state from the store by its key.

> (c [*NullStateStore]()) Delete(ctx context.Context, correlationId string, key string) any

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique value key.
- **return**: any - removed item


#### Load
Loads state from the store using its key.
If value is missing in the store it returns null.

> (c [*NullStateStore]()) Load(ctx context.Context, correlationId string, key string) any

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **return**: any - the state value or `null` if value wasn't found.


#### LoadBulk
Loads an array of states from the store using their keys.

> (c [*NullStateStore]()) LoadBulk(ctx context.Context, correlationId string, keys []string) [][*StateValue](../state_value)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **keys**: []string - unique state keys.
- **returns**: [][*StateValue](../state_value) - an array with state values and their corresponding keys.


#### Save
Saves state into the store.

> (c [*NullStateStore]()) Save(ctx context.Context, correlationId string, key string, value any) any

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a unique state key.
- **value**: any - a state value.
- **returns**: any - execution duration in milliseconds.


### See also
- #### [ICache](../../cache/icache)
