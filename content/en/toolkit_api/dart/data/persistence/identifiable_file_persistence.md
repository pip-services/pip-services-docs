---
type: docs
title: "IdentifiableFilePersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableFilePersistence"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Abstract persistence component that stores data in flat files
    and implements a number of CRUD operations over data items with
    unique ids. 
---

**Extends:** [IdentifiableMemoryPersistence<T, K>](../identifiable_memory_persistence)

### Description

The IdentifiableFilePersistence class allows you to create persistence components that store data in flat files and implement a number of CRUD operations over data items with unique ids.

**Important points**

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios, child classes shall only override [getPageByFilter](../memory_persistence/#getpagebyfilter), [getListByFilter](../memory_persistence/#getlistbyfilter) or [deleteByFilter](../memory_persistence/#deletebyfilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios, child classes can implement additional operations by accessing cached items via the self._items property and calling the **save** method on updates.

#### Configuration parameters

- **path**: path to the file where data is stored

- **options**:
    - **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages


### Constructors
Creates a new instance of the persistence.

> IdentifiableFilePersistence([[JsonFilePersister<T>](../json_file_persister) persister])

- **persister**: [JsonFilePersister<T>](../json_file_persister) - (optional) persister component that loads and saves data from/to flat file.

### Fields

<span class="hide-title-link">

#### persister
JSON file persister.
> **persister**: [JsonFilePersister<T>](../json_file_persister)

</span>


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```dart
class MyFilePersistence extends IdentifiableFilePersistence<MyData, String> {
    MyFilePersistence([String path]):super(JsonPersister(path)) {
    }
    dynamic _composeFilter(FilterParams filter) {
        filter = filter ?? FilterParams();
        var name = filter.getAsNullableString("name");
        return (item) {
            if (name != null && item.name != name)
                return false;
            return true;
        };
    }
    Future<DataPage<MyData>> getPageByFilter(string correlationId, FilterParams filter, PagingParams paging){
       return super.getPageByFilter(correlationId, _composeFilter(filter), paging, null, null);
    }
}

var persistence = MyFilePersistence("./data/data.json");
await persistence.create("123", { id: "1", name: "ABC" });
var page = await persistence.getPageByFilter(
        "123",
        FilterParams.fromTuples([
            "name", "ABC"
        ]),
        null);

print(page.data);          // Result: { id: "1", name: "ABC" }
var item = await persistence.deleteById("123", "1");
```


### See also
- #### [MemoryPersistence](../memory_persistence)
