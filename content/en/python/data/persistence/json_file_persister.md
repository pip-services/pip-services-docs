---
type: docs
title: "JsonFilePersister"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Persistence component that loads and saves data from/to a flat file.

    It is used by [FilePersistence](../file_persistence), but can be useful on its own.
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [ILoader](../../core/iloader), [ISaver](../../core/isaver)

### Description

The JsonFilePersister class allows you to create persistence components that load and save data from/to a flat file


#### Configuration parameters

- **path**: path to the file where the data is stored

### Constructors
Creates a new instance of the JSON file persistence component.

> JsonFilePersister(path: str = None)

- **path**: str - (optional) path to the file where the data is stored.


### Properties

#### path
Gets the file path where the data is stored.

> path(): str

- **returns**: str - file path where the data is stored.

Sets the file path where data is stored.

> path(value: str)

- **value**: str - file path where data is stored.


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### load
Loads data items from an external JSON file.

> load(correlation_id: Optional[str]): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **returns**: List[T] - loaded items


#### save
Saves given data items to an external JSON file.

> save(correlation_id: Optional[str], items: List[T])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **items**: List[T] - list if data items to save


### Examples

```python
persister = JsonFilePersister("./data/data.json")

persister.save("123", ["A", "B", "C"])
...

items = persister.load("123")
print(items)

```
The result is:   

["A", "B", "C"]
