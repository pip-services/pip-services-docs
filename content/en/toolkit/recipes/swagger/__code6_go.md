
```go
import (
    refer "github.com/pip-services3-go/pip-services3-commons-go/refer"
    cservices "github.com/pip-services3-go/pip-services3-rpc-go/services"
    cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
)

type FriendCommandableHttpService2 struct {
	cservices.CommandableHttpService
	_swaggerPath string
}

func NewFriendCommandableHttpService2() *FriendCommandableHttpService2 {
	c := &FriendCommandableHttpService2{}
	c.CommandableHttpService = *cservices.InheritCommandableHttpService(c, "commandable_hello_friend2")
	c.DependencyResolver.Put("controller", refer.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpService2) Configure(config *cconf.ConfigParams) {
	c.RestService.Configure(config)

	// swagger
	c._swaggerPath = *config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpService2) Register() {
	c.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

```
