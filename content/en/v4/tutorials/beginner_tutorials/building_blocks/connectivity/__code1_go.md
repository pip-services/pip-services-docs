
```go

import (
	"context"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cconn "github.com/pip-services4/pip-services4-go/pip-services4-config-go/connect"
)

type MyPersistence struct {
	host string
	port int
}

func (c *MyPersistence) Configure(ctx context.Context, config *cconf.ConfigParams) {
	connection := cconn.NewConnectionParamsFromConfig(config.GetSection("connection"))
	c.host = connection.Host()
	c.port = connection.Port()
}
```
