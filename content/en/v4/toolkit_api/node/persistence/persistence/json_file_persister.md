---
type: docs
title: "JsonFilePersister<T>"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Persistence component that loads and saves data from/to a flat file.

    It is used by [FilePersistence](../file_persistence), but can be useful on its own.
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [ILoader<T>](../../read/iloader), [ISaver<T>](../../write/isaver)

### Description

The JsonFilePersister class allows you to create persistence components that load and save data from/to a flat file


#### Configuration parameters

- **path**: path to the file where the data is stored

### Constructors
Creates a new instance of the JSON file persistence component.

> `public` constructor(path?: string)

- **path**: string - (optional) path to the file where the data is stored.


### Properties

#### path
Gets the file path where the data is stored.

> `public` path(): string

- **returns**: string - file path where the data is stored.

Sets the file path where data is stored.

> `public` path(value: string)

- **value**: string - file path where data is stored.


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### load
Loads data items from an external JSON file.

> `public` load(context: [IContext](../../../components/context/icontext)): Promise\<T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise\<T[]\> - loaded items


#### save
Saves given data items to an external JSON file.

> `public` save(context: [IContext](../../../components/context/icontext), items: T[]): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: T[] - list if data items to save


### Examples

```typescript
let persister = new JsonFilePersister("./data/data.json");
   
await persister.save("123", ["A", "B", "C"]);
...
let items = await persister.load("123");
console.log(items);                      // Result: ["A", "B", "C"]

```
