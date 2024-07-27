
```go
import (
    conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
)

persistence := NewMyPostgresPersistence()
persistence.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 5432,
	"connection.database", "pip1",
	"credential.username", "postgres",
	"credential.password", "admin",
))
```
