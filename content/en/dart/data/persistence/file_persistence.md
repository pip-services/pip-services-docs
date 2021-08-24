---
type: docs
title: "FilePersistence<T>"
linkTitle: "FilePersistence"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Abstract persistence component that stores data in flat files
    and caches them in memory.


---

**Extends:** [MemoryPersistence<T>](../memory_persistence)

**Implements:** [IConfigurable](../../../commons/config/iconfigurable)

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

> FilePersistence([[JsonFilePersister<T>](../json_file_persister) persister])

- **persister**: [JsonFilePersister<T>](../json_file_persister) - (optional) persister component that loads and saves data from/to a flat file.

### Fields

<span class="hide-title-link">

#### persister
JSON file persister.
> **persister**: [JsonFilePersister<T>](../json_file_persister)

</span>


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```dart
class MyJsonFilePersistence extends FilePersistence<MyData> {
    MyJsonFilePersistence([String path]): super(JsonPersister(path)) {
    }
     Future<MyData> getByName(String correlationId, String name) async {
        var item = items.firstWhere((d) => d.name == name);
        return item;
    });
    Future<MyData> set(String correlatonId, MyData item) {
        items = List.from(item.where((d) => d.name != name));
        items.add(item);
        await save(correlationId);
        return item;
    }
}
```


### See also
- #### [MemoryPersistence](../memory_persistence)
- #### [JsonFilePersister](../json_file_persister)
