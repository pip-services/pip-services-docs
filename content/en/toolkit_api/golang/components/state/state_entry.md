---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Description

TODO: add description

### Constructors
Creates a new instance of the state entry and assigns its values.

> NewStateEntry(key string, value interface{})

- **key**: string - a unique key to locate the value.
- **value**: interface{} - a value to be stored.


### Instance methods


#### GetKey
Gets the key to locate the state value.

> (c [*StateEntry]()) GetKey() string

- **return**: string - the value key.


#### GetLastUpdateTime
Gets the last update time.

> (c [*StateEntry]()) GetLastUpdateTime() int64

- **return**: int64 - the timestamp when the value ware stored.


#### GetValue
Gets the sstate value.

> (c [*StateEntry]()) GetValue() interface{}

- **returns**: interface{} - the value object.


#### SetValue
Sets a new state value.

> (c [*StateEntry]()) SetValue(value interface{})

- **value**: interface{} - a new cached value.