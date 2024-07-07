
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	memcache "github.com/pip-services4/pip-services4-go/pip-services4-memcached-go/cache"
)


cache := memcache.NewMemcachedCache[any]()

cache.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 11211,
))
```
