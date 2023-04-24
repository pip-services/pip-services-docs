
```go
type MySqlServerPersistence struct {
	*sqlsrvpersist.IdentifiableJsonSqlServerPersistence[MyData, string]
}

func NewMySqlServerPersistence() *MySqlServerPersistence {
	c := &MySqlServerPersistence{}
	c.IdentifiableJsonSqlServerPersistence = sqlsrvpersist.InheritIdentifiableJsonSqlServerPersistence[MyData, string](c, "mydata_json")
	return c
}

func (c *MySqlServerPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureTable("", "")
	c.EnsureSchema("ALTER TABLE [" + c.TableName + "] ADD [data_key] AS JSON_VALUE([data],'$.key')")
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