
```go

import (
	"reflect"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	mpersist "github.com/pip-services3-gox/pip-services3-mongodb-gox/persistence"
)

type MyMongoDbPersistence struct {
	*mpersist.MongoDbPersistence[MyData]
}

func NewMyMongoDbPersistence() *MyMongoDbPersistence {
	c := &MyMongoDbPersistence{}
	c.MongoDbPersistence = mpersist.InheritMongoDbPersistence(c, "mydata")
	return c
}

persistence := NewMyMongoDbPersistence()
config := conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 27017,
	"connection.database", "pipdatabase",
)
persistence.Configure(context.Backgroudn(), config)

err := persistence.Open(context.Backgroudn(), "")

```
