
```go
import (
	"fmt"
	"reflect"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	datpersist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
	mpersist "github.com/pip-services3-go/pip-services3-mongodb-go/persistence"

	mngoptions "go.mongodb.org/mongo-driver/mongo/options"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
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

func (c *MyMongoDbPersistence) Create(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.MongoDbPersistence.Create(correlationId, item)

	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyMongoDbPersistence) Update(correlationId string, item MyData) (result MyData, err error) {
	newItem := datpersist.CloneObject(item, c.Prototype)
	id := datpersist.GetObjectId(newItem)
	filter := bson.M{"_id": id}
	update := bson.D{{"$set", newItem}}
	var options mngoptions.FindOneAndUpdateOptions
	retDoc := mngoptions.After
	options.ReturnDocument = &retDoc
	fuRes := c.Collection.FindOneAndUpdate(c.Connection.Ctx, filter, update, &options)
	if fuRes.Err() != nil {
		return result, fuRes.Err()
	}
	c.Logger.Trace(correlationId, "Updated in %s with id = %s", c.CollectionName, id)
	docPointer := c.NewObjectByPrototype()
	err = fuRes.Decode(docPointer.Interface())
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return result, nil
		}
		return result, err
	}

	result = c.Overrides.ConvertToPublic(docPointer).(MyData)
	return result, nil
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

func (c *MyMongoDbPersistence) DeleteByFilter(correlationId string, filter *cdata.FilterParams) error {
	return c.MongoDbPersistence.DeleteByFilter(correlationId, c.composeFilter(filter))
}

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

func PrintResult(operationName string, res MyData) {
	fmt.Println("==================== " + operationName + " ====================")
	fmt.Println("MyData with Id: " + res.Id)
	fmt.Println("MyData with Key: " + res.Key)
	fmt.Println("MyData with Content: " + res.Content)
}

func main() {
	data1 := MyData{Id: "1", Key: "key 1", Content: "content 1"}

	persistence := NewMyMongoDbPersistence()
	config := conf.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 27017,
		"connection.database", "pipdatabase",
	)
	persistence.Configure(config)

	_ = persistence.Open("")
	_ = persistence.Clear("")

	// 1 - Create
	result, _ := persistence.Create("123", data1)
	PrintResult("Create", result)

	// 2 - Retrieve
	items, _ := persistence.GetListByFilter("123", cdata.NewFilterParamsFromTuples("key", "key 1"), nil)
	PrintResult("Get by id", items[0])

	// 3 - Update
	items[0].Content = "new content 2"
	items[0].Key = "key 2"

	update, _ := persistence.Update("123", items[0])
	PrintResult("Update", update)

	// 4 - Delete
	_ = persistence.DeleteByFilter("123", cdata.NewFilterParamsFromTuples("key", "key 1"))

	_ = persistence.Close("123")
}

```
