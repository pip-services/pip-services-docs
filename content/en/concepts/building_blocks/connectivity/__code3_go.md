
```go
import (
	"context"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cauth "github.com/pip-services3-gox/pip-services3-components-gox/auth"
)

type MyPersistence struct {
	// ...
	username string
	password string
}

func (c *MyPersistence) Configure(ctx context.Context, config *cconf.ConfigParams) {
	// ...
	credentials := cauth.NewCredentialParamsFromConfig(config)
	c.username = credentials.Username()
	c.password = credentials.Password()
}

func (c *MyPersistence) SetReferences(ctx context.Context, references cref.IReferences) {
	// ...
}

```
