---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-logic-go"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Description

Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)

### Constructors
Creates a new instance of the state entry and assigns its values.

> NewStateEntry[T any](key string, value T) *StateEntry[T]

- **key**: string - a unique key to locate the value.
- **value**: any - a value to be stored.


### Instance methods


#### GetKey
Gets the key to locate the state value.

> (c *StateEntry[T]) GetKey() string

- **return**: string - the value key.


#### getLastUpdateTime
Gets the last update time.

> (c *StateEntry[T]) GetLastUpdateTime() int64

- **return**: int64 - the timestamp when the value ware stored.


#### GetValue
Gets the sstate value.

> (c *StateEntry[T]) GetValue() T 

- **returns**: any - the value object.


#### setValue
Sets a new state value.

> (c *StateEntry[T]) SetValue(value T)

- **value**: any - a new cached value.
