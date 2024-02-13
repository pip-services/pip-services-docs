---
type: docs
title: "IdentifiableFilePersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableFilePersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
description: >
    Abstract persistence component that stores data in flat files
    and implements a number of CRUD operations over data items with
    unique ids. 
---

**Extends:** [IdentifiableMemoryPersistence<T, K>](../identifiable_memory_persistence)

### Description

The IdentifiableFilePersistence class allows you to create persistence components that store data in flat files and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [getPageByFilter](../memory_persistence/#getpagebyfilter), [getListByFilter](../memory_persistence/#getlistbyfilter) or [deleteByFilter](../memory_persistence/#deletebyfilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the self._items property and calling the **save** method on updates.

#### Configuration parameters

- **path**: path to the file where data is stored

- **options**:
    - **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages


### Constructors
Creates a new instance of the persistence.

> `public` IdentifiableFilePersistence(Class<T> type, [JsonFilePersister<T>](../json_file_persister) persister)

- **persister**: [JsonFilePersister<T>](../json_file_persister) - (optional) a persister component that loads and saves data from/to flat file.

### Fields

<span class="hide-title-link">

#### _persister
JSON file persister.
> `protected` [JsonFilePersister<T>](../json_file_persister) **_persister**;

</span>


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

### Examples

```java
{@code
  class MyFilePersistence extends IdentifiableFilePersistence<MyData, String> {
    public MyFilePersistence(String path) {
      super(MyData.class, new JsonPersister(path));
    }
  
    private Predicate<MyData> composeFilter(FilterParams filter) {
        filter = filter != null ? filter : new FilterParams();
        String name = filter.getAsNullableString("name");
        return (item) -> {
            if (name != null && item.name != name)
                return false;
            return true;
        };
    }
  
    public DataPage<MyData> getPageByFilter(IContext context, FilterParams filter, PagingParams paging) {
        super.getPageByFilter(context, this.composeFilter(filter), paging, null, null);
    }
  
  }
  
  MyFilePersistence persistence = new MyFilePersistence("./data/data.json");
  
  MyData item = persistence.create("123", new MyData("1", "ABC"));
  DataPage<MyData> mydata = persistence.getPageByFilter(
          "123",
          FilterParams.fromTuples("name", "ABC"),
          null, null, null);
  System.out.println(page.getData().toString());          // Result: { id: "1", name: "ABC" }
  persistence.deleteById("123", "1");
  ...
  }
```


### See also
- #### [MemoryPersistence](../memory_persistence)
