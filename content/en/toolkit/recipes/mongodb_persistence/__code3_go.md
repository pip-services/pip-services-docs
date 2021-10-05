
```go
persistence := persist.NewBeaconsMongoDbPersistence()

// Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000
persistence.Configure(cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test",
))

// While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000
persistence.Open("123") 

```
