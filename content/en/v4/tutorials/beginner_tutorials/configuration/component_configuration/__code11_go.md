
```go
import (
	"context"

	cconfig "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
)

type IConfigReader interface {
	ReadConfig(ctx context.Context, correlationId string, parameters *cconfig.ConfigParams) (*cconfig.ConfigParams, error)
}
```
