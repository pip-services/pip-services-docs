---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-logic-java"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Description

TODO: add description

### Constructors
Creates a new instance of the state entry and assigns its values.

> `public` StateEntry(String key, Object value)

- **key**: string - a unique key to locate the value.
- **value**: Object - a value to be stored.


### Instance methods


#### getKey
Gets the key to locate the state value.

> `public` String getKey()

- **return**: String - the value key.


#### getLastUpdateTime
Gets the last update time.

> `public` long getLastUpdateTime()

- **return**: long - the timestamp when the value ware stored.


#### getValue
Gets the sstate value.

> `public` Object getValue()

- **returns**: Object - the value object.


#### setValue
Sets a new state value.

> `public` void setValue(Object value)

- **value**: Object - a new cached value.
