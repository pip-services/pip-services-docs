
```cs
using PipServices3.Commons.Config;

var cache = new MemcachedCache();

cache.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 11211
));

```
