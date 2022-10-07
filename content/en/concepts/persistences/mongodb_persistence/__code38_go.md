
```go
import (
	"fmt"
	"reflect"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	datpersist "github.com/pip-services3-gox/pip-services3-data-gox/persistence"
	mpersist "github.com/pip-services3-gox/pip-services3-mongodb-gox/persistence"

	mngoptions "go.mongodb.org/mongo-driver/mongo/options"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type MyIdentifiableMongoDbPersistence struct {
	*mpersist.IdentifiableMongoDbPersistence[MyData, string]
}

func NewMyIdentifiableMongoDbPersistencee() *MyIdentifiableMongoDbPersistence {
	c := &MyIdentifiableMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = mpersist.InheritIdentifiableMongoDbPersistence(c, "mydata")
	return c
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
	persistence.Configure(context.Background(), config)

	_ = persistence.Open(context.Background(), "123")
	_ = persistence.Clear(context.Background(), "123")

	// CRUD
	// 1 - Create
	result, _ := persistence.Create(context.Background(), "123", data1)
	PrintResult("Create", result)

	// 2 - Retrieve
	item, _ := persistence.GetOneById(context.Background(), "123", "1")
	PrintResult("Get by id", item)

	// 3 - Update
	update, _ := persistence.Update(context.Background(), "123", MyData{Id: "1", Key: "key 2", Content: "new content 2"})
	PrintResult("Update", update)

	// 4 - Delete
	delete, _ := persistence.DeleteById(context.Background(), "123", "1")
	PrintResult("Delete by id", delete)

	_ = persistence.Close(context.Background(), "123")
}

```
