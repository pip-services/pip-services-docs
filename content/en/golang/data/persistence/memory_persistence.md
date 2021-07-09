---
type: docs
title: "MemoryPersistence"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Persistence component that stores data in memory.

---

### Description

The MemoryPersistence class allows you to create persistence components that store data in memory.

Important points
    
- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the **Items** property and calling the **Save** method.
- The component supports loading and saving items from another data source. This allows to use it as a base class for file and other types of persistence components that cache all data in memory. 

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors

#### NewMemoryPersistence
Creates a new instance of the memory persistence component.

> NewMemoryPersistence(prototype reflect.Type) [*MemoryPersistence]()

- **prototype**: reflect.Type - type of contained data

### Fields

<span class="hide-title-link">

#### Logger
Logger.
> **Logger**: [CompositeLogger](../../../components/log/composite_logger)

#### Items
Items to load/save.
> **Items**: []interface{}

#### Loader
Loader.
> **Loader**: [ILoader](../../core/iloader)

#### Saver
Saver.
> **Saver**: [ISaver](../../core/isaver)

#### opened
Boolean that indicates whether the compent is open or not.
> **opened**: bool = false

#### MaxPageSize
Maximum amount of items per page.
> **MaxPageSize**: int

</span>


### Methods

#### Clear
Clears the component's state.

> (c [*MemoryPersistence]()) Clear(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not cleaned


#### Create
Creates a data item.

> (c [*MemoryPersistence]()) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a func **DeleteByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence]()) DeleteByFilter(correlationId string, filterFunc func(interface{}) bool) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterFunc**: func(interface{}) bool - (optional) filter function used to filter items.
- **returns**: error - returns error if not deleted


#### GetCountByFilter
Gets the number of items retrieved by a given filter.

This method shall be called by a func **GetCountByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence]()) GetCountByFilter(correlationId string, filterFunc func(interface{}) bool) (count int64, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterFunc**: func(interface{}) bool -  id of the item to be deleted
- **returns**: (count int64, err error) - number of data items that satisfy the filter.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a func **GetListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence]()) GetListByFilter(correlationId string, filterFunc func(interface{}) bool, sortFunc func(a, b interface{}) bool, selectFunc func(in interface{}) (out interface{})) (results []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterFunc**: func(interface{}) bool - (optional) filter function used to filter items
- **sortFunc**: func(a, b interface{}) bool - (optional) sorting parameters
- **selectFunc**: func(in interface{}) (out interface{}) - (optional) projection parameters (not used yet)
- **returns**: (results []interface{}, err error) - data list of filtered results.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a func **GetOneRandom** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence]()) GetOneRandom(correlationId string, filterFunc func(interface{}) bool) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterFunc**: func(interface{}) bool - (optional) a filter function to filter items.
- **returns**: (result interface{}, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a func **GetPageByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence]()) GetPageByFilter(correlationId string, filterFunc func(interface{}) bool, paging [*cdata.PagingParams](../../../commons/data/paging_params), sortFunc func(a, b interface{}) bool, selectFunc func(in interface{}) (out interface{})) (page [*cdata.DataPage](../../../commons/data/data_page), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterFunc**: func(interface{}) bool - filter function used to filter items
- **paging**: [*cdata.PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sortFunc**: func(a, b interface{}) bool - (optional) sorting parameters
- **selectFunc**: func(in interface{}) (out interface{}) - (optional) projection parameters (not used yet)
- **returns**: (page [*cdata.DataPage](../../../commons/data/data_page), err error) - data page with filterd results.


#### IsOpen
Checks if the component is open.

> (c [*MemoryPersistence]()) IsOpen() bool

- **returns**: bool - True if the component is open and False otherwise.


#### Load
Loads items.

> (c [*MemoryPersistence]()) load(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not loaded


#### Open
Opens the component.

> (c [*MemoryPersistence]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not opened


#### Save
Saves items to an external data source using a configured saver component.

> (c [*MemoryPersistence]()) Save(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not saved


#### SetReferences
Sets the component's references. References must match configured dependencies.

> (c [*MemoryPersistence]()) SetReferences(references [refer.IReferences](../ireferences))

- **references**: [refer.IReferences](../ireferences) - references to set.

### Examples

```go
type MyMemoryPersistence struct {
    MemoryPersistence
}
 func (c * MyMemoryPersistence) GetByName(correlationId string, name string)(item interface{}, err error) {
    for _, v := range c.Items {
        if v.name == name {
            item = v
            break
        }
    }
    return item, nil
});
func (c * MyMemoryPersistence) Set(correlatonId: string, item: MyData, callback: (err) => void): void {
    c.Items = append(c.Items, item);
    c.Save(correlationId);
}
persistence := NewMyMemoryPersistence();
err := persistence.Set("123", MyData{ name: "ABC" })
item, err := persistence.GetByName("123", "ABC")
fmt.Println(item)   // Result: { name: "ABC" }

```

### See also
- #### [MemoryPersistence](../memory_persistence)
