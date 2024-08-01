
```go
import (
	"context"

	cquery "github.com/pip-services4/pip-services4-go/pip-services4-data-go/query"
	"go.mongodb.org/mongo-driver/bson"

	mpersist "github.com/pip-services4/pip-services4-go/pip-services4-mongodb-go/persistence"
)

type MyMongoDbPersistence struct {
	*mpersist.MongoDbPersistence[MyData]
}

func NewMyMongoDbPersistence() *MyMongoDbPersistence {
	c := &MyMongoDbPersistence{}
	c.MongoDbPersistence = mpersist.InheritMongoDbPersistence(c, "mydata")
	return c
}

func (c *MyMongoDbPersistence) composeFilter(filter *cquery.FilterParams) bson.M {
	if &filter == nil || filter == nil {
		filter = cquery.NewEmptyFilterParams()
	}

	key, _ := filter.GetAsNullableString("key")
	var filterObj bson.M
	if key != "" {
		filterObj = bson.M{"key": key}
	} else {
		filterObj = bson.M{}
	}

	return filterObj
}

func (c *MyMongoDbPersistence) composeSort(sort *cquery.SortParams) bson.M {
	if &sort == nil || sort == nil {
		sort = cquery.NewEmptySortParams()
	}

	sortObj := bson.M{}

	for _, field := range *sort {
		if field.Ascending {
			sortObj[field.Name] = 1
		} else {
			sortObj[field.Name] = -1
		}

	}

	return sortObj
}

func (c *MyMongoDbPersistence) GetListByFilter(ctx context.Context, filter *cquery.FilterParams, sort *cquery.SortParams) (items []MyData, err error) {
	return c.MongoDbPersistence.GetListByFilter(ctx, c.composeFilter(filter), c.composeSort(sort), nil)
}

func (c *MyMongoDbPersistence) GetPageByFilter(ctx context.Context, filter *cquery.FilterParams, paging *cquery.PagingParams, sort *cquery.SortParams) (page cquery.DataPage[MyData], err error) {

	return c.MongoDbPersistence.GetPageByFilter(ctx,
		c.composeFilter(filter), *paging,
		c.composeSort(sort), nil)
}

func (c *MyMongoDbPersistence) GetCountByFilter(ctx context.Context, filter *cquery.FilterParams) (count int64, err error) {
	return c.MongoDbPersistence.GetCountByFilter(ctx, c.composeFilter(filter))
}

func (c *MyMongoDbPersistence) DeleteByFilter(ctx context.Context, filter *cquery.FilterParams) error {
	return c.MongoDbPersistence.DeleteByFilter(ctx, c.composeFilter(filter))
}
```
