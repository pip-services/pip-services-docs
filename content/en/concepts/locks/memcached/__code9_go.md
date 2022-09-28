
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

lock := memlock.NewMemcachedLock()

lock.Configure(conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 11211,
))

```
