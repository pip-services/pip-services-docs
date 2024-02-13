
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

cache := memcache.NewMemcachedCache[any]()

cache.Configure(context.Background(), config.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 11211,
))

```
