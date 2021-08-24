---
type: docs
title: "MemoryPersistence<T>"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Persistence component that stores data in memory.

---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable),
[IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

The MemoryPersistence class allows you to create persistence components that store data in memory.

**Important points**
    
- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the this._items property and calling the **save** method.
- The component supports loading and saving items from another data source. This allows to use it as a base class for file and other types of persistence components that cache all data in memory. 

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors
Creates a new instance of the memory persistence component.

> MemoryPersistence([[ILoader<T>](../../core/iloader) loader, [ISaver<T>](../../core/isaver) saver])

- **loader**: [ILoader<T>](../../core/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver<T>](../../core/isaver) - (optional) saver used to save items to an external datasource.


### Fields

<span class="hide-title-link">

#### logger
Logger.
> **logger**: [CompositeLogger](../../../components/log/composite_logger)

#### items
Items to load/save.
> **items**: List<T>

#### loader
Loader.
> **loader**: [ILoader<T>](../../core/iloader)

#### saver
Saver.
> **saver**: [ISaver<T>](../../core/isaver)

#### opened
Boolean that indicates whether the compent is open or not.
> **opened**: bool = false

#### maxPageSize
Maximum amount of items per page.
> **maxPageSize**: int = 100

</span>


### Instance methods

#### clear
Clears the component's state.

> Future clear(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### create
Creates a data item.

> Future\<T\> create(String correlationId, T item)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Future\<T\> - created item


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> Future deleteByFilterEx(String correlationId, filter)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **filter**: dynamic - (optional) filter function used to filter items.


#### getCountByFilter
Gets the number of items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> Future\<int\> getCountByFilterEx(String correlationId, filter)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **filter**: dynamic -  id of the item to be deleted
- **returns**: Future\<int\> - number of data items that satisfy the filter.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> Future\<List\<T\>\> getListByFilterEx(String correlationId, filter, sort, select)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **filter**: dynamic - (optional) filter function used to filter items
- **sort**: dynamic - (optional) sorting parameters
- **select**: dynamic - (optional) projection parameters (not used yet)
- **returns**: Future\<List\<T\>\> - data list of filtered results.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **getOneRandom** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> Future\<T\> getOneRandom(String correlationId, filter)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **filter**: dynamic - (optional) a filter function to filter items.
- **returns**: Future\<T\> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getPageByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> Future<[DataPage<T>](../../../commons/data/data_page)> getPageByFilterEx(String correlationId, Function filter, [PagingParams](../../../commons/data/paging_params) paging, Function sort)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **filter**: Function - filter function used to filter items
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: Function - (optional) sorting parameters
- **returns**: Future<[DataPage<T>](../../../commons/data/data_page)> - data page with filtered results.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### load
Loads items.

> Future _load(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### save
Saves items to an external data source using a configured saver component.

> Future save(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### setReferences
Sets the component's references. References must match configured dependencies.

`@override`
> void setReferences(IReferences references)

- **references**: [IReferences](../../../commons/refer/ireferences/) - references to set.

### Examples

```dart
class MyMemoryPersistence extends MemoryPersistence<MyData> {
   Future<MyData> getByName(String correlationId, String name) async {
        var item = items.firstWhere((d) => d.name == name);
       return item;
    });
    Future<MyData> set(String correlatonId, MyData item) async {
        items = items.where((d) => d.name != name);
        items.add(item);
        await save(correlationId);
        return item;
    }
}

var persistence = MyMemoryPersistence();
persistence.set("123", { name: "ABC" })
var item = await persistence.getByName("123", "ABC")
print(item);                   // Result: { name: "ABC" }

```

### See also
- #### [MemoryPersistence](../memory_persistence)
