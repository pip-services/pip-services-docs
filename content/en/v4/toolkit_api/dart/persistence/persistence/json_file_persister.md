---
type: docs
title: "JsonFilePersister<T>"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-rpc-dart"
description: >
    Persistence component that loads and saves data from/to a flat file.

    It is used by [FilePersistence](../file_persistence), but can be useful on its own.
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [ILoader<T>](../../read/iloader), [ISaver<T>](../../writer/isaver)

### Description

The JsonFilePersister class allows you to create persistence components that load and save data from/to a flat file


#### Configuration parameters

- **path**: path to the file where the data is stored

### Constructors
Creates a new instance of the JSON file persistence component.

> JsonFilePersister([String path])

- **path**: String - (optional) path to the file where the data is stored.


### Properties

#### path
Gets the file path where the data is stored.

> String get path 

- **returns**: String - file path where the data is stored.

Sets the file path where data is stored.

> set path(String value)

- **value**: String - file path where data is stored.


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### load
Loads data items from an external JSON file.

`@override`
> Future\<List\<T\>\> load(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Future\<List\<T\>\> - loaded items


#### save
Saves given data items to an external JSON file.

`@override`
> Future save(IContext context, List\<T?\> items)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: List\<T?\> - list if data items to save


### Examples

```dart
var persister = JsonFilePersister("./data/data.json");
await persister.save("123", ["A", "B", "C"]);

    ...

var items = await persister.load("123");
print(items);  // Result: ["A", "B", "C"]

```
