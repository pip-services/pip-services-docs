
```go
import cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"

persistence := NewMyMySqlPersistence()
persistence.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", 3306,
	"credential.username", "user",
	"credential.password", "password",
	"connection.database", "pip",
))

```
