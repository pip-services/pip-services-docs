
```ts

let persistence = new BeaconsMongoDbPersistence();
// Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.configure(ConfigParams.fromTuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test"
))
await persistence.open(null) // While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000



```
