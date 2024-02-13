---
type: docs
title: "IdentifiableMongoDbPersistence"
linkTitle: "IdentifiableMongoDbPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/blob/main/pip-services4-mongodb-go"
description: >
    Abstract persistence component that stores data in MongoDB
    and implements a number of CRUD operations over data items with unique ids.
    
---

### Description

The IdentifiableMongoDbPersistence class allows you to create persistance components that store data in MongoDB databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [getPageByFilter](../mongodb_persistence/#getpagebyfilter), [getListByFilter](../mongodb_persistence/#getlistbyfilter) or [deleteByFilter](../mongodb_persistence/#deletebyfilter)  operations with specific filter functions. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c.Db** or **c.Collection** properties.

#### Configuration parameters

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
	- **max_pool_size**: (optional) maximum connection pool size (default: 2)
	- **keep_alive**: (optional) enable connection keep alive (default: true)
	- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5000)
	- **socket_timeout**: (optional) socket timeout in milliseconds (default: 360000)
	- **auto_reconnect**: (optional) enable auto reconnection (default: true) (not used)
	- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000) (not used)
	- **max_page_size**: (optional) maximum page size (default: 100)
	- **replica_set**: (optional) name of replica set
	- **ssl**: (optional) enable SSL connection (default: false) (not implements in this release)
	- **auth_source**: (optional) authentication source
	- **auth_user**: (optional) authentication user name
	- **auth_password**: (optional) authentication user password
	- **debug**: (optional) enable debug output (default: false). (not used)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials



### Constructors

#### InheritIdentifiableMongoDbPersistence
Creates a new instance of the persistence component.

> InheritIdentifiableMongoDbPersistence[T any, K any](overrides [IMongoDbPersistenceOverrides[T]](../imongodb_persistence_overrides), collection string) [*IdentifiableMongoDbPersistence[T, K]]()

- **overrides**:  [IMongoDbPersistenceOverrides[T]](../imongodb_persistence_overrides) - overrides instance.
- **collection**: string - (optional) collection name.


### Methods


#### Create
Creates a data item.

> (c [*IdentifiableMongoDbPersistence[T,K]]()) Create(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### DeleteById
Deletes a data item by it's unique id.

> (c [*IdentifiableMongoDbPersistence[T,K]]()) DeleteById(ctx context.Context, context [IContext](../../../components/context/icontext), id K) (item T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **return**: (item T, err error) - deleted item.


#### DeleteByIds
Deletes multiple data items by their unique ids.

> (c [*IdentifiableMongoDbPersistence[T,K]]()) DeleteByIds(ctx context.Context, context [IContext](../../../components/context/icontext), ids []K) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: []K - ids of data items to be deleted.
- **returns**: error -  error or nil no errors occured.


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiableMongoDbPersistence[T,K]]()) GetListByIds(ctx context.Context, context [IContext](../../../components/context/icontext), ids []K) (items []T, err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: []K - ids of data items to be retrieved
- **return**: (items []T, err error) - data list of results by ids.


#### GetOneById
Gets a data item by its unique id.

> (c [*IdentifiableMongoDbPersistence[T,K]]()) GetOneById(context [IContext](../../../components/context/icontext), id K) (item T, err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: (item T, err error) - data item by id.


#### Set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> (c [*IdentifiableMongoDbPersistence[T,K]]()) Set(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set. 
- **returns**: (result T, err error) - updated item


#### Update
Updates a data item.

> (c [*IdentifiableMongoDbPersistence[T,K]]()) Update(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: (result T, err error) - updated item.


#### UpdatePartially
Updates only few selected fields in a data item.

> (c [*IdentifiableMongoDbPersistence[T,K]]()) UpdatePartially(ctx context.Context, context [IContext](../../../components/context/icontext), id K, data [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (item T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be updated.
- **data**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (item T, err error) - updated item.

### Examples

```go
type MyIdentifiableMongoDbPersistence struct {
	*persist.IdentifiableMongoDbPersistence[test_persistence.Dummy, string]
}

func NewMyIdentifiableMongoDbPersistence() *MyIdentifiableMongoDbPersistence {
	c := &MyIdentifiableMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = persist.InheritIdentifiableMongoDbPersistence[test_persistence.Dummy, string](c, "dummies")
	return c
}

func composeFilter(filter cdata.FilterParams) any {
	filterObj := bson.M{}
	if name, ok := filter.GetAsNullableString("name"); ok {
		filterObj = bson.M{"name": name}
	}
	return filterObj
}

func (c *MyIdentifiableMongoDbPersistence) GetPageByFilter(ctx context.Context, context IContext, filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[test_persistence.Dummy], err error) {
	return c.IdentifiableMongoDbPersistence.GetPageByFilter(ctx, context, composeFilter(filter), paging, bson.M{"key": -1}, nil)
}

func main() {
	persistence := NewMyIdentifiableMongoDbPersistence()
	persistence.Configure(context.Background(), config.NewConfigParamsFromTuples(
		"host", "localhost",
		"port", 27017,
	))
	_ = persistence.Open(context.Background(), "123")
	page, err := persistence.GetPageByFilter(context.Background(), "123", *cdata.NewFilterParamsFromTuples("name", "ABC"), *cdataNewEmptyPagingParams())
	fmt.Println(page) // Result: { id: "1", name: "ABC" }
	err = persistence.DeleteByFilter(context.Background(), "123", "1")
}

```

