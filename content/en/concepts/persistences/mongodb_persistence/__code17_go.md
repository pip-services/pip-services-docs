
```go
func (c *MyMongoDbPersistence) GetCountByFilter(ctx context.Context, correlationId string, filter *cdata.FilterParams) (count int64, err error) {
	return c.MongoDbPersistence.GetCountByFilter(ctx, correlationId, c.composeFilter(filter))
}

```
