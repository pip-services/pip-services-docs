
```go
import (
    cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

persistence := NewMySqlServerPersistence()
persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 1433,
	"connection.database", "pip",
	"credential.username", "user",
	"credential.password", "password",
))

```
