
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	rlock "github.com/pip-services4/pip-services4-go/pip-services4-redis-go/lock"
)

func main() {
	lock := rlock.NewRedisLock()
	lock.Configure(context.Background(), conf.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 6379,
	))
	err := lock.Open(context.Background())

	err = lock.AcquireLock(context.Background(), "key1", 3000, 1000)

	defer lock.ReleaseLock(context.Background(), "key1")

	// Processing...
}
```
