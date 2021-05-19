---
type: docs
title: "MongoDbPersistence"
linkTitle: "MongoDbPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mongodb-python"
description: >
    Abstract persistence component that stores data in MongoDB using the official MongoDB driver.

   
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

The MongoDbPersistence class allows you to create persistence components that store data in MongoDBs using the official MongoDB driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **self.__collection** or **self.__model** properties.

#### Configuration parameters

- **collection**: (optional) MongoDB collection name

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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> MongoDbPersistence(collection: str = None)

- **collection**: str - (optional) a collection name.


### Instance methods

#### clear
Clears component state.

> clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str]- object to convert from the public partial format.

#### _clear_schema
Clears all auto-created objects

> _clear_schema()


#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str]- object to convert from the public partial format.


#### configure
Closes component and frees used resources.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **correlation_id**: Optional[str]- object to convert from the public partial format.


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

> create(correlation_id: Optional[str], item: Any): Optional[dict]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **item**: Any - item to be created.
- **returns**: Optional[dict] - created item


#### _define_schema
Defines the database schema

> _define_schema()


#### delete_by_filter
This method shall be called by a public [delete_by_filter](#delete_by_filter) method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> delete_by_filter(correlation_id: Optional[str], filter: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **filter**: Any - (optional) a filter function to filter items.


#### _ensure_index
Adds index definition to create it on opening

> _ensure_index(keys: Any, options: Any = None)

- **keys**: Any - index keys (fields)
- **options**: Any - index options


#### get_count_by_filter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public [get_count_by_filter](#get_count_by_filter) method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_count_by_filter(correlation_id: Optional[str], filter: Any): int

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) filter JSON object
- **returns**: int - number of filtered items.


#### get_list_by_filter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public [get_list_by_filter](#get_list_by_filter) method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_list_by_filter(correlation_id: Optional[str], filter: Any, sort: Any = None, select: Any = None): List[dict]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) filter function used to filter items
- **sort**: Any - (optional) sorting parameters
- **select**: Any - (optional) projection parameters (not used yet)
- **returns**: List[dict] - data list of results by filter.


#### get_one_random
Gets a random item from items that match to a given filter.

This method shall be called by a public [get_one_random](#get_one_random) method from the child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_one_random(correlation_id: Optional[str], filter: Any): Optional[dict]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
filter: Any
- **returns**: Optional[dict] - random item.


#### get_page_by_filter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public [get_page_by_filter](#get_page_by_filter) method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_page_by_filter(correlation_id: Optional[str], filter: Any, paging: PagingParams, sort: Any = None, select: Any = None): [DataPage](../../../commons/data/data_page)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) filter JSON object
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: Any - (optional) sorting JSON object
- **select**: Any - (optional) projection JSON object
- **returns**: [DataPage](../../../commons/data/data_page) - data page obtained by filtering


### Examples

```python
class MyMongoDbPersistence(MongoDbPersistence):
    def __init__(self):
        super(MyMongoDbPersistence, self).__init__("mydata", MyData)

    def get_by_name(self, correlationId, name):
        item =  self._collection.find_one({ 'name': name })
        return item

    def set(self, correlationId, item):
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
