
```go
func (c *MyMongoDbPersistence) GetListByFilter(correlationId string, filter *cdata.FilterParams, sort *cdata.SortParams) (items []MyData, err error) {
	result, err := c.MongoDbPersistence.GetListByFilter(correlationId, c.composeFilter(filter), c.composeSort(sort), nil)
	items = make([]MyData, len(result))
	for i, v := range result {
		val, _ := v.(MyData)
		items[i] = val
	}
	return items, err
}
```
