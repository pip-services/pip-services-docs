
```go
type MyMySqlPersistence struct {
	*mysqlpersist.IdentifiableMySqlPersistence[MyData, string]
}

func NewMyMySqlPersistence() *MyMySqlPersistence {
	c := &MyMySqlPersistence{}
	c.IdentifiableMySqlPersistence = mysqlpersist.InheritIdentifiableMySqlPersistence[MyData, string](c, "mydata")
	return c
}

func (c *MyMySqlPersistence) DefineSchema() {
	c.ClearSchema()
	c.MySqlPersistence.DefineSchema()
	// Row name must be in double quotes for properly case!!!
	c.EnsureSchema("CREATE TABLE `" + c.TableName + "` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *MyMySqlPersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter string, paging cdata.PagingParams, sort string, selection string) (page cdata.DataPage[MyData], err error) {

	return c.MySqlPersistence.GetPageByFilter(ctx, correlationId, filter, paging, sort, selection)
}

func (c *MyMySqlPersistence) GetListByFilter(ctx context.Context, correlationId string,
	filter string, sort string, selection string) (items []MyData, err error) {

	return c.MySqlPersistence.GetListByFilter(ctx, correlationId, filter, sort, selection)
}

func (c *MyMySqlPersistence) GetCountByFilter(ctx context.Context, correlationId string, filter string) (int64, error) {
	return c.MySqlPersistence.GetCountByFilter(ctx, correlationId, filter)
}

func (c *MyMySqlPersistence) GetOneRandom(ctx context.Context, correlationId string, filter string) (item MyData, err error) {
	return c.MySqlPersistence.GetOneRandom(ctx, correlationId, filter)
}

func (c *MyMySqlPersistence) DeleteByFilter(ctx context.Context, correlationId string, filter string) (err error) {
	return c.MySqlPersistence.DeleteByFilter(ctx, correlationId, filter)
}

```
