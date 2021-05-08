---
type: docs
title: "FilePersistence"
linkTitle: "FilePersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Abstract persistence component that stores data in flat files
    and caches them in memory.


    This is the most basic persistence component that is only
    able to store data items of any type. Specific CRUD operations
    over the data items must be implemented in child classes by
    accessing self._items property and calling *save* method.
---

**Implements:** [MemoryPersistence](../memory_persistence), [IConfigurable](../../../commons/config/iconfigurable)

See also [MemoryPersistence](../memory_persistence), [JsonFilePersister](../json_file_persister)

#### Configuration parameters
- **path**: path to the file where data is stored

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages

**Example:**
```python
class MyJsonFilePersistence(FilePersistence):
    def __init__(self, path):
        super(MyJsonFilePersistence, self).__init__(JsonPersister(path))

    def get_by_name(self, correlation_id, name):
        item = self.find(name)
        ...
        return item

```

### Constructors
Creates a new instance of the persistence.

> FilePersistence(persister: Optional[[JsonFilePersister](../json_file_persister)] = None)

- **persister**: [JsonFilePersister](../json_file_persister) - (optional) a persister component that loads and saves data from/to flat file.

### Fields

<span class="hide-title-link">

#### _persister
TODO add description
> **_persister**: [JsonFilePersister](../json_file_persister)

</span>


### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


### See also
- #### [MemoryPersistence](../memory_persistence)
- #### [JsonFilePersister](../json_file_persister)