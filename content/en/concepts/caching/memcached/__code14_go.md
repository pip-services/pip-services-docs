
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	memlock "github.com/pip-services3-gox/pip-services3-memcached-gox/lock"
)

func main() {
	lock := memlock.NewMemcachedLock()
	lock.Configure(conf.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 11211,
	))

	lock.Open("123")
	defer lock.Close("123")

	lock.AcquireLock("123", "key1", 3000, 1000)
	defer lock.ReleaseLock("123", "key1")

	// Processing...
}

```
