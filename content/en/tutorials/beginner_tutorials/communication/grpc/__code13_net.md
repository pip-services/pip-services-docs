
```cs
using PipServices3.Commons.Config;

var client = new MyGrpcClient();
client.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

client.SetReferences(new References());
```
