
```go
func (c *MyMongoDbPersistence) GetCountByFilter(ctx context.Context, filter *cquery.FilterParams) (count int64, err error) {
	return c.MongoDbPersistence.GetCountByFilter(ctx, c.composeFilter(filter))
}
```
