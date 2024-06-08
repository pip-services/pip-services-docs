
```go
import (
	"context"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cauth "github.com/pip-services4/pip-services4-go/pip-services4-config-go/auth"
)

type MyPersistence struct {
	credentialResolver *cauth.CredentialResolver
	username           string
	password           string
}

func (c *MyPersistence) Configure(ctx context.Context, config *cconf.ConfigParams) {
	// ...
	c.credentialResolver.Configure(ctx, config)
}

func (c *MyPersistence) SetReferences(ctx context.Context, references cref.IReferences) {
	// ...
	c.credentialResolver.SetReferences(ctx, references)

	credentials, err := c.credentialResolver.Lookup(ctx)
	c.username = credentials.Username()
	c.password = credentials.Password()
}

```
