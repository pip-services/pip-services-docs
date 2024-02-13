---
type: docs
title: "IdentifiableSqlServerPersistence[T, K]"
linkTitle: "IdentifiableSqlServerPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-sqlserver-go"
description: >
    Abstract persistence component that stores data in SqlServer
    and implements a number of CRUD operations over data items with unique ids.
---

**Implements:** [SqlServerPersistence[T]](../sqlserver_persistence)


### Description

**Important points**
    
- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface. 
- In basic scenarios, child classes shall only override [GetPageByFilter](../sqlserver_persistence/#getpagebyfilter), [GetListByFilter](../sqlserver_persistence/#getlistbyfilter) or [DeleteByFilter](../sqlserver_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c._collection** and **c._model** properties.

#### Configuration parameters

- **collection**:               (optional) SqlServer collection name
- **connection(s)**:
	- **discovery_key**:        (optional) a key to retrieve the connection from IDiscovery
	- **host**:                 host name or IP address
	- **port**:                 port number (default: 27017)
	- **uri**:                  resource URI or connection string with all parameters in it
- **credential(s)**:
	- **store_key**:            (optional) a key to retrieve the credentials from ICredentialStore
	- **username**:             (optional) user name
	- **password**:             (optional) user password
- **options**:
	- **connect_timeout**:      (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
	- **idle_timeout**:         (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
	- **max_pool_size**:        (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../config/auth/icredential_store))


### Constructors

#### InheritIdentifiableSqlServerPersistence
Creates a new instance of the persistence component.

> InheritIdentifiableSqlServerPersistence(overrides [ISqlServerPersistenceOverrides[T]](../isqlserver_persistence_overrides), tableName string) [*IdentifiableSqlServerPersistence]()

- **overrides**: [ISqlServerPersistenceOverrides[T]](../isqlserver_persistence_overrides) - references to child class that overrides virtual methods
- **tableName**: string - (optional) a table name.


### Methods

#### Create
Creates a data item.

> (c [*IdentifiableSqlServerPersistence[T, K]]()) Create(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### DeleteById
Deletes a data item by it's unique id.

> (c [*IdentifiableSqlServerPersistence[T, K]]()) DeleteById(ctx context.Context, context [IContext](../../../components/context/icontext), id K) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: (result T, err error) - deleted item


#### DeleteByIds
Deletes multiple data items by their unique ids.

> (c [*IdentifiableSqlServerPersistence[T, K]]()) DeleteByIds(ctx context.Context, context [IContext](../../../components/context/icontext), ids []K) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: []K - ids of the data items to be deleted.
- **returns**: error - error or nil.


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiableSqlServerPersistence[T, K]]()) GetListByIds(ctx context.Context, context [IContext](../../../components/context/icontext), ids []K) (items []T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: []K - ids of the data items to be retrieved
- **returns**: (items []T, err error) - data list


#### GetOneById
Gets a data item by its unique id.

> (c [*IdentifiableSqlServerPersistence[T, K]]()) GetOneById(ctx context.Context, context [IContext](../../../components/context/icontext), id K) (item T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: (item T, err error) - data item.


#### Set
Sets a data item. If the data item exists, it updates it.
Otherwise, it creates a new data item.

> (c [*IdentifiableSqlServerPersistence[T, K]]()) Set(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: (result T, err error) - new or updated item


#### Update
Updates a data item.

> (c [*IdentifiableSqlServerPersistence[T, K]]()) Update(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: (result T, err error) - updated item


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableSqlServerPersistence[T, K]]()) UpdatePartially(ctx context.Context, context [IContext](../../../components/context/icontext), id K, data cdata.AnyValueMap) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (result T, err error) - updated item 

### Examples
```go
type SqlServerServerPersistence struct {
	*persist.IdentifiableSqlServerPersistence[MyData, string]
}

func NewSqlServerServerPersistence() *SqlServerServerPersistence {
	c := &SqlServerServerPersistence{}
	c.IdentifiableSqlServerPersistence = persist.InheritIdentifiableSqlServerPersistence[MyData, string](c, "mydata")
	return c
}

func (c *SqlServerServerPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureSchema("CREATE TABLE [" + c.TableName + "] ([id] VARCHAR(32) PRIMARY KEY, [key] VARCHAR(50), [content] VARCHAR(MAX))")
	c.EnsureIndex(c.IdentifiableSqlServerPersistence.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *SqlServerServerPersistence) GetPageByFilter(ctx context.Context, context IContext,
	filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[MyData], err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "[key]='" + key + "'"
	}
	sorting := ""

	return c.IdentifiableSqlServerPersistence.GetPageByFilter(ctx, context,
		filterObj, paging,
		sorting, "",
	)
}

func main() {
	persistence := NewSqlServerServerPersistence()

	persistence.Configure(context.Background(), NewConfigParamsFromTuples(
		"host", "localhost",
		"port", 1433,
	))

	err := persistence.Open(context.Background(), "123")

	item, err := persistence.Create(context.Background(), "123", MyData{Id: "1", Name: "ABC"})
	page, err := persistence.GetPageByFilter(context.Background(), "123", *NewFilterParamsFromTuples("name", "ABC"), nil)

	fmt.Println(page.Data)
	res, err := persistence.DeleteById(context.Background(), "123", "1")
}
```

