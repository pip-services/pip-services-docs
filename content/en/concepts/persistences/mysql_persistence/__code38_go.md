
```go
type MyMySqlPersistence struct {
	*mysqlpersist.IdentifiableJsonMysqlPersistence[MyData, string]
}

func NewMyMySqlPersistence() *MyMySqlPersistence {
	c := &MyMySqlPersistence{}
	c.IdentifiableJsonMysqlPersistence = mysqlpersist.InheritIdentifiableJsonMysqlPersistence[MyData, string](c, "mydata_json")
	return c
}

func (c *MyMySqlPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureTable("", "")
	c.EnsureSchema("ALTER TABLE `" + c.TableName + "` ADD `data_key` VARCHAR(50) AS (JSON_UNQUOTE(`data`->\"$.key\"))")
	c.EnsureIndex(c.TableName+"_json_key", map[string]string{"data_key": "1"}, map[string]string{"unique": "true"})
}

func (c *MyMySqlPersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter string, paging cdata.PagingParams, sort string, selection string) (page cdata.DataPage[MyData], err error) {

	return c.MysqlPersistence.GetPageByFilter(ctx, correlationId, filter, paging, sort, selection)
}

func (c *MyMySqlPersistence) GetListByFilter(ctx context.Context, correlationId string,
	filter string, sort string, selection string) (items []MyData, err error) {

	return c.MysqlPersistence.GetListByFilter(ctx, correlationId, filter, sort, selection)
}

func (c *MyMySqlPersistence) GetCountByFilter(ctx context.Context, correlationId string, filter string) (int64, error) {
	return c.MysqlPersistence.GetCountByFilter(ctx, correlationId, filter)
}

func (c *MyMySqlPersistence) GetOneRandom(ctx context.Context, correlationId string, filter string) (item MyData, err error) {
	return c.MysqlPersistence.GetOneRandom(ctx, correlationId, filter)
}

func (c *MyMySqlPersistence) DeleteByFilter(ctx context.Context, correlationId string, filter string) (err error) {
	return c.MysqlPersistence.DeleteByFilter(ctx, correlationId, filter)
}
```
