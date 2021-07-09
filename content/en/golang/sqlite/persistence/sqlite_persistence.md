---
type: docs
title: "SqlitePersistence<T>"
linkTitle: "SqlitePersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-sqlite-go"
description: >
    Abstract persistence component that stores data in SQLite using the default driver.
    
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description
The SqlitePersistence class allows you to create abstract persistence components that store data in SQLite using the default driver.
    
Important points
    
- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **c._db** or **c._collection** properties.

#### Configuration parameters

- **table**: (optional) SQLite table name
- **schema**: (optional) SQLite schema name
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: (optional) username
    - **password**: (optional) user's password
- **options**:
    - **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
    - **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
    - **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials


### Constructors

#### InheritSqlitePersistence
Creates a new instance of the persistence component.

> InheritSqlitePersistence(overrides ISqlitePersistenceOverrides, proto reflect.Type, tableName string) [*SqlitePersistence]()

- **overrides**: ISqlitePersistenceOverrides - a references to child class that overrides virtual methods
- **proto**: reflect.Type -  TODO: add description
- **tableName**: string - (optional) a table name.


### Fields

<span class="hide-title-link">

#### DatabaseName
SQLite database name.
> **DatabaseName**: string

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### Connection
SQLite connection component.
> **Connection**: [*SQLiteConnection](../../connect/sqlite_connection) 

#### Client
SQLite connection pool object.
> **Client**: *sql.DB 

#### MaxPageSize
Maximum number of records to return from the database per request.
> **MaxPageSize**: int

</span>


### Instance methods


#### Clear
Clears a component's state.

> (c [*SqlitePersistence]()) Clear(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### ClearSchema
Clears all auto-created objects

> (c [*SqlitePersistence]()) ClearSchema()


#### Close
Closes a component and frees the used resources.

> (c [*SqlitePersistence]()) Close(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*SqlitePersistence]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config:**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ConvertFromPublic
Converts an object value from public to internal format.

> (c [*SqlitePersistence]()) ConvertFromPublic(value interface{}) interface{}

- **value**: interface{} - object in public format to convert.
- **returns**: interface{} - converted object in internal format.


#### ConvertToPublic
Converts object value from internal to func (c * SqlitePersistence) format.

> (c [*SqlitePersistence]()) ConvertToPublic(rows *sql.Rows) interface{}

- **rows**: *sql.Rows - object in internal format to convert.
- **returns**: interface{} - converted object in func (c * SqlitePersistence) format.


#### Create
Creates a data item.

> (c [*SqlitePersistence]()) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### CreateSchema
Checks if a table exists and if not, it creates the necessary database objects.
> (c [*SqlitePersistence]()) CreateSchema(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### DefineSchema
Defines a database schema via auto-create objects or convenience methods.

> (c [*SqlitePersistence]()) DefineSchema()


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a func **DeleteByFilter** method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence]()) DeleteByFilter(correlationId string, filter string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter function to filter items.
- **returns**: (err error) - error or nil no errors occured.

#### EnsureIndex
Adds index definition to create it on opening.

> (c [*SqlitePersistence]()) EnsureIndex(name string, keys map[string]string, options map[string]string)

- **name**: string - TODO: add description
- **keys**: map[string]string - index keys (fields)
- **options**: map[string]string - index options


#### EnsureSchema
Adds a statement to schema definition.

> (c [*SqlitePersistence]()) EnsureSchema(schemaStatement string)

- **schemaStatement**: string - statement to be added to the schema


#### GenerateColumns
Generates a list of column names to use in SQL statements like: *"column1,column2,column3"*.

> (c [*SqlitePersistence]()) GenerateColumns(values interface{}) string

- **values**: interface{} - array with column values or a key-value map
- **returns**: string - generated list of column names 


#### GenerateParameters
Generates a list of value parameters to use in SQL statements like: "$1,$2,$3"

> (c [*SqlitePersistence]()) GenerateParameters(values interface{}) string

- **values**: interface{} - array with values or a key-value map
- **returns**: string - generated list of value parameters


#### GenerateSetParameters
Generates a list of column sets to use in UPDATE statements like: column1=$1,column2=$2

> (c [*SqlitePersistence]()) GenerateSetParameters(values interface{}) (params string, columns string)

- **values**: interface{} - key-value map with columns and values
- **returns**: (params string, columns string) - generated list of column sets


#### GenerateValues
Generates a list of column parameters.

> (c [*SqlitePersistence]()) GenerateValues(columns string, values interface{}) []interface{}

- **columns**: string - TODO: add description
- **values**: interface{} - key-value map with columns and values
- **returns**: []interface{} - generated list of column values



#### GetCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a func **GetCountByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence]()) GetCountByFilter(correlationId string, filter interface{}) (count int64, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) JSON object filter
- **returns**: (count int64, err error) - number of filtered items.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a func **GetListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence]()) GetListByFilter(correlationId string, filter interface{}, sort interface{}, sel interface{}) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) filter function to filter items
- **sort**: interface{} - (optional) sorting parameters
- **sel**: interface{} - (optional) projection parameters (not used yet)
- **returns**: (items []interface{}, err error) - data list of results by filter.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a func **GetOneRandom** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence]()) GetOneRandom(correlationId string, filter interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) filter JSON object
- **returns**: (item interface{}, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a func **GetPageByFilter** method from the a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence]()) GetPageByFilter(correlationId string, filter interface{}, paging [*PagingParams](../../../commons/data/paging_params), sort interface{}, sel interface{}) (page [*DataPage](../../../commons/data/data_page), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) filter for JSON objects.
- **paging**: [*PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: interface{} - (optional) sorting JSON object
- **sel**: interface{} - (optional) projection JSON object
- **returns**: (page [*DataPage](../../../commons/data/data_page), err error) - data page of result by filter



#### IsOpen
Checks if the component is open.

> (c [*SqlitePersistence]()) IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> (c [*SqlitePersistence]()) Open(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### QuoteIdentifier
Adds single quotes to a string.

> (c [*SqlitePersistence]()) QuoteIdentifier(value string) string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes

#### QuotedTableName!

**TODO: this method is not implemented**

#### SetReferences
Sets references to dependent components.

> (c [*SqlitePersistence]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*SqlitePersistence]()) UnsetReferences()

### Examples

```go
TODO: add example
```
