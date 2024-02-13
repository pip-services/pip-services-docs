
See: [MongoDbPersistence](../../../toolkit_api/dart/mongodb/persistence/), [MongoDbConnection](../../../toolkit_api/dart/mongodb/connect/mongodb_connection/), [ConfigParams](../../../toolkit_api/node/commons/config/config_params)

```dart
var persistence = BeaconsMongoDbPersistence();
// Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.configure(ConfigParams.fromTuples([
  'connection.host',
  'localhost',
  'connection.port',
  '30000',
  'connection.database',
  'test'
]));

// While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000
await persistence.open(null);
```

