---
type: docs
title: "SQLite module"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-sqlite-gox"
no_list: true
weight: 500
description: > 
  A set of components to implement SQLite persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create SQLite persistence components. 
- [**Connect**](connect) - connection component to configure SQLite connection to a database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Install the Go package as
```bash
go get github.com/pip-services3-gox/pip-services3-sqlite-gox@latest
```

As an example, lets create persistence for the following data object.

```go
type MyData struct {
	Id      string `bson:"_id" json:"id"`
	Key     string `bson:"key" json:"key"`
	Content string `bson:"content" json:"content"`
}

func (d *MyData) SetId(id string) {
	d.Id = id
}

func (d MyData) GetId() string {
	return d.Id
}

func (d MyData) Clone() MyData {
	return MyData{
		Id:      d.Id,
		Key:     d.Key,
		Content: d.Content,
	}
}
```

The persistence component shall implement the following interface with a basic set of CRUD operations.

```go
type IMyPersistence interface {
	GetPageByFilter(ctx context.Context, correlationId string, filter data.FilterParams, paging data.PagingParams) (page data.DataPage[MyData], err error)
	GetOneById(ctx context.Context, correlationId string, id string) (item MyData, err error)
	GetOneByKey(ctx context.Context, correlationId string, key string) (item MyData, err error)
	Create(ctx context.Context, correlationId string, item MyData) (result MyData, err error)
	Update(ctx context.Context, correlationId string, item MyData) (result MyData, err error)
	DeleteById(ctx context.Context, correlationId string, id string) (item MyData, err error)
}
```

To implement postgresql persistence component you shall inherit `IdentifiableSqlitePersistence`. 
Most CRUD operations will come from the base class. You only need to override `GetPageByFilter` method with a custom filter function.
And implement a `GetOneByKey` custom persistence method that doesn't exist in the base class.

```go
type MySqlitePersistence struct {
	*persistence.IdentifiableSqlitePersistence[MyData, string]
}

func NewMySqlitePersistence() *MySqlitePersistence {
	c := &MySqlitePersistence{}
	c.IdentifiableSqlitePersistence = persistence.InheritIdentifiableSqlitePersistence[MyData, string](c, "myobjects")
	return c
}

func (c *MySqlitePersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiableSqlitePersistence.DefineSchema()
	// Row name must be in double quotes for properly case!!!
	c.EnsureSchema("CREATE TABLE " + c.QuotedTableName() + " (\"id\" TEXT PRIMARY KEY, \"key\" TEXT, \"content\" TEXT)")
	c.EnsureIndex(c.IdentifiableSqlitePersistence.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *MySqlitePersistence) composeFilter(filter data.FilterParams) string {
	criteria := make([]string, 0)

	if key, ok := filter.GetAsNullableString("key"); ok && key != "" {
		criteria = append(criteria, "key='"+key+"'")
	}

	if id, ok := filter.GetAsNullableString("id"); ok && id != "" {
		criteria = append(criteria, "id='"+id+"'")
	}

	if tempIds, ok := filter.GetAsNullableString("ids"); ok && tempIds != "" {
		ids := strings.Split(tempIds, ",")
		criteria = append(criteria, "id IN ('"+strings.Join(ids, "','")+"')")
	}

	if len(criteria) > 0 {
		return strings.Join(criteria, " AND ")
	} else {
		return ""
	}
}

func (c *MySqlitePersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter data.FilterParams, paging data.PagingParams) (page data.DataPage[MyData], err error) {

	return c.IdentifiableSqlitePersistence.GetPageByFilter(ctx, correlationId,
		c.composeFilter(filter), paging,
		"", "",
	)
}

func (c *MySqlitePersistence) GetOneById(ctx context.Context, correlationId string, key string) (item MyData, err error) {
	query := "SELECT * FROM " + c.QuotedTableName() + " WHERE \"key\"=$1"

	qResult, err := c.Client.QueryContext(ctx, query, key)
	if err != nil {
		return item, err
	}
	defer qResult.Close()

	if !qResult.Next() {
		return item, qResult.Err()
	}

	result, err := c.Overrides.ConvertToPublic(qResult)

	if err == nil {
		c.Logger.Trace(ctx, correlationId, "Retrieved from %s with key = %s", c.TableName, key)
		return result, err
	}
	c.Logger.Trace(ctx, correlationId, "Nothing found from %s with key = %s", c.TableName, key)
	return item, err
}
```

Alternatively you can store data in non-relational format using `IdentificableJsonSqlitePersistence`.
It stores data in tables with two columns - `id` with unique object id and `data` with object data serialized as JSON.
To access data fields you shall use `JSON_EXTRACT(data, '$.field')` expression.

```go
import "github.com/pip-services3-gox/pip-services3-sqlite-gox/persistence"

type MySqlitePersistence struct {
	*persistence.IdentifableJsonSqlitePersistence[MyData, string]
}

func NewMySqlitePersistence() *MySqlitePersistence {
	c := &MySqlitePersistence{}
	c.IdentifableJsonSqlitePersistence = persistence.InheritIdentifiableJsonSqlitePersistence[]()[MyData, string](c, "myobjects")
	return c
}

func (c *MySqlitePersistence) DefineSchema() {
	c.EnsureTable("VARCHAR(32)", "JSON")
	c.EnsureIndex(c.TableName+"_json_key", map[string]string{"JSON_EXTRACT(data, '$.key')": "1"}, map[string]string{"unique": "true"})
}

func (c *MySqlitePersistence) composeFilter(filter data.FilterParams) string {
	criteria := make([]string, 0)

	if key, ok := filter.GetAsNullableString("key"); ok && key != "" {
		criteria = append(criteria, "JSON_EXTRACT(data, '$.key')='" + key + "'")
	}

	if id, ok := filter.GetAsNullableString("id"); ok && id != "" {
		criteria = append(criteria, "JSON_EXTRACT(data, '$.id')='" + id + "'")
	}

	if tempIds, ok := filter.GetAsNullableString("ids"); ok && tempIds != "" {
		ids := strings.Split(tempIds, ",")
		criteria = append(criteria, "JSON_EXTRACT(data, '$.id') IN ('"+strings.Join(ids, "','")+"')")
	}

	if len(criteria) > 0 {
		return strings.Join(criteria, " AND ")
	} else {
		return ""
	}
}

func (c *MySqlitePersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter data.FilterParams, paging data.PagingParams) (page data.DataPage[MyData], err error) {

	return c.IdentifiableSqlitePersistence.GetPageByFilter(ctx, correlationId,
		c.composeFilter(filter), paging,
		"", "",
	)
}

func (c *MySqlitePersistence) GetOneById(ctx context.Context, correlationId string, key string) (item MyData, err error) {
	query := "SELECT * FROM " + c.QuotedTableName() + " WHERE JSON_EXTRACT(data, '$.key')=$1"

	qResult, err := c.Client.QueryContext(ctx, query, key)
	if err != nil {
		return item, err
	}
	defer qResult.Close()

	if !qResult.Next() {
		return item, qResult.Err()
	}

	result, err := c.Overrides.ConvertToPublic(qResult)

	if err == nil {
		c.Logger.Trace(ctx, correlationId, "Retrieved from %s with key = %s", c.TableName, key)
		return result, err
	}
	c.Logger.Trace(ctx, correlationId, "Nothing found from %s with key = %s", c.TableName, key)
	return item, err
}
```

Configuration for your microservice that includes SQLite persistence may look the following way.

```yaml
...
{{#if SQLITE_ENABLED}}
- descriptor: pip-services:connection:postgres:con1:1.0
  connection:
    database: {{SQLITE_DB}}{{#unless SQLITE_DB}}./data/app.db{{/unless}}
    
- descriptor: myservice:persistence:postgres:default:1.0
  dependencies:
    connection: pip-services:connection:postgres:con1:1.0
  table: {{SQLITE_TABLE}}{{#unless SQLITE_TABLE}}myobjects{{/unless}}
{{/if}}
...
```
