
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	memlock "github.com/pip-services4/pip-services4-go/pip-services4-memcached-go/lock"
)

func main() {
	lock := memlock.NewMemcachedLock()
	lock.Configure(context.Background(), conf.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 11211,
	))

	lock.Open(context.Background())
	defer lock.Close(context.Background())

	lock.AcquireLock(context.Background(), "key1", 3000, 1000)
	defer lock.ReleaseLock(context.Background(), "key1")

	// Processing...
}
```
