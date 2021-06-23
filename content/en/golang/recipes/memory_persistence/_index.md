---
type: docs
no_list: true
title: "Memory Persistence"
linkTitle: "Memory Persistence"
weight: 40
---

- by Artyom Grishchenko

### Introduction

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!

### The MemoryPersistence class

The most basic implementation is the MemoryPersistence class defined in the [Data module](../../data). It is only capable of storing a collection of objects, opening, and closing. It does not provide any data access methods.

The implementation we will be working with is called IdentifiableMemoryPersistence. It stores and processes data objects that have a unique ID field and implement the IIdentifiable interface defined in the [Commons module](../../commons).

```go
TODO: need add IIdentifiable

```

The IdentifiableMemoryPersistence implements a number of CRUD methods:

```go
type IdentifiableMemoryPersistence struct {
	MemoryPersistence
}

func NewIdentifiableMemoryPersistence(prototype reflect.Type) (c *IdentifiableMemoryPersistence) {}

func (c *IdentifiableMemoryPersistence) Configure(config *config.ConfigParams) {}

func (c *IdentifiableMemoryPersistence) GetListByIds(correlationId string, ids []interface{}) (result []interface{}, err error) {}

func (c *IdentifiableMemoryPersistence) GetOneById(correlationId string, id interface{}) (result interface{}, err error) {}

func (c *IdentifiableMemoryPersistence) GetIndexById(id interface{}) int {}

func (c *IdentifiableMemoryPersistence) Create(correlationId string, item interface{}) (result interface{}, err error) {}

func (c *IdentifiableMemoryPersistence) Set(correlationId string, item interface{}) (result interface{}, err error) {}

func (c *IdentifiableMemoryPersistence) Update(correlationId string, item interface{}) (result interface{}, err error) {}

func (c *IdentifiableMemoryPersistence) UpdatePartially(correlationId string, id interface{}, data *cdata.AnyValueMap) (result interface{}, err error) {}

func (c *IdentifiableMemoryPersistence) DeleteById(correlationId string, id interface{}) (result interface{}, err error) {}

func (c *IdentifiableMemoryPersistence) DeleteByIds(correlationId string, ids []interface{}) (err error) {
	filterFunc := func(item interface{}) bool {}

```

In most scenarios, child classes only need to override the GetPageByFilter(), GetListByFilter(), or DeleteByFilter() operations using a custom filter function. All other operations can be used right out of the box. Developers can implement custom methods by accessing stored data objects via the this._items property and complete transactions by calling the Save() method. See the [Data module’s API](../../data) documentation for more details.

### Filtering

Persistent components in the Pip.Services Toolkit use a number of data patterns. IdentifiedMemoryPersistence, for example, supports Filtering. This pattern allows clients to use a FilterParams object to describe a subset of data as key-value pairs. These FilterParams can then be used for retrieving data in accordance with certain search criteria (see the [Commons module](../../commons)).

```go

filter := FilterParams.NewFilterParamsfromTuples(
    "name", "ABC"
)
result, err := persistence.GetPageFilter(nil, filter, nil);
```

In the persistence component, the developer is responsible for parsing the FilterParams and passing a filter function to the persistent methods of the base class.


```go
func composeFilter(filter: FilterParams) (func (item interface{}) bool ) {
    if &filter == nil {
		filter = NewFilterParams()
	}
    name := filter.getAsnilableString("Name");
    return func(item interface{}) bool {
		dummy, ok := item.(MyData)
        if (*name != "" && ok && item.Name != *name)
            return false;
        return true;
};

func (mmp * MyMemoryPersistence) GetPageByFilter(correlationId string, filter FilterParams, paging PagingParams) (page DataPage, err error) {
    tempPage, err := c.GetPageByFilter(correlationId, composeFilter(filter), paging, nil, nil)
	dataLen := int64(len(tempPage.Data))
	data := make([]MyData, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(MyData)
	}
	page = *NewMyDataPage(&dataLen, data)
	return page, err
}

```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks through multiple calls to the storage. To do this, a client specifies a set of PagingParams, which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using PagingParams, but this parameter is optional. The service returns a subset of the data as a DataPage object.

```go
//skip = 25, take = 50, total = false
paging := NewPagingParams(25, 50, false);
page, err := persistence.GetPageByFilter("123", NewFilterParamsFromTuples("Name", "ABC"), nil)
```

### Custom Persistence Methods

As mentioned above, developers can also implement custom persistent methods. Inside those methods, they can access data objects via the _items property. When stored data is modified, developers must finish the transaction by calling the base class’s save() method.
Below is an example of a custom persistent method.

```go

func (c *MyMemoryPersistence) GetOneByName(correlationId string, name interface{}) (result interface{}, err error) {
    
    var item *interface{}
	for _, v := range c.Items {
		if buf, ok := v.(result.name); ok {
			if buf.name == name {
				item = &buf
				break
			}
		}
	}

	if item != nil {
		c.Logger.Trace(correlationId, "Found by %s", name)
	} else {
		c.Logger.Trace(correlationId, "Cannot find by %s", name)
	}

	return item, nil
}
```

When we put everything together, we get the following component:

```go

type MyMemoryPersistence struct{
  	MemoryPersistence
}

func composeFilter(filter: FilterParams) (func (item interface{}) bool ) {
    if &filter == nil {
		filter = NewFilterParams()
	}
    name := filter.getAsnilableString("Name");
    return func(item interface{}) bool {
		dummy, ok := item.(MyData)
        if (*name != "" && ok && item.Name != *name)
            return false;
        return true;
};

func (mmp * MyMemoryPersistence) GetPageByFilter(correlationId string, filter FilterParams, paging PagingParams) (page DataPage, err error) {
    tempPage, err := c.GetPageByFilter(correlationId, composeFilter(filter), paging, nil, nil)
	dataLen := int64(len(tempPage.Data))
	data := make([]MyData, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(MyData)
	}
	page = *NewMyDataPage(&dataLen, data)
	return page, err
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
```

A demonstration of how we can use our custom memory persistence is presented below:


```go
func UseMemoryPersistence():

    # Create items
    persistence = NewMyMemoryPersistence();
    createdItem, err = persistence.Create("123", { id: "1", name: "ABC" }, nil);

    # Filter by name
    page, err = persistence.GetPageByFilter(
            None,
            FilterParams.NewFilterParamsFromTuples("name", "ABC"),
            NewPagingParams(0, 100, False)
        )

```

### FileMemoryPersistence

The memory persistence component actually has one more trick up its sleeve: it can easily be extended to create a FileMemoryPersistence. The only thing you’ll need to add is the assignment of a PersisterObject in the FileMemoryPersistence’s constructor. The File persistence can be used for certain system test scenarios.

```go

type MyJsonFilePersistence struct {
    FilePersistence
}

func NewMyJsonFilePersistence(path string) *NewMyJsonFilePersistence {
  	prototype := reflcet.TypeOf(MyData{})
  	return &NewFilePersistence(prototype, NewJsonPersister(prototype, path))
}

func (c *FilePersistence) Configure(conf *config.ConfigParams) {
	c.Persister.Configure(conf)
}
    
```
