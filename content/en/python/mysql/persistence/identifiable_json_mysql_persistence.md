---
type: docs
title: "IdentifiableJsonMySqlPersistence"
linkTitle: "IdentifiableJsonMySqlPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mysql-python"
description: >
    Abstract persistence component that stores data in MySQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Implements:** [IdentifiableMySqlPersistence](../identifiable_mysql_persistence), [IIdentifiable](../../../commons/data/iidentifiable)

### Description

The IdentifiableJsonMySqlPersistence class allows you to create persistence components that store data in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The JSON table has only two fields: id and data.
- In basic scenarios child classes shall only override [get_page_by_filter](../mysql_persistence/#get_page_by_filter), [get_list_by_filter](../mysql_persistence/#get_list_by_filter) or [delete_by_filter](../mysql_persistence/#delete_by_filter) operations with a specific filter function. 
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **self._collection** and **self._model** properties.


#### Configuration parameters

- **collection**: (optional) MySQL collection name

**connection(s)**:    
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:    
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> IdentifiableJsonMySqlPersistence(table_name: str = None)

- **table_name**: str - (optional) collection name.


### Instance methods

#### _convert_from_public
Converts object value from public to internal format.

> _convert_from_public(value: Any): Any

- **value**: Any - object in public format to convert.
- **returns**: Any - converted object in internal format.


#### _convert_to_public
Converts object value from internal to public format.

> _convert_to_public(value: Any): Any

- **value**: Any - object in internal format to convert.
- **returns**: Any - converted object in public format.


#### _ensure_table
Adds DML statement to automatically create a JSON(B) table

> _ensure_table(id_type: str = 'VARCHAR(32)', data_type: str = 'JSON')

- **id_type**: str - type of the id column (default: VARCHAR(32))
- **data_type**: str - type of the data column (default: JSON)


#### update_partially
Updates only few selected fields in a data item.

> update_partially(correlation_id: Optional[str], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Optional[T] - updated item

### Examples

```python
class MyMySqlPersistence(IdentifiableJsonMySqlPersistence):

    def __init__(self):
        super(MyMySqlPersistence, self).__init__("mydata", MyDataMySqlSchema())

    def __compose_filter(self, filter):
        filter = filter or FilterParams()
        criteria = []
        name = filter.get_as_nullable_string('name')
        if name:
            criteria.append({'name': name})
        return {'$and': criteria} if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id, filter, paging):
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, None, None)

persistence = MyMySqlPersistence()
persistence.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 27017
))

persistence.open('123')
persistence.create('123', {'id': "1", 'name': "ABC"})
page = persistence.get_page_by_filter('123', FilterParams.from_tuples('name', 'ABC'), None)

print(page.data) # Result: { id: "1", name: "ABC" }
persistence.delete_by_id("123", "1")
# ...

```
