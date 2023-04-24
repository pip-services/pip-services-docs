
```cs
public class MyMongoDbPersistence : MongoDbPersistence<MyData>
{
    public MyMongoDbPersistence(): base("mydata") { }
}
        
var persistence = new MyMongoDbPersistence();

var config = ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 27017,
    "connection.database", "pipdatabase"
);
persistence.Configure(config);

await persistence.OpenAsync("123");

```
