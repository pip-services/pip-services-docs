
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

func (c *MyIdentifiableMySqlPersistence) composeFilter(filter cquery.FilterParams) string {
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

func (c *MyIdentifiableMySqlPersistence) composeSort(sort cquery.SortParams) string {
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

func (c *MyIdentifiableMySqlPersistence) GetPageByFilter(ctx context.Context, filter cquery.FilterParams, paging cquery.PagingParams, sort cquery.SortParams) (page cquery.DataPage[MyData], err error) {
	return c.MySqlPersistence.GetPageByFilter(ctx, c.composeFilter(filter), paging, c.composeSort(sort), "")
}

func (c *MyIdentifiableMySqlPersistence) GetListByFilter(ctx context.Context, filter cquery.FilterParams, sort cquery.SortParams) (items []MyData, err error) {

	return c.MySqlPersistence.GetListByFilter(ctx, c.composeFilter(filter), c.composeSort(sort), "")
}

func (c *MyIdentifiableMySqlPersistence) GetCountByFilter(ctx context.Context, filter cquery.FilterParams) (count int64, err error) {
	return c.MySqlPersistence.GetCountByFilter(ctx, c.composeFilter(filter))
}

func (c *MyIdentifiableMySqlPersistence) DeleteByFilter(ctx context.Context, filter cquery.FilterParams) (err error) {
	return c.MySqlPersistence.DeleteByFilter(ctx, c.composeFilter(filter))
}
```
