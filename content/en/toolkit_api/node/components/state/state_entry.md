---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Description

TODO: add description

### Constructors
Creates a new instance of the state entry and assigns its values.

> `public` constructor(key: string, value: any)

- **key**: string - a unique key to locate the value.
- **value**: any - a value to be stored.


### Instance methods


#### getKey
Gets the key to locate the state value.

> `public` getKey(): string

- **return**: string - the value key.


#### getLastUpdateTime
Gets the last update time.

> `public` getLastUpdateTime(): number

- **return**: number - the timestamp when the value ware stored.


#### getValue
Gets the sstate value.

> `public` getValue(): any

- **returns**: any - the value object.


#### setValue
Sets a new state value.

> `public` setValue(value: any): void

- **value**: any - a new cached value.