---
type: docs
title: "IdentifiablePostgresPersistence"
linkTitle: "IdentifiablePostgresPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-postgres-go"
description: >
    Abstract persistence component that stores data in PostgreSQL
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Implements:** [PostgresPersistence](../postgres_persistence)

### Description

The IdentifiablePostgresPersistence class allows you to create persistence components that store data in PostgreSQL databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios child classes shall only override the [GetPageByFilter](../postgres_persistence/#getpagebyfilter), [GetListByFilter](../postgres_persistence/#getlistbyfilter) or [DeleteByFilter](../postgres_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c.Db** or **c.Collection** properties.

#### Configuration parameters

- **collection**: (optional) Postgres collection name

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials ([ICredentialStore](../../../config/auth/icredential_store))


### Constructors

#### InheritIdentifiablePostgresPersistence
Creates a new instance of the persistence component.

> InheritIdentifiablePostgresPersistence[T any, K any](overrides [IPostgresPersistenceOverrides[T]](../ipostgres_persistence_overrides), tableName string) [*IdentifiablePostgresPersistence[T,K]]()

- **overrides**: [IPostgresPersistenceOverrides[T]](../ipostgres_persistence_overrides) - References to override virtual methods.
- **tableName**: string - (optional) a table name.

### Methods

#### Create
Creates a data item.

> (c [*IdentifiablePostgresPersistence[T,K]]()) Create(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### DeleteById
Deletes a data item by it's unique id.

> (c [*IdentifiablePostgresPersistence[T,K]]()) DeleteById(ctx context.Context, context [IContext](../../../components/context/icontext), id K) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: (result T, err error) - deleted item


#### DeleteByIds
Deletes multiple data items by their unique ids.

> (c [*IdentifiablePostgresPersistence[T,K]]()) DeleteByIds(ctx context.Context, context [IContext](../../../components/context/icontext), ids []K) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: []K - ids of data items to be deleted.
- **returns**: error - returns error if not received.


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiablePostgresPersistence[T,K]]()) GetListByIds(ctx context.Context, context [IContext](../../../components/context/icontext), ids []K) (items []T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: []K - ids of data items to be retrieved
- **returns**: (items []T, err error) - data list


#### GetOneById
Gets a data item by its unique id.

> (c [*IdentifiablePostgresPersistence[T,K]]()) GetOneById(ctx context.Context, context [IContext](../../../components/context/icontext), id K) (item T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: (item T, err error)  - data item


#### Set
Sets a data item. If the data item exists it updates it.
Otherwise, it creates a new data item.

> (c [*IdentifiablePostgresPersistence[T,K]]()) Set(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: (result T, err error) - updated item


#### Update
Updates a data item.

> (c [*IdentifiablePostgresPersistence[T,K]]()) Update(ctx context.Context, context [IContext](../../../components/context/icontext), item interface{}) (result T, err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: (result T, err error) - updated item


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiablePostgresPersistence[T,K]]()) UpdatePartially(ctx context.Context, context [IContext](../../../components/context/icontext), id K, data [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (result T, err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the data item to be updated.
- **data**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (result T, err error)- updated item

### Examples

```go
type DummyPostgresPersistence struct {
	*persist.IdentifiablePostgresPersistence[fixtures.Dummy, string]
}

func NewDummyPostgresPersistence() *DummyPostgresPersistence {
	c := &DummyPostgresPersistence{}
	c.IdentifiablePostgresPersistence = persist.InheritIdentifiablePostgresPersistence[fixtures.Dummy, string](c, "dummies")
	return c
}

func (c *DummyPostgresPersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiablePostgresPersistence.DefineSchema()
	// Row name must be in double quotes for properly case!!!
	c.EnsureSchema("CREATE TABLE " + c.QuotedTableName() + " (\"id\" TEXT PRIMARY KEY, \"key\" TEXT, \"content\" TEXT)")
	c.EnsureIndex(c.IdentifiablePostgresPersistence.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *DummyPostgresPersistence) GetPageByFilter(ctx context.Context, context IContext,
	filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[fixtures.Dummy], err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "key='" + key + "'"
	}
	sorting := ""

	return c.IdentifiablePostgresPersistence.GetPageByFilter(ctx, context,
		filterObj, paging,
		sorting, "",
	)
}

func (c *DummyPostgresPersistence) GetCountByFilter(ctx context.Context, context IContext,
	filter cdata.FilterParams) (count int64, err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "key='" + key + "'"
	}
	return c.IdentifiablePostgresPersistence.GetCountByFilter(ctx, context, filterObj)
}

func (c *DummyPostgresPersistence) GetOneRandom(ctx context.Context, context IContext) (item fixtures.Dummy, err error) {
	return c.IdentifiablePostgresPersistence.GetOneRandom(ctx, context, "")
}

```

