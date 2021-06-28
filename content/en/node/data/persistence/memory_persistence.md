---
type: docs
title: "MemoryPersistence<T>"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Persistence component that stores data in memory.

---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable),
[IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

The MemoryPersistence class allows you to create persistence components that store data in memory.

Important points
    
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

> `public` constructor(loader: [ILoader<T>](../../core/iloader), saver: [ISaver<T>](../../core/isaver))

- **loader**: [ILoader<T>](../../core/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver<T>](../../core/isaver) - (optional) saver used to save items to an external datasource.


### Fields

<span class="hide-title-link">

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _items
Items to load/save.
> `protected` **_items**: T[]

#### _loader
Loader.
> `protected` **_loader**: [ILoader<T>](../../core/iloader)

#### _saver
Saver.
> `protected` **_saver**: [ISaver<T>](../../core/isaver)

#### _opened
Boolean that indicates whether the compent is open or not.
> `protected` **_opened**: boolean = false

#### _maxPageSize
Maximum amount of items per page.
> `protected` **_maxPageSize**: number = 100

</span>


### Instance methods

#### clear
Clears the component's state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### create
Creates a data item.

> `public` create(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` deleteByFilter(correlationId: string, filter: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter function used to filter items.


#### getCountByFilter
Gets the number of items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getCountByFilter(correlationId: string, filter: any): Promise\<number\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any -  id of the item to be deleted
- **returns**: Promise\<number\> - number of data items that satisfy the filter.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getListByFilter(correlationId: string, filter: any, sort: any, select: any): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) filter function used to filter items
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: Promise\<T[]\> - data list of filtered results.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **getOneRandom** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getOneRandom(correlationId: string, filter: any): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - (optional) a filter function to filter items.
- **returns**: Promise\<T\> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getPageByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` getPageByFilter(correlationId: string, filter: any, paging: [PagingParams](../../../commons/data/paging_params), sort: any, select: any): Promise<[DataPage<T>](../../../commons/data/data_page)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: any - filter function used to filter items
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: Promise<[DataPage<T>](../../../commons/data/data_page)> - data page with filterd results.


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component is open and False otherwise.


#### load
Loads items.

> `protected` load(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### save
Saves items to an external data source using a configured saver component.

> `public` save(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### setReferences
Sets the component's references. References must match configured dependencies.

> `public` setReferences(references: [IReferences](../ireferences)): void

- **references**: [IReferences](../ireferences) - references to set.

### Examples

```typescript
class MyMemoryPersistence extends MemoryPersistence<MyData> {
     
    public async getByName(correlationId: string, name: string): Promise<MyData> {
        let item = this._items.find((d) => d.name == name);
        return item;
    }); 
  
    public set(correlatonId: string, item: MyData): Promise<MyData> {
        this._items = this._items.find((d) => d.name != name);
        this._items.push(item);
        await this.save(correlationId);
        return item;
    }
  
}
let persistence = new MyMemoryPersistence();
    
let item = await persistence.set("123", { name: "ABC" });
item = await persistence.getByName("123", "ABC");
console.log(item);                   // Result: { name: "ABC" }

```

### See also
- #### [MemoryPersistence](../memory_persistence)
