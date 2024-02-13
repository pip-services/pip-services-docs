
```go
import (
	"reflect"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	mpersist "github.com/pip-services3-gox/pip-services3-mongodb-gox/persistence"

	"go.mongodb.org/mongo-driver/bson"
)

type MyMongoDbPersistence struct {
	*mpersist.MongoDbPersistence
}

func NewMyMongoDbPersistence() *MyMongoDbPersistence {
	c := &MyMongoDbPersistence{}
	c.MongoDbPersistence = mpersist.InheritMongoDbPersistence(c, "mydata")
	return c
}

func (c *MyMongoDbPersistence) composeFilter(filter *cdata.FilterParams) bson.M {
	if &filter == nil || filter == nil {
		filter = cdata.NewEmptyFilterParams()
	}

	key := filter.GetAsNullableString("key")
	var filterObj bson.M
	if *key != "" {
		filterObj = bson.M{"key": *key}
	} else {
		filterObj = bson.M{}
	}

	return filterObj
}

func (c *MyMongoDbPersistence) composeSort(sort *cdata.SortParams) bson.M {
	if &sort == nil || sort == nil {
		sort = cdata.NewEmptySortParams()
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

func (c *MyMongoDbPersistence) GetListByFilter(ctx context.Context, correlationId string, filter *cdata.FilterParams, sort *cdata.SortParams) (items []MyData, err error) {
	return c.MongoDbPersistence.GetListByFilter(correlationId, c.composeFilter(filter), c.composeSort(sort), nil)
}

func (c *MyMongoDbPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams, sort *cdata.SortParams) (page *cdata.DataPage[MyData], err error) {

	return c.MongoDbPersistence.GetPageByFilter(ctx, correlationId,
		c.composeFilter(filter), paging,
		c.composeSort(sort), nil)
}

func (c *MyMongoDbPersistence) GetCountByFilter(ctx context.Context, correlationId string, filter *cdata.FilterParams) (count int64, err error) {
	return c.MongoDbPersistence.GetCountByFilter(ctx, correlationId, c.composeFilter(filter))
}

func (c *MyMongoDbPersistence) DeleteByFilter(ctx context.Context, correlationId string, filter *cdata.FilterParams) error {
	return c.MongoDbPersistence.DeleteByFilter(ctx, correlationId, c.composeFilter(filter))
}

```
