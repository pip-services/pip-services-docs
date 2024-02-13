---
type: docs
title: "FilePersistence<T>"
linkTitle: "FilePersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Abstract persistence component that stores data in flat files
    and caches them in memory.


---

**Extends:** [MemoryPersistence<T>](../memory_persistence)

**Implements:** [IConfigurable](../../../components/config/iconfigurable)

### Description

The FilePersistence class allows you to create persistence components that store data in flat files and chache them in memory.

Important points

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the self._items property and calling the *save* method.

#### Configuration parameters
- **path**: path to the file where data is stored

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages



### Constructors
Creates a new instance of the file persistence component.

> `public` constructor(persister?: [JsonFilePersister<T>](../json_file_persister))

- **persister**: [JsonFilePersister<T>](../json_file_persister) - (optional) persister component that loads and saves data from/to a flat file.

### Fields

<span class="hide-title-link">

#### _persister
JSON file persister.
> `protected` **_persister**: [JsonFilePersister<T>](../json_file_persister)

</span>


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

### Examples

```typescript
class MyJsonFilePersistence extends FilePersistence<MyData> {
    public constructor(path?: string) {
        super(new JsonPersister(path));
    }
    
    public async getByName(context: IContext, name: string): Promise<MyData> {
        let item = this._items.find((d) => d.name == name);
        retur item;
    }); 
     
    public async set(context: IContext, item: MyData): Promise<MyData> {
        this._items = this._items.filter((d) => d.name != name);
        this._items.push(item);
        await this.save(context);
        return item;
    }
  
}
```


### See also
- #### [MemoryPersistence](../memory_persistence)
- #### [JsonFilePersister](../json_file_persister)
