---
type: docs
title: "JsonFilePersister<T>"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Persistence component that loads and saves data from/to a flat file.

    It is used by [FilePersistence](../file_persistence), but can be useful on its own.
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [ILoader<T>](../../core/iloader), [ISaver<T>](../../core/isaver)

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

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### load
Loads data items from an external JSON file.

> `public` load(correlationId: string): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise\<T[]\> - loaded items


#### save
Saves given data items to an external JSON file.

> `public` save(correlationId: string, items: T[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **items**: T[] - list if data items to save


### Examples

```typescript
let persister = new JsonFilePersister("./data/data.json");
   
await persister.save("123", ["A", "B", "C"]);
...
let items = await persister.load("123");
console.log(items);                      // Result: ["A", "B", "C"]

```
