---
type: docs
title: "IdentifiableFilePersistence<T, K>"
linkTitle: "IdentifiableFilePersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Abstract persistence component that stores data in flat files
    and implements a number of CRUD operations over data items with
    unique ids. 
---

**Inherits:** [IdentifiableMemoryPersistence<T, K>](../identifiable_memory_persistence)

### Description

The IdentifiableFilePersistence class allows you to create persistence components that store data in flat files and implement a number of CRUD operations over data items with unique ids.

Important points

Where T : [IIdentifiable\<K\>](../../../commons/data/iidentifiable).  
Where K : class.

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [GetPageByFilter](../memory_persistence/#getpagebyfilter), [GetListByFilter](../memory_persistence/#getlistbyfilter) or [DeleteByFilter](../memory_persistence/#deletebyfilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the self._items property and calling the **save** method on updates.

#### Configuration parameters

- **path**: path to the file where data is stored
    - **options**:
    - **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages


### Constructors
Creates a new instance of the persistence.

> `public` IdentifiableFilePersistence([JsonFilePersister<T>](../json_file_persister) persister)

- **persister**: [JsonFilePersister<T>](../json_file_persister) - (optional) a persister component that loads and saves data from/to flat file.

Creates a new instance of the persistence.

> `public` IdentifiableFilePersistence()

### Fields

<span class="hide-title-link">

#### _persister
JSON file persister.
> `protected` **_persister**: [JsonFilePersister<T>](../json_file_persister)

</span>


### Instance methods

#### Configure
Configures component by passing configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```cs
class MyFilePersistence: IdentifiableFilePersistence<MyData, string> 
{
    public MyFilePersistence(string path)
    {
        base(MyData.class, new JsonPersister(path));
        
    private List<Func<MyData, bool>> ComposeFilter(FilterParams filter)
    {
        filter = filter != null ? filter : new FilterParams();
        String name = filter.getAsNullableString("name");
        return List<Func<MyData, bool>>() {
        (item) => {
        if (name != null && item.name != name)
            return false;
        return true;
        }
        };
    }
    
    public DataPage<MyData> GetPageByFilter(string correlationId, FilterParams filter, PagingParams paging)
    {
        base.GetPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }
}

var persistence = new MyFilePersistence("./data/data.json");
var item = persistence.Create("123", new MyData("1", "ABC"));
var mydata = persistence.GetPageByFilter(
    "123",
    FilterParams.fromTuples("name", "ABC"),
null, null, null);
Console.Out.WriteLine(page.Data);          // Result: { id: "1", name: "ABC" }
persistence.DeleteById("123", "1");
...
```


### See also
- #### [MemoryPersistence](../memory_persistence)
