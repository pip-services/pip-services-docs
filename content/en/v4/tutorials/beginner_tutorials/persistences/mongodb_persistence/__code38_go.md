
```go
import (
	"context"
	"fmt"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	mpersist "github.com/pip-services4/pip-services4-go/pip-services4-mongodb-go/persistence"
)

type MyData struct {
	Id      string `bson:"_id" json:"id"`
	Key     string `bson:"key" json:"key"`
	Content string `bson:"content" json:"content"`
}

type MyIdentifiableMongoDbPersistence struct {
	mpersist.IdentifiableMongoDbPersistence[MyData, string]
}

func NewMyIdentifiableMongoDbPersistencee() *MyIdentifiableMongoDbPersistence {
	c := &MyIdentifiableMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = *mpersist.InheritIdentifiableMongoDbPersistence[MyData, string](c, "mydata")
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

	_ = persistence.Open(context.Background())
	_ = persistence.Clear(context.Background())

	// CRUD
	// 1 - Create
	result, _ := persistence.Create(context.Background(), data1)
	PrintResult("Create", result)

	// 2 - Retrieve
	item, _ := persistence.GetOneById(context.Background(), "1")
	PrintResult("Get by id", item)

	// 3 - Update
	update, _ := persistence.Update(context.Background(), MyData{Id: "1", Key: "key 2", Content: "new content 2"})
	PrintResult("Update", update)

	// 4 - Delete
	delete, _ := persistence.DeleteById(context.Background(), "1")
	PrintResult("Delete by id", delete)

	_ = persistence.Close(context.Background())
}
```
