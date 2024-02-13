
```go
func (c *MyMongoDbPersistence) GetPageByFilter(ctx context,Context, correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams, sort *cdata.SortParams) (page *DataPage[MyData], err error) {

	return c.MongoDbPersistence.GetPageByFilter(ctx, correlationId,
		c.composeFilter(filter), paging,
		c.composeSort(sort), nil)
}
```
