
```go
import (
	"context"

	cconfig "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	logelastic "github.com/pip-services4/pip-services4-go/pip-services4-elasticsearch-go/log"
)

func main() {

	logger := logelastic.NewElasticSearchLogger()
	logger.Configure(context.Background(), cconfig.NewConfigParamsFromTuples(
		"connection.protocol", "http",
		"connection.host", "localhost",
		"connection.port", 9200,
	))

	logger.SetLevel(5)
	_ = logger.Open(context.Background())
	logger.Info(context.Background(), "My message")

}
```
