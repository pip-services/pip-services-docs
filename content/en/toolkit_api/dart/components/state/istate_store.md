---
type: docs
title: "IStateStore"
linkTitle: "IStateStore"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for state storages that are used to store and retrieve transaction states.
---

### Description

TODO: add description

### Instance methods

#### delete
Deletes a state from the store by its key.

> Future\<T?\> delete\<T\>(String? correlationId, String key)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **key**: String - a unique value key.
- **return**: Future\<T?\> - removed item


#### load
Loads state from the store using its key.
If value is missing in the store it returns null.

> Future\<T?\> load\<T\>(String? correlationId, String key)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **key**: String - a unique state key.
- **return**: Future\<T?\> - the state value or `null` if value wasn't found.


#### loadBulk
Loads an array of states from the store using their keys.

> Future\<List\<StateValue\<T\>\>\> loadBulk\<T\>(String? correlationId, List\<String\> keys)

- **correlationId**: String? - (optional) transaction id to trace execution through call chain.
- **keys**: List\<String\> - unique state keys.
- **returns**: Future\<List\<[StateValue](../state_value)\<T\>\>\> - an array with state values and their corresponding keys.

#### save
Saves state into the store.

> Future\<T\> save\<T\>(String? correlationId, String key, value)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **key**: String - a unique state key.
- **value**: dynamic - a state value.
- **returns**: Future\<T\> - execution duration in milliseconds.
