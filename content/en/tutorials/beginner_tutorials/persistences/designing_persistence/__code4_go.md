
```go
type MyIdentifiableMySqlPersistence struct {
	*mysqlpersist.IdentifiableMySqlPersistence[MyData, string]
}

func NewMyIdentifiableMySqlPersistence() *MyIdentifiableMySqlPersistence {
	c := &MyIdentifiableMySqlPersistence{}
	c.IdentifiableMySqlPersistence = mysqlpersist.InheritIdentifiableMySqlPersistence[MyData, string](c, "mydata")
	return c
}

func (c *MyIdentifiableMySqlPersistence) DefineSchema() {
	c.ClearSchema()
	c.EnsureSchema("CREATE TABLE `" + c.TableName + "` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)")
}

func (c *MyIdentifiableMySqlPersistence) composeFilter(filter cdata.FilterParams) string {
	key, keyOk := filter.GetAsNullableString("key")
	content, contentOk := filter.GetAsNullableString("content")

	filterObj := ""
	if keyOk && key != "" {
		filterObj += "`key`='" + key + "'"
	}
	if contentOk && content != "" {
		filterObj += "`content`='" + content + "'"
	}

	return filterObj
}

func (c *MyIdentifiableMySqlPersistence) composeSort(sort cdata.SortParams) string {
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

func (c *MyIdentifiableMySqlPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams, sort cdata.SortParams) (page cdata.DataPage[MyData], err error) {
	return c.MySqlPersistence.GetPageByFilter(ctx, correlationId, c.composeFilter(filter), paging, c.composeSort(sort), "")
}

func (c *MyIdentifiableMySqlPersistence) GetListByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, sort cdata.SortParams) (items []MyData, err error) {

	return c.MySqlPersistence.GetListByFilter(ctx, correlationId, c.composeFilter(filter), c.composeSort(sort), "")
}

func (c *MyIdentifiableMySqlPersistence) GetCountByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams) (count int64, err error) {
	return c.MySqlPersistence.GetCountByFilter(ctx, correlationId, c.composeFilter(filter))
}

func (c *MyIdentifiableMySqlPersistence) DeleteByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams) (err error) {
	return c.MySqlPersistence.DeleteByFilter(ctx, correlationId, c.composeFilter(filter))
}
```
