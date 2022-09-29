---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Constructors
Creates a new instance of the state entry and assigns its values.

> NewStateEntry[T any](key string, value T) [*StateEntry[T]]()

- **key**: string - a unique key to locate the value.
- **value**: T - a value to be stored.


### Instance methods


#### GetKey
Gets the key to locate the state value.

> (c [*StateEntry[T]]()) GetKey() string

- **return**: string - the value key.


#### GetLastUpdateTime
Gets the last update time.

> (c [*StateEntry[T]]()) GetLastUpdateTime() int64

- **return**: int64 - the timestamp when the value ware stored.


#### GetValue
Gets the sstate value.

> (c [*StateEntry[T]]()) GetValue() T

- **returns**: any - the value object.


#### SetValue
Sets a new state value.

> (c [*StateEntry[T]]()) SetValue(value T)

- **value**: T - a new cached value.