---
type: docs
title: "IdentifiableMemoryPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableMemoryPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-rpc-dart"
description: >
    Abstract persistence component that stores data in memory
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Extends:** [MemoryPersistence<T>](../memory_persistence)
   
**Implements:** [IWriter](../../write/iwriter), [IGetter](../../read/igetter), [ISetter](../../write/isetter)

### Description

The IdentifiableMemoryPersistence class allows you to create persistence components that store data in memory and implement a number of CRUD operations over data items with unique ids.

**Important points**

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

> IdentifiableMemoryPersistence([[ILoader<T>](../../read/iloader) loader, [ISaver<T>](../../write/isaver) saver])

- **loader**: [ILoader<T>](../../read/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver<T>](../../write/isaver) - (optional) saver used to save items to  and external datasource.


### Instance methods

#### create
Creates a data item.

`@override`
> Future\<T?\> create(IContext? context, T? item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T? - item to be created.
- **returns**: Future\<T?\> - created item


#### deleteById
Deletes a data item based on it's unique id.

`@override`
> Future\<T?\> deleteById(IContext? context, K? id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K? -  id of the item to be deleted
- **returns**: Future\<T?\> - deleted item.


#### deleteByIds
Deletes multiple data items based on their unique ids.

> Future deleteByIds(IContext? context, List\<K\> ids)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List\<K\> -  ids of data items to be deleted.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> Future\<List\<T\>\> getListByIds(IContext? context, List\<K\> ids)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List\<K\> -  ids of data items to be retrieved
- **returns**: Future\<List\<T\>\> - data list of results by ids.


#### getOneById
Gets a data item based on its unique id.

`@override`
> Future\<T\> getOneById(IContext? context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: Future\<T\> - data item by id.


#### set
Sets a data item. If the data item exists, it updates it. Otherwise, it creates a new data item.

> Future\<T\> set(IContext? context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: Future\<T\> - updated item


#### update
Updates a data item.

`@override`
> Future\<T\> update(IContext? context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: Future\<T\> - updated item.


#### updatePartially
Updates only a few selected fields in a data item.

> Future\<T\> updatePartially(IContext? context, K id, [AnyValueMap](../../../commons/data/any_value_map) data)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of a data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Future\<T\> - updated item.

### Examples

```dart
     class MyMemoryPersistence extends IdentifiableMemoryPersistence<MyData, string> {

         dynamic _composeFilter(FilterParams filter) {
             filter = filter ?? FilterParams();
             var name = filter.getAsNullableString("name");
             return (item) {
                 if (name != null && item.name != name)
                     return false;
                 return true;
             };
         }

         Future<DataPage<MyData>> getPageByFilter(IContext? context, FilterParams filter, PagingParams paging){
             return super.getPageByFilter(context, composeFilter(filter), paging, null, null);
         }

     }

    var persistence = MyMemoryPersistence();

    var item = persistence.create("123", { id: "1", name: "ABC" })
    var page = persistence.getPageByFilter(
             "123",
             FilterParams.fromTuples(["name", "ABC"]),
             null);

    print(page.data);          // Result: { id: "1", name: "ABC" }

    item = persistence.deleteById("123", "1");
                     ...

```

### See also
- #### [MemoryPersistence](../memory_persistence)
