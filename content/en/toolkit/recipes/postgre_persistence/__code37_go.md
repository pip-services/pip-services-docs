
```go
type MyPostgresPersistence struct {
	persist.IdentifiableJsonPostgresPersistence
}

func NewMyPostgresPersistence() *MyPostgresPersistence {
	proto := reflect.TypeOf(MyData{})
	c := &MyPostgresPersistence{}
	c.IdentifiableJsonPostgresPersistence = *persist.InheritIdentifiableJsonPostgresPersistence(c, proto, "mydata_json2")
	return c
}

func (c *MyPostgresPersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiableJsonPostgresPersistence.DefineSchema()
	c.EnsureTable("", "")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"(data->'key')": "1"}, map[string]string{"unique": "true"})
}

func (c *MyPostgresPersistence) Create(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.IdentifiableJsonPostgresPersistence.Create(correlationId, item)

	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyPostgresPersistence) GetPageByFilter(correlationId string, filter interface{}, paging *cdata.PagingParams, sort interface{}, sel interface{}) (page *MyDataPage, err error) {

	tempPage, err := c.IdentifiableJsonPostgresPersistence.GetPageByFilter(correlationId,
		filter, paging,
		sort, nil)
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
