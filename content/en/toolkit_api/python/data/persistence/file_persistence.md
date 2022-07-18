---
type: docs
title: "FilePersistence"
linkTitle: "FilePersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Abstract persistence component that stores data in flat files
    and caches them in memory.


---

**Implements:** [MemoryPersistence](../memory_persistence), [IConfigurable](../../../commons/config/iconfigurable)

### Description

The FilePersistence class allows you to create persistence components that store data in flat files and chache them in memory.

**Important points**

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the self._items property and calling the *save* method.

#### Configuration parameters
- **path**: path to the file where data is stored

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages



### Constructors
Creates a new instance of the file persistence component.

> FilePersistence(persister: Optional[[JsonFilePersister](../json_file_persister)] = None)

- **persister**: [JsonFilePersister](../json_file_persister) - (optional) persister component that loads and saves data from/to a flat file.

### Fields

<span class="hide-title-link">

#### _persister
JSON file persister.
> **_persister**: [JsonFilePersister](../json_file_persister)

</span>


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```python
class MyJsonFilePersistence(FilePersistence):
    def __init__(self, path):
        super(MyJsonFilePersistence, self).__init__(JsonPersister(path))

    def get_by_name(self, correlation_id, name):
        item = self.find(name)
        ...
        return item

```


### See also
- #### [MemoryPersistence](../memory_persistence)
- #### [JsonFilePersister](../json_file_persister)
