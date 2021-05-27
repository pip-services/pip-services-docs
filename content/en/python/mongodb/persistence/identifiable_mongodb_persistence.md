---
type: docs
title: "IdentifiableMongoDbPersistence"
linkTitle: "IdentifiableMongoDbPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mongodb-python"
description: >
    Abstract persistence component that stores data in MongoDB
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Implements:** [MongoDbPersistence](../mongodb_persistence), [IIdentifiable](../../../commons/data/iidentifiable)

### Description

The IdentifiableMongoDbPersistence class allows you to create persistance components that store data in MongoDBs and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [get_page_by_filter](#get_page_by_filter), [get_list_by_filter](#get_list_by_filter) or [delete_by_filter](#delete_by_filter) operations with specific filter functions. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **self._collection** and **self._model** properties.

#### Configuration parameters

**connection(s)**:
- **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **max_pool_size**: (optional) maximum connection pool size (default: 2)
- **keep_alive**: (optional) enable connection keep alive (default: true)
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5000)
- **socket_timeout**: (optional) socket timeout in milliseconds (default: 360000)
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000)
- **max_page_size**: (optional) maximum page size (default: 100)
- **replica_set**: (optional) name of replica set
- **ssl**: (optional) enable SSL connection (default: false)
- **auth_source**: (optional) authentication source
- **debug**: (optional) enable debug output (default: false).

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> IdentifiableMongoDbPersistence(collection: str = None)

- **collection**: str - (optional) a collection name.


### Instance methods

#### _convert_from_public_partial
Converts the given object from the public partial format.

> _convert_from_public_partial(value: Any): Any

- **value**: Any - the object to convert from the public partial format.
- **returns**: Any - the initial object.


#### create
Creates a data item.

> create(correlation_id: Optional[str], item: T): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Optional[T] - created item


#### delete_by_id
Deletes a data item by it's unique id.

> delete_by_id(correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **id**: Any - id of the item to be deleted
- **return**: T - deleted item.


#### delete_by_ids
Deletes multiple data items by their unique ids.

> delete_by_ids(correlation_id: Optional[str], ids: List[Any])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **ids**: List[Any] - ids of data items to be deleted.


#### get_list_by_ids
Gets a list of data items retrieved by given unique ids.

> get_list_by_ids(correlation_id: Optional[str], ids: List[Any]): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **ids**: List[Any] - ids of data items to be retrieved
- **return**: List[T] - a data list of results by ids.


#### get_one_by_id
Gets a data item by its unique id.

> get_one_by_id(correlation_id: Optional[str], id: Any): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **id**: Any - id of data item to be retrieved.
- **returns**: Optional[T] - data item by id.


#### set
Sets a data item. If the data item exists it updates it, otherwise it create a new data item.

> set(correlation_id: Optional[str], item: T): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **item**: T - item to be set. 
- **returns**: Optional[T] - updated item


#### update
Updates a data item.

> update(correlation_id: Optional[str], item: T): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: Optional[T] - updated item.


#### update_partially
Updates only few selected fields in a data item.

> update_partially(correlation_id: Optional[str], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through a call chain.
- **id**: Any - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Optional[T] - updated item.

### Examples

```python
class MyMongoDbPersistence(MongoDbPersistence):
    def __init__(self):
        super(MyMongoDbPersistence, self).__init__("mydata", MyData)

    def get_page_by_filter(self, correlation_id, filter, paging, sort = None, select = None):
        super().def get_page_by_filter(correlation_id, filter, paging, None, None):

persistence = MyMongoDbPersistence()
persistence.configure(ConfigParams.from_tuples("host", "localhost", "port", 27017))

persitence.open("123")
persistence.create("123", { id: "1", name: "ABC" })
mydata = persistence.get_page_by_filter("123", FilterParams.from_tuples("name", "ABC"), None, None)

print(mydata)
persistence.delete_by_id("123", "1")
# ...

```
