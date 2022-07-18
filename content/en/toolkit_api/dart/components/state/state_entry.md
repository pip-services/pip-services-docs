---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Description

TODO: add description

### Constructors
Creates a new instance of the state entry and assigns its values.

> StateEntry(String key, value)

- **key**: String - a unique key to locate the value.
- **value**: dynamic - a value to be stored.


### Instance methods


#### getKey
Gets the key to locate the state value.

> String getKey()

- **return**: String - the value key.


#### getLastUpdateTime
Gets the last update time.

> int getLastUpdateTime()

- **return**: int - the timestamp when the value ware stored.


#### getValue
Gets the sstate value.

> dynamic getValue()

- **returns**: any - the value object.


#### setValue
Sets a new state value.

> void setValue(value)

- **value**: dynamic - a new cached value.