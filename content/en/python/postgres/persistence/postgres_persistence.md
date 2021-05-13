---
type: docs
title: "PostgresPersistence"
linkTitle: "PostgresPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-postgres-python"
description: >
    Abstract persistence component that stores data in PostgreSQL using plain driver.


    This is the most basic persistence component that is only
    able to store data items of any type. Specific CRUD operations
    over the data items must be implemented in child classes by
    accessing **self._db** or **self._collection** properties.
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)


#### Configuration parameters

 - **collection**: (optional) PostgreSQL collection name
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
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials

**Example:**
```python
class MyPostgresPersistence(PostgresPersistence):
    def __init__(self):
        super(MyPostgresPersistence, self).__init__('mydata')

    def get_by_name(self, correlation_id, name):
        criteria = {'name': name}
        return self._model.find_one(criteria)

    def set(self, correlation_id, item):
        criteria = {'name': item['name']}
        options = { 'upsert': True, 'new': True }
        return self._model.find_one_and_update(criteria, item, options)

persistence = MyPostgresPersistence()
persistence.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 27017
))

persistence.open("123")
persistence.set("123", {'name': "ABC"})

item = persistence.get_by_name("123", "ABC")
print(item) # Result: { 'name': "ABC" }
```

### Constructors
Creates a new instance of the persistence component.

> PostgresPersistence(table_name: str = None)

- **table_name**: str - (optional) a table name.


### Methods

#### clear
Clears component state.

> clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str]- the object to convert from the public partial format.

#### _clear_schema
Clears all auto-created objects

> _clear_schema()


#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str]- the object to convert from the public partial format.


#### configure
Closes component and frees used resources.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **correlation_id**: Optional[str]- the object to convert from the public partial format.


#### _convert_from_public
Convert object value from public to internal format.

> _convert_from_public(value: Any): Any

- **value**: Any - an object in public format to convert.
- **returns**: Any - converted object in internal format.


#### _convert_to_public
Converts object value from internal to public format.

> _convert_to_public(value: Any): Any

- **value**: Any - an object in internal format to convert.
- **returns**: Any - converted object in public format.


#### create
Creates a data item.

> create(correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: T - an item to be created.
- **returns**: T - a created item


#### _create_schema
TODO add description

> _create_schema(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### _define_schema
Defines database schema via auto create objects or convenience methods.

> _define_schema()


#### delete_by_filter
Deletes data items that match to a given filter.
This method shall be called by a public [delete_by_filter](#delete_by_filter) method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> delete_by_filter(correlation_id: Optional[str], filter: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) a filter function to filter items.


#### _ensure_index
Adds index definition to create it on opening

> _ensure_index(keys: Any, options: Any = None)

- **keys**: Any - index keys (fields)
- **options**: Any - index options


#### _ensure_schema
Adds a statement to schema definition

> _ensure_schema(schema_statement: str)

- **schema_statement**: str - a statement to be added to the schema


#### _generate_columns
Generates a list of column names to use in SQL statements like: "column1,column2,column3"

> _generate_columns(values: Any): str

- **values**: Any - an array with column values or a key-value map
- **returns**: str - a generated list of column names 


#### _generate_parameters
Generates a list of value parameters to use in SQL statements like: "%s,%s,%s"

> _generate_parameters(values: Any): str

- **values**: Any - an array with values or a key-value map
- **returns**: str - a generated list of value parameters


#### _generate_set_parameters
Generates a list of column sets to use in UPDATE statements like: column1=%s,column2=%s

> _generate_set_parameters(values: Any): str

- **values**: Any - a key-value map with columns and values
- **returns**: str - a generated list of column sets


#### _generate_values
Generates a list of column parameters

> _generate_values(values: Any): List[Any]

- **values**: Any - a key-value map with columns and values
- **returns**: List[Any] - a generated list of column values



#### get_count_by_filter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public [get_count_by_filter](#get_count_by_filter) method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_count_by_filter(correlation_id: Optional[str], filter: Any): int

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) a filter JSON object
- **returns**: int - a number of filtered items.


#### get_list_by_filter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public [get_list_by_filter](#get_list_by_filter) method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_list_by_filter(correlation_id: Optional[str], filter: Any, sort: Any = None, select: Any = None): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) a filter function to filter items
- **sort**: Any - (optional) sorting parameters
- **select**: Any - (optional) projection parameters (not used yet)
- **returns**: List[T] - a data list of results by filter.


#### get_one_random
Gets a random item from items that match to a given filter.

This method shall be called by a public [get_one_random](#get_one_random) method from child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_one_random(correlation_id: Optional[str], filter: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
filter: Any
- **returns**: T - a random item.


#### get_page_by_filter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public [get_page_by_filter](#get_page_by_filter) method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_page_by_filter(correlation_id: Optional[str], filter: Any, paging: PagingParams, sort: Any = None, select: Any = None): [DataPage](../../../commons/data/data_page)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) a filter JSON object
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: Any - (optional) sorting JSON object
- **select**: Any - (optional) projection JSON object
- **returns**: [DataPage](../../../commons/data/data_page) - a data page of result by filter



#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### _quote_identifier
TODO add description

> _quote_identifier(value: str): Optional[str]

- **value**: str - TODO add description
- **returns**: Optional[str] - TODO add description


#### _quote_identifier
TODO add description

> _quote_identifier(value: str): Optional[str]

- **value**: str - TODO add description
- **returns**: Optional[str] - TODO add description


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### unset_references
Unsets (clears) previously set references to dependent components.

> unset_references()