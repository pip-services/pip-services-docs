
```go
import (
	conf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

persistence := NewMyPostgresPersistence()
persistence.Configure(conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 5432,
	"connection.database", "pip1",
	"credential.username", "postgres",
	"credential.password", "admin",
))
```
