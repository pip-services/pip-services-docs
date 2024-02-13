---
type: docs
title: "MongoDbPersistence"
linkTitle: "MongoDbPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-mongodb-python"
description: >
    Abstract persistence component that stores data in MongoDB using the official MongoDB driver.

   
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The MongoDbPersistence class allows you to create persistence components that store data in MongoDBs using the official MongoDB driver.

**Important points**

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing the **self.__collection** property.

#### Configuration parameters

- **collection**: (optional) MongoDB collection name

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> MongoDbPersistence(collection: str = None)

- **collection**: str - (optional) collection name.


### Instance methods

#### clear
Clears a component's state.

> clear(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### _clear_schema
Clears all auto-created objects

> _clear_schema()


#### close
Closes the component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Closes the component and frees used resources.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### _convert_from_public
Converts an object value from public to internal format.

> _convert_from_public(value: Any): Any

- **value**: Any - object in public format to convert.
- **returns**: Any - converted object in internal format.


#### _convert_to_public
Converts and object value from internal to public format.

> _convert_to_public(value: Any): Any

- **value**: Any - object in internal format to convert.
- **returns**: Any - converted object in public format.


#### create
Creates a data item.

> create(context: Optional[IContext], item: T): Optional[T]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Optional[T] - created item


#### _define_schema
Defines the database schema

> _define_schema()


#### delete_by_filter
This method shall be called by a public **delete_by_filter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> delete_by_filter(context: Optional[IContext], filter: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - (optional) filter function used to filter items.


#### _ensure_index
Adds index definition to create it on opening.

> _ensure_index(keys: Any, options: Any = None)

- **keys**: Any - index keys (fields)
- **options**: Any - index options


#### get_count_by_filter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **get_count_by_filter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> get_count_by_filter(context: Optional[IContext], filter: Any): int

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - (optional) filter JSON object
- **returns**: int - number of filtered items.


#### get_list_by_filter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **get_list_by_filter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> get_list_by_filter(context: Optional[IContext], filter: Any, sort: Any = None, select: Any = None): List[T]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - (optional) filter function used to filter items
- **sort**: Any - (optional) sorting parameters
- **select**: Any - (optional) projection parameters (not used yet)
- **returns**: List[dict] - data list of results by filter.


#### get_one_random
Gets a random item from items that match to a given filter.

This method shall be called by a public [get_one_random](#get_one_random) method from the child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> get_one_random(context: Optional[IContext], filter: Any): Optional[T]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - fileter JSON object.
- **returns**: Optional[T] - random item.


#### get_page_by_filter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **get_page_by_filter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> get_page_by_filter(context: Optional[IContext], filter: Any, paging: PagingParams, sort: Any = None, select: Any = None): [DataPage](../../../data/query/data_page)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - (optional) filter JSON object
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: Any - (optional) sorting JSON object
- **select**: Any - (optional) projection JSON object
- **returns**: [DataPage](../../../data/query/data_page) - data page obtained by filtering


### Examples

```python
class MyMongoDbPersistence(MongoDbPersistence):
    def __init__(self):
        super(MyMongoDbPersistence, self).__init__("mydata", MyData)

    def get_by_name(self, context, name):
        item =  self._collection.find_one({ 'name': name })
        return item

    def set(self, context, item):
        item = self._collection.find_one_and_update( 
            { '_id': item.id }, { '$set': item }, 
            return_document = pymongo.ReturnDocument.AFTER, 
            upsert = True 
            )

persistence = MyMongoDbPersistence()
persistence.configure(ConfigParams.from_tuples("host", "localhost", "port", 27017))

persitence.open("123")

persistence.set("123", { name: "ABC" })
item = persistence.get_by_name("123", "ABC")

print(item)
```
