
```go
import cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"

persistence := NewMySqlServerPersistence()
persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 1433,
	"connection.database", "pip",
	"credential.username", "user",
	"credential.password", "password",
))
```
