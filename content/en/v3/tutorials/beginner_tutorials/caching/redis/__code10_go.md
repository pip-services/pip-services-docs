
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

```
