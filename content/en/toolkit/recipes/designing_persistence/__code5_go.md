
```go
type MyData struct {
	Id      string `bson:"_id" json:"id"`
	Key     string `bson:"key" json:"key"`
	Content string `bson:"content" json:"content"`
}

type MyDataPage struct {
	Total *int64   `bson:"total" json:"total"`
	Data  []MyData `bson:"data" json:"data"`
}

func NewEmptyMyDataPage() *MyDataPage {
	return &MyDataPage{}
}

func NewMyDataPage(total *int64, data []MyData) *MyDataPage {
	return &MyDataPage{Total: total, Data: data}
}

type IMyDataPersistence interface {
	Set(correlationId string, item MyData) (result MyData, err error)

	Create(correlationId string, item MyData) (result MyData, err error)

	GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams, sort *cdata.SortParams) (page *MyDataPage, err error)

	GetCountByFilter(correlationId string, filter *cdata.FilterParams) (count int64, err error)

	GetListByFilter(correlationId string, filter *cdata.FilterParams, sort *cdata.SortParams) (items []MyData, err error)

	GetOneById(correlationId string, id string) (item MyData, err error)

	GetListByIds(correlationId string, ids []string) (items []MyData, err error)

	Update(correlationId string, item MyData) (result MyData, err error)

	UpdatePartially(correlationId string, id string, data *cdata.AnyValueMap) (result MyData, err error)

	DeleteById(correlationId string, id string) (result MyData, err error)

	DeleteByIds(correlationId string, ids []string) error

	DeleteByFilter(correlationId string, filter *cdata.FilterParams) (err error)
}

type MyPostgresPersistence struct {
	IMyDataPersistence
	postgres.IdentifiablePostgresPersistence
}

func NewMyPostgresPersistence() *MyPostgresPersistence {
	proto := reflect.TypeOf(MyData{})
	c := &MyPostgresPersistence{}
	c.IdentifiablePostgresPersistence = *postgres.InheritIdentifiablePostgresPersistence(c, proto, "mydata")
	return c
}

func (c *MyPostgresPersistence) DefineSchema() {
	c.ClearSchema()
	c.IdentifiablePostgresPersistence.DefineSchema()
	c.EnsureSchema("CREATE TABLE " + c.QuoteTableNameWithSchema() + " (\"id\" TEXT PRIMARY KEY, \"key\" TEXT, \"content\" TEXT)")
	c.EnsureIndex(c.TableName+"_key", map[string]string{"key": "1"}, map[string]string{"unique": "true"})
}

func (c *MyPostgresPersistence) composeFilter(filter *cdata.FilterParams) string {
	if &filter == nil {
		filter = cdata.NewEmptyFilterParams()
	}

	key := filter.GetAsNullableString("Key")
	content := filter.GetAsNullableString("Content")

	filterCondition := ""
	if key != nil && *key != "" {
		filterCondition += "key='" + *key + "'"
	}
	if content != nil && *content != "" {
		filterCondition += "content='" + *content + "'"
	}

	return filterCondition
}

func (c *MyPostgresPersistence) composeSort(sort *cdata.SortParams) string {
	if &sort == nil {
		sort = cdata.NewEmptySortParams()
	}

	composeSort := ""

	for _, field := range *sort {
		composeSort += field.Name

		if field.Ascending {
			composeSort += " ASC"
		} else {
			composeSort += " DESC"
		}
	}

	return composeSort
}

func (c *MyPostgresPersistence) GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams, sort *cdata.SortParams) (page *MyDataPage, err error) {

	tempPage, err := c.IdentifiablePostgresPersistence.GetPageByFilter(correlationId,
		c.composeFilter(filter), paging,
		c.composeSort(sort), nil)

	// Convert to MyDataPage
	dataLen := int64(len(tempPage.Data))
	data := make([]MyData, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(MyData)
	}

	page = NewMyDataPage(&dataLen, data)
	return page, err
}

func (c *MyPostgresPersistence) GetCountByFilter(correlationId string, filter *cdata.FilterParams) (count int64, err error) {
	return c.IdentifiablePostgresPersistence.GetCountByFilter(correlationId, c.composeFilter(filter))
}

func (c *MyPostgresPersistence) GetListByFilter(correlationId string, filter *cdata.FilterParams, sort *cdata.SortParams) (items []MyData, err error) {
	result, err := c.IdentifiablePostgresPersistence.GetListByFilter(correlationId, c.composeFilter(filter), c.composeSort(sort), nil)

	items = make([]MyData, len(result))
	for i, v := range result {
		val, _ := v.(MyData)
		items[i] = val
	}
	return items, err
}

func (c *MyPostgresPersistence) DeleteByFilter(correlationId string, filter *cdata.FilterParams) (err error) {
	return c.IdentifiablePostgresPersistence.DeleteByFilter(correlationId, c.composeFilter(filter))
}

func (c *MyPostgresPersistence) GetOneById(correlationId string, id string) (item MyData, err error) {
	result, err := c.IdentifiablePostgresPersistence.GetOneById(correlationId, id)
	if result != nil {
		val, _ := result.(MyData)
		item = val
	}
	return item, err
}

func (c *MyPostgresPersistence) Create(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.IdentifiablePostgresPersistence.Create(correlationId, item)

	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyPostgresPersistence) GetListByIds(correlationId string, ids []string) (items []MyData, err error) {
	convIds := make([]interface{}, len(ids))
	for i, v := range ids {
		convIds[i] = v
	}
	result, err := c.IdentifiablePostgresPersistence.GetListByIds(correlationId, convIds)
	items = make([]MyData, len(result))
	for i, v := range result {
		val, _ := v.(MyData)
		items[i] = val
	}
	return items, err
}

func (c *MyPostgresPersistence) Update(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.IdentifiablePostgresPersistence.Update(correlationId, item)
	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyPostgresPersistence) DeleteByIds(correlationId string, ids []string) (err error) {
	convIds := make([]interface{}, len(ids))
	for i, v := range ids {
		convIds[i] = v
	}
	return c.IdentifiablePostgresPersistence.DeleteByIds(correlationId, convIds)
}
```
