---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-logic-dotnet"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Description

TODO: add description

### Constructors
Creates a new instance of the state entry and assigns its values.

> `public` StateEntry(string key, dynamic value)

- **key**: string - a unique key to locate the value.
- **value**: dynamic - a value to be stored.


### Instance methods


#### GetKey
Gets the key to locate the state value.

> `public` string GetKey()

- **return**: string - the value key.


#### GetLastUpdateTime
Gets the last update time.

> `public` long GetLastUpdateTime()

- **return**: long - the timestamp when the value ware stored.


#### GetValue
Gets the sstate value.

> `public` dynamic GetValue()

- **returns**: dynamic - the value object.


#### setValue
Sets a new state value.

> `public` void SetValue(dynamic value)

- **value**: dynamic - a new cached value.
