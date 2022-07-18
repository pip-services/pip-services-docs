---
type: docs
title: "StateEntry"
linkTitle: "StateEntry"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Data object to store state values with their keys used by [MemoryStateStore](../memory_state_store)
---

### Description

TODO: add description

### Constructors
Creates a new instance of the state entry and assigns its values.

> StateEntry(key: str, value: Any)

- **key**: str - a unique key to locate the value.
- **value**: Any - a value to be stored.


### Instance methods


#### get_key
Gets the key to locate the state value.

> get_key(): str

- **return**: str - the value key.


#### get_last_update_time
Gets the last update time.

> get_last_update_time(): int

- **return**: int - the timestamp when the value ware stored.


#### get_value
Gets the sstate value.

> get_value(): Any

- **returns**: Any - the value object.


#### set_value
Sets a new state value.

> set_value(value: Any)

- **value**: Any - a new cached value.