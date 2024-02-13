---
type: docs
title: "IdentifiableSqlitePersistence[T, K]"
linkTitle: "IdentifiableSqlitePersistence"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-sqlite-gox"
description: >
    Abstract persistence component that stores data in SQLite
    and implements a number of CRUD operations over data items with unique ids.
---

**Implements:** [SqlitePersistence[T]](../sqlite_persistence)


### Description

**Important points**
    
- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface. 
- In basic scenarios, child classes shall only override [GetPageByFilter](../sqlite_persistence/#getpagebyfilter), [GetListByFilter](../sqlite_persistence/#getlistbyfilter) or [DeleteByFilter](../sqlite_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c._collection** and **c._model** properties.

#### Configuration parameters

- **collection**:               (optional) SQLite collection name
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors

#### InheritIdentifiableSqlitePersistence
Creates a new instance of the persistence component.

> InheritIdentifiableSqlitePersistence(overrides [ISqlitePersistenceOverrides[T]](../isqlite_persistence_overrides), tableName string) [*IdentifiableSqlitePersistence]()

- **overrides**: [ISqlitePersistenceOverrides[T]](../isqlite_persistence_overrides) - references to child class that overrides virtual methods
- **tableName**: string - (optional) a table name.


### Methods

#### Create
Creates a data item.

> (c [*IdentifiableSqlitePersistence[T, K]]()) Create(ctx context.Context, correlationId string, item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### DeleteById
Deletes a data item by it's unique id.

> (c [*IdentifiableSqlitePersistence[T, K]]()) DeleteById(ctx context.Context, correlationId string, id K) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **returns**: (result T, err error) - deleted item


#### DeleteByIds
Deletes multiple data items by their unique ids.

> (c [*IdentifiableSqlitePersistence[T, K]]()) DeleteByIds(ctx context.Context, correlationId string, ids []K) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []K - ids of the data items to be deleted.
- **returns**: error - error or nil.


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiableSqlitePersistence[T, K]]()) GetListByIds(ctx context.Context, correlationId string, ids []K) (items []T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []K - ids of the data items to be retrieved
- **returns**: (items []T, err error) - data list


#### GetOneById
Gets a data item by its unique id.

> (c [*IdentifiableSqlitePersistence[T, K]]()) GetOneById(ctx context.Context, correlationId string, id K) (item T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: (item T, err error) - data item.


#### Set
Sets a data item. If the data item exists, it updates it.
Otherwise, it creates a new data item.

> (c [*IdentifiableSqlitePersistence[T, K]]()) Set(ctx context.Context, correlationId string, item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: (result T, err error) - new or updated item


#### Update
Updates a data item.

> (c [*IdentifiableSqlitePersistence[T, K]]()) Update(ctx context.Context, correlationId string, item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: (result T, err error) - updated item


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableSqlitePersistence[T, K]]()) UpdatePartially(ctx context.Context, correlationId string, id K, data cdata.AnyValueMap) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (result T, err error) - updated item 

### Examples
```go
type DummySqlitePersistence struct {
	*persist.IdentifiableSqlitePersistence[fixtures.Dummy, string]
}

func NewDummySqlitePersistence() *DummySqlitePersistence {
	c := &DummySqlitePersistence{}
	c.IdentifiableSqlitePersistence = persist.InheritIdentifiableSqlitePersistence[fixtures.Dummy, string](c, "dummies")
	return c
}

func (c *DummySqlitePersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiableSqlitePersistence.DefineSchema()
	// Row name must be in double quotes for properly case!!!
	c.EnsureSchema("CREATE TABLE " + c.QuotedTableName() + " (\"id\" TEXT PRIMARY KEY, \"key\" TEXT, \"content\" TEXT)")
	c.EnsureIndex(c.IdentifiableSqlitePersistence.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *DummySqlitePersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[fixtures.Dummy], err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "key='" + key + "'"
	}
	sorting := ""

	return c.IdentifiableSqlitePersistence.GetPageByFilter(ctx, correlationId,
		filterObj, paging,
		sorting, "",
	)
}

func (c *DummySqlitePersistence) GetCountByFilter(ctx context.Context, correlationId string,
	filter cdata.FilterParams) (count int64, err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "key='" + key + "'"
	}
	return c.IdentifiableSqlitePersistence.GetCountByFilter(ctx, correlationId, filterObj)
}

func (c *DummySqlitePersistence) GetOneRandom(ctx context.Context, correlationId string) (item fixtures.Dummy, err error) {
	return c.IdentifiableSqlitePersistence.GetOneRandom(ctx, correlationId, "")
}
```
