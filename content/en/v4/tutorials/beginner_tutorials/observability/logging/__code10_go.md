
```go
import (
	"context"

	cconfig "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	logaws "github.com/pip-services4/pip-services4-go/pip-services4-aws-go/log"
)

func main() {

	logger := logaws.NewCloudWatchLogger()
	logger.Configure(context.Background(), cconfig.NewConfigParamsFromTuples(
		"stream", "mystream",
		"group", "mygroup",
		"connection.region", "us-east-1",
		"connection.access_id", "XXXXXXXXXXX",
		"connection.access_key", "XXXXXXXXXXX",
	))

	logger.SetLevel(5)
	_ = logger.Open(context.Background())
	logger.Info(context.Background(), "My message")
}
```
