---
type: docs
title: "JsonFilePersister"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Persistence component that loads and saves data from/to flat file.

    It is used by [FilePersistence](../file_persistence), but can be useful on its own.
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [ILoader](../../core/iloader), [ISaver](../../core/isaver)

#### Configuration parameters

- **path**: path to the file where data is stored

**Example:**
```python
persister = JsonFilePersister("./data/data.json")

    persister.save("123", ["A", "B", "C"])
    ...

    persister.load("123", items)
    print items

```

### Constructors
Creates a new instance of the persistence.

> JsonFilePersister(path: str = None)

- **path**: str - (optional) a path to the file where data is stored.


### Properties

#### path
Gets the file path where data is stored.

> path(): str

- **returns**: str - the file path where data is stored.

Sets the file path where data is stored.

> path(value: str)

- **value**: str - the file path where data is stored.


### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### load
Loads data items from external JSON file.

> load(correlation_id: Optional[str]): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: List[T] - loaded items


#### save
Saves given data items to external JSON file.

> save(correlation_id: Optional[str], items: List[T])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **items**: List[T] - list if data items to save
