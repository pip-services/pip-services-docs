
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	rcache "github.com/pip-services4/pip-services4-go/pip-services4-redis-go/cache"
)

cache := rcache.NewRedisCache[string]()
cache.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 6379,
))
```
