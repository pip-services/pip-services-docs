
```go
import (
	conf "github.com/pip-services3-go/pip-services3-commons-go/config"
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
