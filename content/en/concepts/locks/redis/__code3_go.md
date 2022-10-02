
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	rcache "github.com/pip-services3-gox/pip-services3-redis-gox/cache"
)


cache := rcache.NewRedisCache()
cache.Configure(conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 6379,
))
```
