---
type: docs
title: "JsonFilePersister<T>"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
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
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### load
Loads data items from an external JSON file.

`@override`
> Future\<List\<T\>\> load(String correlation_id)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: Future\<List\<T\>\> - loaded items


#### save
Saves given data items to an external JSON file.

`@override`
> Future save(String correlation_id, List\<T\> items)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **items**: List\<T\> - list if data items to save


### Examples

```dart
var persister = JsonFilePersister("./data/data.json");
await persister.save("123", ["A", "B", "C"]);

    ...

var items = await persister.load("123");
print(items);  // Result: ["A", "B", "C"]

```
