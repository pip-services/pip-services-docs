---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-logic-node"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Description

TODO: add description

### Constructors
Creates a new instance of the state entry and assigns its values.

> constructor(key: string, value: any)

- **key**: string - a unique key to locate the value.
- **value**: any - a value to be stored.


### Instance methods


#### getKey
Gets the key to locate the state value.

> getKey(): string

- **return**: string - the value key.


#### getLastUpdateTime
Gets the last update time.

> getLastUpdateTime(): int

- **return**: int - the timestamp when the value ware stored.


#### getValue
Gets the sstate value.

> getValue(): any

- **returns**: value - the value object.


#### setValue
Sets a new state value.

> `public` setValue(value: any): void

- **value**: any - a new cached value.
