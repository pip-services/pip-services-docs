
```cs
var persistence = new BeaconMongoDbPersistence();
// Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.Configure(ConfigParams.FromTuples(
	"connection.host", "localhost",
	"connection.port", "30000"
));
await persistence.openAsync(); 	// While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000


```

