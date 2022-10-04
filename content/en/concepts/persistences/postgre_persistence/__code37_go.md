
```go
type MyPostgresPersistence struct {
	*persist.IdentifiableJsonPostgresPersistence[MyData, string]
}

func NewMyPostgresPersistence() *MyPostgresPersistence {
	c := &MyPostgresPersistence{}
	c.IdentifiableJsonPostgresPersistence = *persist.InheritIdentifiableJsonPostgresPersistence(c, "mydata_json2")
	return c
}

func (c *MyPostgresPersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiableJsonPostgresPersistence.DefineSchema()
	c.EnsureTable("", "")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"(data->'key')": "1"}, map[string]string{"unique": "true"})
}

func (c *MyPostgresPersistence) Create(ctx context.Context, correlationId string, item MyData) (result MyData, err error) {
	return c.IdentifiableJsonPostgresPersistence.Create(ctx, correlationId, item)
}

func (c *MyPostgresPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter string, paging *cdata.PagingParams) (page cdata.DataPage[MyData], err error) {

	return c.IdentifiableJsonPostgresPersistence.GetPageByFilter(ctx, correlationId,
		filter, *paging,
		"", "")
}

func (c *MyPostgresPersistence) GetOneRandom(ctx context.Context, correlationId string, filter string) (item MyData, err error) {
	return c.PostgresPersistence.GetOneRandom(ctx, correlationId, filter)
}

func (c *MyPostgresPersistence) GetListByFilter(ctx context.Context, correlationId string, filter string) (items []MyData, err error) {
	return c.PostgresPersistence.GetListByFilter(ctx, correlationId, filter, "", "")
}

func (c *MyPostgresPersistence) GetCountByFilter(ctx context.Context, correlationId string, filter string) (count int64, err error) {
	return c.PostgresPersistence.GetCountByFilter(ctx, correlationId, filter)
}

func (c *MyPostgresPersistence) DeleteByFilter(ctx context.Context, correlationId string, filter string) (err error) {
	return c.PostgresPersistence.DeleteByFilter(ctx, correlationId, filter)
}
```
