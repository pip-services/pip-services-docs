
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	rlock "github.com/pip-services4/pip-services4-go/pip-services4-redis-go/lock"
)


lock := rlock.NewRedisLock()
lock.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 6379,
))
```
