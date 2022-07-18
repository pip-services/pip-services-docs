
```go
import (
    refer "github.com/pip-services3-go/pip-services3-commons-go/refer"
    cservices "github.com/pip-services3-go/pip-services3-rpc-go/services"
    cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
)

type FriendCommandableHttpService1 struct {
	cservices.CommandableHttpService
	_swaggerPath string
}

func NewFriendCommandableHttpService1() *FriendCommandableHttpService1 {
	c := &FriendCommandableHttpService1{}
	c.CommandableHttpService = *cservices.InheritCommandableHttpService(c, "commandable_hello_friend1")
	c.DependencyResolver.Put("controller", refer.NewDescriptor("hello-friend", "controller", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpService1) Configure(config *cconf.ConfigParams) {
	c.RestService.Configure(config)

	// swagger
	c._swaggerPath = *config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpService1) Register() {
	c.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

```
