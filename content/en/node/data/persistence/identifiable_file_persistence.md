---
type: docs
title: "IdentifiableFilePersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableFilePersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Abstract persistence component that stores data in flat files
    and implements a number of CRUD operations over data items with
    unique ids. 
---

**Extends:** [IdentifiableMemoryPersistence<T, K>](../identifiable_memory_persistence)

### Description

The IdentifiableFilePersistence class allows you to create persistence components that store data in flat files and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [getPageByFilter](../memory_persistence/#getPageByFilter), [getListByFilter](../memory_persistence/#getListByFilter) or [deleteByFilter](../memory_persistence/#deleteByFilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the self._items property and calling the **save** method on updates.

#### Configuration parameters

- **path**: path to the file where data is stored
    - **options**:
    - **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages


### Constructors
Creates a new instance of the persistence.

> `public` constructor(persister?: [JsonFilePersister<T>](../json_file_persister))

- **persister**: [JsonFilePersister<T>](../json_file_persister) - (optional) a persister component that loads and saves data from/to flat file.

### Fields

<span class="hide-title-link">

#### _persister
JSON file persister.
> `protected` **_persister**: [JsonFilePersister<T>](../json_file_persister)

</span>


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```typescript
class MyFilePersistence extends IdentifiableFilePersistence<MyData, string> {
    public constructor(path?: string) {
        super(new JsonPersister(path));
    }
  
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let name = filter.getAsNullableString("name");
        return (item) => {
            if (name != null && item.name != name)
                return false;
            return true;
        };
    }
  
    public async getPageByFilter(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<MyData>> {
        return await super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }
  
}
let persistence = new MyFilePersistence("./data/data.json");
    
let item = await persistence.create("123", { id: "1", name: "ABC" });
let page = await persistence.getPageByFilter(
        "123",
        FilterParams.fromTuples("name", "ABC"),
        null
);
console.log(page.data);          // Result: { id: "1", name: "ABC" }
     
item = await persistence.deleteById("123", "1");
```


### See also
- #### [MemoryPersistence](../memory_persistence)
