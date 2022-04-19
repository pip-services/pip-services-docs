
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
	// Convert to MyDataPage
	dataLen := int64(len(tempPage.Data)) // For full release tempPage and delete this by GC
	data := make([]MyData, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(MyData)
	}
	page = NewMyDataPage(&dataLen, data)
	return page, err
}

func (c *MyPostgresPersistence) GetOneRandom(correlationId string, filter interface{}) (item interface{}, err error) {
	return c.PostgresPersistence.GetOneRandom(correlationId, filter)
}

func (c *MyPostgresPersistence) GetListByFilter(correlationId string, filter interface{}, sort interface{}, sel interface{}) (items []interface{}, err error) {
	return c.PostgresPersistence.GetListByFilter(correlationId, filter, nil, nil)
}

func (c *MyPostgresPersistence) GetCountByFilter(correlationId string, filter interface{}) (count int64, err error) {
	return c.PostgresPersistence.GetCountByFilter(correlationId, filter)
}

func (c *MyPostgresPersistence) DeleteByFilter(correlationId string, filter string) (err error) {
	return c.PostgresPersistence.DeleteByFilter(correlationId, filter)
}
```
