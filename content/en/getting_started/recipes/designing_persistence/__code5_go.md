
```go
type MyData struct {
	Id      string `bson:"_id" json:"id"`
	Key     string `bson:"key" json:"key"`
	Content string `bson:"content" json:"content"`
}

func (d *MyData) SetId(id string) {
	d.Id = id
}

func (d MyData) GetId() string {
	return d.Id
}

func (d MyData) Clone() MyData {
	return MyData{
		Id:      d.Id,
		Key:     d.Key,
		Content: d.Content,
	}
}

type IMyDataPersistence interface {
	Set(ctx context.Context, correlationId string, item MyData) (result MyData, err error)

	Create(ctx context.Context, correlationId string, item MyData) (result MyData, err error)

	GetPageByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams, sort cdata.SortParams) (page cdata.DataPage[MyData], err error)

	GetCountByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams) (count int64, err error)

	GetListByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, sort cdata.SortParams) (items []MyData, err error)

	GetOneById(ctx context.Context, correlationId string, id string) (item MyData, err error)

	GetListByIds(ctx context.Context, correlationId string, ids []string) (items []MyData, err error)

	Update(ctx context.Context, correlationId string, item MyData) (result MyData, err error)

	UpdatePartially(ctx context.Context, correlationId string, id string, data cdata.AnyValueMap) (result MyData, err error)

	DeleteById(ctx context.Context, correlationId string, id string) (result MyData, err error)

	DeleteByIds(ctx context.Context, correlationId string, ids []string) error

	DeleteByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams) (err error)
}
type MyPostgresPersistence struct {
	*postgrespersist.IdentifiablePostgresPersistence[MyData, string]
}

func NewMyPostgresPersistence() *MyPostgresPersistence {
	c := &MyPostgresPersistence{}
	c.IdentifiablePostgresPersistence = postgrespersist.InheritIdentifiablePostgresPersistence[MyData, string](c, "mydata")
	return c
}

func (c *MyPostgresPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureSchema("CREATE TABLE " + c.QuotedTableName() + " (\"id\" TEXT PRIMARY KEY, \"key\" TEXT, \"content\" TEXT)")
}

func (c *MyPostgresPersistence) composeFilter(filter cdata.FilterParams) string {
	key, keyOk := filter.GetAsNullableString("key")
	content, contentOk := filter.GetAsNullableString("content")

	filterObj := ""
	if keyOk && key != "" {
		filterObj += "key='" + key + "'"
	}
	if contentOk && content != "" {
		filterObj += "content='" + content + "'"
	}

	return filterObj
}

func (c *MyPostgresPersistence) composeSort(sort cdata.SortParams) string {
	composeSort := ""

	for _, field := range sort {
		composeSort += field.Name
		if field.Ascending {
			composeSort += " ASC"
		} else {
			composeSort += " DESC"
		}
	}

	return composeSort
}

func (c *MyPostgresPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams, sort cdata.SortParams) (page cdata.DataPage[MyData], err error) {
	return c.PostgresPersistence.GetPageByFilter(ctx, correlationId, c.composeFilter(filter), paging, c.composeSort(sort), "")
}

func (c *MyPostgresPersistence) GetListByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, sort cdata.SortParams) (items []MyData, err error) {

	return c.PostgresPersistence.GetListByFilter(ctx, correlationId, c.composeFilter(filter), c.composeSort(sort), "")
}

func (c *MyPostgresPersistence) GetCountByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams) (count int64, err error) {
	return c.PostgresPersistence.GetCountByFilter(ctx, correlationId, c.composeFilter(filter))
}

func (c *MyPostgresPersistence) DeleteByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams) (err error) {
	return c.PostgresPersistence.DeleteByFilter(ctx, correlationId, c.composeFilter(filter))
}
```
