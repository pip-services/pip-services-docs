---
type: docs
title: "IdentifiableFilePersistence"
linkTitle: "IdentifiableFilePersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Abstract persistence component that stores data in flat files
    and implements a number of CRUD operations over data items with
    unique ids. 
---

**Implements:** [IdentifiableMemoryPersistence](../identifiable_memory_persistence), [iidentifiable](../../../commons/data/iidentifiable)

### Description

The IdentifiableFilePersistence class allows you to create persistence components that store data in flat files and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override **get_page_by_filter**, **get_list_by_filter** or **delete_by_filter** operations with specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via self._items property and calling **save** method on updates.

#### Configuration parameters

- **path**: path to the file where data is stored
    - **options**:
    - **max_page_size**: Maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages


### Constructors
Creates a new instance of the persistence.

> IdentifiableFilePersistence(persister: Optional[[JsonFilePersister](../json_file_persister)] = None)

- **persister**: [JsonFilePersister](../json_file_persister) - (optional) a persister component that loads and saves data from/to flat file.

### Fields

<span class="hide-title-link">

#### _persister
JSON file persister.
> **_persister**: [JsonFilePersister](../json_file_persister)

</span>


### Instance methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```python
class MyFilePersistence(IdentifiableFilePersistence):
    def __init__(self, path):
        super(MyFilePersistence, self).__init__(JsonPersister(path))

    def get_page_by_filter(self, correlationId, filter, paging):
        super().get_page_by_filter(correlationId, filter, paging, None)

    persistence = MyFilePersistence("./data/data.json")
    item = persistence.create("123", MyData("1", "ABC"))

    mydata = persistence.get_page_by_filter("123", FilterParams.from_tuples("name", "ABC"), None, None)

    print str(mydata.get_data())
    persistence.delete_by_id("123", "1")

```


### See also
- #### [MemoryPersistence](../memory_persistence)
