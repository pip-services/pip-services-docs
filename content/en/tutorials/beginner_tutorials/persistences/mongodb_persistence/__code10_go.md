
```go
func (c *MyMongoDbPersistence) GetListByFilter(ctx context.Context, correlationId string, filter *cdata.FilterParams, sort *cdata.SortParams) (items []MyData, err error) {
	return c.MongoDbPersistence.GetListByFilter(ctx, correlationId, c.composeFilter(filter), c.composeSort(sort), nil)
}
```
