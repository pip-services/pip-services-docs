
```go
type FriendCommandableHttpController2 struct {
	cntrl.CommandableHttpController
	_swaggerPath string
}

func NewFriendCommandableHttpController2() *FriendCommandableHttpController2 {
	c := &FriendCommandableHttpController2{}
	c.CommandableHttpController = *cntrl.InheritCommandableHttpController(c, "commandable_hello_friend2")
	c.DependencyResolver.Put(context.Background(), "service", crefer.NewDescriptor("hello-friend", "service", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpController2) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestController.Configure(ctx, config)

	// swagger
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpController2) Register() {
	c.CommandableHttpController.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}

```
