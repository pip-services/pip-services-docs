---
type: docs
title: "FilePersistence<T>"
linkTitle: "FilePersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Abstract persistence component that stores data in flat files
    and caches them in memory.


---

**Inherits:** [MemoryPersistence<T>](../memory_persistence)


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

> `public` FilePersistence([JsonFilePersister<T>](../json_file_persister) persister)

- **persister**: [JsonFilePersister<T>](../json_file_persister) - (optional) persister component that loads and saves data from/to a flat file.


Creates a new instance of the persistence.

> `public` FilePersistence()

### Fields

<span class="hide-title-link">

#### _persister
JSON file persister.
> `protected` **_persister**: [JsonFilePersister<T>](../json_file_persister)

</span>


### Instance methods

#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```cs
class MyJsonFilePersistence: FilePersistence<MyData> 
{
    public MyJsonFilePersistence(string path)
    {
        super(MyData.class, new JsonFilePersister(path));
    }
    public MyData GetByName(String correlationId, String name)
    {
        MyData item = _items.Find((mydata) => { return mydata.Name == name; });
        ...
        return item;
    } 
    public MyData Set(String correlatonId, MyData item)
    {
        this._items = _items.Filter((mydata) => { return mydata.Name != name; });
        ...
        this._items.add(item);
        this.save(correlationId);
    }
}
```


### See also
- #### [MemoryPersistence](../memory_persistence)
- #### [JsonFilePersister](../json_file_persister)
