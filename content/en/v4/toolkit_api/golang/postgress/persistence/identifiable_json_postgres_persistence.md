---
type: docs
title: "IdentifiableJsonPostgresPersistence"
linkTitle: "IdentifiableJsonPostgresPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/blob/main/pip-services4-postgres-go"
description: >
    Abstract persistence component that stores data in PostgreSQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Implements:** [IdentifiablePostgresPersistence](../identifiable_postgres_persistence),

### Description

The IdentifiableJsonPostgresPersistence class allows you to create persistence components used to store data in PosgreSQL databases in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios child classes shall only override the [GetPageByFilter](../postgres_persistence/#getpagebyfilter), [GetListByFilter](../postgres_persistence/#getlistbyfilter) or [DeleteByFilter](../postgres_persistence/#deletebyfilter)  operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c.Db** or **c.Collection** properties.

#### Configuration parameters

- **collection**: (optional) PostgreSQL collection name
- **connection(s)**:    
    - **discovery_key**: (optional) key used to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials ([ICredentialStore](../../../config/auth/icredential_store))



### Constructors
Creates a new instance of the persistence component.

> InheritIdentifiableJsonPostgresPersistence[T any, K any](overrides [IPostgresPersistenceOverrides[T]](../ipostgres_persistence_overrides), tableName string) [*IdentifiableJsonPostgresPersistence[T, K]]()

- **overrides**: [IPostgresPersistenceOverrides[T]](../ipostgres_persistence_overrides) - References to override virtual methods.
- **tableName**: string - (optional) a table name.


### Methods

#### ConvertFromPublic
Converts object value from public to internal format.

> (c [*IdentifiableJsonPostgresPersistence[T,K]]()) ConvertFromPublic(value T) map[string]any

- **value**: T - object in public format to convert.
- **returns**: map[string]any - converted object in internal format.


#### ConvertToPublic
Converts object value from internal to public format.

> (c [*IdentifiableJsonPostgresPersistence[T,K]]()) ConvertToPublic(rows pgx.Rows) T

- **rows**: pgx.Rows - object in internal format to convert.
- **returns**: T - converted object in public format.


#### EnsureTable
Adds DML statement to automatically create a JSON(B) table

> (c [*IdentifiableJsonPostgresPersistence[T,K]]()) EnsureTable(idType string, dataType string)

- **idType**: string - type of the id column
- **dataType**: string - type of the data column


#### UpdatePartially
Updates only few selected fields in a data item.

> (c [*IdentifiableJsonPostgresPersistence[T,K]]()) UpdatePartially(ctx context.Context, context [IContext](../../../components/context/icontext), id interface{}, data [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (result interface{}, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: interface{} - id of the data item to be updated.
- **data**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: (result interface{}, err error) - updated item

### Examples

```go
type DummyJsonPostgresPersistence struct {
	*persist.IdentifiableJsonPostgresPersistence[fixtures.Dummy, string]
}

func NewDummyJsonPostgresPersistence() *DummyJsonPostgresPersistence {
	c := &DummyJsonPostgresPersistence{}
	c.IdentifiableJsonPostgresPersistence = persist.InheritIdentifiableJsonPostgresPersistence[fixtures.Dummy, string](c, "dummies_json")
	return c
}

func (c *DummyJsonPostgresPersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiableJsonPostgresPersistence.DefineSchema()
	c.EnsureTable("", "")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"(data->'key')": "1"}, map[string]string{"unique": "true"})
}

func (c *DummyJsonPostgresPersistence) GetPageByFilter(ctx context.Context, context IContext,
	filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[fixtures.Dummy], err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "data->key='" + key + "'"
	}

	return c.IdentifiableJsonPostgresPersistence.GetPageByFilter(ctx, context,
		filterObj, paging,
		"", "",
	)
}

func (c *DummyJsonPostgresPersistence) GetCountByFilter(ctx context.Context, context IContext,
	filter cdata.FilterParams) (count int64, err error) {

	filterObj := ""
	if key, ok := filter.GetAsNullableString("Key"); ok && key != "" {
		filterObj += "data->key='" + key + "'"
	}

	return c.IdentifiableJsonPostgresPersistence.GetCountByFilter(ctx, context, filterObj)
}

func (c *DummyJsonPostgresPersistence) GetOneRandom(ctx context.Context, context IContext) (item fixtures.Dummy, err error) {
	return c.IdentifiableJsonPostgresPersistence.GetOneRandom(ctx, context, "")
}

```

