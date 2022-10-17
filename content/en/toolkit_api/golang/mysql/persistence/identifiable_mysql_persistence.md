---
type: docs
title: "IdentifiableMySqlPersistence[T, K]"
linkTitle: "IdentifiableMySqlPersistence"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-mysql-gox"
description: >
    Abstract persistence component that stores data in MySQL
    and implements a number of CRUD operations over data items with unique ids.

---

**Implements:** [MySqlPersistence[T]](../mysql_persistence)

### Description

The IdentifiableMySqlPersistence class allows you to create persistence components that store data in MySQL databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios, child classes shall only override [GetPageByFilter](../mysql_persistence/#getpagebyfilter), [GetListByFilter](../memory_persistence/#getlistbyfilter) or [DeleteByFilter](../mysql_persistence/#deletebyfilter) operations with the specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing the **this._collection** and **this._model** properties.

#### Configuration parameters

- **table**: (optional) MySQL table name
- **schema**: (optional) MySQL schema name

- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it

- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: (optional) username
    - **password**: (optional) user's password

- **options**:
    - **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
    - **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
    - **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors

#### InheritIdentifiableMysqlPersistence
Creates a new instance of the persistence component.

> InheritIdentifiableMysqlPersistence[T any, K any](overrides [IMysqlPersistenceOverrides[T]](../imysql_persistence_overrides), tableName string) [*IdentifiableMysqlPersistence[T, K]]()

- **overrides**: [IMysqlPersistenceOverrides[T]](../imysql_persistence_overrides) - References to override virtual methods.
- **tableName**: string - (optional) table name.


### Instance methods

#### Create
Creates a data item.

> (c [*IdentifiableMysqlPersistence[T, K]]()) Create(ctx context.Context, correlationId string, item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### DeleteById
Deletes a data item by it's unique id.

> (c [*IdentifiableMysqlPersistence[T, K]]()) DeleteById(ctx context.Context, correlationId string, id K) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **returns**: (result T, err error) - deleted item


#### DeleteByIds
Deletes multiple data items by their unique ids.

>  (c [*IdentifiableMysqlPersistence[T, K]]()) DeleteByIds(ctx context.Context, correlationId string, ids []K) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of the data items to be deleted.
- **returns**: error - deleted item.


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiableMysqlPersistence[T, K]]()) GetListByIds(ctx context.Context, correlationId string, ids []K) (items []T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of the data items to be retrieved
- **returns**: (items []T, err error) - data list


#### GetOneById
Gets a data item by its unique id.

> (c [*IdentifiableMysqlPersistence[T, K]]()) GetOneById(ctx context.Context, correlationId string, id K) (item T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: (item T, err error) - data item


#### Set
Sets a data item. If the data item exists it updates it,
otherwise it creates a new data item.

> (c [*IdentifiableMysqlPersistence[T, K]]()) Set(ctx context.Context, correlationId string, item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: (result T, err error) - new or updated item


#### Update
Updates a data item.

> (c [*IdentifiableMysqlPersistence[T, K]]()) Update(ctx context.Context, correlationId string, item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: (result T, err error) - updated item


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableMysqlPersistence[T, K]]()) UpdatePartially(ctx context.Context, correlationId string, id K, data [AnyValueMap](../../../commons/data/any_value_map)) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (result T, err error) - updated item

### Examples

```go
type MyMySqlPersistence struct {
	*persist.IdentifiableMysqlPersistence[MyData, string]
}

func NewMyMySqlPersistence() *MyMySqlPersistence {
	c := &MyMySqlPersistence{}
	c.IdentifiableMysqlPersistence = persist.InheritIdentifiableMysqlPersistence[MyData, string](c, "mydata")
	return c
}

func (c *MyMySqlPersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiableMysqlPersistence.DefineSchema()
	// Row name must be in double quotes for properly case!!!
	c.EnsureSchema("CREATE TABLE `" + c.TableName + "` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)")
	c.EnsureIndex(c.IdentifiableMysqlPersistence.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *MyMySqlPersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[MyData], err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "`key`='" + key + "'"
	}
	sorting := ""

	return c.IdentifiableMysqlPersistence.GetPageByFilter(ctx, correlationId,
		filterObj, paging,
		sorting, "",
	)
}

func main() {
	persistence := NewMyMySqlPersistence()

	persistence.Configure(context.Background(), NewConfigParamsFromTuples(
		"host", "localhost",
		"port", 27017,
	))

	err := persistence.Open(context.Background(), "123")

	item, err := persistence.Create(context.Background(), "123", MyData{Id: "1", Name: "ABC"})
	page, err := persistence.GetPageByFilter(context.Background(), "123", *NewFilterParamsFromTuples("name", "ABC"), nil)

	fmt.Println(page.Data)
	res, err := persistence.DeleteById(context.Background(), "123", "1")
}
```
