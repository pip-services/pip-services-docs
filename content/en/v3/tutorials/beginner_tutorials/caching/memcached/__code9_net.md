
```cs
using PipServices3.Commons.Config;

var mLock = new MemcachedLock();


mLock.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 11211
));

```
