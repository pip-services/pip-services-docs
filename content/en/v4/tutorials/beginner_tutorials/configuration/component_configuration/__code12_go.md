
```go
import (
	"context"
	"os"

	cconfig "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	creader "github.com/pip-services4/pip-services4-go/pip-services4-config-go/config"
)


config := cconfig.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", "8080",
)

configReader := creader.NewEmptyMemoryConfigReader()
configReader.Configure(context.Background(), config)
parameters := cconfig.NewConfigParamsFromValue(os.Args)
configReader.ReadConfig(context.Background(), parameters) // Result: connection.host=localhost;connection.port=8080
```
