
```go
import (
	"context"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cconn "github.com/pip-services4/pip-services4-go/pip-services4-config-go/connect"
)

type MyPersistence struct {
	// ...
	connectionResolver *cconn.ConnectionResolver
	host               string
	port               int
}

func (c *MyPersistence) Configure(ctx context.Context, config *cconf.ConfigParams) {
	// ...
	c.connectionResolver.Configure(ctx, config)
}

func (c *MyPersistence) SetReferences(ctx context.Context, references cref.IReferences) {
	c.connectionResolver.SetReferences(ctx, references)
	connection, err := c.connectionResolver.Resolve(ctx)
	c.host = connection.Host()
	c.port = connection.Port()
}
```
