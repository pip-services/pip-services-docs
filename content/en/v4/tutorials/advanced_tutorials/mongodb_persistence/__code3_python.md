
See: [MongoDbPersistence](../../../toolkit_api/python/mongodb/persistence/), [MongoDbConnection](../../../toolkit_api/python/mongodb/connect/mongodb_connection/), [ConfigParams](../../../toolkit_api/node/components/config/config_params)

```python
persistence = BeaconsMongoDbPersistence()
# Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.configure(ConfigParams.from_tuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test"
))
persistence.open(None) # While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000
```
