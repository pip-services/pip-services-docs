---
type: docs
title: "IdentifiableMemoryPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableMemoryPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Abstract persistence component that stores data in memory
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Extends:** [MemoryPersistence<T>](../memory_persistence)
   
**Implements:** [IWriter](../../write/iwriter), [IGetter](../../read/igetter), [ISetter](../../write/isetter)

### Description

The IdentifiableMemoryPersistence class allows you to create persistence components that store data in memory and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement [IIdentifiable](../../../data/data/iidentifiable).
- In basic scenarios child classes shall only override [getPageByFilter](../memory_persistence/#getpagebyfilter), [getListByFilter](../memory_persistence/#getlistbyfilter) or [deleteByFilter](../memory_persistence/#deletebyfilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the this._items property and calling the **save** method on updates.

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors
Creates a new instance of the identifiable file persistence component.

> `public` constructor(loader?: [ILoader<T>](../../read/iloader), saver?: [ISaver<T>](../../write/isaver))

- **loader**: [ILoader<T>](../../read/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver<T>](../../write/isaver) - (optional) saver used to save items to  and external datasource.


### Instance methods

#### create
Creates a data item.

> `public` create(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### deleteById
Deletes a data item based on it's unique id.

> `public` deleteById(context: [IContext](../../../components/context/icontext), id: K): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K -  id of the item to be deleted
- **returns**: Promise\<T\> - deleted item.


#### deleteByIds
Deletes multiple data items based on their unique ids.

> `public` deleteByIds(context: [IContext](../../../components/context/icontext), ids: K[]): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] -  ids of data items to be deleted.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> `public` getListByIds(context: [IContext](../../../components/context/icontext), ids: K[]): Promise\<T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] -  ids of data items to be retrieved
- **returns**: Promise\<T[]\> - data list of results by ids.


#### getOneById
Gets a data item based on its unique id.

> `public` getOneById(context: [IContext](../../../components/context/icontext), id: K): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: Promise\<T\> - data item by id.


#### set
Sets a data item. If the data item exists, it updates it; otherwise, it creates a new data item.

> `public` set(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: Promise\<T\> - updated item


#### update
Updates a data item.

> `public` update(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: Promise\<T\> - updated item.


#### updatePartially
Updates only a few selected fields in a data item.

> `public` updatePartially(context: [IContext](../../../components/context/icontext), id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of a data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Promise\<T\> - updated item.

### Examples

```typescript
class MyMemoryPersistence extends IdentifiableMemoryPersistence<MyData, string> {
  
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let name = filter.getAsNullableString("name");
        return (item) => {
            if (name != null && item.name != name)
                return false;
            return true;
        };
    }
  
    public async getPageByFilter(context: IContext, filter: FilterParams, paging: PagingParams): DataPage<MyData> {
        return await super.getPageByFilter(context, this.composeFilter(filter), paging, null, null);
    }
  
}
let persistence = new MyMemoryPersistence();
     
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
