
```cs
using PipServices3.Commons.Config;

var cache = new RedisCache();
cache.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 6379
));
```
