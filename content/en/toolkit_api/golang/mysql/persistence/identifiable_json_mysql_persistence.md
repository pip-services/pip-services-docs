---
type: docs
title: "IdentifiableJsonMySqlPersistence[T,K]"
linkTitle: "IdentifiableJsonMySqlPersistence"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-mysql-gox"
description: >
    Abstract persistence component that stores data in MySQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Implements:** [IdentifiableMySqlPersistence[T,K]](../identifiable_mysql_persistence)

### Description

The IdentifiableJsonMySqlPersistence class allows you to create persistence components that store data in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The JSON table has only two fields: id and data.
- In basic scenarios child classes shall only override [GetPageByFilter](../mysql_persistence/#getpagebyfilter), [GetListByFilter](../mysql_persistence/#getlistbyfilter) or [DeleteByFilter](../mysql_persistence/#deletebyfilter) operations with a specific filter function. 
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.


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
    - **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Constructors

#### InheritIdentifiableJsonMysqlPersistence
Creates a new instance of the persistence component.

> InheritIdentifiableJsonMysqlPersistence[T any, K any](overrides [IMysqlPersistenceOverrides[T]](../imysql_persistence_overrides), tableName string) *IdentifiableJsonMysqlPersistence[T, K]

- **overrides**: [IMysqlPersistenceOverrides[T]](../imysql_persistence_overrides) - References to override virtual methods
- **tableName**: string - (optional) a table name.


### Instance methods

#### ConvertFromPublic
Converts object value from public to internal format.

> `(c *IdentifiableJsonMysqlPersistence[T, K]) ConvertFromPublic(value T) (map[string]any, error)

- **value**: T - object in public format to convert.
- **returns**: (map[string]any, error) - converted object in internal format.


#### ConvertToPublic
Converts object value from internal to public format.

> (c *IdentifiableJsonMysqlPersistence[T, K]) ConvertToPublic(rows *sql.Rows) (T, error)

- **rows**: *sql.Rows - object in internal format to convert.
- **returns**: (T, error) - converted object in public format.


#### EnsureTable
Adds DML statement to automatically create a JSON(B) table

> (c *IdentifiableJsonMysqlPersistence[T, K]) EnsureTable(idType string, dataType string)

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### updatePartially
Updates only few selected fields in a data item.

> (c *IdentifiableJsonMysqlPersistence[T, K]) UpdatePartially(ctx context.Context, correlationId string, id K, data [AnyValueMap](../../../commons/data/any_value_map)) (result T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: (result T, err error) - updated item

### Examples

```go
type MyMySqlPersistence struct {
	*persist.IdentifiableJsonMysqlPersistence[MyData, string]
}

func NewMyMySqlPersistence() *MyMySqlPersistence {
	c := &MyMySqlPersistence{}
	c.IdentifiableJsonMysqlPersistence = persist.InheritIdentifiableJsonMysqlPersistence[MyData, string](c, "mydata")
	return c
}

func (c *MyMySqlPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureTable("", "")
	c.EnsureSchema("ALTER TABLE `" + c.TableName + "` ADD `data_key` VARCHAR(50) AS (JSON_UNQUOTE(`data`->\"$.key\"))")
	c.EnsureIndex(c.TableName+"_json_key", map[string]string{"data_key": "1"}, map[string]string{"unique": "true"})
}

func (c *MyMySqlPersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[MyData], err error) {

	key, ok := filter.GetAsNullableString("Key")
	filterObj := ""
	if ok && key != "" {
		filterObj += "data->'$.key'='" + key + "'"
	}

	return c.IdentifiableJsonMysqlPersistence.GetPageByFilter(ctx, correlationId,
		filterObj, paging,
		"", "",
	)
}

func main() {
	persistence := NewMyMySqlPersistence()
	persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
		"host", "localhost",
		"port", 27017,
	))
	err := persitence.Open(context.Background(), "123")

	item, err := persistence.Create(context.Background(), "123", Mydata{Id: "1", Name: "ABC"})
	page, err := persistence.GetPageByFilter("123", *NewFilterParamsFromTuples("name", "ABC"), nil)

	fmt.Println(page.data) // Result: { id: "1", name: "ABC" }

	res, err := persistence.DeleteById(context.Background(),"123", "1")
}

```
