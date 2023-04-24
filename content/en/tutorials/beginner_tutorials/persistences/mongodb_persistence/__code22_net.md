
```cs
using PipServices3.Commons.Config;

public class MyIdentifiableMongoDbPersistence: IdentifiableMongoDbPersistence<MyData, string>
{
    public MyIdentifiableMongoDbPersistence() : base("mydata") { }
}

var persistence = new MyMongoDbPersistence();

var config = ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 27017,
    "connection.database", "pipdatabase"
);

persistence.Configure(config);
```
