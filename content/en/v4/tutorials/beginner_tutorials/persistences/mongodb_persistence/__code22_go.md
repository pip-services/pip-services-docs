
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"

	mpersist "github.com/pip-services4/pip-services4-go/pip-services4-mongodb-go/persistence"
)

type MyIdentifiableMongoDbPersistence struct {
	mpersist.IdentifiableMongoDbPersistence[MyData, string]
}

func NewMyIdentifiableMongoDbPersistencee() *MyIdentifiableMongoDbPersistence {
	c := &MyIdentifiableMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = *mpersist.InheritIdentifiableMongoDbPersistence[MyData, string](c, "mydata")
	return c
}


persistence := NewMyIdentifiableMongoDbPersistencee()
config := conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 27017,
	"connection.database", "pipdatabase",
)
persistence.Configure(context.Background(), config)

```
