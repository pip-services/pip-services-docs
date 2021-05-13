---
type: docs
title: "IdentifiablePostgresPersistence"
linkTitle: "IdentifiablePostgresPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-postgres-python"
description: >
    Abstract persistence component that stores data in PostgreSQL
    and implements a number of CRUD operations over data items with unique ids.
    The data items must implement [IIdentifiable](../../../commons/data/iidentifiable) interface.


    In basic scenarios child classes shall only override [get_page_by_filter](#get_page_by_filter),
    [get_list_by_filter](#get_list_by_filter) or [delete_by_filter](#delete_by_filter) operations with specific filter function.
    All other operations can be used out of the box. 


    In complex scenarios child classes can implement additional operations by 
    accessing **self._collection** and **self._model** properties.
---

**Implements:** [PostgresPersistence](../postgres_persistence), [IIdentifiable](../../../commons/data/iidentifiable)


#### Configuration parameters

- **collection**: (optional) Postgres collection name

**connection(s)**:
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: (optional) user name
    - **password**: (optional) user password

**options**:
    - **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
    - **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
    - **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))

**Example:**
```python
class MyPostgresPersistence(IdentifiablePostgresJsonPersistence):

    def __init__(self):
        super(MyPostgresPersistence, self).__init__('mydata', MyDataPostgresSchema())

    def __compose_filter(self, filter):
        filter = filter or FilterParams()
        criteria = []
        name = filter.get_as_nullable_string('name')
        if name is not None:
            criteria.append({'name':name})

        return { '$and': criteria } if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id, filter, paging):
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, None, None)

persistence = MyPostgresPersistence()
persistence.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 27017
))

persistence.open("123")
persistence.create("123", {'id': "1", 'name': "ABC"})

page = persistence.get_page_by_filter('123', FilterParams.from_tuples('name', 'ABC'), None)
print(page.data)  # Result: { id: "1", name: "ABC" }
persistence.delete_by_id("123", "1")
# ...

```

### Constructors
Creates a new instance of the persistence component.

> IdentifiablePostgresPersistence(table_name: str = None)

- **table_name**: str - (optional) a collection name.


### Methods

#### _convert_from_public_partial
Converts the given object from the public partial format.

> _convert_from_public_partial(value: Any): Any

- **value**: Any - the object to convert from the public partial format.
- **returns**: Any - the initial object.


#### create
Creates a data item.

> create(correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: T - an item to be created.
- **returns**: Any - created item


#### create
Creates a data item.

> create(correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: T - an item to be created.
- **returns**: T - created item


#### delete_by_id
Deleted a data item by it's unique id.

> delete_by_id(correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **id**: Any - an id of the item to be deleted
- **returns**: T - deleted item


#### delete_by_ids
Deletes multiple data items by their unique ids.

> delete_by_ids(correlation_id: Optional[str], ids: List[Any])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **ids**: List[Any] - ids of data items to be deleted.


#### get_list_by_ids
Gets a list of data items retrieved by given unique ids.

> get_list_by_ids(correlation_id: Optional[str], ids: List[Any]): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **ids**: List[Any] - ids of data items to be retrieved
- **returns**: List[T] - data list


#### get_one_by_id
Gets a data item by its unique id.

> get_one_by_id(self, correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **id**: Any - an id of data item to be retrieved.
- **returns**: T - data item


#### set
Sets a data item. If the data item exists it updates it,
otherwise it create a new data item.

> set(correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: T - a item to be set.
- **returns**: T - updated item


#### update
Updates a data item.

> update(correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: T - an item to be updated.
- **returns**: T - updated item


#### update_partially
Updates only few selected fields in a data item.

> update_partially(self, correlation_id: Optional[str], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **id**: Any - an id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - a map with fields to be updated.
- **returns**: T - updated item
