
```go
func (c *MyMongoDbPersistence) GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams, sort *cdata.SortParams) (page *MyDataPage, err error) {

	tempPage, err := c.MongoDbPersistence.GetPageByFilter(correlationId,
		c.composeFilter(filter), paging,
		c.composeSort(sort), nil)
	// Convert to DummyPage
	dataLen := int64(len(tempPage.Data)) // For full release tempPage and delete this by GC
	data := make([]MyData, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(MyData)
	}
	page = NewMyDataPage(&dataLen, data)
	return page, err
}
```
