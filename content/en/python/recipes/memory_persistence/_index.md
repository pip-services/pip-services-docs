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

```python
class IIdentifiable:
    id: Any

```

The IdentifiableMemoryPersistence implements a number of CRUD methods:

```python
class IdentifiableMemoryPersistence(MemoryPersistence, IWriter, IGetter, ISetter, IIdentifiable):

    def __init__(self, loader: ILoader = None, saver: ISaver = None):
        ...


    def get_list_by_ids(self, correlation_id: Optional[str], ids: List[Any]) -> List[T]:
        ...

    def _find_one(self, id: str):
        ...

    def get_one_by_id(self, correlation_id: Optional[str], id: Any) -> T:
        ...

    def create(self, correlation_id: Optional[str], item: T) -> T:
        ...

    def set(self, correlation_id: Optional[str], item: T) -> T:
        ...

    def update(self, correlation_id: Optional[str], new_item: T) -> T:
        ...

    def update_partially(self, correlation_id: Optional[str], id: Any, data: AnyValueMap) -> T:
        ...

    def delete_by_id(self, correlation_id: Optional[str], id: Any) -> T:
        ...

    def delete_by_ids(self, correlation_id: Optional[str], ids: List[Any]):
        ...

```

In most scenarios, child classes only need to override the GetPageByFilter(), GetListByFilter(), or DeleteByFilter() operations using a custom filter function. All other operations can be used right out of the box. Developers can implement custom methods by accessing stored data objects via the this._items property and complete transactions by calling the Save() method. See the [Data module’s API](../../data) documentation for more details.

### Filtering

Persistent components in the Pip.Services Toolkit use a number of data patterns. IdentifiedMemoryPersistence, for example, supports Filtering. This pattern allows clients to use a FilterParams object to describe a subset of data as key-value pairs. These FilterParams can then be used for retrieving data in accordance with certain search criteria (see the [Commons module](../../commons)).

```python

filter = FilterParams.from_tuples(
    'name', 'ABC'
)
result = persistence.get_page_by_filter(self, correlation_id, filter, paging);
```

In the persistence component, the developer is responsible for parsing the FilterParams and passing a filter function to the persistent methods of the base class.


```python
def __compose_filter(self, filter: FilterParams) -> Any: 
    filter = filter or FilterParams()
    name = filter.get_as_nullable_string("name")

    def filter(item):
        if name is not None and item.name is not name:
            return false
        return true

    return filter
 
def get_page_by_filter(self, correlationId, filter, paging):
    super().get_page_by_filter(correlationId, filter, paging, None)

```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks through multiple calls to the storage. To do this, a client specifies a set of PagingParams, which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using PagingParams, but this parameter is optional. The service returns a subset of the data as a DataPage object.

```python
//skip = 25, take = 50, total = False
paging = PagingParams(25, 50, False)
result = persistence.get_page_by_filter(None, None, paging)
```

### Custom Persistence Methods

As mentioned above, developers can also implement custom persistent methods. Inside those methods, they can access data objects via the _items property. When stored data is modified, developers must finish the transaction by calling the base class’s save() method.
Below is an example of a custom persistent method.

```python
def get_one_by_name(self, correlation_id: string, name: string) -> MyData: 
    item = list(filter(lambda item: item.name == name, self._items))[0]
    if item is None: 
        self._logger.trace(correlation_id, "Found by %s", name)

    else:
        self._logger.trace(correlation_id, "Cannot find by %s", name)
    
    return item
```

When we put everything together, we get the following component:

```python
class MyMemoryPersistence(IdentifiableMemoryPersistence):
    def __compose_filter(self, filter: FilterParams) -> Any: 
        filter = filter or FilterParams()
        name = filter.get_as_nullable_string("name")

        def filter(item):
            if name is not None and item.name is not name:
                return false
            return true

        return filter
 
    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams,
                           sort: Any = None, select: Any = None) -> DataPage:

        return super(BeaconsMemoryPersistence, self).get_page_by_filter(correlation_id,
                                                                        self.__compose_filter(filter), paging=paging)

    def get_one_by_name(self, correlation_id: string, name: string) -> MyData: 
        item = list(filter(lambda item: item.name == name, self._items))[0]
        if item is None: 
            self._logger.trace(correlation_id, "Found by %s", name)

        else:
            self._logger.trace(correlation_id, "Cannot find by %s", name)
    
        return item

```

A demonstration of how we can use our custom memory persistence is presented below:


```python
def use_memory_persistence():

    # Create items
    persistence = new MyMemoryPersistence();
    created_item = persistence.create("123", { id: "1", name: "ABC" }, null);

    # Filter by name
    page = persistence.get_page_by_filter(
            None,
            FilterParams.from_tuples("name", "ABC"),
            PagingParams(0, 100, False)
        )

```

### FileMemoryPersistence

The memory persistence component actually has one more trick up its sleeve: it can easily be extended to create a FileMemoryPersistence. The only thing you’ll need to add is the assignment of a PersisterObject in the FileMemoryPersistence’s constructor. The File persistence can be used for certain system test scenarios.

```python
from pip_services3_data.persistence.JsonFilePersister import JsonFilePersister
from ..data.version1.BeaconV1 import BeaconV1
from .MyMemoryPersistence import MyMemoryPersistence
from pip_services3_commons.config.ConfigParams import ConfigParams 
class MyFilePersistence(MyMemoryPersistence):
    _persister: JsonFilePersister
    def _init__(self, path: str = None):
        super();
        self._persister = JsonFilePersister(path)
        self._loader = self._persister
        self._saver = self._persister
    
    def configure(self, config: ConfigParams):
        super().configure(config)
        self._persister.configure(config)
    
```
