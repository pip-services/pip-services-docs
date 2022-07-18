
```go
import (
	"reflect"

	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
	cdata "github.com/pip-services3-go/pip-services3-commons-go/data"
	mpersist "github.com/pip-services3-go/pip-services3-mongodb-go/persistence"

	"go.mongodb.org/mongo-driver/bson"
)

type MyMongoDbPersistence struct {
	mpersist.MongoDbPersistence
}

func NewMyMongoDbPersistence() *MyMongoDbPersistence {
	proto := reflect.TypeOf(MyData{})
	c := &MyMongoDbPersistence{}
	c.MongoDbPersistence = *mpersist.InheritMongoDbPersistence(c, proto, "mydata")
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

func (c *MyMongoDbPersistence) Create(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.MongoDbPersistence.Create(correlationId, item)

	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyMongoDbPersistence) GetOneRandom(correlationId string, filter *cdata.FilterParams) (result MyData, err error) {
	value, err := c.MongoDbPersistence.GetOneRandom(correlationId, c.composeFilter(filter))

	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyMongoDbPersistence) GetListByFilter(correlationId string, filter *cdata.FilterParams, sort *cdata.SortParams) (items []MyData, err error) {
	result, err := c.MongoDbPersistence.GetListByFilter(correlationId, c.composeFilter(filter), c.composeSort(sort), nil)
	items = make([]MyData, len(result))
	for i, v := range result {
		val, _ := v.(MyData)
		items[i] = val
	}
	return items, err
}

func (c *MyMongoDbPersistence) GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams, sort *cdata.SortParams) (page *MyDataPage, err error) {

	tempPage, err := c.MongoDbPersistence.GetPageByFilter(correlationId,
		c.composeFilter(filter), paging,
		c.composeSort(sort), nil)
	// Convert to MyDataPage
	dataLen := int64(len(tempPage.Data)) // For full release tempPage and delete this by GC
	data := make([]MyData, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(MyData)
	}
	page = NewMyDataPage(&dataLen, data)
	return page, err
}

func (c *MyMongoDbPersistence) GetCountByFilter(correlationId string, filter *cdata.FilterParams) (count int64, err error) {
	return c.MongoDbPersistence.GetCountByFilter(correlationId, c.composeFilter(filter))
}

func (c *MyMongoDbPersistence) DeleteByFilter(correlationId string, filter *cdata.FilterParams) error {
	return c.MongoDbPersistence.DeleteByFilter(correlationId, c.composeFilter(filter))
}

```
