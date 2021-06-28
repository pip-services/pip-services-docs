---
type: docs
title: "PostgresPersistence"
linkTitle: "PostgresPersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-postgres-go"
description: >
    Abstract persistence component that stores data in PostgreSQL using the official driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

The PostgresPersistence class allows you to create persistence components that store data in PostgreSQL using the official driver.

Important points

- This is the most basic persistence component that is only
able to store data items of any type. 
- Specific CRUD operations
over the data items must be implemented in child classes by
accessing **c.Db** or **c.Collection** properties.

#### Configuration parameters

- **collection**: (optional) PostgreSQL collection name
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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors

#### InheritPostgresPersistence
Creates a new instance of the persistence component.

> InheritPostgresPersistence(overrides IPostgresPersistenceOverrides, proto reflect.Type, tableName string) *PostgresPersistence

- **overrides**: IPostgresPersistenceOverrides - References to override virtual methods.
- **proto**: reflect.Type - TODO: add description. 
- **tableName**: string - (optional) a collection name.

### Fields

<span class="hide-title-link">

#### TableName
The PostgreSQL table object.
> **TableName**: string

#### DependencyResolver
The dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### _connection
The PostgreSQL connection component.
> **Connection**: [*PostgresConnection](../../connect/postgres_connection) 

#### Client
The PostgreSQL connection pool object.
> **Client**: *pgxpool.Pool 

#### DatabaseName 
The PostgreSQL database name.
> **DatabaseName**: string

#### TableName
The PostgreSQL table object.
> **TableName**: string

#### MaxPageSize
The maximum number of records to return from the database.
> **MaxPageSize**: int

</span>


### Methods

#### Clear
Clears a component's state.

> (c [*PostgresPersistence]()) Clear(correlationId string) error

- **correlationId**: string- object to convert from the public partial format.
- **returns**: error - returns error if not received.

#### ClearSchema
Clears all auto-created objects.

> (c [*PostgresPersistence]()) ClearSchema()


#### Close
Closes the component and frees used resources.

> (c [*PostgresPersistence]()) Close(correlationId string) (err error)

- **correlationId**: string- object to convert from the public partial format.
- **returns**: (err error) - returns error if not received.


#### Configure
Configures the component.

> (c [*PostgresPersistence]()) Configure(config [*conf.ConfigParams](../../config/config_params))

- **config**: [*conf.ConfigParams](../../config/config_params) - configuration parameters to set.


#### ConvertFromPublic
Converts an object value from public to internal format.

> (c [*PostgresPersistence]()) ConvertFromPublic(value interface{}) interface{}

- **value**: interface{} - object in public format to convert.
- **returns**: interface{} - converted object in internal format.


#### ConvertToPublic
Converts an object value from internal to public format.

> (c [*PostgresPersistence]()) ConvertToPublic(rows pgx.Rows) interface{}

- **item**: pgx.Rows - object in internal format to convert.
- **returns**: interface{} - converted object in public format.


#### Create
Creates a data item.

> (c [*PostgresPersistence]()) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### CreateSchema
Checks if a table exists and if it doesn't, it creates the necessary database objects.

> (c [*PostgresPersistence]()) CreateSchema(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - returns error if not received.


#### DefineSchema
Defines database schema via auto create objects or convenience methods.

> (c [*PostgresPersistence]()) DefineSchema()


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **DeleteByFilter** method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence]()) DeleteByFilter(correlationId string, filter string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) a filter JSON object.
- **returns**: (err error) - returns error if not received.


#### EnsureIndex
Adds index definition to create it on opening.

> (c [*PostgresPersistence]()) EnsureIndex(name string, keys map[string]string, options map[string]string)

- **keys**: map[string]string - index keys (fields)
- **options**: map[string]string - index options


#### EnsureSchema
Adds a statement to schema definition.

> (c [*PostgresPersistence]()) EnsureSchema(schemaStatement string)

- **schemaStatement**: string - statement to be added to the schema


#### GenerateColumns
Generates a list of column names to use in SQL statements like: "column1,column2,column3".

> (c [*PostgresPersistence]()) GenerateColumns(values interface{}) string

- **values**: interface{} - array with column values or a key-value map
- **returns**: string - generated list of column names 


#### GenerateParameters
Generates a list of value parameters to use in SQL statements like: *"$1,$2,$3"*.

> (c [*PostgresPersistence]()) GenerateParameters(values interface{}) string

- **values**: interface{} - array with values or a key-value map
- **returns**: string - generated list of value parameters


#### GenerateSetParameters
Generates a list of column sets to use in UPDATE statements like: *"$1,$2,$3"*.

> (c [*PostgresPersistence]()) GenerateSetParameters(values interface{}) (setParams string, columns string)

- **values**: interface{} - key-value map with columns and values
- **returns**: (setParams string, columns string) - generated list of column sets


#### GenerateValues
Generates a list of column parameters.

> (c [*PostgresPersistence]()) GenerateValues(columns string, values interface{}) []interface{}

- **values**: interface{} - key-value map with columns and values
- **returns**: []interface{} - generated list of column values



#### GetCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **GetCountByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence]()) GetCountByFilter(correlationId string, filter interface{}) (count int64, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) JSON object filter.
- **returns**: (count int64, err error) - number of filtered items.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence]()) GetListByFilter(correlationId string, filter interface{}, sort interface{}, sel interface{}) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) filter function to filter items
- **sort**: interface{} - (optional) sorting parameters
- **sel**: interface{} - (optional) projection parameters (not used yet)
- **returns**: (items []interface{}, err error) - data list of filtered results.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public getOneRandom method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence]()) GetOneRandom(correlationId string, filter interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: interface{} - (optional) a filter JSON object
- **returns**: (item interface{}, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetPageByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence]()) GetPageByFilter(correlationId string, filter interface{}, paging [*cdata.PagingParams](../../../commons/data/paging_params), sort interface{}, sel interface{}) (page [*cdata.DataPage](../../../commons/data/data_page), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **filter**: interface{} - (optional) filter for JSON objects
- **paging**: [*cdata.PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: interface{} - (optional) sorting JSON object
- **sel**: interface{} - (optional) projection JSON object
- **returns**: (page [*cdata.DataPage](../../../commons/data/data_page), err error) - data page with filtered result



#### IsOpen
Checks if the component is opened.

> (c [*PostgresPersistence]()) IsOpen() bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### Open
Opens the component.

> (c [*PostgresPersistence]()) Open(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - returns error if not received.


#### QuoteIdentifier
Adds a single quote to each side of the string.

> (c [*PostgresPersistence]()) QuoteIdentifier(value string) string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### SetReferences
Sets references to dependent components.

> (c [*PostgresPersistence]()) SetReferences(references [cref.IReferences](../../../commons/refer/ireferences))

- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*PostgresPersistence]()) UnsetReferences()

### Examples

```go
TODO: add example

```
