---
type: docs
title: "MySqlPersistence"
linkTitle: "MySqlPersistence"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-mysql-gox"
description: >
    Abstract persistence component that stores data in MySQL using the official driver.
    
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The `MySqlPersistence[T]` class allows you to create persistence components that store data in MySQL databases using the official driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **this._db** or **this._collection** properties.

#### Configuration parameters

- **table**: (optional) MySQL table name
- **schema**: (optional) MySQL schema name

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
    - **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials


### Constructors

#### InheritMySqlPersistence
InheritMySqlPersistence creates a new instance of the persistence component.

> InheritMySqlPersistence[T any](overrides [IMySqlPersistenceOverrides[T]](../imysql_persistence_overrides), tableName string) [*MySqlPersistence[T]]()

- **overrides**: [IMySqlPersistenceOverrides[T]](../imysql_persistence_overrides) - References to override virtual methods.
- **tableName**: string - (optional) table name.


### Fields

<span class="hide-title-link">

#### DatabaseName
The MySql database name.
> **DatabaseName**: string

#### DependencyResolver
The dependency resolver.
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Connection
The MySql connection component.
> **Connection**: [*MySqlConnection](../../connect/mysql_connection) 

#### Client
The MySql connection pool object.
> **Client**: *sql.DB

#### TableName 
The MySQL table name.

> **TableName**: string

#### MaxPageSize
The maximum number of records to return from the database per request.
> **MaxPageSize**: int = 100

#### SchemaName
The SQLServer schema object.
> **SchemaName**: string

</span>


### Instance methods

#### Clear
Clears a component's state.

> (c [*MySqlPersistence[T]]()) Clear(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil no errors occurred.

#### ClearSchema
Clears all auto-created objects

> (c [*MySqlPersistence[T]]()) ClearSchema()


#### close
Closes a component and frees the used resources.

> (c [*MySqlPersistence[T]]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil no errors occurred.

#### Configure
Configures component by passing configuration parameters.

> (c [*MySqlPersistence[T]]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config:**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### ConvertFromPublic
Converts object value from public to internal format.

> (c [*MySqlPersistence[T]]()) ConvertFromPublic(value T) (map[string]any, error)

- **value**: T - object in public format to convert.
- **returns**: (map[string]any, error) - converted object in internal format.


#### ConvertToPublic
Converts object value from internal to public format.

> (c [*MySqlPersistence[T]]()) ConvertToPublic(rows *sql.Rows) (T, error)

- **rows**: *sql.Rows - object in internal format to convert.
- **returns**: T - converted object in public format.


#### Create
Creates a data item.

> (c [*MySqlPersistence[T]]()) Create(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item.


#### CreateSchema
Checks if a table exists and if not, it creates the necessary database objects.
> (c [*MySqlPersistence[T]]()) CreateSchema(ctx context.Context, context IContext) (err error)

- **ctx**: context.Context - operation context.
- **context**: string - (optional) a context to trace execution through a call chain.
- **returns**: error - created item.

#### DefineSchema
Defines database schema via auto create objects or convenience methods.

> (c [*MySqlPersistence[T]]()) DefineSchema()


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MySqlPersistence[T]]()) DeleteByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter string) error

- **ctx**: context.Context - operation context.
- **context**: string - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function to filter items.
- **returns**: error - error or nil for success.


#### EnsureIndex
Adds index definition to create it on opening.

> (c [*MySqlPersistence[T]]()) EnsureIndex(name string, keys map[string]string, options map[string]string)

- **name**: string - index name.
- **keys**: any - index keys (fields).
- **options**: any - index options.


#### EnsureSchema
Adds a statement to schema definition.

> (c [*MySqlPersistence[T]]()) EnsureSchema(schemaStatement string)

- **schemaStatement**: string - statement to be added to the schema


#### GenerateColumns
Generates a list of column names to use in SQL statements like: *"column1,column2,column3"*.

> (c [*MySqlPersistence[T]]()) GenerateColumns(columns []string) string

- **columns**: []string - array with column values or a key-value map
- **returns**: string - generated list of column names 


#### GenerateParameters
Generates a list of value parameters to use in SQL statements like: *"?,?,?"*

> (c [*MySqlPersistence[T]]()) GenerateParameters(valuesCount int) string

- **valuesCount**: int - array with values or a key-value map
- **returns**: string - generated list of value parameters


#### GenerateSetParameters
Generates a list of column sets to use in UPDATE statements like: column1=$1,column2=$2

> (c [*MySqlPersistence[T]]()) GenerateSetParameters(columns []string) string

- **columns**: []string - key-value map with columns and values
- **returns**: string - generated list of column sets


#### GenerateColumnsAndValues
GenerateColumnsAndValues generates a list of column parameters

> (c [*MySqlPersistence[T]]()) GenerateColumnsAndValues(objMap map[string]any) ([]string, []any)

- **objMap**: map[string]any - key-value map with columns and values
- **returns**: ([]string, []any) - generated list of column values



#### GetCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MySqlPersistence[T]]()) GetCountByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter string) (int64, error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) JSON object filter
- **returns**: (int64, error) - number of filtered items.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MySqlPersistence[T]]()) GetListByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter string, sort string, selection string) (items []T, err error)

- **ctx**: context.Context - operation context.
- **context**: string - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter function to filter items
- **sort**: string - (optional) sorting parameters
- **select**: string - (optional) projection parameters (not used yet)
- **returns**: (items []T, err error) - data list of results by filter.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **GetOneRandom** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MySqlPersistence[T]]()) GetOneRandom(ctx context.Context, context [IContext](../../../components/context/icontext), filter string) (item T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) a filter JSON object
- **returns**: (item T, err error) - a random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetPageByFilter** method from the a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MySqlPersistence[T]]()) GetPageByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filter string, paging [PagingParams](../../../data/query/paging_params), sort string, selection string) (page [DataPage[T]](../../../data/query/data_page), err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: string - (optional) filter for JSON objects.
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: string - (optional) sorting JSON object
- **select**: string - (optional) projection JSON object
- **returns**: (page [DataPage[T]](../../../data/query/data_page), err error) - a data page of result by filter



#### IsOpen
Checks if the component is opened.

> (c [*MySqlPersistence[T]]()) IsOpen() bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### open
Opens the component.

> (c [*MySqlPersistence[T]]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil no errors occurred.

#### QuoteIdentifier
Adds single quotes to a string.

> (c [*MySqlPersistence[T]]()) QuoteIdentifier(value string) string

- **value**: string - string where quotes need to be added
- **returns**: string - string with added quotes


#### QuotedTableName
Joins schema and database name in dot notation

> (c [*MySqlPersistence[T]]()) QuotedTableName() string

- **returns**: string - string with added quotes


#### SetReferences
Sets references to dependent components.

> (c [*MySqlPersistence[T]]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*MySqlPersistence[T]]()) UnsetReferences()

### Examples

```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cpersist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
	persist "github.com/pip-services3-gox/pip-services3-mysql-gox/persistence"
	"github.com/pip-services3-gox/pip-services3-mysql-gox/test/fixtures"
)

type MyMySqlPersistence struct {
	*persist.MySqlPersistence[fixtures.Dummy]
}

func NewMyMySqlPersistence() *MyMySqlPersistence {
	c := &MyMySqlPersistence{}
	c.MySqlPersistence = persist.InheritMySqlPersistence[fixtures.Dummy](c, "mydata")
	return c
}

func (c *MyMySqlPersistence) GetOneByName(ctx context.Context, context IContext, name string) (item fixtures.Dummy, err error) {

	query := "SELECT * FROM " + c.QuotedTableName() + " WHERE name=?"

	rows, err := c.Client.QueryContext(ctx, query, name)
	if err != nil {
		return item, err
	}
	defer rows.Close()

	if !rows.Next() {
		return item, rows.Err()
	}

	if err == nil {
		return c.Overrides.ConvertToPublic(rows)
	}
	return item, err
}

func (c *MyMySqlPersistence) Set(ctx context.Context, context IContext, item fixtures.Dummy) (result fixtures.Dummy, err error) {
	objMap, convErr := c.Overrides.ConvertFromPublic(item)
	if convErr != nil {
		return result, convErr
	}

	columns, values := c.GenerateColumnsAndValues(objMap)

	paramsStr := c.GenerateParameters(len(values))
	columnsStr := c.GenerateColumns(columns)
	setParams := c.GenerateSetParameters(columns)
	id := cpersist.GetObjectId(objMap)

	values = append(values, values...)

	query := "INSERT INTO " + c.QuotedTableName() + " (" + columnsStr + ") VALUES (" + paramsStr + ")"
	query += " ON DUPLICATE KEY UPDATE " + setParams

	_, err = c.Client.ExecContext(ctx, query, values...)
	if err != nil {
		return result, err
	}

	// Getting result
	query = "SELECT * FROM " + c.QuotedTableName() + " WHERE id=?"
	rows, err := c.Client.QueryContext(ctx, query, []any{id}...)
	if err != nil {
		return result, err
	}
	defer rows.Close()

	if !rows.Next() {
		return result, rows.Err()
	}

	if err == nil {
		result, convErr = c.Overrides.ConvertToPublic(rows)
		if convErr != nil {
			return result, convErr
		}
		return result, nil
	}
	return result, rows.Err()

}

func main() {
	persistence := NewMyMySqlPersistence()
	persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"host", "localhost",
		"port", 27017,
	))

	err := persistence.Open(context.Background(), "123")

	res, err := persistence.Set(context.Background(), "123", MyData{Id: "1", Name: "ABC"})
	item, err := persistence.GetOneByName(context.Background(), "123", "ABC")
	fmt.Println(item) // Result: { Id: "1", Name: "ABC" }
}
```

