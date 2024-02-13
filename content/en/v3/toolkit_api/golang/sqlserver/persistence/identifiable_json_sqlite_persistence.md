---
type: docs
title: "IdentifiableJsonSqlServerPersistence[T any, K any]"
linkTitle: "IdentifiableJsonSqlServerPersistence"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-sqlserver-gox"
description: >
    Abstract persistence component that stores data in SqlServer in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.
draft: true
---

**Implements:** [IdentifiableSqlServerPersistence[T,K]](../identifiable_sqlserver_persistence)

### Description

**Important points**    
    
- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- The JSON table has only two fields: id and data.
- In basic scenarios, child classes shall only override [GetPageByFilter](../sqlserver_persistence/#getpagebyfilter), [GetListByFilter](../sqlserver_persistence/#getlistbyfilter) or [DeleteByFilter](../sqlserver_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios, child classes can implement additional operations by accessing **c._collection** and **c._model** properties.

#### Configuration parameters

- **table**: (optional) SQLServer table name
- **schema**: (optional) SQLServer table name
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Constructors

#### InheritIdentifiableJsonSqlServerPersistence
Creates a new instance of the persistence component.

> InheritIdentifiableJsonSqlServerPersistence[T any, K any](overrides [ISqlServerPersistenceOverrides[T]](../isqlserver_persistence_overrides), tableName string) [[*IdentifiableJsonSqlServerPersistence]()]()

- **overrides**: [ISqlServerPersistenceOverrides[T]](../isqlserver_persistence_overrides) - references to child class that overrides virtual methods
- **tableName**: string - (optional) a table name.


### Methods

#### ConvertFromPublic
Converts an object value from public to internal format.

> (c [*IdentifiableJsonSqlServerPersistence[T,K]]()) ConvertFromPublic(value T) (map[string]any, error)

- **value**: T - object in public format to convert.
- **returns**: map[string]any - converted object in internal format.


#### ConvertToPublic
Converts an object value from internal to public format.

> (c [*IdentifiableJsonSqlServerPersistence[T,K]]()) ConvertToPublic(item *sql.Rows) (T, error)

- **rows**: *sql.Rows - object in internal format to convert.
- **returns**: (T, error) - converted object in public format.


#### EnsureTable
Adds a DML statement to automatically create a JSON(B) table

> (c [*IdentifiableJsonSqlServerPersistence[T,K]]()) EnsureTable(idType string, dataType string)

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableJsonSqlServerPersistence[T,K]]()) UpdatePartially(ctx context.Context, correlationId string, id K, data cdata.AnyValueMap) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: (result T, err error) - updated item

### Examples

```go
type MySqlServerPersistence struct {
	*persist.IdentifiableJsonSqlServerPersistence[MyData, string]
}

func NewMySqlServerPersistence() *MySqlServerPersistence {
	c := &MySqlServerPersistence{}
	c.IdentifiableJsonSqlServerPersistence = persist.InheritIdentifiableJsonSqlServerPersistence[MyData, string](c, "mydata")
	return c
}

func (c *MySqlServerPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureTable("", "")
	c.EnsureSchema("ALTER TABLE [" + c.TableName + "] ADD [data_key] AS JSON_VALUE([data],'$.key')")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"data_key": "1"}, map[string]string{"unique": "true"})
}

func (c *MySqlServerPersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[MyData], err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "JSON_VALUE([data],'$.key')='" + key + "'"
	}

	return c.IdentifiableJsonSqlServerPersistence.GetPageByFilter(ctx, correlationId,
		filterObj, paging,
		"", "",
	)
}

func main() {
	persistence := NewMySqlServerPersistence()
	persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"host", "localhost",
		"port", 1433,
	))
	err := persitence.Open(context.Background(), "123")

	item, err := persistence.Create(context.Background(), "123", Mydata{Id: "1", Name: "ABC"})
	page, err := persistence.GetPageByFilter("123", *NewFilterParamsFromTuples("name", "ABC"), nil)

	fmt.Println(page.data) // Result: { id: "1", name: "ABC" }

	res, err := persistence.DeleteById(context.Background(),"123", "1")
}
```
