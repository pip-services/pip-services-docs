
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	rlock "github.com/pip-services3-gox/pip-services3-redis-gox/lock"
)

lock := rlock.NewRedisLock()
lock.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 6379,
))
err := lock.Open(context.Background(), "123")

err = lock.AcquireLock(context.Background(), "123", "key1", 3000, 1000)

defer lock.ReleaseLock(context.Background(), "123", "key1")

// Processing...
```
