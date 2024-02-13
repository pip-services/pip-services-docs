---
type: docs
title: "MemoryStateStore"
linkTitle: "MemoryStateStore"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-logic-java"
description: >
    State store that keeps states in the process memory.
---

**Implements:** [IReconfigurable](../../../commons/config/ireconfigurable), [IStateStore](../istate_store)

### Description

**Remember:** This implementation is not suitable for synchronization of distributed processes.

#### Configuration parameters

**options**:
- **timeout**: default caching timeout in milliseconds (default: disabled)


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../commons/config/config_params) configParams) throws ConfigException

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### delete
Deletes a state from the store by its key.

> `public` <T> T delete([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique value key.
- **return**: <T> T - removed item


#### load
Loads state from the store using its key.
If value is missing in the store it returns null.

> `public` <T> T load([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique state key.
- **return**: <T> T - the state value or `null` if value wasn't found.


#### loadBulk
Loads an array of states from the store using their keys.

> `public` <T> List<StateValue<T>> loadBulk([IContext](../../../components/context/icontext) context, List<String> keys)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **keys**: List<String> - unique state keys.
- **returns**: <T> List<StateValue<T>> - an array with state values and their corresponding keys.


#### save
Saves state into the store.

> `public` <T> T save([IContext](../../../components/context/icontext) context, String key, T value)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a unique state key.
- **value**: T - a state value.
- **returns**: <T> T - execution duration in milliseconds.


### Examples

```java
{@code
   MemoryStateStore store = new MemoryStateStore();
 
   String value = store.load("123", "key1");
   ...
   store.save("123", "key1", "ABC");
   }
```

### See also
- #### [ICache](../../cache/icache)
