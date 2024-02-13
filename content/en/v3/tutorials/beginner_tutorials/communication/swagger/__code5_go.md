
```go
import (
    refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
    cservices "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
    cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

type FriendCommandableHttpService1 struct {
	*rpcservices.CommandableHttpService
	_swaggerPath string
}

func NewFriendCommandableHttpService1() *FriendCommandableHttpService1 {
	c := &FriendCommandableHttpService1{}
	c.CommandableHttpService = rpcservices.InheritCommandableHttpService(c, "commandable_hello_friend1")
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpService1) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestService.Configure(ctx, config)

	// swagger
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpService1) Register() {
	c.CommandableHttpService.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

```
