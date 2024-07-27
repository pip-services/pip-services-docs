
```go
type MyPostgresPersistence struct {
	persist.IdentifiablePostgresPersistence[MyData, string]
}

func NewMyPostgresPersistence() *MyPostgresPersistence {
	c := &MyPostgresPersistence{}
	c.IdentifiablePostgresPersistence = *persist.InheritIdentifiablePostgresPersistence[MyData, string](c, "mydata")
	return c
}

func (c *MyPostgresPersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiablePostgresPersistence.DefineSchema()
	// Row name must be in double quotes for properly case!!!
	c.EnsureSchema("CREATE TABLE " + c.QuotedTableName() + " (\"id\" TEXT PRIMARY KEY, \"key\" TEXT, \"content\" TEXT)")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *MyPostgresPersistence) Create(ctx context.Context, item MyData) (result MyData, err error) {
	return c.IdentifiablePostgresPersistence.Create(ctx, item)
}

func (c *MyPostgresPersistence) GetPageByFilter(ctx context.Context, filter string, paging cquery.PagingParams) (page cquery.DataPage[MyData], err error) {

	return c.IdentifiablePostgresPersistence.GetPageByFilter(ctx, filter, paging, "", "")
}

func (c *MyPostgresPersistence) GetOneRandom(ctx context.Context, correlationId string, filter string) (item MyData, err error) {
	return c.PostgresPersistence.GetOneRandom(ctx, filter)
}

func (c *MyPostgresPersistence) GetListByFilter(ctx context.Context, correlationId string, filter string) (items []MyData, err error) {
	return c.PostgresPersistence.GetListByFilter(ctx, filter, "", "")
}

func (c *MyPostgresPersistence) GetCountByFilter(ctx context.Context, filter string) (count int64, err error) {
	return c.PostgresPersistence.GetCountByFilter(ctx, filter)
}

func (c *MyPostgresPersistence) DeleteByFilter(ctx context.Context, filter string) (err error) {
	return c.PostgresPersistence.DeleteByFilter(ctx, filter)
}
```
