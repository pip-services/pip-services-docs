
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

cache := memcache.NewMemcachedCache()

cache.Configure(conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 11211,
))

```
