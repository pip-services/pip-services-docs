
```go
import (
    refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
    cservices "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
    cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

type FriendCommandableHttpService2 struct {
	rpcservices.CommandableHttpService
	_swaggerPath string
}

func NewFriendCommandableHttpService2() *FriendCommandableHttpService2 {
	c := &FriendCommandableHttpService2{}
	c.CommandableHttpService = *rpcservices.InheritCommandableHttpService(c, "commandable_hello_friend2")
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpService2) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestService.Configure(ctx, config)

	// swagger
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpService2) Register() {
	c.CommandableHttpService.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

```
