---
type: docs
title: "MySqlPersistence"
linkTitle: "MySqlPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mysql-python"
description: >
    Abstract persistence component that stores data in MySQL using the official driver.
    
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

The MySqlPersistence class allows you to create persistence components that store data in MySQL databases using the official driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **self._db** or **self._collection** properties.

#### Configuration parameters

- **table**: (optional) MySQL table name
- **schema**: (optional) MySQL schema name
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
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> MySqlPersistence(table_name: str = None, schema_name: str = None)

- **table_name**: str - (optional) a table name.
- **schema_name**: str - (optional) a schema name.


### Fields

<span class="hide-title-link">

#### _table_name
The MySql table name.
> **_table_name**: str

#### _dependency_resolver
The dependency resolver.
> **_dependency_resolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _connection
The MySql connection component.
> **_connection**: [MySqlConnection](../../connect/mysql_connection) 

#### _client
The MySql connection pool object.
> **_client**: Any 

#### _database_name 
The MySql database name.
> **_database_name**: str

#### _max_page_size
The maximum number of records to return from the database per request.
> **_max_page_size** = 100

#### _schema_name
The SQLServer schema object.
> **_schema_name**: str

</span>


### Instance methods

#### clear
Clears a component's state.

> clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str]- (optional) transaction id used to trace execution through the call chain.

#### _clear_schema
Clears all auto-created objects

> _clear_schema()


#### close
Closes a component and frees the used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str]- (optional) transaction id used to trace execution through the call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


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


#### create
Creates a data item.

> create(correlation_id: Optional[str], item: T): Optional[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Optional[T] - created item


#### _create_schema
Checks if a table exists and if not, it creates the necessary database objects.
> _create_schema(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### _define_schema
Defines database schema via auto create objects or convenience methods.

> _define_schema()


#### delete_by_filter
Deletes data items that match to a given filter.
This method shall be called by a public **delete_by_filter** method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> delete_by_filter(correlation_id: Optional[str], filter: Any)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **filter**: Any - (optional) filter function to filter items.


#### _ensure_index
Adds index definition to create it on opening.

> _ensure_index(keys: Any, options: Any = None)

- **keys**: Any - index keys (fields)
- **options**: Any - index options


#### _ensure_schema
Adds a statement to schema definition.

> _ensure_schema(schema_statement: str)

- **schema_statement**: str - statement to be added to the schema


#### _generate_columns
Generates a list of column names to use in SQL statements like: *"column1,column2,column3"*.

> _generate_columns(values: Any): str

- **values**: Any - array with column values or a key-value map
- **returns**: str - generated list of column names 


#### _generate_parameters
Generates a list of value parameters to use in SQL statements like: *"$1,$2,$3"*.

> _generate_parameters(values: Any): str

- **values**: Any - array with values or a key-value map
- **returns**: str - generated list of value parameters


#### _generate_set_parameters
Generates a list of column sets to use in UPDATE statements like:  *column1=$1,column2=$2*.

> _generate_set_parameters(values: Any): str

- **values**: Any - key-value map with columns and values
- **returns**: str - generated list of column sets


#### _generate_values
Generates a list of column parameters.

> _generate_values(values: Any): List[Any]

- **values**: Any - key-value map with columns and values
- **returns**: List[Any] - generated list of column values



#### get_count_by_filter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **get_count_by_filter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_count_by_filter(correlation_id: Optional[str], filter: Any): int

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **filter**: Any - (optional) JSON object filter
- **returns**: int - number of filtered items.


#### get_list_by_filter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **get_list_by_filter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_list_by_filter(correlation_id: Optional[str], filter: Any, sort: Any = None, select: Any = None): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through the call chain.
- **filter**: Any - (optional) filter function to filter items
- **sort**: Any - (optional) sorting parameters
- **select**: Any - (optional) projection parameters (not used yet)
- **returns**: List[T] - data list of results by filter.


#### get_one_random
Gets a random item from items that match to a given filter.

This method shall be called by a public **get_one_random** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_one_random(correlation_id: Optional[str], filter: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **filter**: Any - (optional) a filter function to filter items.
- **returns**: T - a random item.


#### get_page_by_filter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public [get_page_by_filter](#get_page_by_filter) method from the a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_page_by_filter(correlation_id: Optional[str], filter: Any, paging: PagingParams, sort: Any = None, select: Any = None): [DataPage](../../../commons/data/data_page)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **filter**: Any - (optional) filter for JSON objects.
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: Any - (optional) sorting JSON object
- **select**: Any - (optional) projection JSON object
- **returns**: [DataPage](../../../commons/data/data_page) - a data page of result by filter



#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### _quote_identifier
Adds single quotes to a string.

> _quote_identifier(value: str): Optional[str]

- **value**: str - string where quotes need to be added
- **returns**: Optional[str] - string with added quotes


#### _quoted_table_name
Joins schema and database name in dot notation

> _quoted_table_name(): Optional[str]

- **returns**: Optional[str] - string with added quotes


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unset_references
Unsets (clears) previously set references to dependent components.

> unset_references()

### Examples

```python
class MyMySqlPersistence(MySqlPersistence):

    def __init__(self):
        super(MyMySqlPersistence, self).__init__('mydata')

    def get_by_name(self, correlation_id, name):
        criteria = {'name':name}
        return self._model.find_one(criteria)

    def set(self,correlation_id, item):
        criteria = {'name': item['name']}
        options = {'upsert': True, 'new': True}
        return self._model.find_one_and_update(criteria, item, options)

persistence =MyMySqlPersistence()
persistence.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 27017
))

persistence.open('123')
persistence.set('123', {'name':'ABC'})

item = persistence.get_by_name('123', 'ABC')
print(item) # Result: { name: "ABC" }
```
