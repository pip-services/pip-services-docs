
```go
import (
	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
)

cache := memcache.NewMemcachedCache()

cache.Configure(conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 11211,
))

```
