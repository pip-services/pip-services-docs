
```go

import (
	"reflect"

	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	mpersist "github.com/pip-services3-go/pip-services3-mongodb-go/persistence"
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

func (c *MyMongoDbPersistence) Create(correlationId string, item MyData) (result MyData, err error) {
	value, err := c.MongoDbPersistence.Create(correlationId, item)

	if value != nil {
		val, _ := value.(MyData)
		result = val
	}
	return result, err
}

persistence := NewMyMongoDbPersistence()
config := conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 27017,
	"connection.database", "pipdatabase",
)
persistence.Configure(config)

err := persistence.Open("")

```
