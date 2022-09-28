
```go
import (
	"fmt"
	"reflect"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	datpersist "github.com/pip-services3-go/pip-services3-data-go/persistence"
	mpersist "github.com/pip-services3-go/pip-services3-mongodb-go/persistence"

	mngoptions "go.mongodb.org/mongo-driver/mongo/options"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type MyIdentifiableMongoDbPersistence struct {
	mpersist.IdentifiableMongoDbPersistence
}

func NewMyIdentifiableMongoDbPersistencee() *MyIdentifiableMongoDbPersistence {
	proto := reflect.TypeOf(MyData{})
	c := &MyIdentifiableMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = *mpersist.InheritIdentifiableMongoDbPersistence(c, proto, "mydata")
	return c
}

func (c *MyIdentifiableMongoDbPersistence) Create(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.MongoDbPersistence.Create(correlationId, item)

	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyIdentifiableMongoDbPersistence) GetListByIds(correlationId string, ids []string) (items []MyData, err error) {
	convIds := make([]interface{}, len(ids))
	for i, v := range ids {
		convIds[i] = v
	}
	result, err := c.IdentifiableMongoDbPersistence.GetListByIds(correlationId, convIds)
	items = make([]MyData, len(result))
	for i, v := range result {
		val, _ := v.(MyData)
		items[i] = val
	}
	return items, err
}

func (c *MyIdentifiableMongoDbPersistence) GetOneById(correlationId string, id string) (item MyData, err error) {
	result, err := c.IdentifiableMongoDbPersistence.GetOneById(correlationId, id)
	if result != nil {
		val, _ := result.(MyData)
		item = val
	}
	return item, err
}

func (c *MyIdentifiableMongoDbPersistence) Update(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.IdentifiableMongoDbPersistence.Update(correlationId, item)
	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyIdentifiableMongoDbPersistence) Set(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.IdentifiableMongoDbPersistence.Set(correlationId, item)
	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

func (c *MyIdentifiableMongoDbPersistence) UpdatePartially(correlationId string, id string, data *cdata.AnyValueMap) (item MyData, err error) {
	result, err := c.IdentifiableMongoDbPersistence.UpdatePartially(correlationId, id, data)

	if result != nil {
		val, _ := result.(MyData)
		item = val
	}
	return item, err
}

func (c *MyIdentifiableMongoDbPersistence) DeleteById(correlationId string, id string) (item MyData, err error) {
	result, err := c.IdentifiableMongoDbPersistence.DeleteById(correlationId, id)
	if result != nil {
		val, _ := result.(MyData)
		item = val
	}
	return item, err
}

func (c *MyIdentifiableMongoDbPersistence) DeleteByIds(correlationId string, ids []string) (err error) {
	convIds := make([]interface{}, len(ids))
	for i, v := range ids {
		convIds[i] = v
	}
	return c.IdentifiableMongoDbPersistence.DeleteByIds(correlationId, convIds)
}

func PrintResult(operationName string, res MyData) {
	fmt.Println("==================== " + operationName + " ====================")
	fmt.Println("MyData with Id: " + res.Id)
	fmt.Println("MyData with Key: " + res.Key)
	fmt.Println("MyData with Content: " + res.Content)
}


func main() {
	data1 := MyData{Id: "1", Key: "key 1", Content: "content 1"}

	persistence := NewMyIdentifiableMongoDbPersistencee()
	config := conf.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 27017,
		"connection.database", "pipdatabase",
	)
	persistence.Configure(config)

	_ = persistence.Open("123")
	_ = persistence.Clear("123")

	// CRUD
	// 1 - Create
	result, _ := persistence.Create("123", data1)
	PrintResult("Create", result)

	// 2 - Retrieve
	item, _ := persistence.GetOneById("123", "1")
	PrintResult("Get by id", item)

	// 3 - Update
	update, _ := persistence.Update("123", MyData{Id: "1", Key: "key 2", Content: "new content 2"})
	PrintResult("Update", update)

	// 4 - Delete
	delete, _ := persistence.DeleteById("123", "1")
	PrintResult("Delete by id", delete)

	_ = persistence.Close("123")
}

```
