
```go
func (c *MyMongoDbPersistence) GetCountByFilter(correlationId string, filter *cdata.FilterParams) (count int64, err error) {
	return c.MongoDbPersistence.GetCountByFilter(correlationId, c.composeFilter(filter))
}

```
