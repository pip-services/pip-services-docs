
```go
import cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"

persistence := NewMyMySqlPersistence()
persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 3306,
	"credential.username", "root",
	"credential.password", "",
	"connection.database", "pip",
))
```
