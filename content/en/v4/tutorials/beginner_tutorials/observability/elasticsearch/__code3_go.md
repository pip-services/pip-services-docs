
```go
import cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"

logger := ellog.NewElasticSearchLogger()
logger.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 9200,
))
err := logger.Open(context.Background())
if err != nil {
	panic(err)
}
```
