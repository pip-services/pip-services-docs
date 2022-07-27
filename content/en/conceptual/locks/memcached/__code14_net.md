
```cs
using PipServices3.Memcached.Lock;
using PipServices3.Commons.Config;

var mLock = new MemcachedLock();

mLock.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 11211
));

mLock.OpenAsync("123").Wait();
mLock.AcquireLock("123", "key1", 3000, 1000);

try
{
    // Processing...
}
finally
{
    mLock.ReleaseLock("123", "key1");
}

mLock.CloseAsync("123").Wait();

```
