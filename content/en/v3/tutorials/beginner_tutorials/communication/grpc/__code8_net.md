
```cs
using PipServices3.Commons.Config;

var service = new MyGrpcService();
service.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

service.SetReferences(new References());

```
