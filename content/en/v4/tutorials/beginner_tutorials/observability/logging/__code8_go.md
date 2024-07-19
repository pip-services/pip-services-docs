
```go
import (
	"context"

	cconfig "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	logdatadog "github.com/pip-services4/pip-services4-go/pip-services4-datadog-go/log"
)

func main() {

	logger := logdatadog.NewDataDogLogger()

	logger.Configure(context.Background(), cconfig.NewConfigParamsFromTuples(
		"credential.access_key", "827349874395872349875493",
	))

	logger.SetLevel(5)
	_ = logger.Open(context.Background())
	logger.Info(context.Background(), "My message")

}

```
