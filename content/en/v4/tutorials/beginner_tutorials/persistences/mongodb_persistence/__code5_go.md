
```go
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
persistence.Configure(context.Background(), config)

err := persistence.Open(context.Background())
```
