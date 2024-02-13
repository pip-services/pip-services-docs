---
type: docs
title: "IdentifiableJsonSqlitePersistence[T any, K any]"
linkTitle: "IdentifiableJsonSqlitePersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-sqlite-go"
description: >
    Abstract persistence component that stores data in SQLite in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Implements:** [IdentifiableSqlitePersistence[T,K]](../identifiable_sqlite_persistence)

### Description

**Important points**    
    
- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- The JSON table has only two fields: id and data.
- In basic scenarios, child classes shall only override [GetPageByFilter](../sqlite_persistence/#getpagebyfilter), [GetListByFilter](../sqlite_persistence/#getlistbyfilter) or [DeleteByFilter](../sqlite_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios, child classes can implement additional operations by accessing **c._collection** and **c._model** properties.

#### Configuration parameters

- **collection**: (optional) SQLite collection name
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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials



### Constructors

#### InheritIdentifiableJsonSqlitePersistence
Creates a new instance of the persistence component.

> InheritIdentifiableJsonSqlitePersistence[T any, K any](overrides [ISqlitePersistenceOverrides[T]](../isqlite_persistence_overrides), tableName string) [[*IdentifiableJsonSqlitePersistence]()]()

- **overrides**: [ISqlitePersistenceOverrides[T]](../isqlite_persistence_overrides) - references to child class that overrides virtual methods
- **tableName**: string - (optional) a table name.


### Methods

#### ConvertFromPublic
Converts an object value from public to internal format.

> (c [*IdentifiableJsonSqlitePersistence[T,K]]()) ConvertFromPublic(value T) (map[string]any, error)

- **value**: T - object in public format to convert.
- **returns**: map[string]any - converted object in internal format.


#### ConvertToPublic
Converts an object value from internal to public format.

> (c [*IdentifiableJsonSqlitePersistence[T,K]]()) ConvertToPublic(item *sql.Rows) (T, error)

- **rows**: *sql.Rows - object in internal format to convert.
- **returns**: (T, error) - converted object in public format.


#### EnsureTable
Adds a DML statement to automatically create a JSON(B) table

> (c [*IdentifiableJsonSqlitePersistence[T,K]]()) EnsureTable(idType string, dataType string)

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableJsonSqlitePersistence[T,K]]()) UpdatePartially(ctx context.Context, context strin[IContext](../../../components/context/icontext)g, id K, data cdata.AnyValueMap) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: (result T, err error) - updated item

### Examples

```go
type DummyJsonSqlitePersistence struct {
	*persist.IdentifiableJsonSqlitePersistence[fixtures.Dummy, string]
}

func NewDummyJsonSqlitePersistence() *DummyJsonSqlitePersistence {
	c := &DummyJsonSqlitePersistence{}
	c.IdentifiableJsonSqlitePersistence = persist.InheritIdentifiableJsonSqlitePersistence[fixtures.Dummy, string](c, "dummies_json")
	return c
}

func (c *DummyJsonSqlitePersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiableJsonSqlitePersistence.DefineSchema()
	c.EnsureTable("", "")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"(data->'key')": "1"}, map[string]string{"unique": "true"})
}

func (c *DummyJsonSqlitePersistence) GetPageByFilter(ctx context.Context, context IContext,
	filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[fixtures.Dummy], err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "JSON_EXTRACT(data, '$.key')='" + key + "'"
	}

	return c.IdentifiableJsonSqlitePersistence.GetPageByFilter(ctx, context,
		filterObj, paging,
		"", "",
	)
}

func (c *DummyJsonSqlitePersistence) GetCountByFilter(ctx context.Context, context IContext,
	filter cdata.FilterParams) (count int64, err error) {

	filterObj := ""
	if key, ok := filter.GetAsNullableString("Key"); ok && key != "" {
		filterObj += "JSON_EXTRACT(data, '$.key')='" + key + "'"
	}

	return c.IdentifiableJsonSqlitePersistence.GetCountByFilter(ctx, context, filterObj)
}

func (c *DummyJsonSqlitePersistence) GetOneRandom(ctx context.Context, context IContext) (item fixtures.Dummy, err error) {
	return c.IdentifiableJsonSqlitePersistence.GetOneRandom(ctx, context, "")
}
```

