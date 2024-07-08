
```go
import (
	"context"
	"strings"

	persist "github.com/pip-services4/pip-services4-go/pip-services4-mongodb-go/persistence"
	"go.mongodb.org/mongo-driver/bson"
)

type MyObject struct {
	Key  string `bson:"key" json:"key"`
	Name string `bson:"name" json:"name"`
}

type MyMongoDbPersistence struct {
	*persist.MongoDbPersistence[MyObject]
}

func NewMyMongoDbPersistence() *MyMongoDbPersistence {
	c := &MyMongoDbPersistence{}
	c.MongoDbPersistence = persist.InheritMongoDbPersistence[MyObject](c, "mycollection")
	return c
}

func (c *MyMongoDbPersistence) GetByName(ctx context.Context, name string) (result MyObject, err error) {

	filterObj := bson.M{"name": name}

	items, err := c.MongoDbPersistence.GetListByFilter(ctx, filterObj, nil, nil)
	if err != nil {
		return result, err
	}

	if len(items) > 0 {
		return items[0], nil
	} else {
		return result, nil
	}
}

func (c *MyMongoDbPersistence) CreateDefault(ctx context.Context, correlationId string,
	name string) (result MyObject, err error) {

	if name == "" {
		name = "unknown"
	}

	key := strings.ReplaceAll(strings.ToLower(name), " #$%^&", "_")
	item := MyObject{Key: key, Name: name}

	newItem, err := c.Overrides.ConvertFromPublic(item)
	if err != nil {
		return result, err
	}
	insRes, err := c.Collection.InsertOne(ctx, newItem)
	if err != nil {
		return result, err
	}

	result, err = c.Overrides.ConvertToPublic(newItem)
	if err != nil {
		return result, err
	}
	c.Logger.Trace(ctx, correlationId, "Created in %s with id = %s", c.Collection, insRes.InsertedID)
	return result, nil
}

func (c *MyMongoDbPersistence) DeleteByName(ctx context.Context, name string) error {
	filterObj := bson.M{"name": name}
	return c.DeleteByFilter(ctx, filterObj)
}

```
