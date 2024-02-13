---
type: docs
title: "PostgresPersistence"
linkTitle: "PostgresPersistence"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-postgres-gox"
description: >
    Abstract persistence component that stores data in PostgreSQL using the official driver.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

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
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it

- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: (optional) username
    - **password**: (optional) user's password

- **options**:
    - **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
    - **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
    - **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors

#### InheritPostgresPersistence
Creates a new instance of the persistence component.

> InheritPostgresPersistence[T any](overrides [IPostgresPersistenceOverrides[T]](../ipostgres_persistence_overrides), tableName string) *PostgresPersistence

- **overrides**: [IPostgresPersistenceOverrides[T]](../ipostgres_persistence_overrides) - References to override virtual methods.
- **tableName**: string - (optional) a table name.

### Fields

<span class="hide-title-link">

#### TableName
The PostgreSQL table name.
> **TableName**: string

#### DependencyResolver
The dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### _connection
The PostgreSQL connection component.
> **Connection**: [*PostgresConnection](../../connect/postgres_connection) 

#### Client
The PostgreSQL connection pool object.
> **Client**: *pgxpool.Pool 

#### DatabaseName 
The PostgreSQL database name.
> **DatabaseName**: string

#### MaxPageSize
The maximum number of records to return from the database.
> **MaxPageSize**: int

</span>


### Methods

#### Clear
Clears a component's state.

> (c [*PostgresPersistence[T]]()) Clear(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext)- a context to trace execution through a call chain.
- **returns**: error - returns error if not received.

#### ClearSchema
Clears all auto-created objects.

> (c [*PostgresPersistence[T]]()) ClearSchema()


#### Close
Closes the component and frees used resources.

> (c [*PostgresPersistence[T]]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext)- a context to trace execution through a call chain.
- **returns**: (err error) - returns error if not received.


#### Configure
Configures the component.

> (c [*PostgresPersistence[T]]()) Configure(ctx context.Context, config [*conf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operationcontext.
- **config**: [*conf.ConfigParams](../../../components/config/config_params) - configuration parameters to set.


#### ConvertFromPublic
Converts an object value from public to internal format.

> (c [*PostgresPersistence[T]]()) ConvertFromPublic(value T) (map[string]any, error)

- **value**: T - object in public format to convert.
- **returns**: (map[string]any, error) - converted object in internal format.

#### ConvertFromPublicPartial
Converts the given object from the public partial format.

> (c [*PostgresPersistence[T]]()) ConvertFromPublicPartial(value map[string]any) (map[string]any, error)

- **value**: map[string]any - the object to convert from the public partial format. 
- **returns**: (map[string]any, error) - the initial object.

#### ConvertToPublic
Converts an object value from internal to public format.

> (c [*PostgresPersistence[T]]()) ConvertToPublic(rows pgx.Rows) T

- **item**: pgx.Rows - object in internal format to convert.
- **returns**: T - converted object in public format.


#### Create
Creates a data item.

> (c [*PostgresPersistence[T]]()) Create(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### CreateSchema
Checks if a table exists and if it doesn't, it creates the necessary database objects.

> (c [*PostgresPersistence[T]]()) CreateSchema(context [IContext](../../../components/context/icontext)) (err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - returns error if not received.


#### DefineSchema
Defines database schema via auto create objects or convenience methods.

> (c [*PostgresPersistence[T]]()) DefineSchema()


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a func **DeleteByFilter** method from child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence[T]]()) DeleteByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter string) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) a filter JSON object.
- **returns**: (err error) - returns error if not received.


#### EnsureIndex
Adds index definition to create it on opening.

> (c [*PostgresPersistence[T]]()) EnsureIndex(name string, keys map[string]string, options map[string]string)

- **keys**: map[string]string - index keys (fields)
- **options**: map[string]string - index options


#### EnsureSchema
Adds a statement to schema definition.

> (c [*PostgresPersistence[T]]()) EnsureSchema(schemaStatement string)

- **schemaStatement**: string - statement to be added to the schema

#### GenerateColumns
Generates a list of column names to use in SQL statements like: "column1,column2,column3".

> (c [*PostgresPersistence[T]]()) GenerateColumns(columns []string) string

- **values**: []string - an array with column values.
- **returns**: string - generated list of column names 

#### GenerateColumnsAndValues
GenerateColumnsAndValues generates a list of column parameters

> GenerateColumnsAndValues(objMap map[string]any) ([]string, []any)

- **values**: map[string]any - an key-value map with column values.
- **returns**: ([]string, []any) - a generated list of column values.

#### GenerateParameters
Generates a list of value parameters to use in SQL statements like: *"$1,$2,$3"*.

> (c [*PostgresPersistence[T]]()) GenerateParameters(valuesCount int) string

- **values**: int - count of generate parameters.
- **returns**: string - generated list of value parameters


#### GenerateSetParameters
Generates a list of column sets to use in UPDATE statements like: *"$1,$2,$3"*.

> (c [*PostgresPersistence[T]]()) GenerateSetParameters(values []string) string

- **values**: []string - an array with column values.
- **returns**: string - generated list of column sets


#### GenerateValues
Generates a list of column parameters.

> (c [*PostgresPersistence[T]]()) GenerateValues(columns string, values interface{}) []interface{}

- **values**: interface{} - key-value map with columns and values
- **returns**: []interface{} - generated list of column values



#### GetCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a func **GetCountByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence[T]]()) GetCountByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter string) (count int64, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) JSON object filter.
- **returns**: (count int64, err error) - number of filtered items.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a func **GetListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence[T]]()) GetListByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter string, sort string, sel string) (items []T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter function to filter items
- **sort**: string - (optional) sorting parameters
- **sel**: string - (optional) projection parameters (not used yet)
- **returns**: (items []T, err error) - data list of filtered results.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a func getOneRandom method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence[T]]()) GetOneRandom(ctx context.Context, context [IContext](../../../components/context/icontext), filter string) (item T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) a filter JSON object.
- **returns**: (item T, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a func **GetPageByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*PostgresPersistence[T]]()) GetPageByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter string, paging [*cdata.PagingParams](../../../data/query/paging_params), sort string, sel string) (page [*cdata.DataPage[T]](../../../data/query/data_page), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter for JSON objects
- **paging**: [*cdata.PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: string - (optional) sorting JSON object
- **sel**: string - (optional) projection JSON object
- **returns**: (page [*cdata.DataPage[T]](../../../data/query/data_page), err error) - data page with filtered result

#### IsOpen
Checks if the component is opened.

> (c [*PostgresPersistence[T]]()) IsOpen() bool

- **returns**: bool - True if the component has been opened and False otherwise.

#### IsTerminated
IsTerminated checks if the wee need to terminate process before close component.

> (c *PostgresPersistence[T]) IsTerminated() bool

- **returns**: bool - true if you need terminate your processes.

#### Open
Opens the component.

> (c [*PostgresPersistence[T]]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - returns error if not received.


#### QuoteIdentifier
Adds a single quote to each side of the string.

> (c [*PostgresPersistence[T]]()) QuoteIdentifier(value string) string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### SetReferences
Sets references to dependent components.

> (c [*PostgresPersistence[T]]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*PostgresPersistence[T]]()) UnsetReferences()

#### QuotedTableName
Return quoted SchemaName with TableName ("schema"."table")
> (c [*PostgresPersistence[T]]()) QuotedTableName() string

- **returns**: string - quoted SchemaName.
