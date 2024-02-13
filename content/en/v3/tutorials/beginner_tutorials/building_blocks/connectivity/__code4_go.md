
```go
import (
	"context"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cconn "github.com/pip-services3-gox/pip-services3-components-gox/connect"
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
	connection, err := c.connectionResolver.Resolve("")
	c.host = connection.Host()
	c.port = connection.Port()
}


```
