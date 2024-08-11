
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

func (c *MySqlServerPersistence) GetPageByFilter(ctx context.Context, filter string,
	paging cquery.PagingParams, sort string, selection string) (page cquery.DataPage[MyData], err error) {

	return c.SqlServerPersistence.GetPageByFilter(ctx, filter, paging, sort, selection)
}

func (c *MySqlServerPersistence) GetListByFilter(ctx context.Context, filter string,
	sort string, selection string) (items []MyData, err error) {

	return c.SqlServerPersistence.GetListByFilter(ctx, filter, sort, selection)
}

func (c *MySqlServerPersistence) GetCountByFilter(ctx context.Context, filter string) (int64, error) {
	return c.SqlServerPersistence.GetCountByFilter(ctx, filter)
}

func (c *MySqlServerPersistence) GetOneRandom(ctx context.Context, filter string) (item MyData, err error) {
	return c.SqlServerPersistence.GetOneRandom(ctx, filter)
}
```
