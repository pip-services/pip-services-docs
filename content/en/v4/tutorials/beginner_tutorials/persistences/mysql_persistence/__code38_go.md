
```go
type MyMySqlPersistence struct {
	*mysqlpersist.IdentifiableJsonMySqlPersistence[MyData, string]
}

func NewMyMySqlPersistence() *MyMySqlPersistence {
	c := &MyMySqlPersistence{}
	c.IdentifiableJsonMySqlPersistence = mysqlpersist.InheritIdentifiableJsonMySqlPersistence[MyData, string](c, "mydata_json")
	return c
}

func (c *MyMySqlPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureTable("", "")
	c.EnsureSchema("ALTER TABLE `" + c.TableName + "` ADD `data_key` VARCHAR(50) AS (JSON_UNQUOTE(`data`->\"$.key\"))")
	c.EnsureIndex(c.TableName+"_json_key", map[string]string{"data_key": "1"}, map[string]string{"unique": "true"})
}

func (c *MyMySqlPersistence) GetPageByFilter(ctx context.Context, filter string,
	paging cquery.PagingParams, sort string, selection string) (page cquery.DataPage[MyData], err error) {

	return c.MySqlPersistence.GetPageByFilter(ctx, filter, paging, sort, selection)
}

func (c *MyMySqlPersistence) GetListByFilter(ctx context.Context, filter string,
	sort string, selection string) (items []MyData, err error) {

	return c.MySqlPersistence.GetListByFilter(ctx, filter, sort, selection)
}

func (c *MyMySqlPersistence) GetCountByFilter(ctx context.Context, filter string) (int64, error) {
	return c.MySqlPersistence.GetCountByFilter(ctx, filter)
}

func (c *MyMySqlPersistence) GetOneRandom(ctx context.Context, filter string) (item MyData, err error) {
	return c.MySqlPersistence.GetOneRandom(ctx, filter)
}

func (c *MyMySqlPersistence) DeleteByFilter(ctx context.Context, filter string) (err error) {
	return c.MySqlPersistence.DeleteByFilter(ctx, filter)
}
```
