
See: [MongoDbPersistence](../../../toolkit_api/net/mongodb/persistence/), [MongoDbConnection](../../../toolkit_api/net/mongodb/connect/mongodb_connection/), [ConfigParams](../../../toolkit_api/node/commons/config/config_params)

```cs
var persistence = new BeaconMongoDbPersistence();
// Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.Configure(ConfigParams.FromTuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test"
));
await persistence.openAsync(); 	// While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000


```

