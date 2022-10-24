
```go
type MySqlServerPersistence struct {
	*sqlsrvpersist.IdentifiableSqlServerPersistence[MyData, string]
}

func NewMySqlServerPersistence() *MySqlServerPersistence {
	c := &MySqlServerPersistence{}
	c.IdentifiableSqlServerPersistence = sqlsrvpersist.InheritIdentifiableSqlServerPersistence[MyData, string](c, "mydata2")
	return c
}

func (c *MySqlServerPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureSchema("CREATE TABLE [" + c.TableName + "] ([id] VARCHAR(32) PRIMARY KEY, [key] VARCHAR(50), [content] VARCHAR(MAX))")
	c.EnsureIndex(c.SqlServerPersistence.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *MySqlServerPersistence) GetPageByFilter(ctx context.Context, correlationId string,
	filter string, paging cdata.PagingParams, sort string, selection string) (page cdata.DataPage[MyData], err error) {

	return c.SqlServerPersistence.GetPageByFilter(ctx, correlationId, filter, paging, sort, selection)
}

func (c *MySqlServerPersistence) GetListByFilter(ctx context.Context, correlationId string,
	filter string, sort string, selection string) (items []MyData, err error) {

	return c.SqlServerPersistence.GetListByFilter(ctx, correlationId, filter, sort, selection)
}

func (c *MySqlServerPersistence) GetCountByFilter(ctx context.Context, correlationId string, filter string) (int64, error) {
	return c.SqlServerPersistence.GetCountByFilter(ctx, correlationId, filter)
}

func (c *MySqlServerPersistence) GetOneRandom(ctx context.Context, correlationId string, filter string) (item MyData, err error) {
	return c.SqlServerPersistence.GetOneRandom(ctx, correlationId, filter)
}
```
