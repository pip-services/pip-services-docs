
```cs
using PipServices3.Commons.Config;

var service = new MyGrpcService();
service.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 50055
));


```
