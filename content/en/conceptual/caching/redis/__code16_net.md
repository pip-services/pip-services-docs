
```cs
using PipServices3.Redis.Lock;
using PipServices3.Commons.Config;

var rLock = new RedisLock();
rLock.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 6379
));


await rLock.OpenAsync(null);

rLock.AcquireLock(null, "key1", 3000, 1000);

try
{
    // Processing...
} finally
{
    rLock.ReleaseLock(null, "key1");
}
```
