
```go
import (
	"context"

	conf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
)

type IConfigurable interface {
	Configure(ctx context.Context, config *conf.ConfigParams)
}
```
