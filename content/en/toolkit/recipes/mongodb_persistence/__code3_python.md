
```python
persistence = BeaconsMongoDbPersistence()
# Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.configure(ConfigParams.from_tuples(
	"connection.host", "localhost",
	"connection.port", "30000"
))
persistence.open(None) # While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000


```
