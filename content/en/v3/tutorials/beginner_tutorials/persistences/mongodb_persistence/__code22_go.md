
```go
import (
    "fmt"
	"reflect"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cdata "github.com/pip-services3-gox/pip-services3-commons-gox/data"
	mpersist "github.com/pip-services3-gox/pip-services3-mongodb-gox/persistence"
)

type MyIdentifiableMongoDbPersistence struct {
	*mpersist.IdentifiableMongoDbPersistence[MyData, string]
}

func NewMyIdentifiableMongoDbPersistencee() *MyIdentifiableMongoDbPersistence {
	c := &MyIdentifiableMongoDbPersistence{}
	c.IdentifiableMongoDbPersistence = *mpersist.InheritIdentifiableMongoDbPersistence(c, "mydata")
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
