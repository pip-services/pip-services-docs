
```go

func (c *MyMongoDbPersistence) GetListByFilter(ctx context.Context, filter *cquery.FilterParams, sort *cquery.SortParams) (items []MyData, err error) {
	return c.MongoDbPersistence.GetListByFilter(ctx, c.composeFilter(filter), c.composeSort(sort), nil)
}
```
