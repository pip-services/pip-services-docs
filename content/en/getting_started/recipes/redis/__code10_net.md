
```cs
using PipServices3.Commons.Config;

var rLock = new RedisLock();
rLock.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 6379
));

```
