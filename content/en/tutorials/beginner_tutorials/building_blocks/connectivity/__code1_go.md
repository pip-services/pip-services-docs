
```go
import (
	"context"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cconn "github.com/pip-services3-gox/pip-services3-components-gox/connect"
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
