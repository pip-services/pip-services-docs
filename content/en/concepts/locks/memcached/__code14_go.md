
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	memlock "github.com/pip-services3-gox/pip-services3-memcached-gox/lock"
)

func main() {
	lock := memlock.NewMemcachedLock()
	lock.Configure(context.Background(), conf.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 11211,
	))

	lock.Open(context.Background(), "123")
	defer lock.Close(context.Background(), "123")

	lock.AcquireLock(context.Background(), "123", "key1", 3000, 1000)
	defer lock.ReleaseLock(context.Background(), "123", "key1")

	// Processing...
}

```
