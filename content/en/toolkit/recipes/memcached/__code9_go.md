
```go
import (
	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
)

lock := memlock.NewMemcachedLock()

lock.Configure(conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 11211,
))

```
