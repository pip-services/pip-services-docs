
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	memlock "github.com/pip-services4/pip-services4-go/pip-services4-memcached-go/lock"
)


lock := memlock.NewMemcachedLock()

lock.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 11211,
))
```
