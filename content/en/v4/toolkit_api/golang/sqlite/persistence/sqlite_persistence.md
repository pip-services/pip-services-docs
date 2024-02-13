---
type: docs
title: "SqlitePersistence[T]"
linkTitle: "SqlitePersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-sqlite-go"
description: >
    Abstract persistence component that stores data in SQLite using the default driver.
    
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description
The SqlitePersistence class allows you to create abstract persistence components that store data in SQLite using the default driver.
    
**Important points**
    
- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **c._db** or **c._collection** properties.

#### Configuration parameters

- **collection**: (optional) SQLite collection name
- **schema**: (optional) SQLite schema, default "public"
- **connection(s)**:
	- **discovery_key**: (optional) a key to retrieve the connection from IDiscovery
	- **host**: host name or IP address
	- **port**: port number (default: 27017)
	- **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
	- **store_key**: (optional) a key to retrieve the credentials from ICredentialStore
	- **username**: (optional) user name
	- **password**: (optional) user password
- **options**:
	- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
	- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
	- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../data/data/iidentifiable) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials


### Constructors

#### InheritSqlitePersistence
Creates a new instance of the persistence component.

> InheritSqlitePersistence(overrides [ISqlitePersistenceOverrides[T]](../isqlite_persistence_overrides), tableName string) [*SqlitePersistence]()

- **overrides**: [ISqlitePersistenceOverrides[T]](../isqlite_persistence_overrides) - references to child class that overrides virtual methods
- **tableName**: string - (optional) a table name.


### Fields

<span class="hide-title-link">

#### DatabaseName
SQLite database name.
> **DatabaseName**: string

#### DependencyResolver
Dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../refer/dependency_resolver)

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Connection
SQLite connection component.
> **Connection**: [*SQLiteConnection](../../connect/sqlite_connection) 

#### Client
SQLite connection pool object.
> **Client**: *sql.DB 

#### MaxPageSize
Maximum number of records to return from the database per request.
> **MaxPageSize**: int

#### SchemaName
The SQLite database schema name. If not set use "public" by default
> **SchemaName**: string

</span>


### Methods


#### Clear
Clears a component's state.

> (c [*SqlitePersistence[T]]()) Clear(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.

#### ClearSchema
Clears all auto-created objects

> (c [*SqlitePersistence[T]]()) ClearSchema()


#### Close
Closes a component and frees the used resources.

> (c [*SqlitePersistence[T]]()) Close(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*SqlitePersistence[T]]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config:**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### ConvertFromPublic
Converts an object value from public to internal format.

> (c [*SqlitePersistence[T]]()) ConvertFromPublic(value T) (map[string]any, error)

- **value**: T - object in public format to convert.
- **returns**: (map[string]any, error) - converted object in internal format.


#### ConvertFromPublicPartial
ConvertFromPublicPartial converts the given object from the public partial format.

> (c [*SqlitePersistence[T]]()) ConvertFromPublicPartial(value map[string]any) (map[string]any, error)

- **value**: map[string]any) - object in public format to convert.
- **returns**: (map[string]any, error) - converted object in internal format.

#### ConvertToPublic
Converts object value from internal to func (c * SqlitePersistence) format.

> (c [*SqlitePersistence[T]]()) ConvertToPublic(rows *sql.Rows) (T, error)

- **rows**: *sql.Rows - object in internal format to convert.
- **returns**: (T, error) - converted object in func (c * SqlitePersistence) format.


#### Create
Creates a data item.

> (c [*SqlitePersistence[T]]()) Create(ctx context.Context, correlationId string, item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### CreateSchema
Checks if a table exists and if not, it creates the necessary database objects.
> (c [*SqlitePersistence[T]]()) CreateSchema(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### DefineSchema
Defines a database schema via auto-create objects or convenience methods.

> (c [*SqlitePersistence[T]]()) DefineSchema()


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a func **DeleteByFilter** method from child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence[T]]()) DeleteByFilter(ctx context.Context, correlationId string, filter string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter function to filter items.
- **returns**: error - error or nil no errors occured.

#### EnsureIndex
Adds index definition to create it on opening.

> (c [*SqlitePersistence[T]]()) EnsureIndex(name string, keys map[string]string, options map[string]string)

- **name**: string - index name.
- **keys**: map[string]string - index keys (fields)
- **options**: map[string]string - index options


#### EnsureSchema
Adds a statement to schema definition.

> (c [*SqlitePersistence[T]]()) EnsureSchema(schemaStatement string)

- **schemaStatement**: string - statement to be added to the schema


#### GenerateColumns
Generates a list of column names to use in SQL statements like: *"column1,column2,column3"*.

> (c [*SqlitePersistence[T]]()) GenerateColumns(columns []string) string

- **values**: []string - array with column values or a key-value map
- **returns**: string - generated list of column names 


#### GenerateParameters
Generates a list of value parameters to use in SQL statements like: "$1,$2,$3"

> (c [*SqlitePersistence[T]]()) GenerateParameters(valuesCount int) string

- **valuesCount**: int - count of generated values.
- **returns**: string - generated string of value parameters.


#### GenerateSetParameters
Generates a list of column sets to use in UPDATE statements like: column1=$1,column2=$2

> (c [*SqlitePersistence[T]]()) GenerateSetParameters(columns []string) string

- **values**: []string - value list with columns.
- **returns**: string - generated list of column sets.


#### GenerateValues
Generates a list of column parameters.

> (c [*SqlitePersistence[T]]()) GenerateColumnsAndValues(objMap map[string]any) ([]string, []any)

- **objMap**: map[string]any - an array with column values or a key-value map
- **returns**: ([]string, []any) - a generated list of column values.


#### GetCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a func **GetCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence[T]]()) GetCountByFilter(ctx context.Context, correlationId string, filter string) (int64, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) JSON object filter
- **returns**: (int64, error) - number of filtered items.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a func **GetListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence[T]]()) GetListByFilter(ctx context.Context, correlationId string, filter string, sort string, selection string) (items []T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter function to filter items
- **sort**: string - (optional) sorting parameters
- **sel**: string - (optional) projection parameters (not used yet)
- **returns**: (items []T, err error) - data list of results by filter.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a func **GetOneRandom** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence[T]]()) GetOneRandom(ctx context.Context, correlationId string, filter string) (item T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter JSON object
- **returns**: (item T, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a func **GetPageByFilter** method from the a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*SqlitePersistence[T]]()) GetPageByFilter(ctx context.Context, correlationId string, filter string, paging cdata.PagingParams, sort string, selection string) (page cdata.DataPage[T], err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: string - (optional) filter for JSON objects.
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: string - (optional) sorting JSON object
- **selection**: string - (optional) projection JSON object
- **returns**: (page [DataPage[T]](../../../data/query/data_page), err error) - data page of result by filter



#### IsOpen
Checks if the component is open.

> (c [*SqlitePersistence[T]]()) IsOpen() bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> (c [*SqlitePersistence[T]]()) Open(ctx context.Context, correlationId string) (err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### QuoteIdentifier
Adds single quotes to a string.

> (c [*SqlitePersistence[T]]()) QuoteIdentifier(value string) string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes

#### QuotedTableName
QuotedTableName return quoted SchemaName with TableName ("schema"."table")

> (c [*SqlitePersistence[T]]()) QuotedTableName() string

- **returns**: string - quoted table name.

#### SetReferences
Sets references to dependent components.

> (c [*SqlitePersistence[T]]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*SqlitePersistence[T]]()) UnsetReferences()

### Examples

```go
type MySqlitePersistence struct {
	*persist.SqlitePersistence[MyData]
}

func NewMySqlitePersistence() *MySqlitePersistence {
	c := &MySqlitePersistence{}
	c.SqlitePersistence = persist.InheritSqlitePersistence[MyData](c, "mydata")
	return c
}

func (c *MySqlitePersistence) DefineSchema() {
	c.ClearSchema()
	c.SqlitePersistence.DefineSchema()
	// Row name must be in double quotes for properly case!!!
	c.EnsureSchema("CREATE TABLE " + c.QuotedTableName() + " (\"id\" TEXT PRIMARY KEY, \"key\" TEXT, \"content\" TEXT)")
	c.EnsureIndex(c.SqlitePersistence.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *MySqlitePersistence) GetOneById(ctx context.Context, correlationId string, name string) (item MyData, err error) {
	query := "SELECT * FROM " + c.QuotedTableName() + " WHERE \"name\"=$1"

	qResult, err := c.Client.QueryContext(ctx, query, name)
	if err != nil {
		return item, err
	}
	defer qResult.Close()

	if !qResult.Next() {
		return item, qResult.Err()
	}

	result, err := c.Overrides.ConvertToPublic(qResult)

	if err != nil {
		c.Logger.Trace(ctx, correlationId, "Nothing found from %s with name = %s", c.TableName, name)
		return item, err
	}
	c.Logger.Trace(ctx, correlationId, "Retrieved from %s with name = %s", c.TableName, name)
	return result, err

}

func (c *MySqlitePersistence) Set(ctx context.Context, correlationId string, item MyData) (result MyData, err error) {
	objMap, convErr := c.Overrides.ConvertFromPublic(item)
	if convErr != nil {
		return result, convErr
	}

	columns, values := c.GenerateColumnsAndValues(objMap)

	paramsStr := c.GenerateParameters(len(values))
	columnsStr := c.GenerateColumns(columns)
	setParams := c.GenerateSetParameters(columns)

	id := objMap["id"]

	query := "INSERT INTO " + c.QuotedTableName() + " (" + columnsStr + ")" +
		" VALUES (" + paramsStr + ")" +
		" ON CONFLICT (\"id\") DO UPDATE SET " + setParams + " RETURNING *"

	qResult, err := c.Client.QueryContext(ctx, query, values...)
	if err != nil {
		return result, err
	}
	defer qResult.Close()

	if !qResult.Next() {
		return result, qResult.Err()
	}

	result, convErr = c.Overrides.ConvertToPublic(qResult)
	if convErr != nil {
		return result, convErr
	} else {
		c.Logger.Trace(ctx, correlationId, "Set in %s with id = %s", c.TableName, id)
		return result, nil
	}
}
```

