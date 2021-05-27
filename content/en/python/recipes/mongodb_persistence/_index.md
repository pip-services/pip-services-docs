---
type: docs
no_list: true
title: "MongoDB Persistence"
linkTitle: "MongoDB Persistence"
weight: 60
---

by Aleksey Dvoykin

### Introduction

In our previous tutorials, we took a look at in-memory and file persistence component implementations. Another frequent choice of persistence is Pip.Service’s MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database.
The most basic implementation of this component is the MongoDbPersistence class defined in the [MongoDb module](../../mongodb). It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations. 

### MongoDBPersistence

This is a basic component that stores data items of any type. Some basic operations for creating, getting, and deleting are already included. More advanced CRUD operations over the data items can be implemented in child classes by accessing the self._collection or self._model properties. This component also contains methods for opening and closing connections using the credentials provided.

The example below demonstrates a class that implements the MongoDB persistence component for the Beacon data model. 

```python
from typing import Any, Optional

from pip_services3_commons.data import FilterParams, PagingParams, DataPage
from pip_services3_mongodb.persistence import IdentifiableMongoDbPersistence

from .IBeaconsPersistence import IBeaconsPersistence
from ..data.version1 import BeaconV1


class BeaconsMongoDbPersistence(IdentifiableMongoDbPersistence, IBeaconsPersistence):

    def __init__(self):
        super(BeaconsMongoDbPersistence, self).__init__("beacons")
        self._max_page_size = 1000

    def compose_filter(self, filter: FilterParams) -> Any:
        filter = filter if filter is not None else FilterParams()
        criteria = []

        id = filter.get_as_nullable_string("id")
        if id is not None:
            criteria.append({"id": id})
        site_id = filter.get_as_nullable_string("site_id")
        if site_id is not None:
            criteria.append({"site_id": site_id})
        label = filter.get_as_nullable_string("label")
        if label is not None:
            criteria.append({"label": label})
        udi = filter.get_as_nullable_string("udi")
        if udi is not None:
            criteria.append({"udi": udi})
        udis = filter.get_as_object("udis")
        if udis is not None and len(udis) > 0:
            udis = udis.split(",")
            criteria.append({"udi": {"$in": udis}})
        return {"$and": criteria} if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams,
                           sort: Any = None, select: Any = None) -> DataPage:
        filter = filter if filter is not None else FilterParams()
        return super(BeaconsMongoDbPersistence, self).get_page_by_filter(correlation_id, self.compose_filter(filter),
                                                                         paging, None, None)

    def get_one_by_udi(self, correlation_id: Optional[str], udi: str) -> BeaconV1:
        if udi is None:
            return None
        item = self._collection.find_one({'udi': udi})
        item = self._convert_to_public(item)

        if item is None:
            self._logger.trace(correlation_id, "Found beacon by %s", udi)
        else:
            self._logger.trace(correlation_id, "Cannot find beacon by %s", udi)

        return item
```

And this is how we could use such a class:

```python
var persistence = BeaconMongoDbPersistence()
persistence.open("test")

beacon = BeaconV1(name = "Super Beacon")

persistence.set("test", beacon)
item = persistence.get_by_name("test", "Super Beacon")
persistence.close("test")
print(item) 

```

### Configuring database connections

As mentioned earlier, the MongoDbPersistence contains methods for opening and closing connections. To connect to the appropriate database and collection, we need to first configure the connection with all necessary parameters. MongoDbPersistence uses the MongoDbConnection class for establishing connections. 

The MongoDbConnection class provides MongoDB connectivity using a plain driver. To reduce the number of database connections needed, a connection can be defined and then shared through multiple persistence components.

By default, MongoDbPersistence tries to establish a local connection on MongoDb’s default port - 27017. If the desired MongoDb server is located elsewhere, the persistence should be configured with the corresponding host and port information. Persistence configuration can be performed in a number of ways.

The example below demonstrates how the ConfigParams class can be used for persistence configuration. To learn more about this class, and about microservice configuration in general, be sure to read [this](../configuration).

```python
persistence = BeaconMongoDbPersistence()
# Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.configure(ConfigParams.from_tuples(
	"connection.host", "localhost",
	"connection.port", "30000"
))
persistence.open(None) # While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000
```

Likewise, a connection can be configured using a configuration file. In this case, there exist two approaches:
1. configuring multiple persistences using a common MongoDbConnection.
2. configuring a single persistence with its own, private MongoDbConnection.

To perform configuration using a single MongoDbConnection, one of the following descriptors should be used:

```pip-services:connection:mongodb:*:1.0 or pip-services3:connection:mongodb:*:1.0.```

To learn more about references, descriptors, and component references, follow [this link](../component_references).  
First, add an element with the “pip-services” descriptor to the configuration file.

```yml
...
# MongoDb Connection
- descriptor: "pip-services:connection:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...
```

Next, register the persistence as a component in the microservice’s Factory:

```python
class BeaconsFactory(Factory):
    descriptor BeaconsMongoDbPersistneceDescriptor = Descriptor("beacons", "persistence", "mongodb", "default", "1.0")
        def __init__(self):
            self.register_as_type(BeaconsMongoDbPersistneceDescriptor, BeaconMongoDbPersistence)

```

And add the DefaultMongoDbFactory to the microservice’s ProcessContainer:

```python
class BeaconsProcess(ProcessContainer):
    def __init__(self):
        super(BeaconsProcess, self).__init__('beacons', 'Beacons microservice')

        self._factories.add(BeaconsServiceFactory())
        self._factories.add(DefaultRpcFactory())
        self._factories.add(DefaultSwaggerFactory())

```

If we’re configuring just a single connection to the Beacons MongoDB persistence, the connection configuration should use the “beacons” descriptor:

```yml
...
# MongoDb persistence
- descriptor: "beacons:persistence:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...

```

### Identifiable data objects and IdentifiableMongoDBPersistence

The implementation we will be working with going forward is called the IdentifiableMongoDbPersistence. It stores and processes data objects that have a unique ID field and implement the IIdentifiable interface defined in [the Commons module](../commons).

```python
class IIdentifiable(ABC):
    id: Any

```

**IdentifiableMongoDbPersistence** implements a number of CRUD operations that are based on working with the model's id in a predefined manner. In addition, it provides methods for getting paginated results and listing data using detailed filter, sort, and even projection parameters. 

```python
class IdentifiableMongoDbPersistence(MongoDbPersistence):

    def __init__(self, collection: str = None):
        ...

    def _convert_from_public_partial(self, value: Any) -> Any:
        ...

    def get_list_by_ids(self, correlation_id: Optional[str], ids: List[Any]) -> List[T]:
        ...

    def get_one_by_id(self, correlation_id: Optional[str], id: Any) -> T:
        ...

    def create(self, correlation_id: Optional[str], item: T) -> T:
        ...

    def set(self, correlation_id: Optional[str], item: T) -> T:
        ...

    def update(self, correlation_id: Optional[str], item: T) -> Optional[T]:
        ...

    def update_partially(self, correlation_id: Optional[str], id: Any, data: AnyValueMap) -> T:
        ...

    def delete_by_id(self, correlation_id: Optional[str], id: Any) -> T:
        ...

    def delete_by_ids(self, correlation_id: Optional[str], ids: List[Any]):
        ...

```

We can build upon the IdentifiableMongoDbPersistence by overriding its ComposeFilter method:

```python
class BeaconsMongoDbPersistence(IdentifiableMongoDbPersistence, IBeaconsPersistence):

    def __init__(self):
        super(BeaconsMongoDbPersistence, self).__init__("beacons")
        self._max_page_size = 1000

    def compose_filter(self, filter: FilterParams) -> Any:
        filter = filter if filter is not None else FilterParams()
        criteria = []

        id = filter.get_as_nullable_string("id")
        if id is not None:
            criteria.append({"id": id})
        site_id = filter.get_as_nullable_string("site_id")
        if site_id is not None:
            criteria.append({"site_id": site_id})
        label = filter.get_as_nullable_string("label")
        if label is not None:
            criteria.append({"label": label})
        udi = filter.get_as_nullable_string("udi")
        if udi is not None:
            criteria.append({"udi": udi})
        udis = filter.get_as_object("udis")
        if udis is not None and len(udis) > 0:
            udis = udis.split(",")
            criteria.append({"udi": {"$in": udis}})
        return {"$and": criteria} if len(criteria) > 0 else None

    def get(self, correlation_id: str, filter: FilterParams, paging: PagingParams) -> T
        return get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, None, None)

```


In most scenarios, child classes only need to override the GetPageByFilter(), GetListByFilter(), or DeleteByFilter() operations using a custom filter function (like the ComposeFilter function in the example above). All of the other operations can be used straight out of the box. Developers can implement custom methods by directly accessing the data objects, which are stored in the _collection property. See [the MongoDb module’s API](../../mongodb) documentation for more details.

### Filtering

Persistence components in the Pip.Services Toolkit use a number of data patterns. IdentifiableMongoDbPersistence, for example, supports Filtering. This pattern allows clients to use a FilterParams object to describe a subset of data using key-value pairs. These FilterParams can then be used for retrieving data in accordance with the specified search criteria [(see the Commons module)](../../commons).

```python
filter = FilterParams.from_tuples(
    'name', 'ABC'
)
result = persistence.get_page_filter(None, filter, None)

```

In the persistence component, the developer is responsible for parsing FilterParams and passing a filter function to the persistence’s methods of the base class.

```python
def _compose_filter(self, filter: FilterParams) -> Any:
    filter = filter if filter is not None else FilterParams()
    criteria = {}
    name  = filter.get_as_nullable_string("name")
    if id is not None:
        criteria['name'] = name
    
    return criteria

```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks, through multiple calls to the storage. A client can ask for the results to be paged by specifying a set of PagingParams, which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using PagingParams, but this parameter is optional. A DataPage object with a subset of the data will be returned as the result.


```python
//skip = 25, take = 50, total = False
paging = PagingParams(25, 50, False)
result = persistence.get_page_by_filter(None, None, paging)
```


### Custom Persistence Methods

As mentioned above, developers can also implement custom persistence methods. The _collection property can be used to access data objects from within such methods. Below is an example of a custom GetOneByNameAsync persistence method.

```python
def get_one_by_id(self, correlation_id: Optional[str], name: Any) -> T:

    item = self._collection.find_one({'name': name})

    if item is None:
        self._logger.trace(correlation_id, "Nothing found from %s with id = %s", self._collection_name, id)
    else:
        self._logger.trace(correlation_id, "Retrieved from %s with id = %s", self._collection_name, id)

    item = self._convert_to_public(item)

    return item

```

When we put everything together, we end up with the following component:

```python
class BeaconsMongoDbPersistence(IdentifiableMongoDbPersistence, IBeaconsPersistence):

    def __init__(self):
        super(BeaconsMongoDbPersistence, self).__init__("beacons")
        self._max_page_size = 1000

    def compose_filter(self, filter: FilterParams) -> Any:
        filter = filter if filter is not None else FilterParams()
        criteria = []

        id = filter.get_as_nullable_string("id")
        if id is not None:
            criteria.append({"id": id})
        site_id = filter.get_as_nullable_string("site_id")
        if site_id is not None:
            criteria.append({"site_id": site_id})
        label = filter.get_as_nullable_string("label")
        if label is not None:
            criteria.append({"label": label})
        udi = filter.get_as_nullable_string("udi")
        if udi is not None:
            criteria.append({"udi": udi})
        udis = filter.get_as_object("udis")
        if udis is not None and len(udis) > 0:
            udis = udis.split(",")
            criteria.append({"udi": {"$in": udis}})
        return {"$and": criteria} if len(criteria) > 0 else None

    def get(self, correlation_id: str, filter: FilterParams, paging: PagingParams) -> T
        return get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, None, None)

    def get_one_by_id(self, correlation_id: Optional[str], name: Any) -> T:

        item = self._collection.find_one({'name': name})

        if item is None:
            self._logger.trace(correlation_id, "Nothing found from %s with id = %s", self._collection_name, id)
        else:
            self._logger.trace(correlation_id, "Retrieved from %s with id = %s", self._collection_name, id)

        item = self._convert_to_public(item)

        return item
```

The following example demonstrates how we can use our newly created persistence for writing and reading Beacon objects to a MongoDB:

```python
persistence = BeaconMongoDbPersistence()
persistence.open(None)
beacon = BeaconV1(name = "Super Beacon")

persistence.set("test", beacon)
item = persistence.GetByNameAsync("test", "Super Beacon")
Console.Out.WriteLine(item) # Result: { name: "Super Beacon" }
items_page = persistence.get_page_by_filter("test", FilterParams.from_tuples("name", "Super Beacon"), None)

print(len(items_page.data)) # Result: 1
print(items_page.data[0])   # Result: { name: "Super Beacon" }
persistence.close("test")
```
