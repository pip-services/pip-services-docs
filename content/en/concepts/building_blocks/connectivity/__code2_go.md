
```go
import (
	"context"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cauth "github.com/pip-services3-gox/pip-services3-components-gox/auth"
)

func main() {

}

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

	credentials, err := c.credentialResolver.Lookup(ctx, "")
	c.username = credentials.Username()
	c.password = credentials.Password()
}

```
