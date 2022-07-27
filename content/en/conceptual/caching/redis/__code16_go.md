
```go
import (
	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
	rlock "github.com/pip-services3-go/pip-services3-redis-go/lock"
)

lock := rlock.NewRedisLock()
lock.Configure(conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 6379,
))
err := lock.Open("123")

err = lock.AcquireLock("123", "key1", 3000, 1000)

defer lock.ReleaseLock("123", "key1")

// Processing...
```
